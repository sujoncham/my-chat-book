import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";

const RequireAuth = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("userToken"));
    setLoading(false);
  }, []);

  const location = useLocation();
  if (loading) {
    return "loading";
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
