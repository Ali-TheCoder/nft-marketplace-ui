"use client";

import { useMemo, useState } from "react";
import NFTCard from "@/components/NFTCard";
import MotionWrap from "@/components/MotionWrap";
import { nfts } from "@/lib/mock";
import type { Chain, NFT } from "@/lib/types";

type SortKey = "Popular" | "PriceLow" | "PriceHigh";

const chains: (Chain | "All")[] = ["All", "Ethereum", "Polygon", "Solana"];

export default function MarketPage() {
    const [q, setQ] = useState("");
    const [chain, setChain] = useState<(typeof chains)[number]>("All");
    const [sort, setSort] = useState<SortKey>("Popular");

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase();

        let list: NFT[] = nfts.filter((x) => {
            const okQuery =
                !query ||
                x.title.toLowerCase().includes(query) ||
                x.collection.toLowerCase().includes(query);
            const okChain = chain === "All" ? true : x.chain === chain;
            return okQuery && okChain;
        });

        list = [...list].sort((a, b) => {
            if (sort === "Popular") return b.likes - a.likes;
            if (sort === "PriceLow") return a.priceEth - b.priceEth;
            return b.priceEth - a.priceEth;
        });

        return list;
    }, [q, chain, sort]);

    return (
        <MotionWrap>
            <div className="space-y-6">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <h1 className="text-3xl font-semibold">Marketplace</h1>
                        <p className="text-white/70">Search, filter, and discover cosmic assets.</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {chains.map((c) => (
                            <button
                                key={c}
                                onClick={() => setChain(c)}
                                className={`rounded-2xl px-4 py-2 text-sm ring-1 ring-white/10 transition ${chain === c ? "bg-white/10" : "bg-white/5 hover:bg-white/10"
                                    }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="rounded-3xl glass p-4 ring-1 ring-white/10">
                    <div className="flex flex-col gap-3 md:flex-row md:items-center">
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search NFTs, collections..."
                            className="w-full rounded-2xl bg-black/20 px-4 py-3 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/40 focus:ring-white/20"
                        />

                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value as SortKey)}
                            className="rounded-2xl bg-black/20 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-white/20"
                        >
                            <option value="Popular">Sort: Popular</option>
                            <option value="PriceLow">Sort: Price (Low)</option>
                            <option value="PriceHigh">Sort: Price (High)</option>
                        </select>

                        <button
                            onClick={() => {
                                setQ("");
                                setChain("All");
                                setSort("Popular");
                            }}
                            className="rounded-2xl bg-white/10 px-4 py-3 text-sm ring-1 ring-white/10 hover:bg-white/15"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {filtered.length === 0 ? (
                    <div className="rounded-3xl glass p-10 text-center ring-1 ring-white/10">
                        <div className="text-xl font-semibold">No results</div>
                        <div className="mt-2 text-white/70">
                            Try a different search term or switch networks.
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((x) => (
                            <NFTCard key={x.id} nft={x} />
                        ))}
                    </div>
                )}
            </div>
        </MotionWrap>
    );
}
