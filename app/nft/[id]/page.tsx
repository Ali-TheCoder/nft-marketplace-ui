import Link from "next/link";
import { nfts, activity, traits } from "@/lib/mock";
import Tabs from "@/components/Tabs";
import MotionWrap from "@/components/MotionWrap";

export default async function NFTDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const nft = nfts.find((x) => x.id === id);

    if (!nft) {
        return (
            <div className="rounded-3xl card-surface p-8 ring-1 ring-white/10">
                <h1 className="text-2xl font-semibold">Not found</h1>
                <p className="text-white/70">This NFT drifted into another galaxy.</p>
                <Link href="/market" className="mt-4 inline-block text-cyan-200 hover:text-cyan-100">
                    Back to Market →
                </Link>
            </div>
        );
    }

    return (
        <MotionWrap>
            <div className="grid items-start gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-4xl card-surface ring-1 ring-white/10 lg:sticky lg:top-24">
                    <div className="aspect-4/3 w-full">
                        <img src={nft.image} alt={nft.title} className="h-full w-full object-cover" />
                    </div>
                </div>


                <div className="space-y-5">
                    <div className="space-y-2">
                        <p className="text-sm text-white/70">{nft.collection}</p>
                        <h1 className="text-4xl font-semibold">{nft.title}</h1>

                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10">
                                Chain: {nft.chain}
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10">
                                ♥ {nft.likes} likes
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10">
                                Owner: {nft.owner}
                            </span>
                        </div>
                    </div>

                    <div className="rounded-3xl card-surface p-5 ring-1 ring-white/10">
                        <div className="flex items-end justify-between gap-3">
                            <div>
                                <div className="text-sm text-white/70">Current Price</div>
                                <div className="text-3xl font-semibold">{nft.priceEth} ETH</div>
                            </div>

                            <div className="flex gap-2">
                                <button className="rounded-2xl bg-white/10 px-4 py-3 text-sm ring-1 ring-white/10 hover:bg-white/15">
                                    Make Offer
                                </button>
                                <button className="rounded-2xl bg-linear-to-r from-cyan-400/20 to-violet-400/20 px-4 py-3 text-sm ring-1 ring-white/10 hover:from-cyan-400/30 hover:to-violet-400/30">
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-white/70">
                            A premium cosmic collectible with clean gradients, sharp typography, and a deep-space vibe.
                        </p>
                    </div>

                    <Tabs
                        tabs={[
                            {
                                key: "overview",
                                label: "Overview",
                                content: (
                                    <div className="space-y-2 text-sm text-white/75">
                                        <div className="flex justify-between">
                                            <span className="text-white/60">Contract</span>
                                            <span>0xC0...SM0K</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-white/60">Token ID</span>
                                            <span>{nft.id}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-white/60">Standard</span>
                                            <span>ERC-721</span>
                                        </div>
                                    </div>
                                ),
                            },
                            {
                                key: "traits",
                                label: "Traits",
                                content: (
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {traits.map((t) => (
                                            <div
                                                key={t.key}
                                                className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
                                            >
                                                <div className="text-xs text-white/60">{t.key}</div>
                                                <div className="text-sm font-semibold">{t.value}</div>
                                                <div className="mt-1 text-xs text-white/50">Rarity: {t.rarity}</div>
                                            </div>
                                        ))}
                                    </div>
                                ),
                            },
                            {
                                key: "activity",
                                label: "Activity",
                                content: (
                                    <div className="space-y-3">
                                        {activity.map((a, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10"
                                            >
                                                <div>
                                                    <div className="text-sm font-semibold">{a.type}</div>
                                                    <div className="text-xs text-white/60">{a.by}</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-sm">{a.price} ETH</div>
                                                    <div className="text-xs text-white/60">{a.time}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ),
                            },
                        ]}
                    />
                </div>
            </div>
        </MotionWrap>
    );
}
