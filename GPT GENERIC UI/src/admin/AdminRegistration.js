import {api} from "../api";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function AdminRegistration() {
  const [reg, setReg] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsersData = async () => {
      await api
        .get("auth/", reg)
        .then((res) => {
          // console.log("res",res.data)
          if (res.data.length) navigate("/auth/login");
        })
        .catch((err) => console.log("Error :", err));
    };
    fetchUsersData();
  }, []);

  const updateRegHandler = (event) => {
    setReg({ ...reg, [event.target.name]: event.target.value });
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("form Data:", reg);

    await api
      .post("register", reg)
      .then((res) => {
        window.alert(res.data);
        navigate("/auth/login");
      })
      .catch((err) => console.log("Error :", err));
  };

  return (
    <div className="authentication">
      <h2> Registration</h2>

      <form method="POST" onSubmit={formDataHandler}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={updateRegHandler}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={updateRegHandler}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={updateRegHandler}
          required
        />
        <button type="submit">Register</button>
      </form>
      <center>
        Already have an Account ?
        <p>
          <NavLink to="/auth/login">Login</NavLink>
        </p>
      </center>
    </div>
  );
}

export default AdminRegistration;
