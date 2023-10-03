import React from "react";
import "./style.scss";
import Aside from "../Components/Aside/Aside";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="HomeLayout">
      <Aside />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
