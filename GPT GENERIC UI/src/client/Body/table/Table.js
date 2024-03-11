import React from "react";
import TableData from "./TableData";

function Table() {
  const tableHead = [
    "Academic Year",
    "Student Pin NO",
    "Student Name",
    "Department",
    "Name of the Company",
    "Remarks",
  ];
  const tableData = [
    ["2022-2023", "20154-EC-003", "P.Shiva Kumar", "DECE", "EFFTRONICS","NIL"]
  ];

  return (
    <div>
      <TableData tableData={tableData} tableHead={tableHead} />
    </div>
  );
}

export default Table;
