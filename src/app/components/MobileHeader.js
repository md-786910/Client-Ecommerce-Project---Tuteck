import React from "react";
import { Link } from "react-router-dom";
import { handleLogout } from "./utils/authHelper";

function MobileHeader() {
  return (
    <>
      <div class="mobile-menu-overlay"></div>

      <div class="mobile-menu-container">
        <div class="mobile-menu-wrapper">
          <span class="mobile-menu-close">
            <i class="icon-close"></i>
          </span>

          <form action="#" method="get" class="mobile-search">
            <label for="mobile-search" class="sr-only">
              Search
            </label>
            <input
              type="search"
              class="form-control"
              name="mobile-search"
              id="mobile-search"
              placeholder="Search in..."
              required
            />
            <button class="btn btn-primary" type="submit">
              <i class="icon-search"></i>
            </button>
          </form>

          <nav class="mobile-nav">
            <ul class="mobile-menu">
              <li class="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shopping">Shop</Link>
              </li>
              <li>
                <a href="=#1" class="sf-with-ul">
                  Product
                </a>
                <ul>
                  <li>
                    <Link to="/productCategory/mens">Mens</Link>
                  </li>
                  <li>
                    <Link to="/productCategory/womens">Womens</Link>
                  </li>
                </ul>
              </li>
              <li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </li>

              <li>
                <Link to="/accounts">Accounts</Link>
              </li>
              <li>
                <a href="#1" onClick={() => handleLogout()}>
                  Logout
                </a>
              </li>
            </ul>
          </nav>

          <div class="social-icons">
            <a href="#" class="social-icon" target="_blank" title="Facebook">
              <i class="icon-facebook-f"></i>
            </a>
            <a href="#" class="social-icon" target="_blank" title="Twitter">
              <i class="icon-twitter"></i>
            </a>
            <a href="#" class="social-icon" target="_blank" title="Instagram">
              <i class="icon-instagram"></i>
            </a>
            <a href="#" class="social-icon" target="_blank" title="Youtube">
              <i class="icon-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
