import React, { useState } from "react";
import { PencilSimpleLine, Trash, Download } from "phosphor-react";
import {api,BASE_URL} from "../../api";
import FileDownload from "js-file-download";
import AlertDialog from "../../Utilities/AlertDialog";
import Tooltip from "@mui/material/Tooltip";

function AdminAicteTable(props) {
  const [showDialog, setShowDialog] = useState(false);

  let id = Object.keys(props.data)[0];
  let theadData = Object.keys(props.data[id]);

  let rows = Object.keys(props.data).length;
  let cols = theadData.length;

  var tbodyData = new Array(rows);
  for (var i = 0; i < rows; i++) {
    tbodyData[i] = new Array(cols).fill(0);
  }

  Object.keys(props.data).map((row, i) => {
    // console.log("row", row)
    tbodyData[i] = row;
  });

  const downloadBtnHandler = async (year) => {
    api({
      url: "/aicte/" + year,
      method: "GET",
      responseType: "blob", // Important
    }).then((response) => {
      FileDownload(response.data, year + " EOA.pdf");
    });
  };

  // console.log("tbodyData", tbodyData);
  // console.log("showdialog", showDialog);

  return (
    <div className="TableContainer">
      <table>
        <thead>
          <tr>
            {props.theadData.map((th, i) => {
              return <th key={i}>{th} </th>;
            })}
            <th>EOA File</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tbodyData.map((row) => {
            // console.log("row",row)
            return (
              <tr key={Math.random()}>
                <td>{row}</td>
                <td>
                  <Tooltip title="D O W N L O A D ">
                    <Download
                      size={26}
                      weight="fill"
                      onClick={(e) => {
                        e.preventDefault();
                        downloadBtnHandler(row);
                      }}
                    />
                  </Tooltip>
                </td>
                <td>
                  <Tooltip title="E D I T ">
                    <PencilSimpleLine
                      size={26}
                      onClick={() => {
                        return props.editDbData(row);
                      }}
                    />
                  </Tooltip>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 
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
                          return props.deleteDbData(row);
                      }}
                    />
                  </Tooltip>                  
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminAicteTable;
