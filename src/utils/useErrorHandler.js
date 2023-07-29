import { useAlert } from "react-alert";

export const useErrorHandler = () => {
  const alert = useAlert();
  const showAlert = (text) => alert.show(text);
  const showError = (text) => alert.error(text);
  const showSuccess = (text) => alert.success(text);
  return [showAlert, showError, showSuccess];
};
