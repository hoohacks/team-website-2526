import type { Route } from "./+types/home";
import Hero from "../hero/hero";
import Events from "../events";
import Committees from "../committees";
import Sponsors from "~/sponsors";
import Navbar from "~/navbar";
import Footer from "~/footer/footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "HooHacks" },
    { name: "description", content: "HooHacks: CIO @ UVA. Foster entrepreneurship and innovation by making tech more accessible and fun at UVA and beyond!" },
  ];
}

export default function Home() {
  return <div>
    <Navbar></Navbar>
    <Hero />
    <div className="relative z-1">
      <Events />
      <Committees />
      <Sponsors />
      <Footer />
      <div className="absolute top-0 left-0 w-full h-full xl:px-30 px-10 -z-1">
        <div className="mx-auto w-full h-full max-w-300">
          <div className="h-full max-w-[450px] w-full h-full m-auto xl:m-0" style={{ background: "linear-gradient(180deg, #042420 15.21%, #121A6A 35.96%, #00042D 75.94%, #121A6A 96.15%)" }}>
            <div className="xs:px-10 md:px-0"></div>
          </div>
          <div className="text-2xl text-center self-center w-150 text-shadow-lg"></div>
        </div>
      </div>
    </div>
  </div>;
}
