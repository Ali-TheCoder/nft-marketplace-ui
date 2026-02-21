"use client";

import Avatar from "@/components/Avatar";
import NFTCard from "@/components/NFTCard";
import Tabs from "@/components/Tabs";
import MotionWrap from "@/components/MotionWrap";
import { nfts, activity } from "@/lib/mock";

export default function ProfilePage() {
  return (
    <MotionWrap>
      <div className="space-y-10">

        {/* Hero / Cover */}
        <div className="relative overflow-hidden rounded-4xl card-surface ring-1 ring-white/10">
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-violet-500/10 to-transparent" />

          <div className="relative z-10 flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                size={120}
              />

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-semibold">Neoe</h1>
                  <span className="rounded-full bg-cyan-400/20 px-2 py-1 text-xs text-cyan-200 ring-1 ring-cyan-400/30">
                    Verified
                  </span>
                </div>

                <p className="text-white/70">@neoe.eth</p>

                <p className="max-w-md text-sm text-white/60">
                  Digital collector & UI enthusiast. Exploring future aesthetics
                  through NFTs.
                </p>
              </div>
            </div>

            <button className="rounded-2xl bg-white/10 px-5 py-3 text-sm ring-1 ring-white/10 hover:bg-white/15">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Items", value: 24 },
            { label: "Owners", value: 18 },
            { label: "Floor Price", value: "0.82 ETH" },
            { label: "Volume Traded", value: "12.4 ETH" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-3xl card-surface p-6 text-center ring-1 ring-white/10"
            >
              <div className="text-sm text-white/60">{s.label}</div>
              <div className="mt-2 text-2xl font-semibold">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <Tabs
          tabs={[
            {
              key: "collected",
              label: "Collected",
              content: (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {nfts.map((x) => (
                    <NFTCard key={x.id} nft={x} />
                  ))}
                </div>
              ),
            },
            {
              key: "created",
              label: "Created",
              content: (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {nfts.slice(0, 2).map((x) => (
                    <NFTCard key={x.id} nft={x} />
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
    </MotionWrap>
  );
}
