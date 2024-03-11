import React, { useState } from "react";
import { XSquare } from "phosphor-react";
import "../adminconsole.css";

function CommitteeMember(props) {
  const [member, setMember] = useState(props.data);

  const changeColValue = (event) => {
    setMember((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    let data = { ...member, [event.target.name]: event.target.value };

    props.updateMemberData(props.value, data);
  };

  // console.log("member",member)
  return (
    <React.Fragment>
      <XSquare
        className="closeIcon"
        size={16}
        onClick={() => {
          // console.log("button clicked", props.value);
          return props.delMember(props.value);
        }}
      />
      <tr style={{ borderBottom: "1px solid black" }}>
        <td>
          <input
            type="text"
            name="commMemName_en"
            placeholder="Committee comMembers Name"
            onChange={changeColValue}
            value={member?.commMemName_en}
          />
          <input
            type="text"
            name="commMemName_tel"
            placeholder="కమిటీ సభ్యుడు పేరు"
            onChange={changeColValue}
            value={member?.commMemName_tel}
          />
        </td>
        <td>
          <input
            type="text"
            name="commMemDesgn_en"
            placeholder="Committee comMembers Designation"
            onChange={changeColValue}
            value={member?.commMemDesgn_en}
          />
          <input
            type="text"
            name="commMemDesgn_tel"
            placeholder="కమిటీ సభ్యుడు పదవి"
            onChange={changeColValue}
            value={member?.commMemDesgn_tel}
          />
        </td>
        <td>
          <input
            type="text"
            name="commMemRole_en"
            placeholder="Committee Role"
            onChange={changeColValue}
            value={member?.commMemRole_en}
          />
          <input
            type="text"
            name="commMemRole_tel"
            placeholder="కమిటీ సభ్యుడు పాత్ర"
            onChange={changeColValue}
            value={member?.commMemRole_tel}
          />
        </td>
        <td>
          <input
            type="text"
            // pattern="[6-9][0-9]{9}"
            onInvalid={(e) =>
              e.target.setCustomValidity("Enter Valid Mobile Number")
            }
            name="commMemPhno"
            placeholder="comMembers contact no"
            onChange={changeColValue}
            value={member?.commMemPhno}
          />
        </td>
      </tr>

      
    </React.Fragment>
  );
}

export default CommitteeMember;
