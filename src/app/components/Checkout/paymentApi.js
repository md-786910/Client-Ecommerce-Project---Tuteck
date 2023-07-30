import axios from "axios";
import { api } from "../../settings/endpoint/baseUrl";
import { isAutheticated } from "../utils/authHelper";
import { showError } from "../../../utils/errorHandling";

// PAYMENT INTEGATION RAZORPAY AND INITIATE
const { token } = isAutheticated();

export const paymentHandler = async (id) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const API_URL = `${api}/order`;

  const orderUrl = `${api}/order/create/${id}`;
  const response = await axios.get(orderUrl, {
    headers,
  });
  const { data } = response;
  const options = {
    key: "rzp_test_MgNn5wEsqPADa4",
    name: "Molla",
    description: "Molla",
    order_id: data.id,
    handler: async (response) => {
      try {
        console.log("response", response);

        const paymentId = response.razorpay_payment_id;

        const url = `${API_URL}/capture/${paymentId}?orderId=${id}`;
        const captureResponse = await axios.post(
          url,
          { response },
          { headers }
        );

        const { data, status } = captureResponse;
        console.log("success", data);
        console.log("success111", status);
        if (status === 200) {
          // success the navigate to success page url - /checkout/confirm/:id
          window.open(`/confirm?orderId=${id}`);
        }
      } catch (err) {
        console.log("error capture massage", err.message);
        showError(err?.message, "error capture massage");
      }
    },
    theme: {
      color: "#3d1f98",
    },
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};
