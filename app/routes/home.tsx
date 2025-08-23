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
    <Events />
    <Committees />
    <Sponsors />
    <Footer />
  </div>;
}
