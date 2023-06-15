import swal from "sweetalert";

export const showSuccess = (title, text = "") => {
  return swal("Good job!", "You clicked the button!", "success");
};
export const showError = (title, text = "") => {
  return swal("Good job!", "You clicked the button!", "error");
};
export const showWarn = (title, text = "") => {
  return swal("Good job!", "You clicked the button!", "warning");
};
