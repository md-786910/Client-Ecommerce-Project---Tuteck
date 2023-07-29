import React from "react";
import Sidebar from "./Sidebar";
import { useGetAddressQuery } from "../../settings/services/address.service";
import { showError } from "../../../utils/errorHandling";
import Loader from "../../../utils/Loader";

function BillingAdress() {
  const { data, isSuccess, isLoading } = useGetAddressQuery();

  return (
    <>
      <div class="container">
        <div class="row">
          <Sidebar />
          <div className="col-lg-8 mx-auto col-md-8 col-lg-4">
            <div id="tab-address">
              <Loader loader={isLoading} />

              {isSuccess ? (
                <div class="row">
                  <div class="col-lg-6">
                    <div class="card card-dashboard">
                      <div class="card-body">
                        <h3 class="card-title">Billing Address</h3>
                        <p>
                          {data?.data?.firstName + " " + data?.data?.lastName}
                          <br />
                          {data?.data?.email}
                          <br />
                          {data?.data?.country} &nbsp;
                          {data?.data?.state} &nbsp;
                          {data?.data?.city} &nbsp;
                          {data?.data?.postalCode} &nbsp;
                          {data?.data?.streetAddress} &nbsp;
                          <br />
                          +91 {data?.phone}
                          <br />
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
              ) : (
                <h6>"Not Address addedd"</h6>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BillingAdress;
