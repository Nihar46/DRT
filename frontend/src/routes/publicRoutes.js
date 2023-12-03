import { lazy } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = lazy(() => import("../screens/Auth"));
const HomePage = lazy(() => import("../screens/Main/HomePage"));
const Login = lazy(() => import("../screens/Auth/Login"));
const ProductCatalog = lazy(() => import("../screens/Main/ProductCatalog"));
const ProductDetailsPage = lazy(() => import("../screens/Main/ProductDetailPage"));

const ForgotPasswordPage = lazy(() =>
  import("../screens/Main/ForgotPasswordPage")
);
const ResetPasswordPage = lazy(() =>
  import("../screens/Main/ResetPasswordPage")
);

const DesignRequestForm = lazy(() =>
  import("../screens/Main/DesignRequestForm")
);

const PublicRoute = ({ as: Component, ...props }) => {
  const navigate = useNavigate();

  return <Component {...props} />;
};

const authNav = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    //path: "/users/:id/reset-password/:token",
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/design-request-details",
    element: <DesignRequestForm />,
    //path: "/users/:id/reset-password/:token",
    path: "/product-catalog",
    element: <ProductCatalog />,
  },
  {
    //path: "/users/:id/reset-password/:token",
    path: "/product-details/:id",
    element: <ProductDetailsPage />,
  },
];

const publicRoutes = [
  {
    path: "/",
    element: <PublicRoute as={Auth} />,
    children: authNav,
  },
];

export default publicRoutes;
