import React from "react";
import { Link } from "react-router-dom";
import { productCategory } from "../../json/productCategory";

function ProductByCategory() {
  return (
    <>
      <div class="container mt-5">
        <h2 class="title  mb-4">Explore Popular Categories</h2>

        <div class="cat-blocks-container">
          <div class="row">
            {productCategory?.map((prod) => {
              return (
                <div class="col-6 col-sm-4 col-lg-2">
                  <Link
                    to={`/productCategory/${prod?.name}`}
                    class="cat-block"
                  >
                    <figure>
                      <span>
                        <img src={prod?.image} alt="Category" />
                      </span>
                    </figure>

                    <h3 class="cat-block-title">{prod?.name}</h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductByCategory;
