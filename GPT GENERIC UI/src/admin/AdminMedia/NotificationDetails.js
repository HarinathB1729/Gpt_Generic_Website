import React, {  useState } from "react";
import { XSquare } from "phosphor-react";
import "../adminconsole.css";
import DateHandler from "../DateHandler";

function NotificationDetails(props) {
  const [ntfcData, setNtfcData] = useState(props.data);

  // console.log("props",props.data)

  const changeColValue = (e) => {
    let data = { ...ntfcData, [e.target.name]: e.target.type=='checkbox'? e.target.checked : e.target.value };
    setNtfcData(data);
    props.updateNtfcsData(props.data.id, data);
  };

  let date = DateHandler(ntfcData?.ntfcDate, true);

  //  console.log("ntfcdata",ntfcData)
  return (
    <div>
      <XSquare
        className="closeIcon"
        size={20}
        onClick={() => {
          return props.delNtfcsData();
        }}
      />

      <table>
        <tbody>
          <tr>
            <td> Notification Date:</td>
            <td>
              <input
                required
                name="ntfcDate"
                type="date"
                onChange={changeColValue}
                value={date}
              />
            </td>
          </tr>
          <tr>
            <td> Notification Name:</td>
            <td>
              <input
                required
                name="ntfcName_en"
                type="text"
                placeholder="Notification Name"
                onChange={changeColValue}
                value={ntfcData?.ntfcName_en}
              />
            </td>
            <td>
              <input
                required
                name="ntfcName_tel"
                type="text"
                placeholder="ప్రకటన పేరు"
                onChange={changeColValue}
                value={ntfcData?.ntfcName_tel}
              />
            </td>
          </tr>
          <tr>
            <td> Notification Description:</td>
            <td>
              <textarea
                placeholder="Notification Description"
                rows="5"
                cols="75"
                name="ntfcDesc_en"
                onChange={changeColValue}
                value={ntfcData?.ntfcDesc_en}
              />
            </td>
            <td>
              <textarea
                placeholder="ప్రకటన వివరణ"
                rows="5"
                cols="75"
                name="ntfcDesc_tel"
                onChange={changeColValue}
                value={ntfcData?.ntfcDesc_tel}
              />
            </td>
          </tr>
          <tr>
            <td> Notification Link (If Any):</td>
            <td>
              <input
                type="text"
                placeholder="Notification Link including http:// or https://"
                name="ntfcLink"                
                onChange={changeColValue}               
                value={ntfcData?.ntfcLink}
              />
            </td>
          </tr>
          <tr>
            <td> New Label for Notification (Click if Yes):</td>
            <td>
              <input
                type="checkbox"               
                name="ntfcNewItem"                
                onChange={changeColValue}               
                checked={ntfcData?.ntfcNewItem}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NotificationDetails;
