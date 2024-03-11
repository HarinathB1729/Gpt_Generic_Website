import React from "react";
import { useGlobalProvider } from "../GlobalProvider";

function ClientTableBuilder(props) {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";
  
  // console.log("props", props);
  let rows = Object.keys(props.data).length;
  let cols = props.theadData[lang].length;

  var tbodyData = new Array(rows);
  for (var i = 0; i < rows; i++) {
    tbodyData[i] = new Array(cols).fill(0);
  }

 

  return (
    <div className="TableContainer">
      <table>
        <thead>
          <tr>
            {props.theadData[lang].map((th, i) => {
              return <th key={Math.random()}>{th} </th>;
            })}
          </tr>
        </thead>
        <tbody>

          {Object.values(props.data).map((row, i) => {
            // console.log("row", row)
            const rowData = Object.entries(row[lang]).map((data, j) => {
              // console.log("data 0,1:",data[0],data[1])
              return <td key={Math.random()}>{data[1]}</td> 
            });
            return <tr key={Math.random()}>{rowData}</tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ClientTableBuilder;
