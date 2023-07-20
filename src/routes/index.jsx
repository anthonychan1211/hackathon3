/* eslint-disable react/prop-types */

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts";
import NavBar from "../components/NavBar";
export default function ProtectedRoute({ redirectTo }) {
  const { user } = useAuth();

  return user ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate to={redirectTo} />
  );
}
