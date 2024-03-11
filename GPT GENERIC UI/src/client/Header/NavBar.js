import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
 
  
  return (
    <>
      <li style={{ cursor: "pointer" }} >
        {props.navBarItem[0]}
        <ul className="Dropdown">          
          {props.navBarItem[1].map((ni) => {
            return (
              <li key={ni[0]} className="NavLink">
                <NavLink to={ni[1]}>                
                  {ni[0]}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </li>
    </>
  );
}

export default NavBar;
