import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import ScrollTop from "./app/components/ScrollTop";
import HomePage from "./app/pages/HomePage";
import CartPage from "./app/pages/CartPage";
import CheckoutPage from "./app/pages/CheckoutPage";
import WhislistPage from "./app/pages/WhislistPage";
import ErrorPage from "./app/components/404";
import AboutPage from "./app/pages/AboutPage";
import ContactPage from "./app/pages/ContactPage";
import SingleProduct from "./app/components/Product/SingleProduct";

function App() {
  return (
    <div className="App-container">
      <Header />
      <ScrollTop />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WhislistPage />} />
          <Route path="/account" element={<WhislistPage />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
