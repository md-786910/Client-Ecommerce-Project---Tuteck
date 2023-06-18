import React from "react";
import HomeSlider from "../components/Home/HomeSlider";
import Model from "../components/Model";
import DealOfDay from "../components/Home/DealOfDay";
import TopSellingProduct from "../components/Product/ProductListing/TopSellingProduct";
import ProductByCategory from "../components/Product/categortProduct/ProductListingByCategory";
import ProductNew from "../components/Product/ProductListing/ProductNew";
import Loader from "../../utils/Loader";
import NewShopDeals from "../components/Home/NewShopDeals";
import ProductAdd from "../components/Product/ProductListing/ProductAdd";

function HomePage() {
  return (
    <>
      <HomeSlider />
      <ProductByCategory />
      <ProductByCategory />
      <ProductNew />

      <ProductAdd title="mens wear " name="mens wear" />
      <ProductAdd title="womens wear" name="womens wear" />
      <ProductAdd title="fashion" name="fashion" />
      <ProductAdd title="girl wears" name="girls fashion" />
      <ProductAdd title="electronics" name="electronics" />

      {/*
     
      <Model />
      <TopSellingProduct /> */}
      <DealOfDay />
    </>
  );
}

export default HomePage;
