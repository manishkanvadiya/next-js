import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
