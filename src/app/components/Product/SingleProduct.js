import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductDetailByIdQuery } from "../../settings/services/productListing.service";
import { showError, showSuccess } from "../../../utils/errorHandling";
import { useState } from "react";
import Loader from "../../../utils/Loader";
import { useDispatch } from "react-redux";
import { setLocalStorage } from "../../settings/services/whislist/whislist.slice";
// import Description from "./productListingSingleView/Description";
// import Information from "./productListingSingleView/Information";
// import ShippingReturn from "./productListingSingleView/ShippingReturn";
// import Review from "./productListingSingleView/Review";
import { useAddToCartMutation } from "../../settings/services/cart.service";
import BtnLoader from "../../../utils/BtnLoader";

function SingleProduct() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [qty, setQty] = useState(1);

  const { data, isLoading, isError, error } =
    useGetProductDetailByIdQuery(productId);

  const [image, setImage] = useState(data?.images[0]);

  // RTQ QUERY
  const [
    creatingCart,
    {
      data: cartData,
      isLoading: isCreating,
      isSuccess,
      isError: isCartError,
      error: cartError,
    },
  ] = useAddToCartMutation();

  const handleImage = (img) => {
    setImage(img);
  };

  // state qty
  const addQuantity = (val) => {
    setQty(val);
  };

  const addToCart = (prod) => {
    const { name, images, small_description, pricing } = prod;
    const actPrice = pricing?.split("$").filter(Boolean);

    const data = {
      productId,
      name,
      image: images[0],
      description: "",
      information: "",
      price: parseInt(actPrice[0]) || 1200,
      qty: parseInt(qty),
    };
    creatingCart(data);
  };
  const addToWhislist = (data) => {
    if (data) {
      const { name, pricing, images } = data;
      dispatch(setLocalStorage({ name, images, pricing, productId }));
    }
  };

  if (isError) {
    showError(error?.message);
  }
  if (isCartError) {
    showError(cartError?.data?.message);
  }

  useEffect(() => {
    if (isSuccess) {
      if (cartData?.message === "product already exist!") {
        showSuccess(cartData?.message, "", "warning");
      } else {
        showSuccess(cartData?.message, "");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <div>
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container d-flex align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                {data?.product_category}
              </li>
            </ol>
          </div>
        </nav>

        <Loader loader={isLoading} />

        {!isLoading && (
          <div className="page-content">
            <div className="container">
              <div className="product-details-top">
                <div className="row">
                  <div className="col-md-6">
                    <div className="product-gallery product-gallery-vertical">
                      <div className="row">
                        <figure
                          className="product-main-image"
                          style={{ width: "45%", height: "0em !important" }}
                        >
                          {!isLoading && (
                            <div style={{ height: "330em !important" }}>
                              <img
                                className="img-size"
                                id="product-zoom1"
                                src={image || data?.images[0]}
                                style={{
                                  width: "100%",
                                  display: "block",
                                  objectFit: "contain !important",
                                }}
                                alt="product"
                              />
                            </div>
                          )}
                        </figure>

                        <div
                          id="product-zoom-gallery"
                          className="product-image-gallery"
                          style={{ overflowY: "scroll", height: "80vh" }}
                        >
                          {data?.images?.map((img) => {
                            return (
                              <Link
                                className="product-gallery-item active"
                                href="#1"
                                onClick={() => handleImage(img)}
                              >
                                <img
                                  src={img}
                                  className="img-size"
                                  alt="product side"
                                  style={{
                                    width: "100%",
                                    display: "block",
                                    objectFit: "cover !important",
                                  }}
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="product-details">
                      <h5
                        style={{ fontSize: "1.8rem" }}
                        className="product-title fs-5"
                      >
                        {data?.name}
                      </h5>

                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                        <Link
                          className="ratings-text"
                          href="#product-review-link"
                          id="review-link"
                        >
                          ( 0 Reviews )
                        </Link>
                      </div>

                      <div className="product-price">{data?.pricing}</div>

                      <div className="details-filter-row details-row-size">
                        <label>
                          {data?.customization_options?.Color && "Colors:"}
                        </label>

                        <div className="product-nav product-nav-thumbs">
                          {data?.customization_options?.Color &&
                            data?.customization_options?.Color?.map((col) => {
                              return col.image ? (
                                <Link href="#" className="active">
                                  <img
                                    src={col?.image}
                                    alt="product desc"
                                    onClick={() => handleImage(col?.image)}
                                  />
                                </Link>
                              ) : (
                                ""
                              );
                            })}
                        </div>
                      </div>

                      {data?.customization_options?.Capacity && (
                        <div className="details-filter-row details-row-size">
                          <label>Extra</label>

                          <div className="product-nav">
                            {data?.customization_options?.Capacity?.map(
                              (col) => {
                                return (
                                  <div className="mx-1">
                                    <button className="btn btn-primary">
                                      {col?.value}
                                    </button>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      )}

                      <div className="details-filter-row details-row-size">
                        <label for="size">Size:</label>
                        <div className="select-custom">
                          <select
                            name="size"
                            id="size"
                            className="form-control"
                          >
                            <option value="#" selected="selected">
                              Select Link size
                            </option>
                            <option value="s">Small</option>
                            <option value="m">Medium</option>
                            <option value="l">Large</option>
                            <option value="xl">Extra Large</option>
                          </select>
                        </div>
                      </div>

                      <div className="details-filter-row details-row-size">
                        <label for="qty">Qty:</label>
                        <div className="product-details-quantity">
                          <input
                            type="number"
                            id="qty"
                            className="form-control"
                            min="1"
                            max="5"
                            value={qty}
                            onChange={(e) => addQuantity(e.target.value)}
                            step="1"
                            data-decimals="0"
                            required
                          />
                        </div>
                      </div>

                      <div className="product-details-action">
                        <a
                          href="#1"
                          className="btn-product btn-cart"
                          style={{
                            backgroundColor: isCreating ? "black" : "revert",
                          }}
                          onClick={() => addToCart(data)}
                          disabled={isCreating}
                        >
                          {isCreating ? (
                            <BtnLoader />
                          ) : (
                            <span>add to cart</span>
                          )}
                        </a>

                        <div className="details-action-wrapper">
                          <a
                            href="#1"
                            className="btn-product btn-wishlist"
                            title="Wishlist"
                            onClick={() => addToWhislist(data)}
                          >
                            <span>Add to Wishlist</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* product description */}
              <div className="product-details-tab">
                <div className="product-desc-content mb-4">
                  <h2>Product Information</h2>
                  <hr className="my-1" />

                  {data?.product_information && (
                    <table className="table table-bordered p-2">
                      <tbody>
                        {Object.entries(data?.product_information).map(
                          ([key, value]) => (
                            <tr key={key}>
                              <td>{key}</td>
                              <td>
                                {typeof value === "object"
                                  ? JSON.stringify(value) // Display nested object as JSON string
                                  : Array.isArray(value)
                                  ? value.join(", ")
                                  : value}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  )}
                </div>
                <div className="product-desc-content mb-4">
                  <h2>Product Description</h2>
                  <hr className="my-1" />

                  <div className="ul">
                    {data?.full_description?.split("\n").map((item,index) => {
                      return <li  key={index}className="li mb-1">{item}</li>;
                    })}
                  </div>

                  <div className="ul mt-3">
                    {data?.small_description?.split("-").map((item,index) => {
                      return <li key={index} className="li mb-1">{item}</li>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default SingleProduct;
