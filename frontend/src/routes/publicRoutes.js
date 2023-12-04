import { lazy } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = lazy(() => import("../screens/Auth"));
const HomePage = lazy(() => import("../screens/Main/HomePage"));
const Login = lazy(() => import("../screens/Auth/Login"));

const ForgotPasswordPage = lazy(() =>
  import("../screens/Main/ForgotPasswordPage")
);
const ResetPasswordPage = lazy(() =>
  import("../screens/Main/ResetPasswordPage")
);

const PublicRoute = ({ as: Component, ...props }) => {
  const navigate = useNavigate();
  const user = Cookies.get("user");
  const token = Cookies.get("token");
  useEffect(() => {
    if (user || token) {
      navigate("/");
    }
  }, [user, token, navigate]);
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
    path: "/users/:id/reset-password/:token",
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
