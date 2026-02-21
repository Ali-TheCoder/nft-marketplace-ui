"use client";

import { useState } from "react";

type Tab = { key: string; label: string; content: React.ReactNode };

export default function Tabs({ tabs }: { tabs: Tab[] }) {
    const [active, setActive] = useState(tabs[0]?.key);

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
                {tabs.map((t) => (
                    <button
                        key={t.key}
                        onClick={() => setActive(t.key)}
                        className={`rounded-2xl px-4 py-2 text-sm ring-1 ring-white/10 transition ${active === t.key ? "bg-white/10" : "bg-white/5 hover:bg-white/10"
                            }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>
            <div className="rounded-3xl card-surface p-5 ring-1 ring-white/10">
                {tabs.find((t) => t.key === active)?.content}
            </div>
        </div>
    );
}
