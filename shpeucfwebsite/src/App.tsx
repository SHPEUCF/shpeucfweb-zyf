/* Core functionality */
import React, { useState } from "react";

/* Components */
import Footer from "./components/Footer";
import Header from "./components/Header";

/* CSS files */
import "./App.css";

/* Assets */
import Home from "./pages/Home";

export default () => {

  return (

    <div className="w-screen flex flex-col">

      <Header />
      <Home />
      <Footer />

    </div>

  );

};
