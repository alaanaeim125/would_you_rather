import React from "react";
import { Redirect, Route, Link } from "react-router-dom";

// ...rest all props without list them
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authlogin = localStorage.getItem("auth");

  return (
    <Route
      {...rest}
      render={(props) =>
        authlogin ? (
          <Component {...props} />
        ) : (
          <Redirect as={Link} to="/unauthorized" />
        )
      }
    />
  );
};

export default ProtectedRoute;
