import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetAllCartQuery } from "../../settings/services/cart.service";
import { showError } from "../../../utils/errorHandling";

function CartHeaderModel(props) {
  const [total, setTotal] = useState(0);

  // RTQ QUERY
  const { data, isSuccess, isError, error } = useGetAllCartQuery();

  if (isError) {
    showError(error?.data?.message || "something went wrong", "");
  }

  useEffect(() => {
    if (isSuccess) {
      const totalPrice = data?.cart?.reduce((acc, item) => {
        return acc + item.price * item.qty;
      }, 0);

      setTotal(totalPrice);
    }
    // eslint-disable-next-line
  });

  return (
    <>
      <div className="dropdown-menu dropdown-menu-right">
        <div
          className="dropdown-cart-products"
          style={{
            overflowY: "scroll",
            height: "50vh",
          }}
        >
          {isSuccess &&
            data?.cart?.map((item) => {
              return (
                <div className="product">
                  <div className="product-cart-details">
                    <h4 className="product-title">
                      <Link to={`/product/${item?.productId}`}>
                        {item?.name}
                      </Link>
                    </h4>

                    <span className="cart-product-info">
                      <span className="cart-product-qty">{item?.qty}</span>x ${" "}
                      {item?.price}
                    </span>
                  </div>

                  <figure className="product-image-container">
                    <Link
                      to={`/product/${item?.productId}`}
                      className="product-image"
                    >
                      <img src={item?.image} alt="product" />
                    </Link>
                  </figure>
                </div>
              );
            })}
        </div>

        <div className="dropdown-cart-total">
          <span>Total</span>

          <span className="cart-total-price">${total} </span>
        </div>

        <div className="dropdown-cart-action">
          <Link to="/cart" className="btn btn-primary">
            View Cart
          </Link>
          {/*     <Link to="/checkout" className="btn btn-outline-primary-2">
            <span>Checkout</span>
            <i className="icon-long-arrow-right"></i>
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default CartHeaderModel;
