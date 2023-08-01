import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import { showError, showSuccess } from "../../../utils/errorHandling";
import BtnLoader from "../../../utils/BtnLoader";
import { useForgotPasswordUserMutation } from "../../settings/services/order.service";

function ForgotPasswordModel(props) {
  const { open, handleClose } = props;

  const [
    forgotPasswordUser,
    { isLoading: isForgoting, isSuccess, isError, error },
  ] = useForgotPasswordUserMutation();

  // register users
  const emailRef = useRef("");

  const HandleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const email = emailRef.current?.value;

      if (!email) {
        return showError("All fields are required", "fill fields properly");
      } else {
        forgotPasswordUser({ email });
      }
    } catch (error) {
      showError("Registration failed");
    }
  };
  if (isError) {
    showError(error?.data?.message, "Forgot password failed");
    return;
  }
  if (isSuccess) {
    showSuccess("Your password has been send your emai Successfully");
    window.location.reload();
    return;
  }

  return (
    <>
      <Modal show={open} onHide={handleClose} centered>
        <Modal.Body>
          <button type="button" className="close" onClick={handleClose}>
            <span aria-hidden="true">
              <i className="icon-close"></i>
            </span>
          </button>

          <div className="form-box">
            <div className="form-tab">
              <h4 className="text-primary">Forgot Your Password</h4>
              <div className="tab-content" id="tab-content-5">
                <div>
                  <form onSubmit={(e) => HandleForgotPassword(e)}>
                    <div className="form-group">
                      <label for="singin-email">email address *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="singin-email"
                        name="singin-email"
                        placeholder="Enter your email"
                        ref={emailRef}
                        required
                      />
                    </div>

                    <div className="form-footer1 mt-3">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                        disabled={isForgoting}
                      >
                        {isForgoting ? (
                          <BtnLoader />
                        ) : (
                          <span>Forgot password</span>
                        )}
                        <i className="icon-long-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ForgotPasswordModel;
