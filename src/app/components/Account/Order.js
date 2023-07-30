import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { showError } from "../../../utils/errorHandling";
import {
  useDeleteOrderByIdMutation,
  useGetAllOrdersQuery,
} from "../../settings/services/order.service";
import Loader from "../../../utils/Loader";
import { formatDate } from "../utils/formateDate";
import { paymentHandler } from "../Checkout/paymentApi";

function Order() {
  // rtq query
  const [deleteOrderById, { isLoading: isDeleting }] =
    useDeleteOrderByIdMutation();
  const { data, isLoading, isSuccess, isError, error } = useGetAllOrdersQuery();

  console.log(data);
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
            <Loader loader={isDeleting} />
            {data?.orders?.length !== 0 && isSuccess ? (
              <div className="page-content">
                <div className="container">
                  <table className="table table-wishlist table-mobile">
                    <thead>
                      <tr>
                        <th>Odrer Id</th>
                        <th>Total Price</th>
                        <th>Total Qty</th>
                        <th>Status</th>
                        <th>Order On</th>
                      </tr>
                    </thead>

                    <tbody>
                      {data?.orders?.map((prod) => {
                        return (
                          <tr>
                            <td className="product-col">
                              <div className="product">
                                <h3 className="product-title">
                                  <Link to={`/accounts/order/${prod?.orderId}`}>
                                    #{prod?.orderId}
                                  </Link>
                                </h3>
                              </div>
                            </td>
                            <td className="price-col">${prod?.totalPrice}</td>
                            <td className="stock-col">
                              <span className="in-stock">{prod?.totalQty}</span>
                            </td>
                            <td className="stock-col">
                              <span className="out-of-stock">
                                {prod?.status}
                              </span>
                            </td>
                            <td className="action-col">
                              <button
                                className="btn btn-success"
                                onClick={() => paymentHandler(prod?.orderId)}
                                disabled={
                                  prod?.status === "PENDING" ? false : true
                                }
                              >
                                {prod?.status === "PENDING"
                                  ? "Pay Now"
                                  : formatDate(prod?.createdAt)}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div>
                <p>No order has been made yet.</p>
                <Link to="/shopping" class="btn btn-outline-primary-2">
                  <span>GO SHOP</span>
                  <i class="icon-long-arrow-right"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
