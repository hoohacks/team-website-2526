import SectionHeader from "./components/SectionHeader";
import EventSection from "./components/EventSection";
import longLogo from "./assets/long-logo.svg";
import ideathonLogo from "./assets/ideathon-logo.svg";
import estimathonLogo from "./assets/estimathon-logo.png";

export default function Events() {
    const events = [
        {
            title: "HooHacks",
            logo: longLogo,
            date: "March",
            href: "https://hoohacks.io",
            image: null,
            children: (
                <>
                    <p className="font-bold">850+ participants,  $12,000 in prize money, 100+ projects, 24 hrs</p>

                    <br />

                    <p>HooHacks is Virginia’s largest collegiate hackathon, hosted annually as our flagship event.</p>
                </>
            )
        },
        {
            title: "Ideathon",
            logo: ideathonLogo,
            date: "October",
            href: "https://ideathon.hoohacks.io",
            image: null,
            children: <p>Pitch. Collaborate. Win. In just one day at Ideathon, you and your team can bring an idea to life and win up to $1,000 in seed funding.</p>
        },
        {
            title: "Estimathon",
            logo: estimathonLogo,
            logoStyles: { backgroundColor: "white", borderRadius: "100vw" },
            date: "November",
            href: "https://estimathon.com",
            image: null,
            children: <p>Show off your problem-solving skills in our math competition! All participants get free Jane Street merch.</p>
        }
    ];

    return (
        <div className="w-250 max-w-full flex flex-col mx-auto py-16">
            <SectionHeader>Our Events</SectionHeader>
            <div className="flex flex-col gap-8 p-4">
                {
                    events.map(event => (
                        <EventSection key={event.title} title={event.title} logo={event.logo} date={event.date} href={event.href} image={event.image} logoStyles={event.logoStyles}>
                            {event.children}
                        </EventSection>
                    ))
                }
            </div>
        </div>
    );
}
