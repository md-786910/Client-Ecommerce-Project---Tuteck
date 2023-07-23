import React from "react";
import CTA from "./CTA";
import PaymentCTA from "./PaymentCTA";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer footer-2">
        <PaymentCTA />
        <CTA />
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="widget widget-about">
                  <h4 className="widget-title">About Molla</h4>
                  <p>
                    Welcome to Molla, your ultimate destination for all things fashion! We are more
                    than just an eCommerce platform; we are a fashion-forward community where style
                    knows no boundaries. Get ready to explore a world of trendsetting
                    clothing and accessories for men, women, and kids that will elevate your fashion game to new heights.
                  </p>

                  <div className="social-icons">
                    <a
                      href="https://github.com/subhaDTECH"
                      className="social-icon"
                      title="Github"
                      target="_blank"
                    >
                      <i className="icon-github"></i>
                    </a>
                    <a
                      href=" https://github.com/md-786910/"
                      className="social-icon"
                      title="Github"
                      target="_blank"
                    >
                      <i className="icon-github"></i>
                    </a>
                    <a
                      href="https://github.com/Chirasree05/"
                      className="social-icon"
                      title="Github"
                      target="_blank"
                    >
                      <i className="icon-github"></i>
                    </a>
                    </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title">Useful Links</h4>

                  <ul className="widget-list">
                    <li>
                      <Link to="/about">About Molla</Link>
                    </li>
                    <li>
                      <Link to="/">How to shop on Molla</Link>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                      <a href="/auth">Log in</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title">Customer Service</h4>

                  <ul className="widget-list">
                    <li>
                      <a href="#">Payment Methods</a>
                    </li>
                    <li>
                      <a href="#">Money-back guarantee!</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#">Shipping</a>
                    </li>
                    <li>
                      <a href="#">Terms and conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title">My Account</h4>

                  <ul className="widget-list">
                    <li>
                      <Link to="/auth">Sign In</Link>
                    </li>
                    <li>
                      <Link to="/cart">View Cart</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">My Wishlist</Link>
                    </li>
                    <li>
                      <a href="#">Track My Order</a>
                    </li>
                    <li>
                      <a href="/contact">Help</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <figure className="footer-payments">
              <img
                src="assets/images/payments.png"
                alt="Payment methods"
                width="272"
                height="20"
              />
            </figure>
            <img
              src="assets/images/demos/demo-6/logo-footer.png"
              alt="Molla Logo"
              width="82"
              height="25"
            />
            <p className="footer-copyright">
              Copyright © 2019 Molla Store. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
