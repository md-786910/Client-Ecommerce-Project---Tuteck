import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetOrderByIdQuery } from "../../settings/services/order.service";
import { showError } from "../../../utils/errorHandling";
import Loader from "../../../utils/Loader";
import "./account.css";

function OrderSuccess() {
  const location = useLocation();
  const orderId = location.search.slice(9);

  const { data, isSuccess, isLoading, isError, error } =
    useGetOrderByIdQuery(orderId);
  if (isError) {
    showError(error?.data?.message || error?.message);
  }

  return (
    <>
      <main className="main">
        <div
          className="page-header text-center"
          style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
        >
          <div className="container">
            <h1 className="page-title">Order Success</h1>
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
                      <div class=" mt-4 mb-4">
                        <div className="row d-flex cart align-items-center justify-content-center">
                          <div className="col-md-10">
                            <div className="card">
                              <div className="d-flex justify-content-center border-bottom">
                                <div className="p-3">
                                  <div className="progresses">
                                    <div className="steps">
                                      {" "}
                                      <span>
                                        <i className="fa fa-check"></i>
                                      </span>{" "}
                                    </div>{" "}
                                    <span className="line"></span>
                                    <div className="steps">
                                      {" "}
                                      <span>
                                        <i className="fa fa-check"></i>
                                      </span>{" "}
                                    </div>{" "}
                                    <span className="line"></span>
                                    <div className="steps">
                                      {" "}
                                      <span className="font-weight-bold">
                                        3
                                      </span>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className=" border-right p-5">
                                <div className="text-center order-details">
                                  <div className="d-flex justify-content-center mb-5 flex-column align-items-center">
                                    {" "}
                                    <span className="check1">
                                      <i className="fa fa-check"></i>
                                    </span>{" "}
                                    <span className="font-weight-bold">
                                      Order Confirmed
                                    </span>{" "}
                                    <small className="mt-2">
                                      Your illustraion will go to you soon
                                    </small>{" "}
                                  </div>{" "}
                                  <Link to={`/accounts/order/${orderId}`}>
                                    <button className="btn btn-danger btn-block order-button">
                                      Go to your Order
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

                        <button className="btn btn-success  btn-block">
                          <span className="btn-text1">PAID</span>
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

export default OrderSuccess;
