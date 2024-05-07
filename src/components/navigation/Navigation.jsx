import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavLink to="/" className="header-nav-text header-nav-text-home">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className="header-nav-text header-nav-text-contacts"
        >
          Contacts
        </NavLink>
      )}
    </>
  );
};