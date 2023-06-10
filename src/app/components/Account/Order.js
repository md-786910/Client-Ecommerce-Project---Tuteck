import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Order() {
  return (
    <>
      <div class="container">
        <div class="row">
          <Sidebar />
          <div className="col-lg-8 mx-auto col-md-8 col-lg-4">
            <div>
              <p>No order has been made yet.</p>
              <Link to="/" class="btn btn-outline-primary-2">
                <span>GO SHOP</span>
                <i class="icon-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
