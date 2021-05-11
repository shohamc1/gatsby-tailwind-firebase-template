import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { Redirect } from "@reach/router";
import "firebase/auth";

const OnlyPrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user, loading } = useContext(AuthContext);

  if (!loading) {
    return (
      <>
        {!user || !user.emailVerified ? (
          <Redirect to="/" noThrow />
        ) : (
          <RouteComponent {...rest} />
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

export default OnlyPrivateRoute;
