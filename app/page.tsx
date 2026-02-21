import Link from "next/link";
import NFTCard from "@/components/NFTCard";
import { nfts } from "@/lib/mock";
import MotionWrap from "@/components/MotionWrap";

export default function HomePage() {
  return (
    <MotionWrap>
      <div className="space-y-10">
        <section className="relative overflow-hidden rounded-4xl glass glow p-8 md:p-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-400/15 blur-3xl" />

          <div className="relative z-10 max-w-2xl space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
              ✦ Cosmic Drops • Live Auctions • Verified Collections
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Trade NFTs in a{" "}
              <span className="bg-linear-to-r from-cyan-200 to-violet-200 bg-clip-text text-transparent">
                futuristic
              </span>{" "}
              universe.
            </h1>
            <p className="text-white/75">
              Discover rare assets, explore trending collections, and bid on cosmic auctions — all in one
              sleek marketplace.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/market"
                className="rounded-2xl bg-white/10 px-5 py-3 text-sm ring-1 ring-white/15 hover:bg-white/15"
              >
                Explore Market
              </Link>
              <Link
                href="/create"
                className="rounded-2xl bg-linear-to-r from-cyan-400/20 to-violet-400/20 px-5 py-3 text-sm ring-1 ring-white/15 hover:from-cyan-400/30 hover:to-violet-400/30"
              >
                Create NFT
              </Link>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Featured Drops</h2>
              <p className="text-white/70">Handpicked items from across the galaxy.</p>
            </div>
            <Link href="/market" className="text-sm text-cyan-200 hover:text-cyan-100">
              View all →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nfts.map((x) => (
              <NFTCard key={x.id} nft={x} />
            ))}
          </div>
        </section>
      </div>
    </MotionWrap>
  );
}
