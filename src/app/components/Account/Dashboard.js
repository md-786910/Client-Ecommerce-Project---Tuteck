import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <>
      <div class="container">
        <div class="row">
          <Sidebar />
          <div className="col-lg-8 col-md-8 col-lg-4">
            <div class="col-md-8 col-lg-9">
              <div>
                <p>
                  Hello <span class="font-weight-normal text-dark">User</span>{" "}
                  (not <span class="font-weight-normal text-dark">User</span>?{" "}
                  <a href="#">Log out</a>)
                  <br />
                  From your account dashboard you can view your{" "}
                  <a href="#tab-orders" class="tab-trigger-link link-underline">
                    recent orders
                  </a>
                  , manage your{" "}
                  <a href="#tab-address" class="tab-trigger-link">
                    shipping and billing addresses
                  </a>
                  , and{" "}
                  <a href="#tab-account" class="tab-trigger-link">
                    edit your password and account details
                  </a>
                  .
                </p>
              </div>

              <div
                class="tab-pane fade"
                id="tab-orders"
                role="tabpanel"
                aria-labelledby="tab-orders-link"
              >
                <p>No order has been made yet.</p>
                <a href="category.html" class="btn btn-outline-primary-2">
                  <span>GO SHOP</span>
                  <i class="icon-long-arrow-right"></i>
                </a>
              </div>

              <div
                class="tab-pane fade"
                id="tab-downloads"
                role="tabpanel"
                aria-labelledby="tab-downloads-link"
              >
                <p>No downloads available yet.</p>
                <a href="category.html" class="btn btn-outline-primary-2">
                  <span>GO SHOP</span>
                  <i class="icon-long-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
