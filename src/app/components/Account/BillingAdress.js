import React from "react";
import Sidebar from "./Sidebar";

function BillingAdress() {
  return (
    <>
      <div class="container">
        <div class="row">
          <Sidebar />
          <div className="col-lg-8 mx-auto col-md-8 col-lg-4">
            <div id="tab-address">
              <div class="row">
                <div class="col-lg-6">
                  <div class="card card-dashboard">
                    <div class="card-body">
                      <h3 class="card-title">Billing Address</h3>

                      <p>
                        User Name
                        <br />
                        User Company
                        <br />
                        John str
                        <br />
                        New York, NY 10001
                        <br />
                        1-234-987-6543
                        <br />
                        yourmail@mail.com
                        <br />
                        <a href="#">
                          Edit <i class="icon-edit"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="card card-dashboard">
                    <div class="card-body">
                      <h3 class="card-title">Shipping Address</h3>

                      <p>
                        You have not set up this type of address yet.
                        <br />
                        <a href="#">
                          Edit <i class="icon-edit"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BillingAdress;
