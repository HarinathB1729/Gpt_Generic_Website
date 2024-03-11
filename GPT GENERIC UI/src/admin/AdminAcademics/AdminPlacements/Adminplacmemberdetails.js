import React, { useState } from "react";
import { XSquare } from "phosphor-react";
import "../../adminconsole.css";

function Adminplacmemberdetails(props) {
  const [member, setMember] = useState(props.data);
//  console.log("props",props)

  const changeColValue = (event) => {
    setMember((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    let data = { ...member, [event.target.name]: event.target.value };

    props.updateMemberData(props.value, data);
  };

  return (
    <tr style={{ borderBottom: "1px solid black" }}>
      <td>
        <input
          type="text"
          name="acdYear"
          placeholder="Academic Year"
          value={member?.acdYear}
          onChange={changeColValue}
        />
      </td>
      <td>
        <input
          type="text"
          name="deptCode"
          placeholder="Department"
          onChange={changeColValue}
          value={member?.deptCode}
        />     
      </td>
      <td>
        <input
          type="text"
          name="stuPIN"
          placeholder="Student PIN"
          onChange={changeColValue}
          value={member?.stuPIN}
        />
        <></>
      </td>
      <td>
        <input
          type="text"
          name="stuName_en"
          placeholder="Student Name"
          onChange={changeColValue}
          value={member?.stuName_en}
        />
        <input
          type="text"
          name="stuName_tel"
          placeholder="విద్యార్థి పేరు"
          onChange={changeColValue}
          value={member?.stuName_tel}
        />
      </td>
   
      <td>
        <input
          type="text"
          name="compName_en"
          placeholder="Name of the Company"
          onChange={changeColValue}
          value={member?.compName_en}
        />
        <input
          type="text"
          name="compName_tel"
          placeholder="కంపెనీ పేరు"
          onChange={changeColValue}
          value={member?.compName_tel}
        />
      </td>
      <td>
        <input
          type="text"
          name="remarks_en"
          placeholder="Remarks"
          onChange={changeColValue}
          value={member?.remarks_en}
        />
        <input
          type="text"
          name="remarks_tel"
          placeholder="వ్యాఖ్యలు"
          onChange={changeColValue}
          value={member?.remarks_tel}
        />
      </td>

      <XSquare
        className="closeIcon"
        size={20}
        onClick={() => {
          return props.delMember(props.value);
        }}
      />
    </tr>
  );
}

export default Adminplacmemberdetails;
