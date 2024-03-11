import React, { useState } from "react";
import { XSquare } from "phosphor-react";
import "../adminconsole.css";

function RTIMemberDetails(props) {
  const [member, setMember] = useState(props.data);

  const changeColValue = (e) => {
    let data = { ...member, [e.target.name]: e.target.value };
    setMember((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    props.updateRtiMember(props.value, data);
  };

  return (
    <div>
      <XSquare
        className="closeIcon"
        size={20}
        onClick={() => {
          // console.log("button clicked", props.value);
          return props.delMember(props.value);
        }}
      />
      {/* {console.log("Rti Row Data:", member)} */}
      <table>
        <tbody className="TableCol--3">
          <tr>
            <td>RTI Officer Name:</td>
            <td>
              <input
                name="rtiMemName_en"
                type="text"
                placeholder="Committee Member Name"
                onChange={changeColValue}
                value={props.data?.rtiMemName_en}
                required
              />
            </td>
            <td>
              <input
                name="rtiMemName_tel"
                type="text"
                placeholder="ఆర్టీఐ అధికారి పేరు"
                onChange={changeColValue}
                value={props.data?.rtiMemName_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td> Designation:</td>
            <td>
              <input
                name="rtiMemDesgn_en"
                type="text"
                placeholder="Designation"
                onChange={changeColValue}
                value={props.data?.rtiMemDesgn_en}
                required
              />
            </td>
            <td>
              <input
                name="rtiMemDesgn_tel"
                type="text"
                placeholder="హోదా"
                value={props.data?.rtiMemDesgn_tel}
                onChange={changeColValue}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Position:</td>
            <td>
              <input
                name="rtiMemPos_en"
                type="Text"
                placeholder="Position"
                onChange={changeColValue}
                value={props.data?.rtiMemPos_en}
                required
              />
            </td>
            <td>
              <input
                name="rtiMemPos_tel"
                type="Text"
                placeholder="స్థానం"
                onChange={changeColValue}
                value={props.data?.rtiMemPos_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Mobile Number:</td>
            <td>
              <input
                type="tel"
                pattern="[6-9][0-9]{9}"
                name="rtiMemPhno"
                placeholder="10-digit mobile number"
                onChange={changeColValue}
                value={props.data?.rtiMemPhno}
                required
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RTIMemberDetails;
