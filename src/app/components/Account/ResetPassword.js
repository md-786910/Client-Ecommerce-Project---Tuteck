import React from "react";
import Sidebar from "./Sidebar";

function ResetPassword() {
  return (
    <>
      <div class="container">
        <div class="row">
          <Sidebar />
          <div className="col-lg-8 mx-auto col-md-8 col-lg-4">
            <form action="#">
              <div class="form-group">
                <label for="singin-email">Current Password *</label>
                <input
                  type="text"
                  class="form-control"
                  id="singin-email"
                  name="singin-email"
                  required
                />
              </div>

              <div class="form-group">
                <label for="singin-password">Password *</label>
                <input
                  type="password"
                  class="form-control"
                  id="singin-password"
                  name="singin-password"
                  required
                />
              </div>

              <div class="form-group">
                <label for="singin-password">Confirm Password *</label>
                <input
                  type="password"
                  class="form-control"
                  id="singin-password"
                  name="singin-password"
                  required
                />
              </div>

              <div class="form-footer">
                <button type="submit" class="btn btn-outline-primary-2">
                  <span>Reset Password</span>
                  <i class="icon-long-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
