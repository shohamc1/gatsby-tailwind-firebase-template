import { Router } from "@reach/router";
import React from "react";

import Landing from "components/Landing";

import { AuthProvider } from "context/authContext";
import OnlyPublicRoute from "routes/onlyPublicRoute";
import OnlyPrivateRoute from "routes/onlyPrivateRoute";

const Index = () => {
  return (
    // <AuthProvider>
    <Router basepath="/">
      <Landing path="/" />
    </Router>
    // </AuthProvider>
  );
};

export default Index;
