/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1050);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1050);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className={`fixed top-4 right-4 z-50 ${
          isLargeScreen ? "hidden" : ""
        } bg-gray-800 text-white p-2 rounded-md`}
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navbar */}
      <nav
        className={`overflow-hidden  fixed left-0 top-0 h-full w-64 bg-gray-800 text-white p-5 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen || isLargeScreen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ borderRadius: "0px 250px 250px 0px" }}
      >
        <div className="flex flex-col h-full">
          <NavLink to="/" className="flex justify-center items-center py-4">
            <img
              src="../../..//Images/Cellfish.png"
              alt="Logo"
              className="w-28 h-28 mr-24 "
            />
          </NavLink>

          <div className="py-2">
            <NavLink
              to="/Home"
              className="flex items-center py-3 hover:bg-gray-700 rounded"
              style={{ font: "Baskerville" }}
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 pr-5"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                    fill="white"
                  ></path>
                </g>
              </svg>
              <p className="text-lg"> Home</p>
            </NavLink>

            <NavLink
              to="/buy"
              className="flex items-center py-3 hover:bg-gray-700 rounded"
            >
              <svg
                fill="white"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 pr-3"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M379.141 472.367H215.035c-16.962 0-30.72-13.758-30.72-30.72V71.676c0-16.962 13.758-30.72 30.72-30.72h591.8c16.962 0 30.72 13.758 30.72 30.72v364.851c0 16.962-13.758 30.72-30.72 30.72h-96.768v40.96h96.768c39.583 0 71.68-32.097 71.68-71.68V71.676c0-39.583-32.097-71.68-71.68-71.68h-591.8c-39.583 0-71.68 32.097-71.68 71.68v369.971c0 39.583 32.097 71.68 71.68 71.68h164.106v-40.96z"></path>
                  <path d="M550.66 165.528c0-23.331-18.909-42.24-42.24-42.24s-42.24 18.909-42.24 42.24c0 23.331 18.909 42.24 42.24 42.24s42.24-18.909 42.24-42.24zm40.96 0c0 45.953-37.247 83.2-83.2 83.2s-83.2-37.247-83.2-83.2 37.247-83.2 83.2-83.2 83.2 37.247 83.2 83.2zm-318.72 160h474.88c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H272.9c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm0 92.16h252.672c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H272.9c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm324.825 95.581c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H330.942c-11.311 0-20.48 9.169-20.48 20.48v106.26a61.445 61.445 0 006.638 27.787l61.112 120.504a40.922 40.922 0 014.431 18.528v237.189c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V765.868a81.856 81.856 0 00-8.865-37.063L353.63 608.309a20.48 20.48 0 01-2.209-9.261v-85.78h246.303zm40.918 489.788V783.87a51.175 51.175 0 0116.723-37.846l46.466-42.328a81.887 81.887 0 0026.759-60.565V537.772c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v105.359a40.934 40.934 0 01-13.377 30.28l-46.464 42.327a92.126 92.126 0 00-30.107 68.132v219.187c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"></path>
                  <path d="M625.769 545.158V426.036c0-16.968 13.754-30.72 30.72-30.72 17.396 0 31.15 13.752 31.15 30.72v139.602c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V426.036c0-39.591-32.094-71.68-71.68-71.68-40.016 0-72.11 32.089-72.11 71.68v119.122c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48z"></path>
                </g>
              </svg>
              <p className="text-lg">Buy Phones</p>
            </NavLink>

            <NavLink
              to="/sell"
              className="flex items-center py-3 hover:bg-gray-700 rounded"
            >
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                className="h-6 pr-3"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="white"
                    d="M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
                  ></path>
                </g>
              </svg>
              <p className="text-lg"> Sell Phones</p>
            </NavLink>
            <NavLink
              to="/contact"
              className="flex items-center py-3 hover:bg-gray-700 rounded"
            >
              <svg
                fill="white"
                viewBox="0 0 64 64"
                version="1.1"
                className="h-6 pr-4"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="_x32_5_attachment"></g> <g id="_x32_4_office"></g>{" "}
                  <g id="_x32_3_pin"></g> <g id="_x32_2_business_card"></g>{" "}
                  <g id="_x32_1_form"></g> <g id="_x32_0_headset"></g>{" "}
                  <g id="_x31_9_video_call"></g> <g id="_x31_8_letter_box"></g>{" "}
                  <g id="_x31_7_papperplane"></g> <g id="_x31_6_laptop"></g>{" "}
                  <g id="_x31_5_connection"></g> <g id="_x31_4_phonebook"></g>{" "}
                  <g id="_x31_3_classic_telephone"></g>{" "}
                  <g id="_x31_2_sending_mail"></g>{" "}
                  <g id="_x31_1_man_talking"></g> <g id="_x31_0_date"></g>{" "}
                  <g id="_x30_9_review"></g>{" "}
                  <g id="_x30_8_email">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M35.0137,31.8325c0.5488-0.0596,0.9453-0.5532,0.8857-1.1021c-0.0596-0.5493-0.5518-0.9434-1.1025-0.8862 c-6.4932,0.7036-9.5806-1.688-11.0259-3.8203c-2.0195-2.98-2.0645-7.2817-0.1143-10.959 c1.9429-3.6626,5.356-5.7627,9.3657-5.7627c0.001,0,0.002,0,0.0029,0c3.0547,0,5.7949,1.2461,7.3301,3.3325 c1.6016,2.1763,1.8633,5.2012,0.7578,8.7485c-0.4336,1.3921-1.8486,3.2183-3.0938,3.5781 c-0.5078,0.1484-0.9092,0.0938-1.2236-0.1665c-0.3623-0.3013-0.4922-0.769-0.4814-0.9541 c0.002-0.0117,0.0029-0.0225,0.0039-0.0342l1.0957-10.9561c0.0586-0.5493-0.3389-1.042-0.8877-1.1001 c-0.5586-0.061-1.042,0.3389-1.1006,0.8882l-0.0969,0.9086c-0.0175-0.013-0.0319-0.0287-0.0496-0.0414 c-1.2813-0.9214-3.0767-1.0112-4.8047-0.2397c-2.9424,1.3115-5.0669,5.48-4.5469,8.9199c0.3901,2.5801,2.209,4.251,4.9917,4.5845 c1.2773,0.1519,2.8452-0.2251,4.0083-1.085c0.1689,0.2427,0.3682,0.4634,0.5908,0.6484 c0.8242,0.6836,1.9092,0.8794,3.0566,0.5488c2.0088-0.5811,3.8389-2.9502,4.4482-4.9048 c1.6445-5.2793,0.333-8.6396-1.0566-10.5283c-1.9111-2.5972-5.2539-4.1475-8.9414-4.1475c-0.001,0-0.002,0-0.0029,0 c-4.7739,0-8.8315,2.4878-11.1323,6.8252c-2.293,4.3232-2.2046,9.4331,0.2256,13.0186 c2.1333,3.1475,5.8232,4.8188,10.5332,4.8188C33.4111,31.9648,34.2002,31.9209,35.0137,31.8325z M34.9131,17.4961l-0.5693,5.9414 c-0.5811,0.9546-2.1055,1.4746-3.1875,1.3472c-1.9009-0.228-2.9946-1.2026-3.251-2.8975 c-0.3848-2.5454,1.2593-5.8477,3.3838-6.7949c0.5137-0.229,1.0332-0.3433,1.5107-0.3433c0.5029,0,0.96,0.1274,1.3115,0.3804 C34.7412,15.582,35.0176,16.4004,34.9131,17.4961z"></path>{" "}
                        <path d="M59.3057,21.6533l-7.2637-4.4982V2c0-0.5522-0.4473-1-1-1H12.4771c-0.5522,0-1,0.4478-1,1v15.0159 c-3.4714,2.1884-5.806,3.7847-6.9165,4.7346c-1.5254,1.3042-2.3652,3.1631-2.3652,5.2334v29.0249 C2.1953,59.8638,5.3315,63,9.186,63h45.6284c1.8837,0,3.5925-0.7524,4.8508-1.9683c0.0023-0.0023,0.0054-0.003,0.0076-0.0053 c0.0011-0.0012,0.0013-0.0027,0.0024-0.0039c1.3107-1.2715,2.1294-3.0475,2.1294-5.0137V26.9839 C61.8047,25.2393,61.1504,22.7964,59.3057,21.6533z M52.042,19.5073l5.0593,3.1331l-5.0593,4.4129V19.5073z M58.784,23.826 c0.6964,0.7996,1.0207,2.077,1.0207,3.1579v29.0249c0,1.0747-0.3491,2.0649-0.9291,2.8804L39.5911,40.5665L58.784,23.826z M13.4771,3H50.042v25.7969L31.998,44.5361l-18.521-16.1475V3z M11.4771,19.3841v7.2624L6.7792,22.551 C7.835,21.7673,9.4214,20.6976,11.4771,19.3841z M4.1953,56.0088V26.9839c0-1.1927,0.3796-2.2405,1.0782-3.0918l19.8513,17.3058 L5.7814,59.6376C4.8109,58.7264,4.1953,57.4419,4.1953,56.0088z M9.186,61c-0.5724,0-1.1138-0.1168-1.6263-0.295l19.0789-18.1874 l4.7021,4.0992c0.1885,0.1641,0.4229,0.2461,0.6572,0.2461s0.4692-0.082,0.6572-0.2466l5.4222-4.7294l19.3299,18.3657 C56.6494,60.7177,55.7672,61,54.8145,61H9.186z"></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                  <g id="_x30_7_information"></g>{" "}
                  <g id="_x30_6_phone_talking"></g>{" "}
                  <g id="_x30_5_women_talking"></g> <g id="_x30_4_calling"></g>{" "}
                  <g id="_x30_3_women"></g> <g id="_x30_2_writing"></g>{" "}
                  <g id="_x30_1_chatting"></g>{" "}
                </g>
              </svg>
              <p className="text-lg"> Contact</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
