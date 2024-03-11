import React from "react";
import { NavLink } from "react-router-dom";
import "../adminconsole.css";

function AdminNavItems(props) {
  const navLink = props.navItem[0].toLowerCase().split(" ").join("");

  // console.log(props.navItem)
  return (
    <div className="NavBar">
      <ul>
        <li style={{ cursor: "pointer" }}>
          {props.navItem[0]}

          <ul className="Dropdown">
            {props.navItem[1].map((ni) => {
              return (
                <li key={ni} className="NavLink">
                  <NavLink
                    to={"/admin/" + ni.toLowerCase().split(" ").join("")}
                  >
                    {ni}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default AdminNavItems;
