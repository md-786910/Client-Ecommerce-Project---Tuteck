import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAllProductQuery } from "../../../settings/services/productListing.service";
import Loader from "../../../../utils/Loader";
import { showError } from "../../../../utils/errorHandling";
import { useDispatch } from "react-redux";
import { setLocalStorage } from "../../../settings/services/whislist/whislist.slice";
function CategoryProductAll() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetAllProductQuery(category);
  console.log(data,"-<data->")

  if (isError) {
    return showError("something error wrong!");
  }

  return (
    <>
      <main className="main">
        <div
          className="page-header text-center"
          style={{
            backgroundImage: "url('/assets/images/page-header-bg.jpg')",
          }}
        >
          <div className="container">
            <h1 className="page-title">
              {category}
              <span>Shop</span>
            </h1>
          </div>
        </div>
        <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                {category}
              </li>
            </ol>
          </div>
        </nav>

        <div className="page-content">
          <div className="container">
            <div className="toolbox">
              <div className="toolbox-right">
                <div className="toolbox-sort">
                  <label for="sortby">Sort by:</label>
                  <div className="select-custom">
                    <select name="sortby" id="sortby" className="form-control">
                      <option value="popularity" selected="selected">
                        Most Popular
                      </option>
                      <option value="rating">Most Rated</option>
                      <option value="date">Date</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <Loader loader={isLoading} />

            <div className="products">
              <div className="row">
                {!isLoading &&
                  data?.results?.map((prod) => {
                    let url = prod.url;
                    let productId;
                    const regex = /\/dp\/([A-Z0-9]+)\//;
                    const match = url.match(regex);
                    if (match && match[1]) {
                      // eslint-disable-next-line no-unused-vars
                      productId = match[1];
                    }

                    return (
                      <div
                        key={productId}
                        className="mb-2  col-6 col-md-4 col-lg-4 col-xl-3"
                        style={{
                          boxShadow:
                            "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                        }}
                      >
                        {match && (
                          <div className="product" style={{ height: "70vh" }}>
                            <figure className="product-media">
                              <span className="product-label label-new">
                                New
                              </span>
                              <Link to={`/product/${productId}`}>
                                <div style={{ height: "40vh" }}>
                                  <img
                                    className="img-size product-image"
                                    src={prod?.image}
                                    alt="Product"
                                  />
                                </div>
                              </Link>

                              <div className="product-action-vertical">
                                <button
                                  className="btn-product-icon btn-wishlist btn-expandable"
                                  onClick={() =>
                                    dispatch(
                                      setLocalStorage({
                                        name: prod?.name,
                                        images: [prod?.image],
                                        pricing: prod?.price_string,
                                        productId: productId,
                                      })
                                    )
                                  }
                                >
                                  <span>add to wishlist</span>
                                </button>
                              </div>

                              {/*
                             <div className="product-action action-icon-top">
                                <Link to="#" className="btn-product btn-cart">
                                  <span>add to cart</span>
                                </Link>
                                <Link
                                  to="popup/quickView.html"
                                  className="btn-product btn-quickview"
                                  title="Quick view"
                                >
                                  <span>quick view</span>
                                </Link>
                                <Link
                                  to="#"
                                  className="btn-product btn-compare"
                                  title="Compare"
                                >
                                  <span>compare</span>
                                </Link>
                              </div>
                            */}
                            </figure>

                            <div className="product-body">
                              <div className="product-cat">
                                <Link to="#">{category}</Link>
                              </div>
                              <h3 className="product-title">
                                <Link to="product.html">
                                  {prod?.name?.slice(0, 50)}...
                                </Link>
                              </h3>
                              <div className="product-price">
                                ${prod?.price}
                              </div>
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div
                                    className="ratings-val"
                                    style={{ width: "0%" }}
                                  ></div>
                                </div>
                                <span className="ratings-text">
                                  ( 0 Reviews )
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>

              <div className="load-more-container text-center">
                <button
                  className="btn btn-outline-darker btn-load-more"
                  onClick={() => {}}
                  disabled={true}
                >
                  More Products <i className="icon-refresh"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CategoryProductAll;
