import React, { Component } from "react";
import "./Table.css";
import"./PolytechFestTable.css";

function TableData(props) {
  return (
    <div>
      {/* Table Component */}
      <table>
        <thead>
          <tr>
            {props.tableHead.map((i) => {
              return <th key={i}>{i}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((l) => {
            const row = l.map((m) => {
              return <td key={m}>{m}</td>;
            });

            return <tr>{row}</tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
