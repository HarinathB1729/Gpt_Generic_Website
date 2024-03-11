import {api,BASE_URL} from "../../api";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGlobalProvider } from "../../GlobalProvider";

function AdminChangePassword() {
  const [password, setPassword] = useState({});
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const [glbVals, setGlbVals] = useGlobalProvider();
  console.log("glbvals",glbVals)

  
  const changePassword = (event) => {
    setErr("");
    setPassword({ ...password, [event.target.name]: event.target.value });
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("form Data:", password);

    if (password.pwd === password.pwd2) {
      // console.log("Password Match");

      let data = { username: glbVals.username, password: password.pwd };
      await api
        .post("auth/pwdupdation", data)
        .then((res) => {
          window.alert(res.data);
          localStorage.clear();
          navigate("/auth");
        })
        .catch((err)=>console.log("Error :",err))
    } else setErr("Password Mismatch");
  };

  // console.log("password:", password);

  return (
    <div className="DivCenter">
      <div className="authentication">
        <h2> Change Password</h2>

        <form method="POST" onSubmit={formDataHandler}>
          <input
            type="password"
            name="pwd"
            placeholder="New Password"
            onChange={changePassword}
            required
          />
          <input
            type="text"
            name="pwd2"
            placeholder="Confirm Password"
            onChange={changePassword}
            required
          />

          <button type="submit">UPDATE</button>
          <span>{err}</span>
        </form>
      </div>
    </div>
  );
}

export default AdminChangePassword;
