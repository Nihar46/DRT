import { lazy } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = lazy(() => import("../screens/Auth"));
const Login = lazy(() => import("../screens/Auth/Login"));
const ForgotPasswordPage = lazy(() =>
  import("../screens/Main/ForgotPasswordPage")
);
const ResetPasswordPage = lazy(() =>
  import("../screens/Main/ResetPasswordPage")
);

const PublicRoute = ({ as: Component, ...props }) => {
  const navigate = useNavigate();

  return <Component {...props} />;
};

const authNav = [
  {
    path: "/",
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
];

const publicRoutes = [
  {
    path: "/",
    element: <PublicRoute as={Auth} />,
    children: authNav,
  },
];

export default publicRoutes;
