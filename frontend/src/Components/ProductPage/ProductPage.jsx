/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../ProductData/ProductData";

const Product = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = getProductById(parseInt(id));
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className=" lg:ml-64 md:ml-32 sm:ml-16 xs:ml-8 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-200 p-2 flex flex-col md:flex-row rounded-xl ">
            <div className="bg-white rounded-xl md:w-1/3 p-4 sm:p-4 md:p-6 overflow-hidden">
              <div className=" hover:scale-110  relative pb-[100%] md:pb-[75%] lg:p transition-all duration-300 ease-in-out">
                <img
                  className="absolute top-0 left-0 w-full h-full object-contain rounded-lg transition-all duration-300 ease-in-out"
                  src={product.image}
                  alt={`${product.brand} ${product.model}`}
                  style={{ maxWidth: "calc(100% - var(--navbar-width, 0px))" }}
                />
              </div>
            </div>
            <div className="md:w-1/2 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h2 className="text-2xl sm:text-3xl text-gray-800 mb-2 sm:mb-0">{`${product.brand} ${product.model}`}</h2>
              </div>
              <div className="flex mt-2 mb-5 space-x-2">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs sm:text-sm">
                  {product.storage}
                </span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs sm:text-sm">
                  {product.color}
                </span>
              </div>
              <div className="flex items-center sm:mt-0">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center flex-shrink-0">
                  <span className="text-2xl md:text-3xl text-gray-700">
                    ${product.price}
                  </span>
                  <span className="ml-2  md:text-2xl text-red-600">
                    -{product.discount}%
                  </span>
                </div>
                <button className="flex-grow md:flex-grow-0 bg-blue-700 text-white px-4 md:px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 text-sm md:text-base">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 sm:p-6 md:p-8">
            <hr className="my-4 sm:my-6 border-gray-300" />
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl text-zinc-800 font-semibold mb-2">
                Payment Methods
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                <div className="flex items-center bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm">Cash on Delivery</span>
                </div>
                <div className="flex items-center bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm">UPI</span>
                </div>
                <div className="flex items-center bg-purple-100 text-purple-800 px-2 sm:px-3 py-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path
                      fillRule="evenodd"
                      d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm">Card</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl text-zinc-800 font-semibold mb-2">
                Bank Offers
              </h3>
              <div className="flex flex-col space-y-4">
                <div className="bg-pink-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-2">
                    UPI Offers
                  </h4>
                  <p className="text-sm text-pink-700">
                    Get an instant discount of ₹
                    {Math.round(product.price * 0.05)} on UPI payments. That's
                    5% off on your purchase of {product.brand} {product.model}!
                  </p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Card Offers
                  </h4>
                  <p className="text-sm text-green-700">
                    Use your credit card and get a cashback of ₹
                    {Math.round(product.price * 0.03)}. That's 3% cashback on
                    your new {product.brand} {product.model}!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

// Explanation: Anchor tags are not present in this component. The component is using React Router for navigation,
// which typically uses the `Link` or `NavLink` components from 'react-router-dom' instead of traditional anchor tags.
// If you're trying to add clickable links within this component, you should import and use the `Link` component from
// 'react-router-dom'. For external links, you can use regular anchor tags, but they are not present in this current code.
