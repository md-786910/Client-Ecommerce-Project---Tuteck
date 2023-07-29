import React from "react";
import HomeSlider from "../components/Home/HomeSlider";
import DealOfDay from "../components/Home/DealOfDay";
import ProductByCategory from "../components/Product/categortProduct/ProductListingByCategory";
import ProductNew from "../components/Product/ProductListing/ProductNew";
import ProductAdd from "../components/Product/ProductListing/ProductAdd";

function HomePage() {
  return (
    <>
      <HomeSlider />
      <ProductByCategory />
      <ProductNew />

      <ProductAdd title="Tshirt,shirt,jeans" name="Mens Wear" />
      <ProductAdd title="Women cloth" name="Womens Wear" />

      
     
      {/* <Model />
      <TopSellingProduct /> */}
      <DealOfDay />
    </>
  );
}

export default HomePage;
