import React from "react";

const browser = typeof window !== "undefined" && window;

const NotFoundPage = () => {
  return <>{browser && <div>Not Found</div>}</>;
};

export default NotFoundPage;
