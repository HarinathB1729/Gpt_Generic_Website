import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../adminconsole.css";
import { User } from "phosphor-react";
import { useGlobalProvider } from "../../GlobalProvider";

function AdminAccount() {
  const account = ["Change Password", "Logout"];
  const [glbVals,setGlbVals] = useGlobalProvider();

  return (
    <div className="profile-details">
      
      <span> <User size={24} color={"white"} /> Hello {glbVals.username} !!
        {/* {glbVals.user} */}
        <ul className="DropdownAcc">
          {account.map((ai) => {
            return (
              <li key={ai} className="NavLink">
                <NavLink
                  to={"/admin/" + ai.toLowerCase().split(" ").join("")}
                >
                  {ai}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </span>
    </div>
  );
}

export default AdminAccount;
