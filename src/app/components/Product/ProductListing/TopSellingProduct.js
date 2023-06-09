import React from "react";
import { Link } from "react-router-dom";

function TopSellingProduct() {
  return (
    <>
      <div className="mb-6"></div>

      <div className="container">
        <div className="heading heading-center mb-3">
          <h2 className="title">Top Selling Products</h2>
          <ul
            className="nav nav-pills nav-border-anim justify-content-center"
            role="tablist"
          >
            <li className="nav-item">
              <Link
                className="nav-link active"
                id="top-all-link"
                data-toggle="tab"
                to="#top-all-tab"
                role="tab"
                aria-controls="top-all-tab"
                aria-selected="true"
              >
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="top-fur-link"
                data-toggle="tab"
                to="#top-fur-tab"
                role="tab"
                aria-controls="top-fur-tab"
                aria-selected="false"
              >
                Furniture
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="top-decor-link"
                data-toggle="tab"
                to="#top-decor-tab"
                role="tab"
                aria-controls="top-decor-tab"
                aria-selected="false"
              >
                Decoration
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="top-light-link"
                data-toggle="tab"
                to="#top-light-tab"
                role="tab"
                aria-controls="top-light-tab"
                aria-selected="false"
              >
                Lighting
              </Link>
            </li>
          </ul>
        </div>

        <div className="tab-content">
          <div
            className="tab-pane p-0 fade show active"
            id="top-all-tab"
            role="tabpanel"
            aria-labelledby="top-all-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-7-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-7-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Lighting</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Petite Table Lamp
                        </Link>
                      </h3>
                      <div className="product-price">$401,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-8-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-8-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Decor</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Madra Log Holder
                        </Link>
                      </h3>
                      <div className="product-price">$401,00</div>

                      <div className="product-nav product-nav-dots">
                        <Link
                          to="#1"
                          className="active"
                          style={{ background: "#333333" }}
                        >
                          <span className="sr-only">Color name</span>
                        </Link>
                        <Link to="#1" style={{ background: "#927764" }}>
                          <span className="sr-only">Color name</span>
                        </Link>
                      </div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <span className="product-label label-circle label-sale">
                        Sale
                      </span>
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-9-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-9-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Furniture</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>Garden Armchair</Link>
                      </h3>
                      <div className="product-price">
                        <span className="new-price">$94,00</span>
                        <span className="old-price">Was $94,00</span>
                      </div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-10-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-10-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Lighting</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Carronade Large Suspension Lamp
                        </Link>
                      </h3>
                      <div className="product-price">$401,00</div>

                      <div className="product-nav product-nav-dots">
                        <Link
                          to="#1"
                          className="active"
                          style={{ background: "#e8e8e8" }}
                        >
                          <span className="sr-only">Color name</span>
                        </Link>
                        <Link to="#1" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </Link>
                      </div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-11-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-11-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Decor</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Original Outdoor Beanbag
                        </Link>
                      </h3>
                      <div className="product-price">$259,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <span className="product-label label-circle label-new">
                        New
                      </span>
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-12-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-12-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Furniture</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>2-Seater</Link>
                      </h3>
                      <div className="product-price">$3.107,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-13-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-13-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Furniture</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>Wingback Chair</Link>
                      </h3>
                      <div className="product-price">$2.486,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-14-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-14-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Decor</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Cushion Set 3 Pieces
                        </Link>
                      </h3>
                      <div className="product-price">$199,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-15-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-15-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Decor</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Cushion Set 3 Pieces
                        </Link>
                      </h3>
                      <div className="product-price">$199,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-16-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-16-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Lighting</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Carronade Table Lamp
                        </Link>
                      </h3>
                      <div className="product-price">$499,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane p-0 fade"
            id="top-fur-tab"
            role="tabpanel"
            aria-labelledby="top-fur-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <span className="product-label label-circle label-sale">
                        Sale
                      </span>
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-9-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-9-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Furniture</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>Garden Armchair</Link>
                      </h3>
                      <div className="product-price">
                        <span className="new-price">$94,00</span>
                        <span className="old-price">Was $94,00</span>
                      </div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <span className="product-label label-circle label-new">
                        New
                      </span>
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-12-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-12-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Furniture</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>2-Seater</Link>
                      </h3>
                      <div className="product-price">$3.107,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-13-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-13-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Furniture</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>Wingback Chair</Link>
                      </h3>
                      <div className="product-price">$2.486,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane p-0 fade"
            id="top-decor-tab"
            role="tabpanel"
            aria-labelledby="top-decor-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-8-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-8-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Decor</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Madra Log Holder
                        </Link>
                      </h3>
                      <div className="product-price">$401,00</div>

                      <div className="product-nav product-nav-dots">
                        <Link
                          to="#1"
                          className="active"
                          style={{ backgroundColor: "##333333" }}
                        >
                          <span className="sr-only">Color name</span>
                        </Link>
                        <Link to="#1" style={{ backgroundColor: "#927764" }}>
                          <span className="sr-only">Color name</span>
                        </Link>
                      </div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-11-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-11-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Decor</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Original Outdoor Beanbag
                        </Link>
                      </h3>
                      <div className="product-price">$259,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-14-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-14-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Decor</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Cushion Set 3 Pieces
                        </Link>
                      </h3>
                      <div className="product-price">$199,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-15-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-15-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Decor</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Cushion Set 3 Pieces
                        </Link>
                      </h3>
                      <div className="product-price">$199,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane p-0 fade"
            id="top-light-tab"
            role="tabpanel"
            aria-labelledby="top-light-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-7-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-7-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Lighting</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Petite Table Lamp
                        </Link>
                      </h3>
                      <div className="product-price">$401,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-10-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-10-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Lighting</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Carronade Large Suspension Lamp
                        </Link>
                      </h3>
                      <div className="product-price">$401,00</div>

                      <div className="product-nav product-nav-dots">
                        <Link
                          to="#"
                          className="active"
                          style={{ backgroundColor: "#e8e8e8" }}
                        >
                          <span className="sr-only">Color name</span>
                        </Link>
                        <Link to="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </Link>
                      </div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                  <div className="product product-11 text-center">
                    <figure className="product-media">
                      <Link to={`/product/${21212323}`}>
                        <img
                          src="assets/images/demos/demo-2/products/product-16-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-2/products/product-16-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </Link>

                      <div className="product-action-vertical">
                        <Link
                          to="/wishlist"
                          className="btn-product-icon btn-wishlist "
                        >
                          <span>add to wishlist</span>
                        </Link>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <Link to="#">Lighting</Link>
                      </div>
                      <h3 className="product-title">
                        <Link to={`/product/${21212323}`}>
                          Carronade Table Lamp
                        </Link>
                      </h3>
                      <div className="product-price">$499,00</div>
                    </div>
                    <div className="product-action">
                      <Link to="/cart" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr className="mt-1 mb-6" />
      </div>
    </>
  );
}

export default TopSellingProduct;
