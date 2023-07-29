import React from "react";
import { Link } from "react-router-dom";

function ProductNew() {
  return (
    <>
      <div class="mb-4"></div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4">
            <div class="banner banner-overlay banner-overlay-light">
              <Link to={`/productCategory/${"Samsung  Galaxy Note9"}`}>
                <img
                  src="assets/images/demos/demo-4/banners/banner-1.png"
                  alt="Banner"
                />
              </Link>

              <div class="banner-content">
                <h4 class="banner-subtitle">Smart Offer</h4>
                <h3 class="banner-title">
                  <Link to={`/productCategory/${"Samsung  Galaxy Note9"}`}>
                    Save $150{" "}
                    <strong>
                      on Samsung <br />
                      Galaxy Note9
                    </strong>
                  </Link>
                </h3>
                <Link
                  to={`/productCategory/${"Samsung  Galaxy Note9"}`}
                  class="banner-link"
                >
                  Shop Now<i class="icon-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="banner banner-overlay banner-overlay-light">
              <Link to={`/productCategory/${"Bose SoundSport"}`}>
                <img
                  src="assets/images/demos/demo-4/banners/banner-2.jpg"
                  alt="Banner"
                />
              </Link>

              <div class="banner-content">
                <h4 class="banner-subtitle">Time Deals</h4>
                <h3 class="banner-title">
                  <Link to={`/productCategory/${"Bose SoundSport"}`}>
                    <strong>Bose SoundSport</strong> <br />
                    Time Deal -30%
                  </Link>
                </h3>
                <Link
                  to={`/productCategory/${"Bose SoundSport"}`}
                  class="banner-link"
                >
                  Shop Now<i class="icon-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <div class="banner banner-overlay banner-overlay-light">
              <Link to={`/productCategory/${"GoPro - Fusion 360"}`}>
                <img
                  src="assets/images/demos/demo-4/banners/banner-3.png"
                  alt="Banner"
                />
              </Link>

              <div class="banner-content">
                <h4 class="banner-subtitle">Clearance</h4>
                <h3 class="banner-title">
                  <Link to={`/productCategory/${"GoPro - Fusion 360"}`}>
                    <strong>GoPro - Fusion 360</strong> <br />
                    Save $70
                  </Link>
                </h3>
                <Link
                  to={`/productCategory/${"GoPro - Fusion 360"}`}
                  class="banner-link"
                >
                  Shop Now . Hurry!<i class="icon-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-3"></div>
    </>
  );
}

export default ProductNew;
