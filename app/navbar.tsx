import { Link } from "react-router";
import hoohacksOwlLogo from "~/assets/hoohacks-owl-logo.svg";
import Button from "~/components/Button";
import { RECRUITING, APPLY_FORM_URL, APPLY_DEADLINE, JOIN_LINK_LABEL } from "~/recruiting";

export default function Navbar() {
    // `short` keeps every link reachable on a phone instead of hiding one.
    // Off-season the CTA itself leads to /join, so listing it here too would
    // put the same destination in the bar twice.
    const navItems = [
        { name: "Meet The Team", short: "Team", href: "/team" },
        ...(RECRUITING ? [{ name: "Join", short: "Join", href: "/join" }] : []),
    ];

    return (
        <nav className="w-full absolute top-0 left-0 z-50 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
                {/* Logo */}
                <a href="/" className="inline-block rounded-md transition duration-300 ease-out opacity-90 hover:opacity-100 motion-safe:hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B1CCFF]">
                    <img src={hoohacksOwlLogo} alt="Logo"/>
                </a>

                {/* Navigation Links + Button (grouped on right) */}
                <div className="flex items-center gap-4 sm:gap-8 lg:gap-12">
                    <ul className="flex items-center gap-4 sm:gap-8 text-sm sm:text-base">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className="relative text-white transition-colors duration-300 hover:text-[#B1CCFF] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#B1CCFF] after:transition-[width] after:duration-300 hover:after:w-full focus-visible:text-[#B1CCFF] focus-visible:after:w-full focus-visible:outline-none"
                                >
                                    <span className="sm:hidden">{item.short}</span>
                                    <span className="hidden sm:inline">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* The bar's one button: the application while it's open,
                        the newsletter the rest of the year. The starlight glow
                        is in-season only — off-season it's an ordinary link,
                        not something to hurry anyone toward. */}
                    {RECRUITING ? (
                        <Button
                            href={APPLY_FORM_URL}
                            target="_blank"
                            size="sm"
                            className="whitespace-nowrap text-sm sm:text-base drop-shadow-[0_0_12px_rgba(177,204,255,0.55)] hover:drop-shadow-[0_0_18px_rgba(177,204,255,0.9)]"
                        >
                            Apply
                            {APPLY_DEADLINE && (
                                /* The deadline is the urgency; it drops on the
                                   narrowest phones where the bar can't hold it. */
                                <span className="hidden min-[360px]:inline">{` by ${APPLY_DEADLINE}`}</span>
                            )}
                            <span className="sr-only"> (opens in a new tab)</span>
                        </Button>
                    ) : (
                        <Button to="/join" size="sm" className="whitespace-nowrap text-sm sm:text-base">
                            {JOIN_LINK_LABEL}
                        </Button>
                    )}
                </div>
            </div>
        </nav>
    );
}
