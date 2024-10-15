/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";

const brands = [
  {
    name: "Google",
    logo: "https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg",
  },
  {
    name: "Apple",
    logo: "https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "OnePlus",
    logo: "https://www.logo.wine/a/logo/OnePlus/OnePlus-Logo.wine.svg",
  },
  {
    name: "Vivo",
    logo: "https://www.logo.wine/a/logo/Vivo_(technology_company)/Vivo_(technology_company)-Logo.wine.svg",
  },
  {
    name: "Oppo",
    logo: "https://www.logo.wine/a/logo/Oppo/Oppo-Logo.wine.svg",
  },
  {
    name: "Moto",
    logo: "https://www.logo.wine/a/logo/Motorola_Mobility/Motorola_Mobility-Logo.wine.svg",
  },
];

const BrandSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scrollSlider = () => {
      if (slider) {
        scrollAmount += scrollSpeed;
        slider.scrollLeft = scrollAmount;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0;
          slider.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scrollSlider, 30);

    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => {
      scrollAmount = slider.scrollLeft;
      clearInterval(interval);
      const newInterval = setInterval(scrollSlider, 30);
    };

    if (slider) {
      slider.addEventListener("mouseenter", handleMouseEnter);
      slider.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      clearInterval(interval);
      if (slider) {
        slider.removeEventListener("mouseenter", handleMouseEnter);
        slider.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      className="w-full bg-blue-300 my-2 relative overflow-hidden"
      style={{ zIndex: -1 }}
    >
      <div
        ref={sliderRef}
        className="opacity-90 w-full shadow-xl shadow-zinc-800 flex overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {brands.concat(brands).map((brand, index) => (
          <div
            key={index}
            className="w-40 h-20 m-2 flex items-center justify-center flex-shrink-0"
          >
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
