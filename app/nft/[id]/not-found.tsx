import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
    return (
        <div>
            <Navbar />
            <main className="mx-auto max-w-3xl px-4 py-16">
                <h1 className="text-3xl font-semibold">NFT not found</h1>
                <p className="mt-3 text-white/70">
                    The item you’re looking for doesn’t exist (demo data).
                </p>
                <Link
                    href="/explore"
                    className="mt-6 inline-block rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:opacity-90"
                >
                    Back to Explore
                </Link>
            </main>
        </div>
    );
}
