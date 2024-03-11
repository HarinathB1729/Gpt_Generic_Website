import React from "react";
import TableData from "./TableData";

function IPSGMTable() {
  const acdYear = "2020-2023";
  const tableHead = [
    "Student PIN",
    "Student Name",
    "Venue Details",
    "Sports Name",
    "Prize Details",
  ];
  const tableData = [
    ["20154-CM-014", "K.L.Anjana", "proddatur", "FootBall", "1st"],
    ["21154-CM-014", "Mahendra kumar", "proddatur", "Kabaddi", "3rd"],
    ["22154-CM-014", "k.Hari", "proddatur", "Running", "1st"],
 
  ];

  return (
    <div className="IPSGMTable">
      <center><h4>In {acdYear} Academic Year </h4></center>
      <TableData tableData={tableData} tableHead={tableHead} />
    </div>
  );
}

export default IPSGMTable;
