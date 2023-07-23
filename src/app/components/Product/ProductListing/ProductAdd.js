import React, { useEffect } from "react";
import { useGetAllProductQuery } from "../../../settings/services/productListing.service";
import { showError, showSuccess } from "../../../../utils/errorHandling";
import Loader from "../../../../utils/Loader";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import BtnLoader from "../../../../utils/BtnLoader";
import { useAddToCartMutation } from "../../../settings/services/cart.service";

function ProductAdd(props) {
  const { title, name } = props;
  const { data, isLoading, isError, error } = useGetAllProductQuery(title);

  // add to cart.
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

  const addToCart = (productId, prod) => {
    console.log(prod);
    const { name, image, price } = prod;
    // const actPrice = pricing.split("$").filter(Boolean);

    const data = {
      productId,
      name,
      image: image,
      description: "",
      information: "",
      price: parseInt(price),
      qty: 1,
    };
    creatingCart(data);
  };

  if (isCartError) {
    showError(cartError?.data?.message);
  }

  if (isError) {
    showError(error);
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
            <Link to={`/productCategory/${title}`}>view all</Link>
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
                  {data?.results?.map((prod) => {
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
                            </figure>

                            <div className="product-body">
                              <h3 className="product-title">
                                <a>{prod?.name.slice(0, 30)}...</a>
                              </h3>
                              <div className="product-price">
                                {prod?.price_string}
                              </div>
                            </div>
                            <div className="product-action">
                              <buttom
                                className="btn-product btn-cart"
                                style={{ cursor: "pointer" }}
                                onClick={() => addToCart(productId, prod)}
                              >
                                {isCreating ? (
                                  <BtnLoader />
                                ) : (
                                  <span>add to cart</span>
                                )}
                              </buttom>
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
