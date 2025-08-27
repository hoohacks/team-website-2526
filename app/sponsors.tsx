import { Link } from "react-router";
import SectionHeader from "./components/SectionHeader";
import sponsors from "./data/sponsors.json";
import "react-multi-carousel/lib/styles.css";
import { lazy, Suspense } from "react";

const Carousel = lazy(() => import('react-multi-carousel'))

function sponsorItem(sponsor: { name: string; logo: string, website: string }) {
    return (
        <Link to={sponsor.website} target="_blank" rel="noopener noreferrer">
            <div key={sponsor.name} className="w-60 h-25 px-8 py-4 rounded-xl bg-white">
                <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain" />
            </div>
        </Link>
    );
}

export default function Sponsors() {
    const topSponsors = sponsors.slice(0, sponsors.length / 2);
    const bottomSponsors = sponsors.slice(sponsors.length / 2);

    const responsive = {
        superLarge: {
            breakpoint: { max: 4000, min: 3500 },
            items: 6
        },
        large: {
            breakpoint: { max: 3500, min: 1300 },
            items: 4
        },
        medium: {
            breakpoint: { max: 1300, min: 900 },
            items: 2
        },
        small: {
            breakpoint: { max: 900, min: 600 },
            items: 1
        },
        superSmall: {
            breakpoint: { max: 600, min: 0 },
            items: 0.5
        }
    };
    return (
        <div className="w-full mt-16 mb-32">
            <Suspense>
                <SectionHeader>Sponsors</SectionHeader>
                <Carousel responsive={responsive} swipeable={false} draggable={false} ssr={true} infinite={true} autoPlay={true} autoPlaySpeed={0} transitionDuration={10000} customTransition="transform 10000ms linear" arrows={false} centerMode={true}>
                    {topSponsors.map((sponsor) => sponsorItem(sponsor))}
                </Carousel>
                <div className="py-8"></div>
                <Carousel responsive={responsive} swipeable={false} draggable={false} ssr={true} infinite={true} autoPlay={true} autoPlaySpeed={0} transitionDuration={10000} customTransition="transform 10000ms linear" arrows={false} centerMode={true} rtl={true}>
                    {bottomSponsors.map((sponsor) => sponsorItem(sponsor))}
                </Carousel>
            </Suspense>
        </div>
    );
}
