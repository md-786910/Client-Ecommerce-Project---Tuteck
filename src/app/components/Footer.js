import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div
          class="cta bg-image bg-dark pt-4 pb-5 mb-0"
          style={{
            backgroundImage: "url(assets/images/demos/demo-4/bg-5.jpg)",
          }}
        >
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-10 col-md-8 col-lg-6">
                <div class="cta-heading text-center">
                  <h3 class="cta-title1 text-white">Get The Latest Deals</h3>
                  <p class="cta-desc text-white">
                    and receive
                    <span class="font-weight-normal fs-5"> $20 coupon</span> for
                    first shopping
                  </p>
                </div>

                <form action="#">
                  <div class="input-group input-group-round">
                    <input
                      type="email"
                      class="form-control form-control-white"
                      placeholder="Enter your Email Address"
                      aria-label="Email Adress"
                      required
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit">
                        <span>Subscribe</span>
                        <i class="icon-long-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="widget widget-about">
                  <h4 className="widget-title">about molla</h4>
                  <p>
                    Praesent dapibus, neque id cursus ucibus, tortor neque
                    egestas augue, eu vulputate magna eros eu erat.{" "}
                  </p>

                  <div className="social-icons">
                    <a
                      href="#"
                      className="social-icon"
                      title="Facebook"
                      target="_blank"
                    >
                      <i className="icon-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon"
                      title="Twitter"
                      target="_blank"
                    >
                      <i className="icon-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon"
                      title="Instagram"
                      target="_blank"
                    >
                      <i className="icon-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon"
                      title="Youtube"
                      target="_blank"
                    >
                      <i className="icon-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="widget">
                  <h4 className="widget-title">Useful Links</h4>

                  <ul className="widget-list">
                    <li>
                      <a href="about.html">About Molla</a>
                    </li>
                    <li>
                      <a href="#">How to shop on Molla</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                    <li>
                      <a href="login.html">Log in</a>
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
                      <a href="#">Sign In</a>
                    </li>
                    <li>
                      <a href="cart.html">View Cart</a>
                    </li>
                    <li>
                      <a href="#">My Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Track My Order</a>
                    </li>
                    <li>
                      <a href="#">Help</a>
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
