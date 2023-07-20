import React from "react";
import { Link } from "react-router-dom";
import slide1 from "../../assets/slide-1.jpg";
import { useEffect } from "react";

function HomeSlider() {
  useEffect(() => {
    // window.location.reload();
  }, []);

  return (
    <div className="intro-slider-container">
      <div className="intro-slider ">
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
      </div>
    </div>
  );
}

export default HomeSlider;
