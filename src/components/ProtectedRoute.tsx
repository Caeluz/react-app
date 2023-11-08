import React from "react";
import { Route, redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : redirect("/login")
    }
  />
);

export default ProtectedRoute;
