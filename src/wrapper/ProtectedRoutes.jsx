import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.user.isAuth);

  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
