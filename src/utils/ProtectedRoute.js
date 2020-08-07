import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// ...rest all props without list them
const ProtectedRoute = ({ component: Component, ...rest }) => {
    const userId = useSelector((state) => state.user.userId);

    return (
    <Route
      {...rest}
      render={(props) =>
        userId !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};


export default ProtectedRoute;
