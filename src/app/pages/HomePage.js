import React from "react";
import HomeSlider from "../components/Home/HomeSlider";
import Model from "../components/Model";
import DealOfDay from "../components/Home/DealOfDay";
import TopSellingProduct from "../components/Product/ProductListing/TopSellingProduct";

function HomePage() {
  return (
    <>
      <HomeSlider />

      <TopSellingProduct />

      <DealOfDay />

      <Model />
    </>
  );
}

export default HomePage;
