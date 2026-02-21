import MotionWrap from "@/components/MotionWrap";

export default function CreatePage() {
    return (
        <MotionWrap>
            <div className="mx-auto max-w-2xl space-y-6">
                <div>
                    <h1 className="text-3xl font-semibold">Create NFT</h1>
                    <p className="text-white/70">Mint your cosmic artifact (UI ready for backend/web3).</p>
                </div>

                <div className="rounded-4xl glass glow p-6 ring-1 ring-white/10">
                    <div className="grid gap-4">
                        <label className="space-y-2">
                            <div className="text-sm text-white/80">Title</div>
                            <input className="w-full rounded-2xl bg-black/20 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-white/20" />
                        </label>

                        <label className="space-y-2">
                            <div className="text-sm text-white/80">Collection</div>
                            <input className="w-full rounded-2xl bg-black/20 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-white/20" />
                        </label>

                        <label className="space-y-2">
                            <div className="text-sm text-white/80">Image URL</div>
                            <input className="w-full rounded-2xl bg-black/20 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-white/20" />
                        </label>

                        <label className="space-y-2">
                            <div className="text-sm text-white/80">Price (ETH)</div>
                            <input
                                type="number"
                                step="0.01"
                                className="w-full rounded-2xl bg-black/20 px-4 py-3 text-sm outline-none ring-1 ring-white/10 focus:ring-white/20"
                            />
                        </label>

                        <button className="mt-2 rounded-2xl bg-linear-to-r from-cyan-400/20 to-violet-400/20 px-5 py-3 text-sm ring-1 ring-white/10 hover:from-cyan-400/30 hover:to-violet-400/30">
                            Mint NFT
                        </button>

                        <p className="text-xs text-white/50">
                            Note: This is UI-only. Next step is connecting a wallet + contract for actual minting.
                        </p>
                    </div>
                </div>
            </div>
        </MotionWrap>
    );
}
