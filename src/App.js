//created by Irina Shushkevych
import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import "./App.css";

import UserMenu from "./components/UserMenu";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { useGetUserQuery } from "./redux/Users/users-api";
import { onError } from "./utilits/messages";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivetRoute";

const ContactsPage = lazy(() => import("./pages/contacts"));
const ContactAddPage = lazy(() => import("./pages/contactAdd"));
const GroupsPage = lazy(() => import("./pages/groups"));

export default function App() {
  const { error } = useGetUserQuery();

  useEffect(() => {
    if (error) {
      onError(error.data);
    }
  }, [error]);

  return (
    <div className="App">
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path="/" element={<UserMenu />}>
            <Route
              path="login"
              element={
                <PublicRoute
                  element={<LoginPage />}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute
                  element={<RegisterPage />}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />
            <Route
              path="contacts/*"
              element={
                <PrivateRoute element={<ContactsPage />} redirectTo="/login" />
              }
            />
            <Route
              path="add/*"
              element={
                <PrivateRoute
                  element={<ContactAddPage />}
                  redirectTo="/login"
                />
              }
            />
            <Route
              path="groups/*"
              element={
                <PrivateRoute element={<GroupsPage />} redirectTo="/login" />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}
