import hoohacksLogo from "../assets/hoohacks-owl-logo.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import discord from "./discord.svg";
import { Link } from "react-router";

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

    return (
        <div className="bg-[#121A6A] flex flex-col gap-4 items-center py-10">
            <img src={hoohacksLogo} alt="HooHacks Logo" className="p-8" />
            <div className="flex justify-center gap-4">
                {
                    socials.map((social) => (
                        <Link to={social.link} key={social.alt}>
                            <img src={social.image} alt={social.alt} className="h-6" />
                        </Link>
                    ))
                }
            </div>
            <div className="font-light">
                @ 2025 HooHacks ~ Made in Charlottesville
            </div>
        </div>
    );
}
