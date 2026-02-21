import { NFT } from "./types";

export const nfts: NFT[] = [
    {
        id: "nebula-001",
        title: "Nebula Drifter #001",
        collection: "CosmoDrifters",
        image:
            "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1200&q=80",
        priceEth: 0.84,
        chain: "Ethereum",
        likes: 312,
        endsAt: new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString(),
        owner: "0xA3...9F2C",
    },
    {
        id: "lunar-077",
        title: "Lunar Relic #077",
        collection: "MoonVault",
        image:
            "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=1200&q=80",
        priceEth: 0.31,
        chain: "Polygon",
        likes: 129,
        owner: "0x11...B8e1",
    },
    {
        id: "sol-420",
        title: "Solar Byte #420",
        collection: "StarBytes",
        image:
            "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
        priceEth: 1.12,
        chain: "Ethereum",
        likes: 901,
        endsAt: new Date(Date.now() + 1000 * 60 * 33).toISOString(),
        owner: "0xC2...44A0",
    },
];

export const activity = [
    { type: "Minted", by: "0x7a...1b2c", price: 0.0, time: "2h ago" },
    { type: "Listed", by: "0xA3...9F2C", price: 0.84, time: "1h ago" },
    { type: "Offer", by: "0x9c...77aa", price: 0.72, time: "35m ago" },
    { type: "Offer", by: "0x11...B8e1", price: 0.78, time: "10m ago" },
];

export const traits = [
    { key: "Background", value: "Nebula Blue", rarity: "8%" },
    { key: "Suit", value: "Ion Armor", rarity: "12%" },
    { key: "Visor", value: "Holo Glass", rarity: "5%" },
    { key: "Aura", value: "Cyan Pulse", rarity: "9%" },
];
