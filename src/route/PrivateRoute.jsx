import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../Layout/Index";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ isLayout = true, children }) => {
  const validUser = useAuth();
  return validUser ? (
    isLayout ? (
      <Layout>{children}</Layout>
    ) : (
      children
    )
  ) : (
    <Navigate to="/login" />
  );

  // return isLayout ? <Layout>{children}</Layout> : children;
};

export default PrivateRoute;
