import React from "react";
import TableData from "./TableData";

function RTITable() {
 
  const tableHead = [
    "RTI Officer Name",
    "Designation",
    "Officer Position",
    "Mobile Number",
  ];
  const tableData = [
    ["HARI KRISHNA", "HOD", "Member","9395623156"],
    ["HARI KRISHNA", "HOD", "Member","9395623156"],
    ["HARI KRISHNA", "HOD", "Member","9395623156"],
    ["HARI KRISHNA", "HOD", "Member","9395623156"],
    ["HARI KRISHNA", "HOD", "Member","9395623156"],
  ];

  return (
    <div>
      <h3>Member Details</h3>
      <TableData tableData={tableData} tableHead={tableHead} />
    </div>
  );
}

export default RTITable;
