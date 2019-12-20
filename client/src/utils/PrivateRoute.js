import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...theRest }) => {
  return (
    <Route
      {...theRest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          console.log("cj: PrivateRoute: redirecting");
          return <Redirect to="/bubble-page" />;
        }
      }}
    />
  );
};

