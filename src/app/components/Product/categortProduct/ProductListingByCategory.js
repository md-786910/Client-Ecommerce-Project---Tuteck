import React from "react";
import { Link } from "react-router-dom";

function ProductByCategory() {
  return (
    <>
      <div class="container mt-5">
        <h2 class="title text-center mb-4">Explore Popular Categories</h2>

        <div class="cat-blocks-container">
          <div class="row">
            <div class="col-6 col-sm-4 col-lg-2">
              <Link to={`/productCategory/${"mens"}`} class="cat-block">
                <figure>
                  <span>
                    <img
                      src="/assets/images/demos/demo-4/cats/1.png"
                      alt="Category"
                    />
                  </span>
                </figure>

                <h3 class="cat-block-title">Computer & Laptop</h3>
              </Link>
            </div>

            <div class="col-6 col-sm-4 col-lg-2">
              <Link to={`/productCategory/${"mens"}`} class="cat-block">
                <figure>
                  <span>
                    <img
                      src="/assets/images/demos/demo-4/cats/2.png"
                      alt="Category"
                    />
                  </span>
                </figure>

                <h3 class="cat-block-title">Digital Cameras</h3>
              </Link>
            </div>

            <div class="col-6 col-sm-4 col-lg-2">
              <Link to={`/productCategory/${"mens"}`} class="cat-block">
                <figure>
                  <span>
                    <img
                      src="/assets/images/demos/demo-4/cats/3.png"
                      alt="Category"
                    />
                  </span>
                </figure>

                <h3 class="cat-block-title">Smart Phones</h3>
              </Link>
            </div>

            <div class="col-6 col-sm-4 col-lg-2">
              <Link to={`/productCategory/${"mens"}`} class="cat-block">
                <figure>
                  <span>
                    <img
                      src="/assets/images/demos/demo-4/cats/4.png"
                      alt="Category"
                    />
                  </span>
                </figure>

                <h3 class="cat-block-title">Televisions</h3>
              </Link>
            </div>

            <div class="col-6 col-sm-4 col-lg-2">
              <Link to={`/productCategory/${"mens"}`} class="cat-block">
                <figure>
                  <span>
                    <img
                      src="/assets/images/demos/demo-4/cats/5.png"
                      alt="Category"
                    />
                  </span>
                </figure>

                <h3 class="cat-block-title">Audio</h3>
              </Link>
            </div>

            <div class="col-6 col-sm-4 col-lg-2">
              <Link to={`/productCategory/${"mens"}`} class="cat-block">
                <figure>
                  <span>
                    <img
                      src="/assets/images/demos/demo-4/cats/6.png"
                      alt="Category"
                    />
                  </span>
                </figure>

                <h3 class="cat-block-title">Smart Watches</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductByCategory;
