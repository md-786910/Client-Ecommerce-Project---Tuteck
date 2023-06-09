import React from "react";

function DealOfDay() {
  return (
    <>
      <div class="mb-5"></div>
      <div class="bg-light deal-container pt-5 pb-3 mb-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <div class="deal">
                <div class="deal-content">
                  <h4>Limited Quantities</h4>
                  <h2>Deal of the Day</h2>

                  <h3 class="product-title">
                    <a href="product.html">POÄNG</a>
                  </h3>

                  <div class="product-price">
                    <span class="new-price">$149.00</span>
                    <span class="old-price">Was $240.00</span>
                  </div>

                  <div class="deal-countdown" data-until="+10h"></div>

                  <a href="product.html" class="btn btn-primary">
                    <span>Shop Now</span>
                    <i class="icon-long-arrow-right"></i>
                  </a>
                </div>
                <div class="deal-image">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-2/deal/product-1.jpg"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-3">
              <div class="banner banner-overlay banner-overlay-light text-center d-none d-lg-block">
                <a href="#">
                  <img
                    src="assets/images/demos/demo-2/banners/banner-5.jpg"
                    alt="Banner"
                  />
                </a>

                <div class="banner-content banner-content-top banner-content-center">
                  <h4 class="banner-subtitle">The Best Choice</h4>
                  <h3 class="banner-title">AGEN</h3>
                  <div class="banner-text text-primary">$49.99</div>
                  <a href="#" class="btn btn-outline-gray banner-link">
                    Shop Now<i class="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-6"></div>
    </>
  );
}

export default DealOfDay;
