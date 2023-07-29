import React from "react";
import { Link } from "react-router-dom";
import { handleLogout } from "../utils/authHelper";

function Sidebar() {
  return (
    <>
      <aside
        class="col-md-3 col-lg-2 mb-1"
        style={{ background: "whitesmoke" }}
      >
        <ul class="nav nav-dashboard flex-column mb-3 mb-md-0">
          <li class="nav-item">
            <Link class="nav-link" id="tab-orders-link" to="/accounts">
              Orders
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" id="tab-address-link" to="/accounts/address">
              Adresses
            </Link>
          </li>

          <li class="nav-item">
            <Link
              class="nav-link"
              id="tab-account-link"
              to="/accounts/resetPassword"
            >
              Reset Password
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" onClick={() => handleLogout()}>
              Sign Out
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
