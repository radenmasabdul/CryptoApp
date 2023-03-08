import React from "react";

import Navbar from "./components/Navbar";
import UpContent from "./components/UpContent";
import Content from "./components/Content";
import ContentList from "./components/ContentList";
import CryptoList from "./components/CryptoList";
import UpFooter from "./components/UpFooter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <UpContent />
      <Content />
      <ContentList />
      <CryptoList />
      <UpFooter />
      <Footer />
    </>
  );
};

export default App;
