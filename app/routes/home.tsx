import type { Route } from "./+types/home";
import { Hero } from "../hero/hero";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "HooHacks" },
    { name: "description", content: "HooHacks: CIO @ UVA. Foster entrepreneurship and innovation by making tech more accessible and fun at UVA and beyond!" },
  ];
}

export default function Home() {
  return <main>
    <Hero />
  </main>;
}
