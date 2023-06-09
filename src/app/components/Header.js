import React from "react";
import MobileHeader from "./MobileHeader";
import LoginRegister from "./Auth/loginRegister";
import CartHeaderModel from "./Cart/CartHeaderModel";

function Header() {
  return (
    <>
      <header className="header header-2 header-intro-clearance">
        <div className="header-middle">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
              </button>

              <a href="/" className="logo">
                <img
                  src="/assets/images/demos/demo-2/logo.png"
                  alt="Molla Logo"
                  width="105"
                  height="25"
                />
              </a>
            </div>

            <div className="header-center">
              <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                <a href="#" className="search-toggle" role="button">
                  <i className="icon-search"></i>
                </a>
                <form action="#" method="get">
                  <div className="header-search-wrapper search-wrapper-wide">
                    <label for="q" className="sr-only">
                      Search
                    </label>
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="q"
                      placeholder="Search product ..."
                      required
                    />
                    <button className="btn btn-primary" type="submit">
                      <i className="icon-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="header-right">
              <div className="account">
                <a href="dashboard.html" title="My account">
                  <div className="icon">
                    <i className="icon-user"></i>
                  </div>
                  <p>Account</p>
                </a>
              </div>

              <div className="wishlist">
                <a href="/wishlist" title="Wishlist">
                  <div className="icon">
                    <i className="icon-heart-o"></i>
                    <span className="wishlist-count badge">3</span>
                  </div>
                  <p>Wishlist</p>
                </a>
              </div>

              {/* CART */}
              <div className="dropdown cart-dropdown">
                <a
                  href="#1"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                >
                  <div className="icon">
                    <i className="icon-shopping-cart"></i>
                    <span className="cart-count">2</span>
                  </div>
                  <p>Cart</p>
                </a>

                <CartHeaderModel />
              </div>
              {/* CART END */}

              {/*Login */}
              <LoginRegister />
              <div className="wishlist">
                <a href="#signin-modal" data-toggle="modal" title="Wishlist">
                  <div className="icon">
                    <i className="icon-heart-o1 la-map-signs"></i>
                  </div>
                  <p>Register</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom sticky-header">
          <div className="container">
            <div className="header-center">
              <nav className="main-nav">
                <ul className="menu sf-arrows">
                  <li className="megamenu-container active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/shopping">Shop</a>
                  </li>
                  <li>
                    <a href="product.html" className="sf-with-ul">
                      Product
                    </a>

                    <div className="megamenu megamenu-sm">
                      <div className="row no-gutters">
                        <div className="col-md-6">
                          <div className="menu-col">
                            <div className="menu-title">Product Category</div>
                            <ul>
                              <li>
                                <a href="product.html">Mens</a>
                              </li>
                              <li>
                                <a href="product-centered.html">Womens</a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="banner banner-overlay">
                            <a href="category.html">
                              <img
                                src="assets/images/menu/banner-2.jpg"
                                alt="Banner"
                              />

                              <div className="banner-content banner-content-bottom">
                                <div className="banner-title text-white">
                                  New Trends
                                  <br />
                                  <span>
                                    <strong>spring 2034</strong>
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-right">
              <i className="la la-lightbulb-o"></i>
              <p>
                Clearance<span className="highlight">&nbsp;Up to 30% Off</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/*mobile */}

      <MobileHeader />
    </>
  );
}

export default Header;
