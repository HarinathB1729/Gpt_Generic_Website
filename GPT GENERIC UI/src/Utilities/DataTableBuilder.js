import React from "react";
import { PencilSimpleLine,Trash } from "phosphor-react";
import Tooltip from "@mui/material/Tooltip";

// import styles from "./Table.module.css";

function DataTableBuilder(props) {
  // console.log("props table", props.data);
  let id = Object.keys(props.data)[0];
  let theadData = Object.keys(props.data[id]);
  // console.log("tablehead", theadData);

  let rows = Object.keys(props.data).length;
  let cols = theadData.length;

  var tbodyData = new Array(rows);
  for (var i = 0; i < rows; i++) {
    tbodyData[i] = new Array(cols).fill(0);
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  Object.values(props.data).map((row, i) => {
    // console.log("row", row)
    return Object.entries(row).map((data, j) => {
      // console.log("data 0,1:",data[0],data[1])
      if (data[0].includes("Date")) {
        let date = new Date(data[1]);
        tbodyData[i][j] =
          date.getDate() +
          " " +
          months[date.getMonth()] +
          " " +
          date.getFullYear();
        return tbodyData[i][j];
      } else return (tbodyData[i][j] = data[1]);
    });
  });

  // console.log("tbodyData", tbodyData);

  return (
    <div className="TableContainer">
      <table>
        <thead>
          <tr>
            {props.theadData.map((th, i) => {
              return <th key={i}>{th} </th>;
            })}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tbodyData.map((row) => {
            // console.log("row",row)
            const rowData = row.map((col) => {
              //  console.log("col",col)
              return <td key={Math.random()}>{col}</td>;
            });

            return (
              <tr key={Math.random()}>
                {rowData}

                <td><Tooltip title="E D I T ">
                  <PencilSimpleLine
                    size={26}
                    onClick={() => {
                      return props.editDbData(row[0]);
                      // console.log("rows.id, rows",row[0])
                    }}
                  /></Tooltip>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {/* <button
                    onClick={() => {
                      if(window.confirm("Do you Want to Delete Data Permanently ?"))
                        return props.deleteDbData(row[0]);
                    }}
                  >
                    Delete
                  </button> */}
                   <Tooltip title="D E L E T E ">
                   <Trash
                    size={26}
                    weight="fill"
                    color="red"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Do you Want to Delete Data Permanently ?"
                        )
                      )
                        return props.deleteDbData(row[0]);
                    }}
                  /></Tooltip>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTableBuilder;
