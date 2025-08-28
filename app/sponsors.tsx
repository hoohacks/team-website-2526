import { Link } from "react-router";
import SectionHeader from "./components/SectionHeader";
import sponsors from "./data/sponsors.json";
import "react-multi-carousel/lib/styles.css";
import { lazy, Suspense, type JSX } from "react";

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

function makeCarousel(items: JSX.Element[], rtl: boolean) {
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
        <Carousel responsive={responsive} swipeable={false} draggable={false} infinite={true} autoPlay={true} autoPlaySpeed={2000} transitionDuration={500} arrows={false} centerMode={true} rtl={rtl}>
            {items}
        </Carousel>
    );
}

export default function Sponsors() {
    const topSponsors = sponsors.slice(0, sponsors.length / 2);
    const bottomSponsors = sponsors.slice(sponsors.length / 2);

    return (
        <div className="w-full mt-16 mb-32">
            <Suspense>
                <SectionHeader>Sponsors</SectionHeader>
                {makeCarousel(topSponsors.map((sponsor) => sponsorItem(sponsor)), false)}
                <div className="py-8"></div>
                {makeCarousel(bottomSponsors.map((sponsor) => sponsorItem(sponsor)), true)}
            </Suspense>
        </div>
    );
}
