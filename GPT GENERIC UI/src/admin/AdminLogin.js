import {api} from "../api";
import { useNavigate } from "react-router-dom";
import React, {  useState } from "react";
import "./adminconsole.css";
import { useGlobalProvider } from "../GlobalProvider";

function AdminLogin() {
  const [cred, setCred] = useState({});
  const [error, setError] = useState();
  const [glbVals, setGlbVals] = useGlobalProvider();  
  const navigate = useNavigate();

  const changeCredHandler = (event) => {
    setError("");
    setCred((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const formDataHandler = async (event) => {
    event.preventDefault();

    // console.log("form cred", cred);
    await api
      .post("auth/check", cred)
      .then((res) => {
        // console.log("res",res)
        if (res.data === "success") {
          setGlbVals((prev) => ({ ...prev, username: cred.username}));
          localStorage.setItem("loggedIn",1);
          navigate("/admin");
        } else setError(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log("error", error);
  // console.log("glbvals",glbVals)

  return (
    <div className="authentication">
      <form method="POST" onSubmit={formDataHandler}>
        <h2> Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={changeCredHandler}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeCredHandler}
          required
        />
        <button type="submit">Login</button>
      </form>
      <span className="Error">{error}</span>
    </div>
  );
}

export default AdminLogin;
