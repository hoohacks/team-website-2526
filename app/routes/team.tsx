import { useEffect, useState } from "react";
import Navbar from "../navbar";
import teamData from 'app/members.json'
import Footer from "~/footer/footer";

// JSON-like data for all committees
export default function Team() {
    const [active, setActive] = useState(teamData[0].committee);

    useEffect(() => {
        const handleScroll = () => {
            const scrollMiddle = window.scrollY + window.innerHeight / 2;
            let current = teamData[0].committee;

            // Loop from last to first
            for (let i = teamData.length - 1; i >= 0; i--) {
                const section = document.getElementById(teamData[i].committee);
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (scrollMiddle >= sectionTop) {
                        current = teamData[i].committee;
                        break; // stop at the first section that matches
                    }
                }
            }

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <div>
            <div className="flex min-h-screen bg-transparent text-white mx-20 my-30">
                <Navbar />

                {/* Sidebar */}
                <aside className="w-1/4 h-screen sticky top-0 p-4 flex pt-10 flex-col">
                    <ul className="space-y-6 text-center">
                        {teamData.map((c) => (
                            <li key={c.committee}>
                                <a
                                    href={`#${c.committee}`}
                                    className={`block transition ${active === c.committee
                                        ? "text-blue-400 font-bold"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {c.committee}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>


                {/* Main content */}
                <main className="flex-1 p-1 space-y-24">
                    <h1 className="text-4xl font-bold text-center mb-12">Meet The Team</h1>
                    {teamData.map((c) => (
                        <section
                            key={c.committee}
                            id={c.committee}
                            className="scroll-mt-20"
                        >
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-40">
                                {c.members.map((member, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col items-center text-center space-y-2"
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-45 h-50 object-cover rounded-xl border-2 border-blue-400"
                                        />
                                        <p className="font-medium">{member.name}</p>
                                        <p className="text-sm text-gray-400">{c.committee}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </main>

            </div>
            <Footer />
        </div>
    );
}
