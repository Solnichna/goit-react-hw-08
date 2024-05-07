import "./App.css";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./Layout.jsx";

const HomePage = lazy(() => import("../../pages/homePage/homePage.jsx"));
const LoginPage = lazy(() => import("../../pages/loginPage/loginPage.jsx"));
const RegistrationPage = lazy(() =>
  import("../../pages/registerPage/registerPage.jsx")
);
const ContactsPage = lazy(() =>
  import("../../pages/contactsPage/contactsPage.jsx")
);

import { RefreshUser } from "../../redux/authorisation/operations.js";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/authorisation/selectors.js";
import { PrivateRoute } from "./PrivateRoute.jsx";
import { RestrictedRoute } from "./RestrictedRoute.jsx";
import { Loading } from "../loading/Loading.jsx";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(RefreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loading />
  ) : (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          {isLoggedIn && (
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/register"
                  component={<ContactsPage />}
                />
              }
            />
          )}
        </Routes>
      </Layout>
    </>
  );
}

export default App;