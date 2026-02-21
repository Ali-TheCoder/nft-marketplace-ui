import Link from "next/link";
import { NFT } from "@/lib/types";

export default function NFTCard({ nft }: { nft: NFT }) {
    return (
        <Link
            href={`/nft/${nft.id}`}
            className="group block overflow-hidden rounded-3xl card-surface card-hover"
        >
            <div className="relative aspect-4/3 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={nft.image}
                    alt={nft.title}
                    className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute left-3 top-3 rounded-full bg-black/30 px-3 py-1 text-xs ring-1 ring-white/10">
                    {nft.chain}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                    <div>
                        <div className="text-sm text-white/80">{nft.collection}</div>
                        <div className="text-base font-semibold">{nft.title}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs text-white/70">Price</div>
                        <div className="text-sm font-semibold">{nft.priceEth} ETH</div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-sm text-white/75">
                <span className="truncate">Owner: {nft.owner}</span>
                <span className="rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10">
                    ♥ {nft.likes}
                </span>
            </div>
        </Link>
    );
}
