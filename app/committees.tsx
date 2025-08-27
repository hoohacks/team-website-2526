import SectionHeader from "./components/SectionHeader";
import DropdownSection from "./components/CollapsibleSection";
import { Link } from "react-router";
import committees from "./data/committees.json";

export default function Events() {
    return (
        <div className="w-250 max-w-full flex flex-col mx-auto my-16">
            <SectionHeader>Committees</SectionHeader>
            <div className="flex flex-col gap-2 p-4">
                {
                    committees.map((committee) => (
                        <DropdownSection key={committee.name} title={committee.name}>
                            {committee.description}
                        </DropdownSection>
                    ))
                }
            </div>
            <Link to="/team" className="px-5 py-3 my-4 text-black bg-[#B1CCFF] rounded-lg w-fit m-auto">Meet the Team</Link>
        </div>
    );
}
