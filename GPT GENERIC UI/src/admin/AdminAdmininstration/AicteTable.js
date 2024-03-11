import {api,BASE_URL} from "../../api";
import React from "react";
import FileDownload from "js-file-download";
import { useGlobalProvider } from "../../GlobalProvider";


function AicteTable(props) {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";
  // console.log("props", props.data);

  const downloadBtnHandler = async (e) => {
    e.preventDefault();
    // console.log("btn name ",e.target.name)
    api({
      url: "/aicte/" + e.target.name,
      method: "GET",
      responseType: "blob", // Important
    })
      .then((response) => {
        // console.log("respnse",response)
        FileDownload(response.data, e.target.name + "EOA File.pdf");
      })
      .catch((err) => console.log("Error :", err));
  };



  return (
    <div className="TableContainer">
      <table>
        <thead>
          <tr>
            <th>{glbVals.telugu ? "విద్యా సంవత్సరం" : "Academic Year"}</th>
            <th>{glbVals.telugu ? "ఆమోదం పొడిగింపు ఫైల్" : "EoA File"}</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(props.data).map((row) => {
            return (
              <tr key={row[0]}>
                <td>{row[1].eoaAcaYear}</td>
                <td>
                  <button name={row[1].eoaAcaYear} onClick={downloadBtnHandler}>
                   {"Download " + row[1].eoaAcaYear + " EoA "} 
                  </button>                
                </td>
              </tr>
            );
          })}
          ;
        </tbody>
      </table>
    </div>
  );
}

export default AicteTable;
