import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Redirect } from "@reach/router";

const OnlyPublicRoute = ({ component: RouteComponent, ...rest }) => {
  const { user, loading } = useContext(AuthContext);
  if (!loading) {
    return (
      <>
        {!user || !user.emailVerified ? (
          <RouteComponent {...rest} />
        ) : (
          <Redirect to="/dashboard" noThrow />
        )}
      </>
    );
  } else
    return (
      <div class="flex items-center justify-center absolute w-full h-full">
        <div class="loader"></div>
      </div>
    );
};

export default OnlyPublicRoute;
