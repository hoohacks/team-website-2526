import { useState } from "react";
import arrowDown from "../assets/arrowdown.svg";

export default function DropdownSection({ title, children }: { title: string; children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 px-6 py-3 rounded-md" onClick={() => setIsOpen(!isOpen)} style={{ background: "linear-gradient(270deg, #00042D, #121A6A)" }}>
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{title}</h2>
                <img src={arrowDown} alt="Toggle" className={`inline-block transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </div>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-[50vh]" : "max-h-0 m-0"}`}>
                <hr className="my-4" />
                {children}
            </div>
        </div>
    );
}
