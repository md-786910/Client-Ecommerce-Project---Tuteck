import React from "react";
import {
  useDeleteCartByIdMutation,
  useGetAllCartQuery,
} from "../../settings/services/cart.service";
import { useCreateOrderMutation } from "../../settings/services/order.service.js";
import { useEffect } from "react";
import { showError, showSuccess } from "../../../utils/errorHandling";
import Loader from "../../../utils/Loader";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BtnLoader from "../../../utils/BtnLoader";

function Cart() {
  const navigate = useNavigate();
  // const[qty,setQty] = useState()
  const [total, setTotal] = useState(0);

  // RTQ QUERY
  const { data, isLoading, isSuccess, isError, error } = useGetAllCartQuery();

  // delete
  const [
    deleteCartById,
    {
      isLoading: deleteLoading,
      isSuccess: deleteSuccess,
      isError: isdeleteError,
      error: deleteError,
    },
  ] = useDeleteCartByIdMutation();

  const [
    createOrder,
    {
      data: orderData,
      isLoading: orderLoading,
      isSuccess: orderSuccess,
      isError: isorderError,
      error: orderError,
    },
  ] = useCreateOrderMutation();

  // handle change qty
  const handleChangeQty = (qty) => {
    console.log(qty);
  };

  // create order
  const handleCreateOrder = () => {
    if (isSuccess) {
      createOrder({
        order: data?.cart,
      });
    }
  };

  if (isError) {
    showError(error?.data?.message);
  }
  if (isdeleteError) {
    showError(deleteError?.data?.message);
  }
  if (isorderError) {
    showError(orderError?.data?.message);
  }

  useEffect(() => {
    if (deleteSuccess) {
      showSuccess("Successfully deleted product", "");
    }
    if (orderSuccess) {
      showSuccess("Order created successfully", "");
      navigate(`/checkout?orderId=${orderData?.order?.orderId}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteSuccess, orderSuccess]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isSuccess) {
      const totalPrice = data?.cart?.reduce((acc, item) => {
        return acc + item.price * item.qty;
      }, 0);

      setTotal(totalPrice);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <>
      <main class="main">
        <div
          class="page-header text-center"
          style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
        >
          <div class="container">
            <h1 class="page-title">
              Shopping Cart<span>Shop</span>
            </h1>
          </div>
        </div>
        <nav aria-label="breadcrumb" class="breadcrumb-nav">
          <div class="container">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/">Home</a>
              </li>

              <li class="breadcrumb-item active" aria-current="page">
                Shopping Cart
              </li>
            </ol>
          </div>
        </nav>

        <Loader loader={isLoading} />
        <Loader loader={deleteLoading} />

        {data?.cart?.length > 0 && isSuccess && (
          <div class="page-content">
            <div class="cart">
              <div class="container">
                <div class="row">
                  <div class="col-lg-9">
                    <table class="table table-cart table-mobile">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody>
                        {data?.cart?.map((prod) => {
                          return (
                            <tr>
                              <td class="product-col">
                                <div class="product">
                                  <figure class="product-media">
                                    <img src={prod?.image} alt="Product" />
                                  </figure>

                                  <h3 class="product-title">
                                    <Link to={`/product/${prod?.productId}`}>
                                      {prod?.name.slice(0, 37)}...
                                    </Link>
                                  </h3>
                                </div>
                              </td>
                              <td class="price-col">${prod?.price}</td>
                              <td class="quantity-col">
                                <div class="cart-product-quantity">
                                  <input
                                    type="number"
                                    class="form-control"
                                    value={prod?.qty}
                                    onChange={(e) =>
                                      handleChangeQty(e.target.value)
                                    }
                                    min="1"
                                    max="5"
                                    step="1"
                                    data-decimals="0"
                                    required
                                  />
                                </div>
                              </td>
                              <td class="total-col">${prod?.price}</td>
                              <td class="remove-col">
                                <button
                                  class="btn-remove"
                                  onClick={() => deleteCartById(prod?.id)}
                                >
                                  <i class="icon-close"></i>
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>

                    <div class="cart-bottom">
                      <div class="cart-discount">
                        <form action="#">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              required
                              placeholder="coupon code"
                            />
                            <div class="input-group-append">
                              <button
                                class="btn btn-outline-primary-2"
                                type="submit"
                              >
                                <i class="icon-long-arrow-right"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>

                      <a href="#" class="btn btn-outline-dark-2">
                        <span>UPDATE CART</span>
                        <i class="icon-refresh"></i>
                      </a>
                    </div>
                  </div>
                  <aside class="col-lg-3">
                    <div class="summary summary-cart">
                      <h3 class="summary-title">Cart Total</h3>

                      <table class="table table-summary">
                        <tbody>
                          <tr class="summary-subtotal">
                            <td>Subtotal:</td>
                            <td>${total}</td>
                          </tr>
                          <tr class="summary-shipping">
                            <td>Shipping:</td>
                            <td>&nbsp;</td>
                          </tr>

                          <tr class="summary-shipping-row">
                            <td>
                              <div class="custom-control1">
                                <label
                                  class="custom-control-label"
                                  for="free-shipping"
                                >
                                  Free Shipping
                                </label>
                              </div>
                            </td>
                            <td>$0.00</td>
                          </tr>

                          <tr class="summary-shipping-row">
                            <td>
                              <div class="custom-control1">
                                <label
                                  class="custom-control-label"
                                  for="standart-shipping"
                                >
                                  Standart:
                                </label>
                              </div>
                            </td>
                            <td>$0.00</td>
                          </tr>

                          <tr class="summary-shipping-row">
                            <td>
                              <div class="custom-control1">
                                <label
                                  class="custom-control-label"
                                  for="express-shipping"
                                >
                                  GST:
                                </label>
                              </div>
                            </td>
                            <td>5%</td>
                          </tr>

                          <tr class="summary-total">
                            <td>Total:</td>
                            <td>${total + (total * 5) / 100}</td>
                          </tr>
                        </tbody>
                      </table>

                      <button
                        className="btn btn-outline-primary-2 btn-order btn-block"
                        onClick={() => handleCreateOrder()}
                        disabled={orderLoading}
                        style={{
                          backgroundColor: orderLoading ? "black" : "revert",
                        }}
                      >
                        {orderLoading ? <BtnLoader /> : "PROCEED TO CHECKOUT"}
                      </button>
                    </div>

                    <a
                      href="/shopping"
                      class="btn btn-outline-dark-2 btn-block mb-3"
                    >
                      <span>CONTINUE SHOPPING</span>
                      <i class="icon-refresh"></i>
                    </a>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Cart;
