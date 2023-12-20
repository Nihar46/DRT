import React, { memo, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
//import PageNotFound from "../screens/PageNotFound";
import publicRoutes from "./publicRoutes";
import appRoutes from "./appRoutes";
import adminRoutes from "./adminRoutes";

const Route = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const loggedInUserType = localStorage.getItem("userType");
    setUserType(loggedInUserType);
  }, []);

  const getRoutesForUserType = (type) => {
    switch (type) {
      case "admin":
        return adminRoutes;
      case "accountManager":
        return appRoutes;
      default:
        return [];
    }
  };
  const routes = useRoutes([
    ...publicRoutes,
    ...getRoutesForUserType(userType),
    //...appRoutes,
    //...adminRoutes,

    //   { path: "*", element: <PageNotFound /> },
  ]);

  return routes;
};

Route.propTypes = {};

export default memo(Route);
