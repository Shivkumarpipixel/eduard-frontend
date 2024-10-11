import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./authProvider";

const PrivateRoute = ({ element }) => {
  const { user } = useAuth(); //Authentication user
  return user ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
