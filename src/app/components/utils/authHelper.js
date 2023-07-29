export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return true;
  }
  if (localStorage.getItem("authentication")) {
    return JSON.parse(localStorage.getItem("authentication"));
  } else {
    return false;
  }
};

export const handleLogout = () => {
  localStorage.removeItem("authentication");
  window.location.reload();
  return true;
};
