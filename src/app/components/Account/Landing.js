import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div
        class="page-header text-center"
        style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
      >
        <div class="container">
          <h1 class="page-title">
            My Account<span>Order Management</span>
          </h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" class="breadcrumb-nav mb-3">
        <div class="container">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li class="breadcrumb-item active" aria-current="page">
              My Account
            </li>
          </ol>
        </div>
      </nav>
    </>
  );
}

export default Landing;
