import React from "react";
import { Download } from "phosphor-react";
import {api} from "../../../api";
import FileDownload from "js-file-download";
import Tooltip from "@mui/material/Tooltip";
import { useGlobalProvider } from "../../../GlobalProvider";

function ResourceFileTableBuilder(props) {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";

  // console.log("props", props);
  let rows = Object.keys(props.data).length;
  let cols = props.theadData[lang].length;

  var tbodyData = new Array(rows);
  for (var i = 0; i < rows; i++) {
    tbodyData[i] = new Array(cols).fill(0);
  }

  const downloadBtnHandler = async (dept, year, subCode) => {
    // console.log("url", props.fileUrl + dept + "/" + year + "/" + subCode);
    api({
      url: props.fileUrl + dept + "/" + year + "/" + subCode,
      method: "GET",
      responseType: "blob", // Important
    }).then((response) => {
      FileDownload(response.data, subCode + " file.pdf");
    });
  };

  // console.log("tbodyData", tbodyData);
  // console.log("showdialog", showDialog);

  return (
    <div className="TableContainer">
      <table>
        <thead>
          <tr>
            {props.theadData[lang].map((th, i) => {
              return <th key={i}>{th} </th>;
            })}
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(props.data).map((row, i) => {
            // console.log("row", row);
            const rowData = Object.entries(row[lang]).map((data, j) => {
              // console.log("data 0,1:",data[0],data[1])
              return <td key={Math.random()}>{data[1]}</td>;
            });

            return (
              <tr key={Math.random()}>
                {rowData}
                <td>
                  <Tooltip
                    title={
                      glbVals.telugu ? " డౌ న్‌ లో డ్ " : " D O W N L O A D "
                    }
                  >
                    <Download
                      size={26}
                      weight="fill"
                      onClick={(e) => {
                        e.preventDefault();
                        downloadBtnHandler(
                          row["en"].deptCode,
                          row["en"].year,
                          row["en"].subCode
                        );
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

export default ResourceFileTableBuilder;
