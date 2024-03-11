import React from "react";
import TableData from "./TableData";

function PolyTechFestTable() {
  const tableHead = [
    "ACADEMIC YEAR",
    "PROJECT NAME",
    "PROJECT DESCRIPTION",
    "STUDENT TEAM",
    "PROJECT GUIDE ",
    "PROJECT SECTION STATUS"
  ];
  const tableData = [
    ["2022-2023","Android App","A project in Android Studio contains everything that defines your workspace for an app, from source code and assets to test code and build configurations. When you start a new project, Android Studio creates the necessary structure for all your files and makes them visible in the Project window in Android Studio","HARI KRISHNA NARESH MAHESH","B.Harinath","selected to State level"],
    ["2022-2023","Web Site","website is a collection of publicly accessible, interlinked Web pages that share a single domain name. Websites can be created and maintained by an individual, group, business or organization to serve a variety of purposes. Together, all publicly accessible websites constitute the World Wide WebHFGDGHFFDHGFDTRDFDTRDFGDTRDFGFDG","HARI KRISHNA NARESH MAHESH","B.Harinath","NO"], 
  ];

  return (
    <div>
      <TableData tableData={tableData} tableHead={tableHead} />    
    </div>
  );
}

export default PolyTechFestTable;
