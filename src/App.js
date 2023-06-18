import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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
import AccountPage from "./app/pages/AccountPage";
import CategoryProductAll from "./app/components/Product/categortProduct/CategoryProductView";
import { useState } from "react";

function App() {
  const [render, setRender] = useState(Math.random());
  const renderHeader = () => {
    setRender(Math.random());
  };

  // use Location
  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  };

  return (
    <div className="App-container">
      <Router>
        <Header renderHeader={renderHeader} />
        <ScrollTop />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage render={render} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WhislistPage />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route
            path="/productCategory/:category"
            element={<CategoryProductAll />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/accounts/*" element={<AccountPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
