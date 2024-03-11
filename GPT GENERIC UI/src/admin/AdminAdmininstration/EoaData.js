import React, { useState } from "react";
import { XSquare } from "phosphor-react";

function EoaData(props) {
  const [eoaData, setEoaData] = useState(props.data);

  const changeColValue = (e) => {
    let data = { ...eoaData, [e.target.name]: e.target.value };
    setEoaData((prev)=>({...prev, [e.target.name]: e.target.value}));
    props.updateEoaYrData(props.value, data);
  }

  const fileHandler = (e)=>{
    let data = { ...eoaData, [e.target.name]: e.target.files[0] };
    setEoaData((prev)=>({...prev, [e.target.name]: e.target.files[0]}))
    props.updateEoaYrData(props.value, data);
  }

  // console.log("props", props.data);

  // console.log("eoadata", eoaData);
  return (
    <tr>
      <td>
        <input
          type="text"
          // pattern="[1-2][0-9]{3}-[0-9]{2}"
          // onInvalid={(e) =>
          //   e.target.setCustomValidity("Valid Format Ex:2018-19")
          // }
          name="eoaAcaYear"
          placeholder="Acadamic Year Ex:2018-19"
          onChange={changeColValue}
          value={props.data?.eoaAcaYear}
          //required
        />
      </td>
      <td>
        <input
          type="file"
          name="eoaReport"
          onChange={fileHandler}
          //required
        />
      </td>
      <td>
        <XSquare
          className="closeIcon"
          size={20}
          onClick={() => {
            props.delEoaYrData(props.value);
          }}
        />
      </td>
    </tr>
  );
}

export default EoaData;
