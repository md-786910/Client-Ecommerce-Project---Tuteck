import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../../settings/services/auth.service";
import {
  showApiError,
  showError,
  showSuccess,
} from "../../../utils/errorHandling";
import BtnLoader from "../../../utils/BtnLoader";
import ForgotPasswordModel from "./ForgotPasswordModel";
import { useState } from "react";

function AuthModel(props) {
  const { show, handleClose } = props;

  // for forgot password model
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  //   handleClose();
  // };

  // const handleCloseModel = () => {
  //   setOpen(false);
  // };

  const [
    registerUser,
    { isLoading: isRegistering, isSuccess, isError, error },
  ] = useRegisterUserMutation();

  const [
    loginUser,
    {
      data: loginData,
      isLoading: isLogining,
      isSuccess: isLoginSucc,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();

  // register users
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  // for login
  const loginNameRef = useRef("");
  const loginPaswordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const HandleRegistration = async (e) => {
    e.preventDefault();
    try {
      const name = nameRef.current?.value;
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
      const confirm_password = confirmPasswordRef.current?.value;

      if (!name || !email || !password || !confirm_password) {
        showError("All fields are required", "fill fields properly");
      } else {
        registerUser({ name, email, password, confirm_password });
      }
    } catch (error) {
      showError("Registration failed", "");
    }
  };
  if (isError) {
    showApiError(error, "Registration failed");
  }
  if (isSuccess) {
    showSuccess("User Registration Successfully", "");
  }

  // Login
  const HandleLogin = async (e) => {
    e.preventDefault();
    const email = loginNameRef.current?.value;
    const password = loginPaswordRef?.current?.value;

    try {
      if (!email || !password) {
        showError("All fields are required", "fill fields properly");
      } else {
        loginUser({ email, password });
      }
    } catch (error) {
      showApiError(error, "Login failed");
    }
  };
  if (isLoginError) {
    showError(loginError?.data?.message, "Login failed");
  }

  if (isLoginSucc) {
    if (isLoginSucc) {
      localStorage.setItem(
        "authentication",
        JSON.stringify({
          token: loginData.token,
          user: loginData.data,
        })
      );

      setTimeout(() => {
        window.location.reload();
      }, 100);
      showSuccess("User login  successfully", "success");
    }
  }

  return (
    <>
      <div className="form-box mt-4 shadow">
        <div className="form-tab">
          <ul className="nav nav-pills nav-fill" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="signin-tab"
                data-toggle="tab"
                href="#signin"
                role="tab"
                aria-controls="signin"
                aria-selected="true"
              >
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="register-tab"
                data-toggle="tab"
                href="#register"
                role="tab"
                aria-controls="register"
                aria-selected="false"
              >
                Register
              </a>
            </li>
          </ul>
          <div className="tab-content" id="tab-content-5">
            <div
              className="tab-pane fade show active"
              id="signin"
              role="tabpanel"
              aria-labelledby="signin-tab"
            >
              <form onSubmit={(e) => HandleLogin(e)}>
                <div className="form-group">
                  <label for="singin-email">Username or email address *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="singin-email"
                    name="singin-email"
                    ref={loginNameRef}
                    required
                  />
                </div>

                <div className="form-group">
                  <label for="singin-password">Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    id="singin-password"
                    name="singin-password"
                    ref={loginPaswordRef}
                    required
                  />
                </div>

                <div className="form-footer">
                  <button
                    type="submit"
                    className="btn btn-outline-primary-2"
                    disabled={isLogining}
                  >
                    {isLogining ? <BtnLoader /> : <span>LOGIN IN</span>}
                    <i className="icon-long-arrow-right"></i>
                  </button>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="signin-remember"
                      required
                    />
                    <label
                      className="custom-control-label"
                      for="signin-remember"
                    >
                      Remember Me
                    </label>
                  </div>

                  <a
                    href="#"
                    // onClick={() => handleOpen()}
                    className="forgot-link"
                  >
                    Forgot Your Password?
                  </a>
                </div>
              </form>
              <div className="form-choice">
                <p className="text-center">or sign in with</p>
                <div className="row">
                  <div className="col-sm-6">
                    <a href="#" className="btn btn-login btn-g">
                      <i className="icon-google"></i>
                      Login With Google
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a href="#" className="btn btn-login btn-f">
                      <i className="icon-facebook-f"></i>
                      Login With Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="register"
              role="tabpanel"
              aria-labelledby="register-tab"
            >
              <form onSubmit={(e) => HandleRegistration(e)}>
                <div className="form-group">
                  <label for="register-email">Your name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="register-name"
                    name="register-name"
                    ref={nameRef}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="register-email">Your email address *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="register-email"
                    name="register-email"
                    ref={emailRef}
                    required
                  />
                </div>

                <div className="form-group">
                  <label for="register-password">Password *</label>
                  <input
                    type="password"
                    className="form-control"
                    id="register-password1"
                    name="register-password"
                    ref={passwordRef}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="register-password">Confirm password *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="register-password"
                    name="register-conPassword"
                    ref={confirmPasswordRef}
                    required
                  />
                </div>

                <div className="form-footer">
                  <button
                    type="submit"
                    className="btn btn-outline-primary-2"
                    disabled={isRegistering}
                  >
                    {isRegistering ? <BtnLoader /> : <span>REGISTER</span>}
                    <i className="icon-long-arrow-right"></i>
                  </button>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="register-policy"
                      required
                    />
                    <label
                      className="custom-control-label"
                      for="register-policy"
                    >
                      I agree to the <a href="#">privacy policy</a> *
                    </label>
                  </div>
                </div>
              </form>
              <div className="form-choice">
                <p className="text-center">or sign in with</p>
                <div className="row">
                  <div className="col-sm-6">
                    <a href="#" className="btn btn-login btn-g">
                      <i className="icon-google"></i>
                      Login With Google
                    </a>
                  </div>
                  <div className="col-sm-6">
                    <a href="#" className="btn btn-login  btn-f">
                      <i className="icon-facebook-f"></i>
                      Login With Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ForgotPasswordModel show={open} handleClose={handleCloseModel} />
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <button type="button" className="close" onClick={handleClose}>
            <span aria-hidden="true">
              <i className="icon-close"></i>
            </span>
          </button>

        
        </Modal.Body>
      </Modal> */}
    </>
  );
}

export default AuthModel;
