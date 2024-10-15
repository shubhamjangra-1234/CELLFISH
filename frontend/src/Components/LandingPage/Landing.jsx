/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Slider from "../Slider/Slider";
import { NavLink, Link } from "react-router-dom";
function Landing() {
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
    <div className="min-h-screen lg:ml-64 md:ml-32 sm:ml-16 xs:ml-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <main className="py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              Buy and Sell Mobile Phones with Ease
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-600">
              Your one-stop platform for hassle-free mobile phone transactions.
              Get the best deals on used phones or sell your device quickly!
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
              <Link
                to="/buy"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 w-full sm:w-auto text-center"
              >
                Buy
              </Link>
              <Link
                to="/sell"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 w-full sm:w-auto text-center"
              >
                Sell
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 grid overflow-hidden grid-cols-2 gap-4 mt-8 lg:mt-0">
            <img
              src="https://images.gizbot.com/600x400/ph-big/img_og/iphone-16-plus-goes-official-with-new-camera-control-button-a18-soc1726570032.jpg"
              alt="iPhone 16"
              className="rounded-lg shadow-md w-full h-auto transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://imgs.search.brave.com/sbagq42rHmepq2gpfoEHyFxpx-5Ki6TZZtVlRzy4R3o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ2l6Ym90LmNv/bS82MDB4NDAwL3Bo/LWJpZy9pbWdfb2cv/bW90b3JvbGEtZWRn/ZS01MC1sYXVuY2hl/ZC1pbi1pbmRpYTE3/MjI1MDQ1MzIuanBn"
              alt="Motorola Edge 50"
              className="rounded-lg shadow-md w-full h-auto transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://imgs.search.brave.com/G12tEuUMXb4G59N9qL7J8Oa8Mk8z7xtThBcOPIcjW4o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZ2l6Ym90LmNv/bS82MDB4NDAwL3Bo/LWJpZy9pbWdfb2cv/Z29vZ2xlLXBpeGVs/LTktZmVhdHVyZXMt/cHJpY2Utc2FsZS1k/YXRlLWluLWluZGlh/MTcyMzY2MTY5NC5q/cGc"
              alt="Google Pixel 9"
              className="rounded-lg shadow-md w-full h-auto transition-transform duration-300 hover:scale-105"
            />
            <img
              src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2024/09/cover-14.webp?ssl=1&quality=80&w=340&h=200"
              alt="OnePlus 12"
              className="rounded-lg shadow-md w-full h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </main>
      <div className="w-full overflow-hidden">
        <Slider />
      </div>

      <section className="bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">
            Our Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-4 sm:p-6 rounded-lg shadow-md">
              <Link to="/buy" className="block">
                <img
                  src="https://s3no.cashify.in/builder/caa3a1efa51541a5aa37fd292790ea81.webp?p=default&s=lg"
                  alt="Buy Phones"
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-center">
                  Buy Phones
                </h4>
              </Link>
            </div>
            <div className="p-4 sm:p-6 rounded-lg shadow-md">
              <Link to="/sell" className="block">
                <img
                  src="https://s3no.cashify.in/builder/cd13764b153e46e19f9c6551ee52b5e6.webp?p=default&s=lg"
                  alt="Sell Phones"
                  className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-center">
                  Sell Your Phone
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800">
            Our Exclusive Stores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-gray-900 text-xl font-bold mb-2">
                CellFies Gurgaon
              </h4>
              <p className="text-gray-600 text-sm mb-1">
                123 Cyber City, Sector 24, Gurgaon
              </p>
              <p className="text-gray-600 text-sm mb-1">Rating: 4.5/5</p>
              <p className="text-gray-600 text-sm mb-1">
                Opening Hours: 10:00 AM - 8:00 PM
              </p>
              <p className="text-gray-600 text-sm">
                Sunday:{" "}
                <span className="text-red-600 font-semibold">Closed</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-gray-900 text-xl font-bold mb-2">
                PhoneHub Faridabad
              </h4>
              <p className="text-gray-600 text-sm mb-1">
                456 Crown Plaza, Sector 15A, Faridabad
              </p>
              <p className="text-gray-600 text-sm mb-1">Rating: 4.3/5</p>
              <p className="text-gray-600 text-sm mb-1">
                Opening Hours: 9:30 AM - 7:30 PM
              </p>
              <p className="text-gray-600 text-sm">
                Sunday:{" "}
                <span className="text-red-600 font-semibold">Closed</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-gray-900 text-xl font-bold mb-2">
                TechZone Delhi
              </h4>
              <p className="text-gray-600 text-sm mb-1">
                789 Connaught Place, New Delhi
              </p>
              <p className="text-gray-600 text-sm mb-1">Rating: 4.7/5</p>
              <p className="text-gray-600 text-sm mb-1">
                Opening Hours: 11:00 AM - 9:00 PM
              </p>
              <p className="text-gray-600 text-sm">
                Sunday:{" "}
                <span className="text-red-600 font-semibold">Closed</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-gray-900 text-xl font-bold mb-2">
                SmartPhone Central Rohtak
              </h4>
              <p className="text-gray-600 text-sm mb-1">
                101 Model Town, Rohtak
              </p>
              <p className="text-gray-600 text-sm mb-1">Rating: 4.2/5</p>
              <p className="text-gray-600 text-sm mb-1">
                Opening Hours: 10:30 AM - 8:30 PM
              </p>
              <p className="text-gray-600 text-sm">
                Sunday:{" "}
                <span className="text-red-600 font-semibold">Closed</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-gray-900 text-xl font-bold mb-2">
                Gadget Galaxy Sonipat
              </h4>
              <p className="text-gray-600 text-sm mb-1">
                234 Civil Lines, Sonipat
              </p>
              <p className="text-gray-600 text-sm mb-1">Rating: 4.4/5</p>
              <p className="text-gray-600 text-sm mb-1">
                Opening Hours: 10:00 AM - 7:00 PM
              </p>
              <p className="text-gray-600 text-sm">
                Sunday:{" "}
                <span className="text-red-600 font-semibold">Closed</span>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-gray-900 text-xl font-bold mb-2">
                MobileMania New Delhi
              </h4>
              <p className="text-gray-600 text-sm mb-1">
                567 Lajpat Nagar, New Delhi
              </p>
              <p className="text-gray-600 text-sm mb-1">Rating: 4.6/5</p>
              <p className="text-gray-600 text-sm mb-1">
                Opening Hours: 9:00 AM - 8:00 PM
              </p>
              <p className="text-gray-600 text-sm">
                Sunday:{" "}
                <span className="text-red-600 font-semibold">Closed</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="AboutUS" className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
            About Us: Pioneering the Mobile Revolution
          </h2>
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-700">
                Our Journey
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At CellFies, we're not just another player in the mobile phone
                industry; we're revolutionaries. Since our inception, we've been
                on an unwavering mission to redefine the landscape of mobile
                device transactions. Our platform stands as a testament to
                innovation, bridging the gap between cutting-edge technology and
                user-centric design.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We've cultivated a thriving ecosystem where buyers and sellers
                converge, fostering a community built on trust, transparency,
                and mutual benefit. Our journey has been marked by continuous
                evolution, always staying ahead of the curve to meet the
                ever-changing needs of our discerning clientele.
              </p>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-700">
                Why Choose Us?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <p className="text-lg text-gray-600">
                    <span className="font-semibold">
                      Unparalleled Selection:
                    </span>{" "}
                    Our vast inventory boasts an extensive array of devices,
                    from the latest flagships to coveted vintage models,
                    ensuring every mobile enthusiast finds their perfect match.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <p className="text-lg text-gray-600">
                    <span className="font-semibold">
                      Cutting-Edge Security:
                    </span>{" "}
                    We've implemented state-of-the-art encryption and
                    verification protocols, providing a fortress of protection
                    for every transaction.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <p className="text-lg text-gray-600">
                    <span className="font-semibold">Expert Curation:</span> Our
                    team of seasoned professionals meticulously vets each
                    listing, ensuring only the crème de la crème of mobile
                    devices grace our platform.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <p className="text-lg text-gray-600">
                    <span className="font-semibold">
                      Unmatched Customer Experience:
                    </span>{" "}
                    Our dedicated support team stands ready to assist,
                    transforming every interaction into a delightful journey.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 italic">
              "Join us in shaping the future of mobile commerce. At CellFies,
              we're not just facilitating transactions; we're crafting
              experiences, one device at a time."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
