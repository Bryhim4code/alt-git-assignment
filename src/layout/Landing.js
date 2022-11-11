import React from "react";
import { Outlet } from "react-router-dom";

const Landing = () => {
  return (
    <div className="main-panel">
      <Outlet />
    </div>
  );
};

export default Landing;
