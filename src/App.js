import React from "react";
import Header from "./app/components/Header";
import "./App.css";
import Footer from "./app/components/Footer";
import HomeSlider from "./app/components/Home/HomeSlider";
import DealOfDay from "./app/components/Home/DealOfDay";
import Model from "./app/components/Model";
import ScrollTop from "./app/components/ScrollTop";

function App() {
  return (
    <div className="App-container">
      <Header />
      <HomeSlider />
      <Model />
      <DealOfDay />
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
