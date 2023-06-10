import React from "react";
import { Link } from "react-router-dom";

function CartHeaderModel() {
  return (
    <>
      <div className="dropdown-menu dropdown-menu-right">
        <div className="dropdown-cart-products">
          <div className="product">
            <div className="product-cart-details">
              <h4 className="product-title">
                <a href={`/product/${123343}`}>
                  Beige knitted elastic runner shoes
                </a>
              </h4>

              <span className="cart-product-info">
                <span className="cart-product-qty">1</span>x $84.00
              </span>
            </div>

            <figure className="product-image-container">
              <Link to={`/product/${123343}`} className="product-image">
                <img
                  src="/assets/images/products/cart/product-1.jpg"
                  alt="product"
                />
              </Link>
            </figure>
            <a href="#" className="btn-remove" title="Remove Product">
              <i className="icon-close"></i>
            </a>
          </div>

          <div className="product">
            <div className="product-cart-details">
              <h4 className="product-title">
                <Link to={`/product/${123343}`}>
                  Blue utility pinafore denim dress
                </Link>
              </h4>

              <span className="cart-product-info">
                <span className="cart-product-qty">1</span>x $76.00
              </span>
            </div>

            <figure className="product-image-container">
              <a href={`/product/${123343}`} className="product-image">
                <img
                  src="/assets/images/products/cart/product-2.jpg"
                  alt="product"
                />
              </a>
            </figure>
            <a href="#" className="btn-remove" title="Remove Product">
              <i className="icon-close"></i>
            </a>
          </div>
        </div>

        <div className="dropdown-cart-total">
          <span>Total</span>

          <span className="cart-total-price">$160.00</span>
        </div>

        <div className="dropdown-cart-action">
          <Link to="/cart" className="btn btn-primary">
            View Cart
          </Link>
          <Link to="/checkout" className="btn btn-outline-primary-2">
            <span>Checkout</span>
            <i className="icon-long-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CartHeaderModel;
