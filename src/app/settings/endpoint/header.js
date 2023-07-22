import { isAutheticated } from "../../components/utils/authHelper";

const { token } = isAutheticated();

export const headerApi = {
  Authorization: `Bearer ${token}`,
};
