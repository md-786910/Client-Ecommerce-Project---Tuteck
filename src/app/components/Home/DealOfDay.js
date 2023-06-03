import React from "react";

function DealOfDay() {
  return (
    <div
      className="my-5 deal bg-image pt-8 pb-8"
      style={{
        backgroundImage: "url(assets/images/demos/demo-6/deal/bg-1.jpg)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <div className="deal-content text-center">
              <h4>Limited quantities. </h4>
              <h2>Deal of the Day</h2>
              <div className="deal-countdown" data-until="+10h"></div>
            </div>
            <div className="row deal-products">
              <div className="col-6 deal-product text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-6/deal/product-1.jpg"
                      alt="Product1 img"
                      className="product-image"
                    />
                  </a>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Elasticated cotton shorts</a>
                  </h3>
                  <div className="product-price">
                    <span className="new-price">Now $24.99</span>
                    <span className="old-price">Was $30.99</span>
                  </div>
                </div>
                <a href="category.html" className="action">
                  shop now
                </a>
              </div>
              <div className="col-6 deal-product text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-6/deal/product-2.jpg"
                      alt="Product img"
                      className="product-image"
                    />
                  </a>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <a href="product.html">Fine-knit jumper</a>
                  </h3>
                  <div className="product-price">
                    <span className="new-price">Now $8.99</span>
                    <span className="old-price">Was $17.99</span>
                  </div>
                </div>
                <a href="category.html" className="action">
                  shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealOfDay;
