import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { isAutheticated } from "./authHelper";

export const Protected = () => {
  const location = useLocation();
  const isLoggedIn = isAutheticated();

  return (
    <>
      {isLoggedIn?.token ? (
        <Outlet />
      ) : (
        <Navigate
          to="/"
          redirect="/"
          replace
          state={{ from: location.pathname }}
        />
      )}
    </>
  );
};
