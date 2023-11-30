import { lazy, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "../utilities/axiosConfig";

const Main = lazy(() => import("../screens/Main"));

const PrivateRoutes = ({ as: Component, ...props }) => {
  const navigate = useNavigate();

  return <Component {...props} />;
};

const appNav = [];

const appRoutes = [
  {
    path: "/",
    element: <PrivateRoutes as={Main} />,
    children: appNav,
  },
];

export default appRoutes;
