import React from "react";
import { useGetAllProductQuery } from "../../../settings/services/productListing.service";
import { showError } from "../../../../utils/errorHandling";
import Loader from "../../../../utils/Loader";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function ProductAdd(props) {
  const { title, name } = props;

  const { data, isLoading, isError, error } = useGetAllProductQuery(title);
  console.log(data);
  if (isError) {
    return showError(error);
  }
  console.log(data);
  return (
    <>
      <div className="container">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <h2
            className="title mb-3 text-white bg-primary p-1 border-primary"
            style={{ textTransform: "capitalize" }}
          >
            {name}
          </h2>

          <span className="text-success">
            <Link to={`productCategory/${title}`}>view all</Link>
          </span>
        </div>
      </div>

      <Loader loader={isLoading} />

      {true && (
        <div className="container mb-3">
          <div className="tab-content tab-content-carousel">
            <div className="tab-pane p-0  show active" id="tab-carousel-1 ">
              <div className="">
                <Row>
                  {data?.results?.slice(0, 8).map((prod) => {
                    let url = prod.url;
                    let productId;
                    const regex = /\/dp\/([A-Z0-9]+)\//;
                    const match = url.match(regex);
                    if (match && match[1]) {
                      // eslint-disable-next-line no-unused-vars
                      productId = match[1];
                    }

                    return (
                      productId && (
                        <Col
                          lg={3}
                          md={4}
                          sm={6}
                          sx={12}
                          className="mb-2 shadow-sm"
                        >
                          <div
                            className="product product-11 text-center"
                            style={{
                              height: "70vh",
                            }}
                          >
                            <figure className="product-media">
                              <Link to={`/product/${productId}`}>
                                <div
                                  style={{
                                    display: "block",
                                    objectFit: "contain",
                                  }}
                                >
                                  <img
                                    src={prod?.image}
                                    alt="Product"
                                    style={{
                                      display: "inline-block",
                                      objectFit: "contain",
                                    }}
                                    className="product-image img-size"
                                  />
                                </div>
                              </Link>

                              <div className="product-action-vertical">
                                <a
                                  href="#1"
                                  className="btn-product-icon btn-wishlist"
                                >
                                  <span>add to wishlist</span>
                                </a>
                              </div>
                            </figure>

                            <div className="product-body">
                              <h3 className="product-title">
                                <a href="product.html">Butler Stool Ladder</a>
                              </h3>
                              <div className="product-price">$251,00</div>
                            </div>
                            <div className="product-action">
                              <a href="#1" className="btn-product btn-cart">
                                <span>add to cart</span>
                              </a>
                            </div>
                          </div>
                        </Col>
                      )
                    );
                  })}
                </Row>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductAdd;
