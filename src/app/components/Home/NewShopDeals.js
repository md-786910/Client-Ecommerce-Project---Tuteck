import React from "react";

function NewShopDeals() {
  return (
    <>
      <div class="container">
        <div
          class="cta cta-border cta-border-image mb-5 mb-lg-7"
          style={{
            backgroundImage: "url(assets/images/demos/demo-3/bg-2.jpg)",
          }}
        >
          <div class="cta-border-wrapper bg-white">
            <div class="row justify-content-center">
              <div class="col-md-12 col-xl-12">
                <div class="cta-content">
                  <div class="cta-heading">
                    <h3 class="cta-title text-right">
                      <span class="text-primary">New Deals</span> <br />
                      Start Daily at 12pm e.t.
                    </h3>
                  </div>

                  <div class="cta-text">
                    <p>
                      Get{" "}
                      <span class="text-dark font-weight-normal">
                        FREE SHIPPING* & 5% rewards
                      </span>{" "}
                      on <br />
                      every order with Molla Theme rewards program
                    </p>
                  </div>
                  <a href="#" class="btn btn-primary btn-round">
                    <span>Add to Cart for $50.00/yr</span>
                    <i class="icon-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewShopDeals;
