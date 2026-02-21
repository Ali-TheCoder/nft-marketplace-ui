import Link from "next/link";

const nav = [
    { href: "/", label: "Home" },
    { href: "/market", label: "Market" },
    { href: "/create", label: "Create" },
    { href: "/profile", label: "Profile" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <Link href="/" className="group flex items-center gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                        ✦
                    </span>
                    <span className="text-lg font-semibold tracking-tight">
                        Nebula<span className="text-cyan-200">Mart</span>
                    </span>
                </Link>

                <nav className="hidden gap-1 md:flex">
                    {nav.map((x) => (
                        <Link
                            key={x.href}
                            href={x.href}
                            className="rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                        >
                            {x.label}
                        </Link>
                    ))}
                </nav>

                <button className="rounded-2xl bg-linear-to-r from-cyan-400/20 to-violet-400/20 px-4 py-2 text-sm ring-1 ring-white/10 hover:from-cyan-400/30 hover:to-violet-400/30">
                    Connect Wallet
                </button>
            </div>
        </header>
    );
}
