// Layout.js
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const location = useLocation();

  // Define the path where navbar and footer should be hidden
  const hideLayout = location.pathname === "/";
  console.log(location.pathname);

  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      <Outlet />
      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;
