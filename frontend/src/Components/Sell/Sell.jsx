import { useState, useEffect } from "react";
import axios from "axios";
import Lenis from "@studio-freight/lenis";

const Sell = () => {
  const [formData, setFormData] = useState({
    modelName: "",
    boxAndCharger: "",
    imeiNumber: "",
    condition: "",
    screenCracks: "",
    bodyCracks: "",
    ownerName: "",
    phoneNumber: "",
    email: "",
    address: "",
    pincode: "",
  });

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1035);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1035);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      // Handle success (e.g., show a success message, redirect)
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show error message)
    }
  };
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
    <div
      className={`flex-1 p-4 sm:p-4 md:p-4 lg:p-4 ${
        isLargeScreen ? "lg:ml-64" : "ml-0"
      } transition-all duration-300`}
    >
      <section className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-5">
          Sell your Mobile Phone for Instant Cash
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="h-96 sm:h-80 md:h-96 w-full md:w-1/4 mb-6 md:mb-0 md:order-2 flex justify-center md:justify-end">
            <img
              className="object-cover h-full"
              src="https://whitegold.money/media/cutout/2023/char-find-a-branch.png?v=20230817"
              alt="Sell your phone"
            />
          </div>
          <div className="w-full md:w-3/4 md:pr-6 lg:pr-12 md:order-1">
            <p className="text-lg sm:text-xl mb-4">
              Get the best price for your old mobile phone with our hassle-free
              service!
            </p>
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-semibold">
                ✓ Maximum Value
              </p>
              <p className="text-base sm:text-lg font-semibold">
                ✓ Safe & Hassle-free
              </p>
              <p className="text-base sm:text-lg font-semibold">
                ✓ Free Doorstep Pickup
              </p>
            </div>
            <button
              onClick={() =>
                document
                  .getElementById("sellForm")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="mt-6 bg-white text-blue-600 font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-blue-100 transition duration-300"
            >
              Sell Now
            </button>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6 my-7">
              {["apple", "samsung", "motorola", "oneplus", "mi", "sony"].map(
                (brand) => (
                  <div
                    key={brand}
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <div className="rounded-full overflow-hidden bg-white w-8 h-8 flex items-center justify-center">
                      <img
                        src={`https://logo.clearbit.com/${brand}.com`}
                        alt={brand}
                        className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl ml-4 sm:ml-10 mb-6 sm:mb-8 text-gray-800">
          How CellFies Works
        </h2>
        <div className="flex justify-center flex-wrap sm:gap-2">
          <div className="flex flex-col items-center max-w-xs w-full sm:w-auto">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <svg
                className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl text-gray-800 mb-2">
              Check Price
            </h3>
            <p className="text-center text-sm sm:text-base text-gray-600">
              Get an instant quote for your device
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs w-full sm:w-auto">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <svg
                className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl text-gray-800 mb-2">
              Schedule Pickup
            </h3>
            <p className="text-center text-sm sm:text-base text-gray-600">
              Choose a convenient time for device collection
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs w-full sm:w-auto">
            <div className="bg-blue-100 rounded-full p-4 mb-4">
              <svg
                className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl text-gray-800 mb-2">Get Paid</h3>
            <p className="text-center text-sm sm:text-base text-gray-600">
              Receive instant payment upon device handover
            </p>
          </div>
        </div>
      </section>

      <div
        id="sellForm"
        className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 sm:py-8 px-6 sm:px-10 flex justify-between items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Sell Your Old Mobile
            </h1>
            <p className="mt-2 text-blue-100 text-sm sm:text-base md:text-lg">
              Get the best value for your device in just a few steps.
            </p>
          </div>
          <div className="flex-shrink-0   ">
            <img
              src="../../..//Images/Cellfish.png"
              alt="Logo"
              className="w-24 h-24 sm:w-20 sm:h-20 object-contain"
            />
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
          >
            <div className="sm:col-span-2">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Device Details
              </h2>
            </div>
            <div>
              <input
                type="text"
                id="modelName"
                name="modelName"
                value={formData.modelName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Model Name (e.g. iPhone 12 Pro)"
              />
            </div>
            <div>
              <select
                id="boxAndCharger"
                name="boxAndCharger"
                value={formData.boxAndCharger}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                <option value="">Box and Charger</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                id="imeiNumber"
                name="imeiNumber"
                value={formData.imeiNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="IMEI Number (15-digit)"
              />
            </div>
            <div>
              <select
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                <option value="">Condition</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                id="screenCracks"
                name="screenCracks"
                value={formData.screenCracks}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Cracks on Screen (Describe any damage)"
              />
            </div>
            <div>
              <input
                type="text"
                id="bodyCracks"
                name="bodyCracks"
                value={formData.bodyCracks}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Cracks on Body (Describe any damage)"
              />
            </div>

            <div className="sm:col-span-2 mt-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Owner Details
              </h2>
            </div>
            <div>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Owner Name"
              />
            </div>
            <div>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Phone Number (e.g. +1 123-456-7890)"
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                placeholder="Pincode (e.g. 123456)"
              />
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                rows="3"
                placeholder="Address"
              ></textarea>
            </div>

            <div className="sm:col-span-2 mt-8">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-x-95"
              >
                Submit and Get an Offer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sell;
