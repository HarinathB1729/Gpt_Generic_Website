import React from "react";
import pnf from "../img/pagenotfound.jpg";
import "./client.css";

function PageNotFound() {
  return <div className="PageNotFound"> <img width={'50%'} height={'50%'} src={pnf} alt="PageNotFound" /></div>;
}

export default PageNotFound;
