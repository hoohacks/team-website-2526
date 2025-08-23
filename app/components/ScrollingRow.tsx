export default function ScrollingRow({ children, direction }: { children: React.ReactNode, direction: "left" | "right" }) {
    const autoscrollKeyframes = `
    @keyframes scroll {
        0% {
            left: 100%;
        }
        100% {
            left: -100%;
        }
    }
    `;

    const animationLength = 30;

    const animationStyles = {
        animationDuration: `${animationLength}s`,
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        animationDirection: direction === "left" ? "normal" : "reverse",
    };

    return (
        <div>
            <style>
                {autoscrollKeyframes}
            </style>
            <div className="relative overflow-x-hidden">
                <div className="flex gap-16 overflow-x-hidden relative animate-[scroll] left-full" style={animationStyles}>
                    {children}
                </div>
                <div className="flex gap-16 overflow-x-hidden absolute animate-[scroll] top-0 left-full" style={{ ...animationStyles, animationDelay: `-${animationLength / 2}s` }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
