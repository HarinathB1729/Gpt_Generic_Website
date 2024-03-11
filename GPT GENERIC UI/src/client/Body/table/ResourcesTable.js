import React from "react";
import TableData from "./TableData";

import { ArchiveBox } from "phosphor-react";

function ResourcesTable() {
  const tableHead = ["Subject Name", " Subject Code", "Subject File"];
  const tableData = [
    ["	English", "CM-101", "Download"],
    ["Engineering Mathematics – I", "CM-102", "Download"],
    ["Engineering Physics", "CM-103", "Download"],
    ["Engineering Chemistry & Environmental Studies", "CM-104", "Download"],
    ["Basics of Computer Engineering", "CM-105", "Download"],
    ["Programming in C", "CM-106", "Download"],
    ["Engineering Drawing", "CM-106", "Download"],
  ];
  return (
    <div class="resource">
      <TableData tableData={tableData} tableHead={tableHead} />
    </div>
  );
}

export default ResourcesTable;
