import { lazy, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "../utilities/axiosConfig";

const Main = lazy(() => import("../screens/Main"));

const AdminLandingScreen = lazy(() =>
  import("../screens/Main/AdminFlow/AdminLandingScreen")
);

const PrivateRoutes = ({ as: Component, ...props }) => {
  const navigate = useNavigate();
  const user = Cookies.get("user");
  const token = Cookies.get("token");
  useEffect(() => {
    if (!user || !token) {
      navigate("/");
    }
  }, [user, token]);

  return <Component {...props} />;
};

const appNav = [
  {
    path: "/admin-landing-screen",
    element: <AdminLandingScreen />,
  },
];

const adminRoutes = [
  {
    path: "/",
    element: <PrivateRoutes as={Main} />,
    children: appNav,
  },
];

export default adminRoutes;
