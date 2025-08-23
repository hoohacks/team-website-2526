import ScrollingRow from "./components/ScrollingRow";
import SectionHeader from "./components/SectionHeader";

export default function Sponsors() {
    return (
        <div className="w-full my-8">
            <SectionHeader>Sponsors</SectionHeader>
            <ScrollingRow direction="right">
                <div className="w-40 h-30 bg-gray-200"></div>
                <div className="w-40 h-30 bg-gray-300"></div>
                <div className="w-40 h-30 bg-gray-400"></div>
                <div className="w-40 h-30 bg-gray-500"></div>
                <div className="w-40 h-30 bg-gray-600"></div>
                <div className="w-40 h-30 bg-gray-700"></div>
                <div className="w-40 h-30 bg-gray-800"></div>
                <div className="w-40 h-30 bg-gray-900"></div>
            </ScrollingRow>
            <div className="py-4"></div>
            <ScrollingRow direction="left">
                <div className="w-40 h-30 bg-gray-200"></div>
                <div className="w-40 h-30 bg-gray-300"></div>
                <div className="w-40 h-30 bg-gray-400"></div>
                <div className="w-40 h-30 bg-gray-500"></div>
                <div className="w-40 h-30 bg-gray-600"></div>
                <div className="w-40 h-30 bg-gray-700"></div>
                <div className="w-40 h-30 bg-gray-800"></div>
                <div className="w-40 h-30 bg-gray-900"></div>
            </ScrollingRow>
        </div>
    );
}
