import "../../../public/Javascript/Index.js";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Lenis from "@studio-freight/lenis";

function Home() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((  elem) => {
      let image = elem.querySelector("img");
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline();

      let xTransform = gsap.utils.random(-100, 100);
      tl.set(
        image,
        {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
        },
        "start"
      )
        .to(
          image,
          {
            scale: 0,
            ease: "none", // Changed ease for smoother, slower animation
            scrollTrigger: {
              trigger: image,
              start: "top top", // Changed start point to begin animation earlier
              end: "bottom top",
              scrub: true, // Increased scrub value to slow down the animation further
              //   toggleActions: "play none none reverse" // Added to ensure smooth reversal of animation
            },
          },
          "start"
        )
        .to( elem, {
          xPercent: xTransform,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom", // Changed start point to begin animation earlier
            end: "bottom top",
            scrub: true, // Increased scrub value to slow down the animation further
          },
        });
    });
  });
  useEffect(() => {
    const lenis = new Lenis({
      duration: 4,
      smoothWheel: true,
      wheelMultiplier: 0.2,
      touchMultiplier: 0.2,
    });
    lenis.on("Scroll", (e) => {
      console.log(e);
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Remove the scroll listener and related logic
  }, []);

  return (
    <>
      <div
        className="back bg-zinc-700 grid grid-cols-8 grid-rows-20 w-full h-full overflow-hidden"
        id="scrollTrigger"
      >
        <div
          className="  elem aspect-square"
          style={{ gridRow: "1", gridColumn: "3" }}
        >
          <img
            src="https://picsum.photos/400/400?random=1"
            alt="Random image 1"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "1", gridColumn: "7" }}
        >
          <img
            src="https://picsum.photos/400/400?random=2"
            alt="Random image 2"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "2", gridColumn: "2" }}
        >
          <img
            src="https://picsum.photos/400/400?random=3"
            alt="Random image 3"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "2", gridColumn: "6" }}
        >
          <img
            src="https://picsum.photos/400/400?random=4"
            alt="Random image 4"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "3", gridColumn: "4" }}
        >
          <img
            src="https://picsum.photos/400/400?random=5"
            alt="Random image 5"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "3", gridColumn: "8" }}
        >
          <img
            src="https://picsum.photos/400/400?random=6"
            alt="Random image 6"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "4", gridColumn: "1" }}
        >
          <img
            src="https://picsum.photos/400/400?random=7"
            alt="Random image 7"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "4", gridColumn: "5" }}
        >
          <img
            src="https://picsum.photos/400/400?random=8"
            alt="Random image 8"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "5", gridColumn: "3" }}
        >
          <img
            src="https://picsum.photos/400/400?random=9"
            alt="Random image 9"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "5", gridColumn: "7" }}
        >
          <img
            src="https://picsum.photos/400/400?random=10"
            alt="Random image 10"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "6", gridColumn: "2" }}
        >
          <img
            src="https://picsum.photos/400/400?random=11"
            alt="Random image 11"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "6", gridColumn: "6" }}
        >
          <img
            src="https://picsum.photos/400/400?random=12"
            alt="Random image 12"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "7", gridColumn: "4" }}
        >
          <img
            src="https://picsum.photos/400/400?random=13"
            alt="Random image 13"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "7", gridColumn: "8" }}
        >
          <img
            src="https://picsum.photos/400/400?random=14"
            alt="Random image 14"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "8", gridColumn: "1" }}
        >
          <img
            src="https://picsum.photos/400/400?random=15"
            alt="Random image 15"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "8", gridColumn: "5" }}
        >
          <img
            src="https://picsum.photos/400/400?random=16"
            alt="Random image 16"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "9", gridColumn: "3" }}
        >
          <img
            src="https://picsum.photos/400/400?random=17"
            alt="Random image 17"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "9", gridColumn: "7" }}
        >
          <img
            src="https://picsum.photos/400/400?random=18"
            alt="Random image 18"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "10", gridColumn: "2" }}
        >
          <img
            src="https://picsum.photos/400/400?random=19"
            alt="Random image 19"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "10", gridColumn: "6" }}
        >
          <img
            src="https://picsum.photos/400/400?random=20"
            alt="Random image 20"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "11", gridColumn: "4" }}
        >
          <img
            src="https://picsum.photos/400/400?random=21"
            alt="Random image 21"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "11", gridColumn: "8" }}
        >
          <img
            src="https://picsum.photos/400/400?random=22"
            alt="Random image 22"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "12", gridColumn: "1" }}
        >
          <img
            src="https://picsum.photos/400/400?random=23"
            alt="Random image 23"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "12", gridColumn: "5" }}
        >
          <img
            src="https://picsum.photos/400/400?random=24"
            alt="Random image 24"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "13", gridColumn: "3" }}
        >
          <img
            src="https://picsum.photos/400/400?random=25"
            alt="Random image 25"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "13", gridColumn: "7" }}
        >
          <img
            src="https://picsum.photos/400/400?random=26"
            alt="Random image 26"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "14", gridColumn: "2" }}
        >
          <img
            src="https://picsum.photos/400/400?random=27"
            alt="Random image 27"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "14", gridColumn: "6" }}
        >
          <img
            src="https://picsum.photos/400/400?random=28"
            alt="Random image 28"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="   elem aspect-square"
          style={{ gridRow: "15", gridColumn: "4" }}
        >
          <img
            src="https://picsum.photos/400/400?random=29"
            alt="Random image 29"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="   elem aspect-square"
          style={{ gridRow: "15", gridColumn: "8" }}
        >
          <img
            src="https://picsum.photos/400/400?random=30"
            alt="Random image 30"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "16", gridColumn: "1" }}
        >
          <img
            src="https://picsum.photos/400/400?random=31"
            alt="Random image 31"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "16", gridColumn: "5" }}
        >
          <img
            src="https://picsum.photos/400/400?random=32"
            alt="Random image 32"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "17", gridColumn: "3" }}
        >
          <img
            src="https://picsum.photos/400/400?random=33"
            alt="Random image 33"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "17", gridColumn: "7" }}
        >
          <img
            src="https://picsum.photos/400/400?random=34"
            alt="Random image 34"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "18", gridColumn: "2" }}
        >
          <img
            src="https://picsum.photos/400/400?random=35"
            alt="Random image 35"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "18", gridColumn: "6" }}
        >
          <img
            src="https://picsum.photos/400/400?random=36"
            alt="Random image 36"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "19", gridColumn: "4" }}
        >
          <img
            src="https://picsum.photos/400/400?random=37"
            alt="Random image 37"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "19", gridColumn: "8" }}
        >
          <img
            src="https://picsum.photos/400/400?random=38"
            alt="Random image 38"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "20", gridColumn: "1" }}
        >
          <img
            src="https://picsum.photos/400/400?random=39"
            alt="Random image 39"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
        <div
          className="  elem aspect-square"
          style={{ gridRow: "20", gridColumn: "5" }}
        >
          <img
            src="https://picsum.photos/400/400?random=40"
            alt="Random image 40"
            className="w-full h-full object-cover rounded-lg shadow-md filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
        </div>
      </div>
      <div
        id="fixedContent"
        className="fixed inset-0  font-['Helvetica_Now_Display'] flex flex-col items-center justify-center bg-opacity-50 pointer-events-none"
      >
        <h1 className="text-6xl uppercase font-regular text-white mb-4 text-center">
          CellFish
        </h1>
        <h1 className="text-3xl font-regular text-white mb-4 text-center">
          セルフィッシュ
        </h1>
        <div className="drop-shadow-2xl shadow-white h-60 w-60 object-cover relative">
          <img
            src="https://hellomobiles.in/wp-content/uploads/2024/09/iphone-16-5.png"
            alt="iPhone 16"
            className="w-full h-full object-cover filter drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
          />
          <div className="absolute inset-0"></div>
          <div></div>
        </div>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <a href="/Home">
          <button className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg text-zinc-700  py-2 px-4 rounded-full border border-white border-opacity-25 hover:bg-white hover:text-zinc-700 transition duration-300 ease-in-out flex items-center transform hover:scale-95">
            Get started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </a>
      </div>
    </>
  );
}

export default Home;
