import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Navbar />
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
