import React from "react";
import { Outlet } from "react-router-dom";
import deptImg from "../img/dte_photo.png";

function AdminHomePage() {
  return (
    <div className="AdminHome">
      <div className="deptImg">
        <img src={deptImg} alt="department image" />
      </div>
      <Outlet />
    </div>
  );
}

export default AdminHomePage;
