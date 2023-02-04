import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navber from "./components/Navber";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <div className="noise"></div>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navber footerNav />
      <Footer />
    </div>
  );
};

export default App;
