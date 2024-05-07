import { useDispatch, useSelector } from "react-redux";

import { LogOut } from "../../redux/auth/operations.js";
import { selectUser } from "../../redux/auth/selectors.js";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="container-user">
      <p className="user-name">Name: {user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(LogOut())}
        className="logout-button"
      >
        Logout
      </button>
    </div>
  );
};
