import React from "react";
import { PencilSimpleLine, Trash } from "phosphor-react";
import Tooltip from "@mui/material/Tooltip";

// import styles from "./Table.module.css";

function PhotoTableBuilder(props) {
  let id = Object.keys(props.data)[0];
  let theadData = Object.keys(props.data[id]);
  const imgUrl = props.imgUrl;

  let rows = Object.keys(props.data).length;
  let cols = theadData.length;

  var tbodyData = new Array(rows);
  for (var i = 0; i < rows; i++) {
    tbodyData[i] = new Array(cols - 1).fill(0);
  }


  Object.values(props.data).map((row, i) => {
    // console.log("row", row)
    return Object.entries(row).map((data, j) => {
      return (tbodyData[i][j] = data[1]);
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
            <th>Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tbodyData.map((row) => {
            // console.log("row",row)
            const rowData = row.map((col) => {
              //  console.log("col",typeof(col))
              if (String(col).includes("http://")) return;
              return <td key={col}>{col}</td>;
            });

            return (
              <tr key={Math.random()}>
                {rowData}
                {/* {console.log("url", imgUrl + row[0])} */}
                <td>
                  <img height={"100px"} width={"100px"} src={imgUrl + row[0]} />{" "}
                </td>
                <td>
                <Tooltip title="E D I T ">
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

export default PhotoTableBuilder;
