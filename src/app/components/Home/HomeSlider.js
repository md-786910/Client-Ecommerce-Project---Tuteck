import React from "react";
import { Link } from "react-router-dom";
import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";

function HomeSlider() {
  return (
    <div className="intro-slider-container">
      <div
        className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light"
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
          className="intro-slide"
          style={{
            background: `url(${slide1})`,
          }}
        >
          <div className="container intro-content text-center">
            <h3 className="intro-subtitle text-white">You're Looking Good</h3>
            <h1 className="intro-title text-white">New Lookbook</h1>

            <Link
              to={`/productCategory/latest fashion`}
              className="btn btn-outline-white-4"
            >
              <span>Discover More</span>
            </Link>
          </div>
        </div>

        <div
          className="intro-slide"
          style={{
            background: `url(${slide2})`,
          }}
        >
          <div className="container intro-content text-center">
            <h3 className="intro-subtitle text-white">Don’t Miss</h3>
            <h1 className="intro-title text-white">Mysrety Deals</h1>

            <Link
              to={`/productCategory/deals offer`}
              className="btn btn-outline-white-4"
            >
              <span>Discover More</span>
            </Link>
          </div>
        </div>
      </div>

      <span className="slider-loader"></span>
    </div>
  );
}

export default HomeSlider;
