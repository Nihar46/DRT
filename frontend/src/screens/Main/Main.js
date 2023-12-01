import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  const [opacity] = useState(false);
  return (
    <div className={opacity ? "hide" : "show"}>
      <Outlet />
    </div>
  );
};

Main.propTypes = {};

export default Main;
