import { lazy } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = lazy(() => import("../screens/Auth"));

const PublicRoute = ({ as: Component, ...props }) => {
  const navigate = useNavigate();

  return <Component {...props} />;
};

const authNav = [];

const publicRoutes = [
  {
    path: "/",
    element: <PublicRoute as={Auth} />,
    children: authNav,
  },
];

export default publicRoutes;
