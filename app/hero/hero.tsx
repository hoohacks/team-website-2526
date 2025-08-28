import logo from "./logo.svg";
import logoMobile from "./logo-mobile.svg";
import dome from "./dome.svg";
import stars4 from "./stars/star4.svg";
import stars5 from "./stars/star5.svg";
import stars6 from "./stars/star6.svg";
import { useEffect, useState } from "react";
import JSX from "react";

function random(seed: { current: number }) {
  seed.current += 1;
  const x = Math.sin(seed.current) * 10000;
  return x - Math.floor(x);
}

export default function Hero() {
  const [starsReady, setStarsReady] = useState(false);
  const [starStyles, setStarStyles] = useState<{ type: number, top: string; left: string; animationDelay: string; animationDuration: string; }[]>([]);
  const [cloudStyles, setCloudStyles] = useState<{ i: number; scale: number; top: string; left: string; animationDuration: string; animationDelay: string; animationIterationCount: string; }[]>([]);
  const seed = { current: 6 };
  const stars = [stars4, stars5, stars6];

  // Randomly generate stars
  const starElements: JSX.ReactElement[] = [];
  for (let i = 0; i < 20; i++) {
    starElements.push(
      <div key={"star" + i} className="star absolute transition-opacity duration-500" style={{ top: starStyles[i]?.top, left: starStyles[i]?.left }} suppressHydrationWarning={true}>
        <img key={"top" + i} src={stars[starStyles[i]?.type]} className="w-full" suppressHydrationWarning={true} />
        <img key={"bottom" + i} src={stars[starStyles[i]?.type]} className="absolute animate-pulse w-full scale-150 top-0 left-0" style={{ animationDelay: starStyles[i]?.animationDelay, animationDuration: starStyles[i]?.animationDuration }} suppressHydrationWarning={true} />
      </div>
    );
  }

  // Randomly generate clouds
  const cloudElements: JSX.ReactElement[] = [];
  const colors = [
    { color: "#87A2FC", opacity: 0.5 },
    { color: "#87A2FC", opacity: 0.5 },
    { color: "#121A6A", opacity: 0.7 }
  ];
  const cloudKeyframes = `
    @keyframes cloud {
      0% {
        left: -200vh;
      }
      100% {
        left: 200vh;
      }
    }
  `;

  for (let i = 0; i < 15; i++) {
    const cloudColor = colors[Math.floor(random(seed) * colors.length)];
    cloudElements.push(
      <div key={"cloud" + i} className={`absolute z-0 animate-[cloud] scale-${cloudStyles[i]?.scale} ${i < 8 ? "hidden lg:block" : ""}`} style={{ top: cloudStyles[i]?.top, left: cloudStyles[i]?.left, animationDuration: cloudStyles[i]?.animationDuration, animationDelay: cloudStyles[i]?.animationDelay, animationIterationCount: cloudStyles[i]?.animationIterationCount }} suppressHydrationWarning={true}>
        <svg width="651" height="131" viewBox="0 0 651 131" xmlns="http://www.w3.org/2000/svg" style={{ fill: cloudColor.color, fillOpacity: cloudColor.opacity }} suppressHydrationWarning={true}>
          <path d="M576.493 45.751C650.206 57.0708 687.523 95.1532 596.761 114.327C506 133.5 425.191 130.415 315.002 129.5C219.533 128.707 54.1888 114.327 54.1888 114.327C25 114.327 0 118.895 0 94C0 72 20.4705 75.1812 42.5 76C36.6611 69.5268 29.1487 60.1017 54.1888 45.751C79.2289 31.4003 113.822 39.7715 127.988 45.751C133.912 38.3453 163.871 11 198.502 11C250.502 11 257.794 24.3426 272.715 38.3453C270.418 25.5635 288.796 0 380.686 0C471.176 0 484.622 36.7063 479.984 55.8988C482.817 47.4612 505.297 34.818 576.493 45.751Z" />
        </svg>
      </div>
    );
  }

  useEffect(() => {
    setStarStyles(starElements.map(star => {
      return {
        type: Math.floor(random(seed) * 3),
        top: `${random(seed) * 60 + 5}vh`,
        left: `${random(seed) * 100}%`,
        animationDelay: `${random(seed) * 3000 - 1500}ms`,
        animationDuration: `${Math.floor(random(seed) * 3000 + 2000)}ms`
      };
    }));
    setCloudStyles(cloudElements.map((_, i) => {
      return {
        i: i,
        scale: Math.floor((random(seed) * 80) + 40) | 0,
        top: `${Math.floor(Math.floor(random(seed) * 60) / 2) * 2 + 10}vh`,
        left: `${random(seed) * 100}%`,
        animationDuration: `${Math.floor(random(seed) * 80) + 80}s`,
        animationDelay: `${Math.floor(random(seed) * -160)}s`,
        animationIterationCount: "infinite"
      };
    }));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const logoElement = document.getElementById("hoohacks-logo");

      if (!logoElement)
        return;

      const descriptionElement = document.getElementById("description");

      if (!descriptionElement)
        return;

      const starElements = document.querySelectorAll(".star");
      starElements.forEach(star => {
        const starElement = star as HTMLElement;

        if (!star)
          return;

        const starRect = starElement.getBoundingClientRect();
        const logoRect = logoElement.getBoundingClientRect();
        const descriptionRect = descriptionElement.getBoundingClientRect();

        const p = 30;
        if (
          starRect.left < logoRect.right + p &&
          starRect.right > logoRect.left - p &&
          starRect.top < logoRect.bottom + p &&
          starRect.bottom > logoRect.top - p
        ) {
          starElement.style.opacity = "0";
        } else if (
          starRect.left < descriptionRect.right + p &&
          starRect.right > descriptionRect.left - p &&
          starRect.top < descriptionRect.bottom + p &&
          starRect.bottom > descriptionRect.top - p
        ) {
          starElement.style.opacity = "0";
        } else {
          starElement.style.opacity = "1";
        }
      });
    }

    handleResize();

    setStarsReady(true);
    let timeoutId: NodeJS.Timeout;
    window.addEventListener("resize", () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 250);
    });
  }, [starElements]);

  return (
    <div className="relative w-full h-screen overflow-x-hidden transition-opacity duration-1000 select-none" style={{ opacity: starsReady ? 1 : 0 }}>
      <style>
        {cloudKeyframes}
      </style>
      {cloudElements}
      <div className="w-full h-screen z-0 absolute">
        {starElements}
      </div>
      <div
        style={{ background: "linear-gradient(90deg, #87A2FC 0%, #2848BA 100%)" }}
        className="w-full h-24 absolute bottom-0"
      />
      <div className="flex flex-col absolute left-0 top-0 px-10 xl:px-30 w-full h-screen gap-8 items-end pt-20 overflow-hidden">
        <div id="hoohacks-logo" className="block w-xlg mx-auto mt-auto bg-inherit z-10">
          <img src={logo} alt="HooHacks Logo" className="hidden sm:block" />
          <img src={logoMobile} alt="HooHacks Logo" className="block sm:hidden" />
        </div>
        <div className="flex flex-col-reverse xl:flex-row items-center xl:items-end max-w-300 gap-10 sm:gap-20 justify-between mx-auto">
          <div className="h-full">
            <img
              src={dome}
              alt="Dome"
              width="450"
              className="xs:px-10 md:px-0"
            />
          </div>
          <div id="description" className="flex-1 md:text-2xl text-center xl:text-left self-center text-shadow-lg">
            CIO @ UVA. Foster entrepreneurship and innovation by making tech more accessible and fun at UVA and beyond!
          </div>
        </div>
      </div >
    </div >
  );
}


