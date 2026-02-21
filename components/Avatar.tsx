export default function Avatar({
    src,
    size = 120,
}: {
    src: string;
    size?: number;
}) {
    return (
        <div
            style={{ width: size, height: size }}
            className="relative rounded-full p-[2px]"
        >
            {/* Neon ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 via-violet-500 to-pink-500 blur-md opacity-40" />

            <div className="relative h-full w-full overflow-hidden rounded-full bg-[#0f172a] ring-1 ring-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={src}
                    alt="profile"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}
