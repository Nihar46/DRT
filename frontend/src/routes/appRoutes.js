import { lazy, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "../utilities/axiosConfig";

const Main = lazy(() => import("../screens/Main"));
const DesignRequestForm = lazy(() =>
  import("../screens/Main/DesignRequestForm")
);
const ProductCatalog = lazy(() => import("../screens/Main/ProductCatalog"));
const ProductDetailsPage = lazy(() =>
  import("../screens/Main/ProductDetailPage")
);
const AccountManagerDashboard = lazy(() =>
  import("../screens/Main/AccountManagerDashboard")
);

const RequestStatus = lazy(() => import("../screens/Main/RequestStatus"));

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
    path: "/design-request-details",
    element: <DesignRequestForm />,
  },
  {
    //path: "/users/:id/reset-password/:token",
    path: "/product-catalog",
    element: <ProductCatalog />,
  },
  {
    //path: "/users/:id/reset-password/:token",
    path: "/product-details/:id",
    element: <ProductDetailsPage />,
  },
  {
    path: "/account-manager-dashboard",
    element: <AccountManagerDashboard />,
  },
  {
    path: "/request-status",
    element: <RequestStatus />,
  },
];

const appRoutes = [
  {
    path: "/",
    element: <PrivateRoutes as={Main} />,
    children: appNav,
  },
];

export default appRoutes;
