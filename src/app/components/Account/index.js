import React from "react";
import { Route, Routes } from "react-router-dom";
import Order from "./Order";
import BillingAdress from "./BillingAdress";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import ResetPassword from "./ResetPassword";
import OrderProductListing from "./OrderProductListing";

function Account() {
  return (
    <div>
      <Landing />
      <Routes>
        <Route path="/" element={<Order />} />
        <Route path="/order/:orderId" element={<OrderProductListing />} />
        <Route path="/address" element={<BillingAdress />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default Account;
