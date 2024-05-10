import { NavLink } from "react-router-dom";

export const AuthNav = () => {
  return (
    <>
      <NavLink
        to="/register"
        className="header-authnav-text header-nav-text-register"
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className="header-authnav-text header-nav-text-login"
      >
        Log in
      </NavLink>
    </>
  );
};