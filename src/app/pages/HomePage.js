import React from "react";
import HomeSlider from "../components/Home/HomeSlider";
import Model from "../components/Model";
import DealOfDay from "../components/Home/DealOfDay";
import TopSellingProduct from "../components/Product/ProductListing/TopSellingProduct";
import ProductByCategory from "../components/Product/categortProduct/ProductListingByCategory";
import ProductNew from "../components/Product/ProductListing/ProductNew";

function HomePage() {
  return (
    <>
      <HomeSlider />
      <ProductByCategory />
      <ProductByCategory />
      <ProductNew />
      <ProductNew />
      <TopSellingProduct />
      <DealOfDay />
      <Model />
    </>
  );
}

export default HomePage;
