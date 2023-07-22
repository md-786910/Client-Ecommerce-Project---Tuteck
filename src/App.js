import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import { Protected } from "./app/components/utils/Protected";
import { useCallback } from "react";
import { isAutheticated } from "./app/components/utils/authHelper";
import AuthModel from "./app/components/Auth/AuthModel";
import ProductAdd from "./app/components/Product/ProductListing/ProductAdd";

function App() {
  const { token } = isAutheticated();
  const navigate = useNavigate();

  const HeaderLayout = useCallback(() => {
    if (token && window.location.pathname === "/auth") {
      navigate("/");
    } else if (!token && window.location.pathname === "/") {
      navigate("/auth");
    } else if (token && window.location.pathname === "/forgotPassword") {
      navigate("/branch");
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // use Location
  const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  };

  useEffect(() => {
    HeaderLayout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App-container">
      <Header />
      <ScrollTop />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthModel />} />

        <Route exact path="/" element={<Protected />}>
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>

        <Route path="/wishlist" element={<WhislistPage />} />
        <Route
          path="/shopping"
          element={<ProductAdd title="mens cloth + womens cloth" name="" />}
        />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route
          path="/productCategory/:category"
          element={<CategoryProductAll />}
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route element={<Protected />}>
          <Route path="/accounts/*" element={<AccountPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
