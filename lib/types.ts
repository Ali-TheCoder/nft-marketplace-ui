export type Chain = "Ethereum" | "Polygon" | "Solana";

export type NFT = {
    id: string;
    title: string;
    collection: string;
    image: string;
    priceEth: number;
    chain: Chain;
    likes: number;
    endsAt?: string; // ISO
    owner: string;
};
