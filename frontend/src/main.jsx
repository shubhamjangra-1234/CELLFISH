import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import Landing from "./Components/LandingPage/Landing.jsx";
import Sell from "./Components/Sell/Sell.jsx";
import Buy from "./Components/Buy/Buy.jsx";
import Product from "./Components/ProductPage/ProductPage.jsx";
import Contact from "./Components/Contact/Contact";
// import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="home" element={<Landing />} />
      <Route path="Sell" element={<Sell />} />
      <Route path="Buy" element={<Buy />} />
      <Route path="/Product/:id" element={<Product />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
