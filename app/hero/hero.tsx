import logo from "./logo.svg";
import dome from "./dome.svg";
import cloudsLeft from "./cloudsLeft.svg";

export function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* <img
            src={cloudsLeft}
            alt="Clouds (Left)"
            className="top-0 left-0 absolute h-3/4 py-8"
          /> */}
      <img
        src={logo}
        alt="HooHacks"
        className="block w-xlg py-50 px-20 m-auto"
      />
      <div
        style={{ background: "linear-gradient(90deg, #87A2FC 0%, #2848BA 100%)" }}
        className="w-full h-24 absolute bottom-0"
      />
      <img
        src={dome}
        alt="Dome"
        className="w-md self-start absolute bottom-0 left-50"
      />
      <div className="w-1/3 absolute right-1/6 text-xl">
        CIO @ UVA. Foster entrepreneurship and innovation by making tech more accessible and fun at UVA and beyond!
      </div>
    </div>
  );
}
