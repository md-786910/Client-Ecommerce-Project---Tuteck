import React from "react";
import { Link, useParams } from "react-router-dom";

import { useGetOrderByIdQuery } from "../../settings/services/order.service";
import { showError } from "../../../utils/errorHandling";
import Loader from "../../../utils/Loader";
import Sidebar from "./Sidebar";
import { formatDate } from "../utils/formateDate";
import { paymentHandler } from "../Checkout/paymentApi";

function OrderProductListing() {
  const { orderId } = useParams();

  // RTQ QUERY
  const { data, isLoading, isSuccess, isError, error } =
    useGetOrderByIdQuery(orderId);

  if (isError) {
    showError(error?.data?.message);
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <Sidebar />
          <div
            className="col-lg-10 mx-auto col-md-9 "
            style={{ overflowY: "auto", height: "70vh" }}
          >
            <Loader loader={isLoading} />

            {isSuccess && (
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
                            {data?.order?.userOrder?.map((prod) => {
                              return (
                                <tr>
                                  <td class="product-col">
                                    <div class="product">
                                      <figure class="product-media">
                                        <img src={prod?.image} alt="Product" />
                                      </figure>

                                      <h3 class="product-title">
                                        <Link
                                          to={`/product/${prod?.productId}`}
                                        >
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
                                        min="1"
                                        max="5"
                                        step="1"
                                        data-decimals="0"
                                        required
                                      />
                                    </div>
                                  </td>
                                  <td class="total-col">
                                    ${prod?.price * prod?.qty}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      <aside class="col-lg-3">
                        <div class="summary summary-cart">
                          <h3 class="summary-title">Cart Total</h3>

                          <table class="table table-summary">
                            <tbody>
                              <tr class="summary-subtotal">
                                <td>Subtotal:</td>
                                <td>${data?.order?.totalPrice}</td>
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
                                <td>${data?.order?.priceGST}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </aside>
                    </div>
                  </div>

                  <Link to={`/confirm?orderId=${orderId}`} k>
                    <div className="btn w-100">
                      <button className="btn btn-success btn-block">
                        Track Order
                      </button>
                    </div>
                  </Link>

                  <div class="card card-dashboard">
                    <div class="card-body">
                      <h3 class="card-title">Billing Address</h3>
                      <p>
                        {data?.order?.address?.firstName +
                          " " +
                          data?.order?.address?.lastName}
                        <br />
                        {data?.order?.address?.email}
                        <br />
                        {data?.order?.address?.country} &nbsp;
                        {data?.order?.address?.state} &nbsp;
                        {data?.order?.address?.city} &nbsp;
                        {data?.order?.address?.postalCode} &nbsp;
                        {data?.order?.address?.streetAddress} &nbsp;
                        <br />
                        {data?.order?.phone}
                        <br />
                        +91 {data?.order?.contact}
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div class="card card-dashboard">
                      <div class="card-body">
                        <h3 class="card-title">Order Information</h3>

                        <div className="mt-3 d-flex justify-content-between align-items-center">
                          <h6>Ordered Create At</h6>
                          <h6>{formatDate(data?.order?.createdAt)}</h6>
                        </div>
                        <div className="mt-1 d-flex justify-content-between align-items-center">
                          <h6>Your Order Id</h6>
                          <h6>{orderId}</h6>
                        </div>
                        {data?.order?.status === "PAID" && (
                          <>
                            <div className="mt-1 d-flex justify-content-between align-items-center">
                              <h6>razorpay_order_id</h6>
                              <h6>{data?.order?.razorpay_order_id}</h6>
                            </div>
                            <div className="mt-1 d-flex justify-content-between align-items-center">
                              <h6>razorpay_payment_id</h6>
                              <h6>{data?.order?.razorpay_payment_id}</h6>
                            </div>
                            <div className="mt-1 d-flex justify-content-between align-items-center">
                              <h6>order_id</h6>
                              <h6>{data?.order?.order_id}</h6>
                            </div>
                            <div className="mt-1 d-flex justify-content-between align-items-center">
                              <h6>upi_transaction_id</h6>
                              <h6>{data?.order?.upi_transaction_id}</h6>
                            </div>
                            <div className="mt-1 d-flex justify-content-between align-items-center">
                              <h6>method</h6>
                              <h6>{data?.order?.method}</h6>
                            </div>
                          </>
                        )}
                        {data?.order?.status === "SHIPPING" && (
                          <div className="mt-1 d-flex justify-content-between align-items-center">
                            <h6>Shipping Id</h6>
                            <h6>{data?.order?.razorpay_payment_id}</h6>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div class="card card-dashboard">
                      <div class="card-body">
                        <h3 class="card-title">Order Status</h3>

                        <button
                          className={
                            data?.order?.status === "PENDING"
                              ? "btn btn-danger"
                              : "btn btn-success"
                          }
                        >
                          {data?.order?.status}
                        </button>

                        {data?.order?.status !== "PENDING" ? (
                          ""
                        ) : (
                          <button
                            className={"btn btn-success"}
                            onClick={() => paymentHandler(orderId)}
                          >
                            Pay Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderProductListing;
