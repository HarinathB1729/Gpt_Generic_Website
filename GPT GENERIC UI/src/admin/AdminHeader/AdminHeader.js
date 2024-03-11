import React from "react";
import "../adminconsole.css";
import AdminNavItems from "./AdminNavItems";
import { NavLink } from "react-router-dom";
import AdminAccount from "./AdminAccount";

function AdminHeader() {
  //HARD CODED - 3
  const navItems = {
    Home: ["Basic Details", "CTE Principal", "Administrative structure"],

    Academics: ["Academics", "Departments", "APTES", "Placements"],

    Administration: ["Administrative Office", "Committees", "AICTE", "Right To Information"],

    ['Student Corner']: ["Hostels", "Resources","Alumni"],

    Media: ["Events", "News Hub", "Notifications"],

    others: [
      "Library",
      "IPSGM",
      "Skill Developement Center",
      "Why Polytechnic?",
      "FAQs",
    ],
  };
    // console.log("G",window.$telObj.id)

  return (
    <>
      <div className="admin-top">
        
        <div className="Heading ">
          <NavLink className="NavLink" to="/admin">
            <h1>AdminConsole</h1>
          </NavLink>
        </div>
       
        <div className="Account">
          <AdminAccount />
        </div>
      </div>

      <div className="NavBar">
        <ul>
          {Object.entries(navItems).map((ni) => {
            return <AdminNavItems key={ni} navItem={ni} />;
          })}
        </ul>
      </div>
    </>
  );
}
export default AdminHeader;
