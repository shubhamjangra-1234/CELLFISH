/* eslint-disable no-unused-vars */
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import Lenis from "lenis";
const Contact = () => {
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
  const offlineStores = [
    {
      name: "Delhi Store",
      address: "123, Connaught Place, New Delhi",
      image:
        "https://imgs.search.brave.com/ZrA6L7lK9CaFtvSdjDyf0HjayN3czvhSn01LVhTCYic/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLWNk/bi5waG9uZWFyZW5h/LmNvbS9pbWFnZXMv/YXJ0aWNsZXMvNDEw/MjUzLWltYWdlL3Rt/b3NpZ3N0b3JlLmpw/Zw",
    },
    {
      name: "Gurgaon Store",
      address: "Sector 29, Gurgaon, Haryana",
      image:
        "https://imgs.search.brave.com/7OlTAuUrr9YWh3_dx1CU4N8Sc4YPvkpFfxZctvQcN_Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NlL01HRl9NZXRy/b3BvbGl0YW4uSlBH",
    },
    {
      name: "Noida Store",
      address: "Sector 18, Noida, Uttar Pradesh",
      image:
        "https://imgs.search.brave.com/dpM1EK_GuYyD9d74Hg7uslzmUDcdV_qWWw1L5kHiOk4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzgxL1RoZV9HcmVh/dF9JbmRpYV9QbGFj/ZS5qcGc",
    },
    {
      name: "Faridabad Store",
      address: "Sector 21, Faridabad, Haryana",
      image:
        "https://imgs.search.brave.com/FxVxDtYucHNWrJdvGoVEabahjPbop6eeiFCwWGXWpXI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDUu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL0pz/SV9CX1RETHZFMGxE/VGxSVG1YVGo4dEts/NG5OOV9jUlZ5OXRT/TFR4c2xLMU9aUWow/LWo3MFdhRlVJR2I0/MG14OHJkMG1RbTJm/aDJDemlrMHBYRkxn/ZUY3Nl80MU1QS0tK/bkRnV3ltVGVVYmZL/Q1BHTlJEZnA5clAt/MFBQUHRTb2F4ZVl0/eFl4bjNFYTNoRWFv/blZ2aGs.jpeg",
    },
    {
      name: "Chandigarh Store",
      address: "Sector 17, Chandigarh",
      image:
        "https://imgs.search.brave.com/dBLgaXBtUl_PyfqafPkQKhse18fYstsGs7J6JdNdflo/rs:fit:500:0:0:0/g:ce/aHR0cDovL2NoYW5k/aWdhcmh1cGRhdGVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wNy9CZXN0/ZWNoLVNxdWFyZS1N/YWxsLU1vaGFsaS5w/bmc",
    },
    {
      name: "Panchkula Store",
      address: "Sector 5, Panchkula, Haryana",
      image:
        "https://imgs.search.brave.com/3AD2DizRIbHDikHICMuHH0qUmngqhIKVVIucT2tMxc0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oYmxp/bWcubW10Y2RuLmNv/bS9jb250ZW50L2h1/YmJsZS9pbWcvcGFu/Y2hrdWxhdGlvd2lt/YWdlcy9tbXQvYWN0/aXZpdGllcy90X3Vm/cy9tX0VsYW50ZV9N/YWxsXzFfbF80ODBf/NjQwLmpwZw",
    },
  ];

  return (
    <div
      className={`container mx-auto px-4 ${
        isLargeScreen ? "lg:ml-64 md:ml-32 sm:ml-16 xs:ml-8" : ""
      }`}
    >
      <h1 className="text-4xl font-bold text-center mt-4">Contact Us</h1>
      <div className="my-8 flex flex-wrap items-center">
        <div className="flex p-4 items-center mr-8">
          <FaPhone className="text-2xl mr-2 text-blue-500" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Phone</h2>
            <p className="text-gray-600">(123) 456-7890</p>
          </div>
        </div>
        <div className="flex  p-4 items-center mr-8">
          <FaEnvelope className="text-2xl mr-2 text-green-500" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Email</h2>
            <p className="text-gray-600">info@cellfish.com</p>
          </div>
        </div>
        <div className="flex  p-4 items-center">
          <FaMapMarkerAlt className="text-2xl mr-2 text-red-500" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Address</h2>
            <p className="text-gray-600">
              123 Tech Street, Cyber City, Digital State
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <h2 className="text-xl font-bold mb-3">Our Stores</h2>
        <div className="grid grid-cols-2 gap-3">
          {offlineStores.slice(0, 6).map((store) => (
            <div key={store.name} className="flex flex-col items-center p-3">
              <img
                src={store.image}
                alt={store.name}
                className="mb-1 rounded-lg"
              />
              <h3 className="text-md font-semibold">{store.name}</h3>
              <p>{store.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
