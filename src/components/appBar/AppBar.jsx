import { useSelector } from "react-redux";

import { AuthNav } from "../authNav/authNav.jsx";
import { UserMenu } from "../userMenu/userMenu.jsx";
import { Navigation } from "../navigation/navigation.jsx";

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