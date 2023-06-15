import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductDetailByIdQuery } from "../../settings/services/productListing.service";
import { showError } from "../../../utils/errorHandling";
import { useState } from "react";
import Loader from "../../../utils/Loader";

function SingleProduct() {
  const { productId } = useParams();

  const { data, isLoading, isError, error } =
    useGetProductDetailByIdQuery(productId);
  const [image, setImage] = useState(data?.images[0]);

  const handleImage = (img) => {
    setImage(img);
  };

  const addToCart = (productId) => {
    alert(productId);
  };
  const addToWhislist = (productId) => {
    alert(productId);
  };

  if (isError) {
    return showError(error);
  }

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
                {productId}
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

                      <div className="product-price">$84.00</div>

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
                            value="1"
                            min="1"
                            max="10"
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
                          onClick={() => addToCart(productId)}
                        >
                          <span>add to cart</span>
                        </a>

                        <div className="details-action-wrapper">
                          <a
                            href="#1"
                            className="btn-product btn-wishlist"
                            title="Wishlist"
                            onClick={() => addToWhislist(productId)}
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
                <ul
                  className="nav nav-pills justify-content-center"
                  role="tablist"
                >
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      id="product-desc-link"
                      data-toggle="tab"
                      href="#product-desc-tab"
                      role="tab"
                      aria-controls="product-desc-tab"
                      aria-selected="true"
                    >
                      Description
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      id="product-info-link"
                      data-toggle="tab"
                      href="#product-info-tab"
                      role="tab"
                      aria-controls="product-info-tab"
                      aria-selected="false"
                    >
                      Additional information
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      id="product-shipping-link"
                      data-toggle="tab"
                      href="#product-shipping-tab"
                      role="tab"
                      aria-controls="product-shipping-tab"
                      aria-selected="false"
                    >
                      Shipping & Returns
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      id="product-review-link"
                      data-toggle="tab"
                      href="#product-review-tab"
                      role="tab"
                      aria-controls="product-review-tab"
                      aria-selected="false"
                    >
                      Reviews (2)
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="product-desc-tab"
                    role="tabpanel"
                    aria-labelledby="product-desc-link"
                  >
                    <div className="product-desc-content">
                      <h3>Product Information</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna viverra non,
                        semper suscipit, posuere Link, pede. Donec nec justo
                        eget felis facilisis fermentum. Aliquam porttitor mauris
                        sit amet orci. Aenean dignissim pellentesque felis.
                        Phasellus ultrices nulla quis nibh. Quisque Link lectus.
                        Donec consectetuer ligula vulputate sem tristique
                        cursus.{" "}
                      </p>
                      <ul>
                        <li>
                          Nunc nec porttitor turpis. In eu risus enim. In vitae
                          mollis elit.{" "}
                        </li>
                        <li>Vivamus finibus vel mauris ut vehicula.</li>
                        <li>
                          Nullam Link magna porttitor, dictum risus nec,
                          faucibus sapien.
                        </li>
                      </ul>

                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna viverra non,
                        semper suscipit, posuere Link, pede. Donec nec justo
                        eget felis facilisis fermentum. Aliquam porttitor mauris
                        sit amet orci. Aenean dignissim pellentesque felis.
                        Phasellus ultrices nulla quis nibh. Quisque Link lectus.
                        Donec consectetuer ligula vulputate sem tristique
                        cursus.{" "}
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="product-info-tab"
                    role="tabpanel"
                    aria-labelledby="product-info-link"
                  >
                    <div className="product-desc-content">
                      <h3>Information</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna viverra non,
                        semper suscipit, posuere Link, pede. Donec nec justo
                        eget felis facilisis fermentum. Aliquam porttitor mauris
                        sit amet orci.{" "}
                      </p>

                      <h3>Fabric & care</h3>
                      <ul>
                        <li>Faux suede fabric</li>
                        <li>Gold tone metal hoop handles.</li>
                        <li>RI branding</li>
                        <li>Snake print trim interior </li>
                        <li>Adjustable cross body strap</li>
                        <li>
                          {" "}
                          Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop:
                          61cm
                        </li>
                      </ul>

                      <h3>Size</h3>
                      <p>one size</p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="product-shipping-tab"
                    role="tabpanel"
                    aria-labelledby="product-shipping-link"
                  >
                    <div className="product-desc-content">
                      <h3>Delivery & returns</h3>
                      <p>
                        We deliver to over 100 countries around the world. For
                        full details of the delivery options we offer, please
                        view our <Link href="#">Delivery information</Link>
                        <br />
                        We hope you’ll love every purchase, but if you ever need
                        to return an item you can do so within Link month of
                        receipt. For full details of how to make Link return,
                        please view our{" "}
                        <Link href="#">Returns information</Link>
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="product-review-tab"
                    role="tabpanel"
                    aria-labelledby="product-review-link"
                  >
                    <div className="reviews">
                      <h3>Reviews (2)</h3>
                      <div className="review">
                        <div className="row no-gutters">
                          <div className="col-auto">
                            <h4>
                              <Link href="#">Samanta J.</Link>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "80%" }}
                                ></div>
                              </div>
                            </div>
                            <span className="review-date">6 days ago</span>
                          </div>
                          <div className="col">
                            <h4>Good, perfect size</h4>

                            <div className="review-content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ducimus cum dolores assumenda
                                asperiores facilis porro reprehenderit animi
                                culpa atque blanditiis commodi perspiciatis
                                doloremque, possimus, explicabo, autem fugit
                                beatae quae voluptas!
                              </p>
                            </div>

                            <div className="review-action">
                              <Link href="#">
                                <i className="icon-thumbs-up"></i>Helpful (2)
                              </Link>
                              <Link href="#">
                                <i className="icon-thumbs-down"></i>Unhelpful
                                (0)
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="review">
                        <div className="row no-gutters">
                          <div className="col-auto">
                            <h4>
                              <Link href="#">John Doe</Link>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{ width: "80%" }}
                                ></div>
                              </div>
                            </div>
                            <span className="review-date">5 days ago</span>
                          </div>
                          <div className="col">
                            <h4>Very good</h4>

                            <div className="review-content">
                              <p>
                                Sed, molestias, tempore? Ex dolor esse iure hic
                                veniam laborum blanditiis laudantium iste amet.
                                Cum non voluptate eos enim, ab cumque nam, modi,
                                quas iure illum repellendus, blanditiis
                                perspiciatis beatae!
                              </p>
                            </div>

                            <div className="review-action">
                              <Link href="#">
                                <i className="icon-thumbs-up"></i>Helpful (0)
                              </Link>
                              <Link href="#">
                                <i className="icon-thumbs-down"></i>Unhelpful
                                (0)
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
