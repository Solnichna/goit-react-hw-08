import { useSelector } from "react-redux";

import { AuthNav } from "../authNav/AuthNav.jsx";
import { UserMenu } from "../userMenu/UserMenu.jsx";
import { Navigation } from "../navigation/Navigation.jsx";

import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className="header-container">
      <nav>
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};
