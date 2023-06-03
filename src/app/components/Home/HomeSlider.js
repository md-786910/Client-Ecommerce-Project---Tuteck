import React from "react";

function HomeSlider() {
  return (
    <div class="intro-slider-container">
      <div
        class="intro-slider owl-carousel owl-theme owl-nav-inside owl-light"
        data-toggle="owl"
        data-owl-options='{
              "dots": false,
              "nav": false, 
              "responsive": {
                  "992": {
                      "nav": true
                  }
              }
          }'
      >
        <div
          class="intro-slide"
          style={{
            backgroundImage:
              "url(assets/images/demos/demo-6/slider/slide-1.jpg)",
          }}
        >
          <div class="container intro-content text-center">
            <h3 class="intro-subtitle text-white">You're Looking Good</h3>
            <h1 class="intro-title text-white">New Lookbook</h1>

            <a href="category.html" class="btn btn-outline-white-4">
              <span>Discover More</span>
            </a>
          </div>
        </div>

        <div
          class="intro-slide"
          style={{
            backgroundImage:
              "url(assets/images/demos/demo-6/slider/slide-2.jpg)",
          }}
        >
          <div class="container intro-content text-center">
            <h3 class="intro-subtitle text-white">Don’t Miss</h3>
            <h1 class="intro-title text-white">Mysrety Deals</h1>

            <a href="category.html" class="btn btn-outline-white-4">
              <span>Discover More</span>
            </a>
          </div>
        </div>
      </div>

      <span class="slider-loader"></span>
    </div>
  );
}

export default HomeSlider;
