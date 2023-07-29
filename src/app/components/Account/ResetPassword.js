import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { showError, showSuccess } from "../../../utils/errorHandling";
import BtnLoader from "../../../utils/BtnLoader";
import { useResetPasswordUserMutation } from "../../settings/services/order.service";

function ResetPassword() {
  const [user, setUser] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
  });

  const [resetPasswordUser, { data, isLoading, isError, error, isSuccess }] =
    useResetPasswordUserMutation();

  // handle change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // Login
  const handleResetPassword = async (e) => {
    e.preventDefault();
    const { email, currentPassword, newPassword } = user;

    try {
      if (!email || !currentPassword || !newPassword) {
        showError("All fields are required");
      } else {
        // login
        resetPasswordUser({ email, currentPassword, newPassword });
      }
    } catch (error) {
      showError(error?.response?.data?.message || error?.message);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      showSuccess(data?.data?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      showError(error?.data?.message || error?.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return (
    <>
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-lg-8 mx-auto col-md-8 col-lg-4">
            <form onSubmit={handleResetPassword}>
              <div className="form-group">
                <label for="singin-email">Current Password *</label>
                <input
                  type="text"
                  className="form-control"
                  id="singin-email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label for="singin-password">Password *</label>
                <input
                  type="password"
                  className="form-control"
                  id="singin-password"
                  name="currentPassword"
                  value={user.currentPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label for="singin-password">Confirm Password *</label>
                <input
                  type="password"
                  className="form-control"
                  id="singin-password"
                  name="newPassword"
                  value={user.newPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-footer">
                <button
                  type="submit"
                  className="btn btn-outline-primary-2"
                  disabled={isLoading}
                >
                  {isLoading ? <BtnLoader /> : "Reset Password"}
                  <i className="icon-long-arrow-right"></i>
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
