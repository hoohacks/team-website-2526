import hoohacksLogo from "../assets/hoohacks-owl-logo.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import discord from "./discord.svg";
import { Link } from "react-router";
import { JOIN_LINK_LABEL } from "../recruiting";

export default function Footer() {
    const socials = [
        {
            image: instagram,
            alt: "Instagram",
            link: "https://www.instagram.com/hoohacks/"
        },
        {
            image: twitter,
            alt: "Twitter",
            link: "https://twitter.com/hoohacks"
        },
        // {
        //     image: discord,
        //     alt: "Discord",
        //     link: "#"
        // }
    ];

    const links = [
        { name: "Events", to: "/#events" },
        { name: "Committees", to: "/#committees" },
        { name: "Sponsors", to: "/#sponsors" },
        { name: "Team", to: "/team" },
        { name: JOIN_LINK_LABEL, to: "/join" }
    ];

    return (
        <footer className="bg-[#121A6A] border-t border-white/10">
            <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col items-center gap-8">
                <img src={hoohacksLogo} alt="HooHacks Logo" className="h-14 w-auto" />
                <nav aria-label="Footer">
                    <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/70">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    className="rounded-sm transition-colors duration-300 hover:text-[#B1CCFF] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B1CCFF]"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex justify-center gap-5">
                    {
                        socials.map((social) => (
                            <Link to={social.link} key={social.alt} className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B1CCFF]">
                                <img src={social.image} alt={social.alt} className="h-6 opacity-70 transition-all duration-300 ease-out hover:opacity-100 motion-safe:hover:-translate-y-0.5" />
                            </Link>
                        ))
                    }
                </div>
                <div className="text-sm font-light text-white/60">
                    © {new Date().getFullYear()} HooHacks ~ Made in Charlottesville
                </div>
            </div>
        </footer>
    );
}
