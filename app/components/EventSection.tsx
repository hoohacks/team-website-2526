import { Link } from "react-router";

export default function EventSection({ children, title, date, logo, href, image, logoStyles }: { children: React.ReactNode, title: string, date: string, logo: string, href: string, image: string | null, logoStyles?: React.CSSProperties }) {
    return (
        <div className="p-12 rounded-lg" style={{ background: "linear-gradient(83.38deg, rgba(0, 4, 45, 0.35) 0.63%, rgba(135, 162, 252, 0.5) 96.67%)" }}>
            <Link to={href}>
                <div className="flex gap-10">
                    <div className="flex-4">
                        <img src={logo} alt={`${title}`} className="w-80 my-10" style={{ ...logoStyles }} />
                        <div className="flex-4">
                            <p className="text-xl pb-10">{date}</p>
                            {children}
                        </div>
                    </div>
                    <div className="flex-3 self-center">
                        {image ? <img src={image} alt={`${title} event image`} className="w-full h-80 object-cover rounded-md" /> : <div className="bg-gray-200 w-full h-80 rounded-lg" />}
                    </div>
                </div>
            </Link>
        </div>
    );
}
