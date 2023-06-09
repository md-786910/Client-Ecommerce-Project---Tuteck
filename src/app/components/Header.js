import React, { useState } from "react";
import MobileHeader from "./MobileHeader";
import CartHeaderModel from "./Cart/CartHeaderModel";
import { Link } from "react-router-dom";
import AuthModel from "./Auth/AuthModel";
import { handleLogout, isAutheticated } from "./utils/authHelper";

function Header() {
  // for authentication
  const { token } = isAutheticated();

  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {/*Login */}
      <AuthModel show={show} handleClose={handleClose} />
      {/*Login End */}
      <header className="header header-2 header-intro-clearance">
        <div className="header-middle">
          <div className="container">
            <div className="header-left">
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
              </button>

              <Link to="/" className="logo">
                <img
                  src="/assets/images/demos/demo-2/logo.png"
                  alt="Molla Logo"
                  width="105"
                  height="25"
                />
              </Link>
            </div>

            <div className="header-center">
              <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                <Link to="#" className="search-toggle" role="button">
                  <i className="icon-search"></i>
                </Link>
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
              {token && (
                <>
                  <div className="account">
                    <Link to="/accounts" title="My account">
                      <div className="icon">
                        <i className="icon-user"></i>
                      </div>
                      <p>Account</p>
                    </Link>
                  </div>

                  <div className="wishlist">
                    <Link to="/wishlist" title="Wishlist">
                      <div className="icon">
                        <i className="icon-heart-o"></i>
                        <span className="wishlist-count badge">3</span>
                      </div>
                      <p>Wishlist</p>
                    </Link>
                  </div>

                  {/* CART */}
                  <div className="dropdown cart-dropdown">
                    <Link
                      to="#1"
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
                    </Link>

                    <CartHeaderModel />
                  </div>
                </>
              )}
              {/* CART END */}

              <div className="wishlist">
                {token ? (
                  <a href="#" onClick={() => handleLogout()} title="Wishlist">
                    <div className="icon">
                      <i class="fa-solid   fa-arrow-right-from-bracket"></i>
                    </div>
                    <p>Logout</p>
                  </a>
                ) : (
                  <Link to="#" onClick={() => handleOpen()} title="Wishlist">
                    <div className="icon">
                      <i class="fa-regular fa-user"></i>
                    </div>
                    <p>Login/Register</p>
                  </Link>
                )}
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
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shopping">Shop</Link>
                  </li>
                  <li>
                    <Link to="product.html" className="sf-with-ul">
                      Product
                    </Link>

                    <div className="megamenu megamenu-sm">
                      <div className="row no-gutters">
                        <div className="col-md-6">
                          <div className="menu-col">
                            <div className="menu-title">Product Category</div>
                            <ul>
                              <li>
                                <Link to="product.html">Mens</Link>
                              </li>
                              <li>
                                <Link to="product-centered.html">Womens</Link>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="banner banner-overlay">
                            <Link to="category.html">
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
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
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
