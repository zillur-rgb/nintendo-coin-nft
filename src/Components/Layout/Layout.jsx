import React from "react";
import AllPages from "../../pages/AllPages";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <AllPages />
      <Footer />
    </>
  );
};

export default Layout;
