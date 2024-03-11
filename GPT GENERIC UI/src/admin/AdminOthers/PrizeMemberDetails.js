import React, { useState } from "react";
import { XSquare } from "phosphor-react";
import "../adminconsole.css";

function PrizeMemberDetails(props) {
  const [member, setMember] = useState(props.data);

  const changeColValue = (e) => {
    let data = {...member, [e.target.name]: e.target.value}
    setMember((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    props.updateAyPrizeData(props.value, data)
  };

  // console.log("member : ",member)
  return (
    <tr style={{borderBottom:"1px solid black"}}>
      <td>
        <input
          type="text"
          placeholder="Academic Year"
          name="acdYear"
          onChange={changeColValue}
          value={member?.acdYear}
          pattern="[1-2][0-9]{3}-[0-9]{2}"
        />
      </td>
      <td>
        <input
          type="text"
          name="stuPIN"
          onChange={changeColValue}
          value={member?.stuPIN}
          placeholder="Student PIN"
        />
      </td>
      <td>
        <input
          type="text"
          name="stuName_en"
          onChange={changeColValue}
          value={member?.stuName_en}
          placeholder="Student Name"
        />
        <input
          type="text"
          name="stuName_tel"
          onChange={changeColValue}
          value={member?.stuName_tel}
          placeholder="విద్యార్థి పేరు"
        />
      </td>
      <td>
        <input
          type="text"
          name="venueDetails_en"
          onChange={changeColValue}
          value={member?.venueDetails_en}
          placeholder="Venue Details"
        />
        <input
          type="text"
          name="venueDetails_tel"
          onChange={changeColValue}
          value={member?.venueDetails_tel}
          placeholder="వేదిక వివరాలు"
        />
      </td>
      <td>
        <input
          type="text"
          name="sgName_en"
          onChange={changeColValue}
          value={member?.sgName_en}
          placeholder="Sports/Games Name"
        />
        <input
          type="text"
          name="sgName_tel"
          onChange={changeColValue}
          value={member?.sgName_tel}
          placeholder="క్రీడలు / గేమ్స్ పేరు"
        />
      </td>
      <td>
        <input
          type="text"
          name="prizeDetails_en"
          onChange={changeColValue}
          value={member?.prizeDetails_en}
          placeholder="Prize Details"
        />
        <input
          type="text"
          name="prizeDetails_tel"
          onChange={changeColValue}
          value={member?.prizeDetails_tel}
          placeholder="బహుమతి వివరాలు"
        />
      </td>
      <td>
        <XSquare
          className="closeIcon"
          size={15}
          onClick={() => {
            return props.delAyPrizeData(props.value);
          }}
        />
      </td>
    </tr>
  );
}

export default PrizeMemberDetails;
