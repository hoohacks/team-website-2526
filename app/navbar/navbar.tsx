export default function Navbar() {
    const navItems = [
        { name: "Meet The Team", href: "/team" },
    ];

    return (
        <nav className="w-full absolute top-0 left-0 z-50 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <img src="app/navbar/hoohacks-owl-logo.svg" alt="Logo" />

                {/* Navigation Links + Button (grouped on right) */}
                <div className="flex items-center space-x-12">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-white hover:text-gray-300 transition"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Join Button */}
                    <a
                        href="#join"
                        className="px-4 py-2 rounded-md font-medium text-gray-900 bg-[#B1CCFF] hover:bg-blue-500 transition-colors"
                    >
                        Join
                    </a>
                </div>
            </div>
        </nav>
    );
}
