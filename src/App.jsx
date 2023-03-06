import React from "react";

import Navbar from "./components/Navbar";
import UpContent from "./components/UpContent";
import Content from "./components/Content";
import ContentList from "./components/ContentList";
import CryptoList from "./components/CryptoList";

const App = () => {
  return (
    <>
      <Navbar />
      <UpContent />
      <Content />
      <ContentList />
      <CryptoList />
    </>
  );
};

export default App;
