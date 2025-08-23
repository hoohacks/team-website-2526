import type { Route } from "./+types/home";
import SectionHeader from "~/components/SectionHeader";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "HooHacks Team" },
        { name: "description", content: "HooHacks: CIO @ UVA. Foster entrepreneurship and innovation by making tech more accessible and fun at UVA and beyond!" },
    ];
}

export default function Team() {
    return (
        <div>
            <div className="py-20"></div>
            <SectionHeader>Meet the Team</SectionHeader>
        </div>
    );
}
