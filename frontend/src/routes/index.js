import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
//import PageNotFound from "../screens/PageNotFound";
import publicRoutes from "./publicRoutes";
import appRoutes from "./appRoutes";
import adminRoutes from "./adminRoutes";

const Route = () => {
  const routes = useRoutes([
    ...publicRoutes,
    ...appRoutes,
    ...adminRoutes,
    //   { path: "*", element: <PageNotFound /> },
  ]);

  return routes;
};

Route.propTypes = {};

export default memo(Route);
