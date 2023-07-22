import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetOrderByIdQuery } from "../../settings/services/order.service";
import { showError } from "../../../utils/errorHandling";
import Loader from "../../../utils/Loader";
import { paymentHandler } from "./paymentApi";

function Checkout() {
  const location = useLocation();
  const orderId = location.search.slice(9);

  const { data, isSuccess, isLoading, isError, error } =
    useGetOrderByIdQuery(orderId);

  if (isError) {
    showError(error?.data?.message);
  }

  return (
    <>
      <main className="main">
        <div
          className="page-header text-center"
          style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
        >
          <div className="container">
            <h1 className="page-title">
              Checkout<span>Shop</span>
            </h1>
          </div>
        </div>
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                Checkout
              </li>
            </ol>
          </div>
        </nav>

        <Loader loader={isLoading} />

        <div className="page-content">
          {isSuccess && (
            <div className="checkout">
              <div className="container">
                <div>
                  <div className="row">
                    <div className="col-lg-9">
                      <h2 className="checkout-title">Billing Details</h2>
                      <div className="row">
                        <div className="col-sm-6">
                          <label>First Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            // required
                          />
                        </div>

                        <div className="col-sm-6">
                          <label>Last Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            // required
                          />
                        </div>
                      </div>

                      <label>Company Name (Optional)</label>
                      <input type="text" className="form-control" />

                      <label>Country *</label>
                      <input type="text" className="form-control" />

                      <label>Street address *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="House number and Street name"
                        // required
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Appartments, suite, unit etc ..."
                        // required
                      />

                      <div className="row">
                        <div className="col-sm-6">
                          <label>Town / City *</label>
                          <input
                            type="text"
                            className="form-control"
                            // required
                          />
                        </div>

                        <div className="col-sm-6">
                          <label>State / County *</label>
                          <input
                            type="text"
                            className="form-control"
                            // required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <label>Postcode / ZIP *</label>
                          <input
                            type="text"
                            className="form-control"
                            // required
                          />
                        </div>

                        <div className="col-sm-6">
                          <label>Phone *</label>
                          <input type="tel" className="form-control" />
                        </div>
                      </div>

                      <label>Email address *</label>
                      <input type="email" className="form-control" />
                    </div>
                    <aside className="col-lg-3">
                      <div className="summary">
                        <h3 className="summary-title">Your Order</h3>

                        <table className="table table-summary">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Total</th>
                            </tr>
                          </thead>

                          <tbody>
                            {data?.order?.userOrder?.map((prod) => {
                              return (
                                <tr>
                                  <td>
                                    <a href={`/product/${prod?.productId}`}>
                                      {prod?.name.slice(0, 38)}...
                                    </a>
                                  </td>
                                  <td>${prod?.price}</td>
                                </tr>
                              );
                            })}

                            <tr className="summary-subtotal">
                              <td>Subtotal:</td>
                              <td>${data?.order?.totalPrice}</td>
                            </tr>
                            <tr>
                              <td>Shipping:</td>
                              <td>Free shipping</td>
                            </tr>
                            <tr>
                              <td>GST:</td>
                              <td>5%</td>
                            </tr>
                            <tr className="summary-total">
                              <td>Total:</td>
                              <td>${data?.order?.priceGST}</td>
                            </tr>
                          </tbody>
                        </table>

                        <button
                          className="btn btn-outline-primary-2 btn-order btn-block"
                          onClick={() => paymentHandler(orderId)}
                        >
                          <span className="btn-text">Place Order</span>
                          <span className="btn-hover-text">
                            Proceed to Checkout
                          </span>
                        </button>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Checkout;
