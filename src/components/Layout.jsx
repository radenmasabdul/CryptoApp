import React from "react";

import Navbar from "./Navbar";
import UpContent from "./UpContent";
import Content from "./Content";
import ContentList from "./ContentList";
import CryptoList from "./CryptoList";
import UpFooter from "./UpFooter";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <UpContent />
      <Content />
      <div className="py-4">
        <ContentList />
      </div>
      <CryptoList />
      <div className="py-4">
        <UpFooter />
      </div>
      <div className="lg:pt-60 sm:pt-20">
        <Footer />
      </div>
      <div>{children}</div>
    </>
  );
};

export default Layout;
