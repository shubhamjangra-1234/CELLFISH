import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import phones from "../ProductData/ProductData";
import Lenis from "@studio-freight/lenis";

const Buy = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="font-[Arial] flex flex-col lg:flex-row min-h-screen">
      <div className={`${isLargeScreen ? "w-64" : "w-full"}  lg:min-h-screen`}>
        {/* Your navbar content goes here */}
      </div>
      <div className="flex-1 p-4 lg:p-8">
        <h1 className="text-zinc-800 text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">
          Make Your Choice at CellFies
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 lg:mb-8 max-w-3xl">
          Discover amazing deals on pre-owned smartphones. Quality assured and
          budget-friendly!
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Welcome to Our Phone Marketplace
          </h2>
          <p className="text-gray-600 mb-3">
            At CellFies, we offer a wide variety of smartphones to suit every
            need and budget. From the latest flagship models to quality
            pre-owned devices, we&apos;ve got you covered.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-3">
            <li>Extensive selection of new and refurbished phones</li>
            <li>Thoroughly tested and certified pre-owned devices</li>
            <li>Expert repair services to make old phones like new</li>
            <li>Competitive prices on all our products</li>
          </ul>
          <p className="text-gray-600">
            We take pride in our customer care. Every purchase comes with our
            quality guarantee, ensuring you get a device that meets our high
            standards at a reasonable price.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {phones.map((phone) => (
            <div
              key={phone.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors duration-200"
            >
              <Link to={`/Product/${phone.id}`}>
                <div className="w-full h-32 sm:h-36 overflow-hidden">
                  <img
                    src={phone.image}
                    alt={`${phone.brand} ${phone.model}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xs text-zinc-800 font-semibold sm:text-sm truncate">
                      {phone.brand} {phone.model}
                    </h2>
                    <span className="text-sm text-zinc-700 sm:text-base">
                      ${phone.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 w-3 h-3 mr-0.5" />
                      <span className="text-xs">{phone.rating}</span>
                    </div>
                    <span className="text-green-600 font-semibold text-xs">
                      {phone.discount}% OFF
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buy;
