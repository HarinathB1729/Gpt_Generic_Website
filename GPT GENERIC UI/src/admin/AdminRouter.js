import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader/AdminHeader";
import "./adminconsole.css";


function AdminRouter() {  
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"))
  const navigate = useNavigate();
  // console.log("glbvals", glbVals);

  useEffect(() => {
    if (!loggedIn) navigate("/auth");
  }, []);

  return (
    <div>
      <div className="adminHeader">
        <AdminHeader />
      </div>
      <div className="adminContent">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminRouter;
