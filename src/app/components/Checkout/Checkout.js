import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  useGetAllOrdersQuery,
  useGetOrderByIdQuery,
} from "../../settings/services/order.service";
import { showError, showSuccess } from "../../../utils/errorHandling";
import Loader from "../../../utils/Loader";
import { paymentHandler } from "./paymentApi";
import { useState } from "react";
import BtnLoader from "../../../utils/BtnLoader";
import {
  useCreateAddressMutation,
  useGetAddressQuery,
} from "../../settings/services/address.service";
import { useEffect } from "react";

function Checkout() {
  const location = useLocation();
  const orderId = location.search.slice(9);

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
    streetAddress: "",
  });

  const { data, isSuccess, isLoading, isError, error } =
    useGetOrderByIdQuery(orderId);

  // address

  const {
    data: addressData,
    isSuccess: addressSuccess,
    isError: getAddressError,
  } = useGetAddressQuery();

  const [
    createAddress,
    {
      isSuccess: isAddressSuccess,
      isLoading: isAddressing,
      isError: isAddressError,
      error: addressError,
    },
  ] = useCreateAddressMutation();

  // handle change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddress({ ...address, [name]: value });
  };

  // hanlde address
  const handleBillingAdress = () => {
    const {
      firstName,
      lastName,
      email,
      phone,
      city,
      state,
      country,
      streetAddress,
      postalCode,
    } = address;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !city ||
      !state ||
      !country ||
      !streetAddress ||
      !postalCode
    ) {
      showError("All fields are required");
    } else {
      // mutate
      createAddress(address);
    }
  };

  if (isAddressError) {
    showError(error?.data?.message || error?.message);
  }
  if (isError) {
    showError(addressError?.data?.message || addressError?.message);
  }
  // if (getAddressError) {
  //   showError("Address error");
  // }

  useEffect(() => {
    if (isAddressSuccess) {
      showSuccess("successfully updated! ");
    }
  }, [isAddressSuccess]);
  useEffect(() => {
    if (addressSuccess) {
      setAddress(addressData?.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressSuccess]);

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
                            name="firstName"
                            value={address.firstName}
                            onChange={(e) => handleChange(e)}
                            required
                          />
                        </div>

                        <div className="col-sm-6">
                          <label>Last Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={address.lastName}
                            onChange={(e) => handleChange(e)}
                            required
                          />
                        </div>
                      </div>

                      <label>Country *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="country"
                        value={address.country}
                        onChange={(e) => handleChange(e)}
                        required
                      />

                      <label>Street address *</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="House number and Street name"
                        name="streetAddress"
                        value={address.streetAddress}
                        onChange={(e) => handleChange(e)}
                        required
                      />

                      <div className="row">
                        <div className="col-sm-6">
                          <label>Town / City *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            value={address.city}
                            onChange={(e) => handleChange(e)}
                            required
                          />
                        </div>

                        <div className="col-sm-6">
                          <label>State / County *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="state"
                            value={address.state}
                            onChange={(e) => handleChange(e)}
                            required
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <label>Postcode / ZIP *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="postalCode"
                            value={address.postalCode}
                            onChange={(e) => handleChange(e)}
                            required
                          />
                        </div>

                        <div className="col-sm-6">
                          <label>Phone *</label>
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={address.phone}
                            onChange={(e) => handleChange(e)}
                            required
                          />
                        </div>
                      </div>

                      <label>Email address *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={address.email}
                        onChange={(e) => handleChange(e)}
                        required
                      />

                      {data?.order?.status !== "PENDING" ? (
                        ""
                      ) : (
                        <div className=" updateAddress">
                          <button
                            className="btn btn-success"
                            disabled={isAddressing}
                            onClick={() => handleBillingAdress()}
                          >
                            {isAddressing ? <BtnLoader /> : "Update Address"}
                          </button>
                        </div>
                      )}
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
                          onClick={() => {
                            if (address.email && address.phone) {
                              paymentHandler(orderId);
                            } else {
                              showError(
                                "Please fill the address before checkout!"
                              );
                            }
                          }}
                          disabled={
                            data?.order?.status === "PAID" ? true : false
                          }
                        >
                          <span className="btn-text">Place Order</span>
                          {data?.order?.status !== "PENDING" ? (
                            <span className="btn-hover-text">PAID</span>
                          ) : (
                            <span className="btn-hover-text">
                              Proceed to Checkout
                            </span>
                          )}
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
