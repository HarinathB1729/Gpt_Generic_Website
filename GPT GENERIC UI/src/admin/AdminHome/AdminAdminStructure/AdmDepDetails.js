import React, { useEffect, useState } from "react";
import { XSquare } from "phosphor-react";
import "../../adminconsole.css";

function AdmDepDetails(props) {
  const [dept, setDept] = useState({});

  useEffect(() => {
    const deptUpdate = () => {
      setDept(props.exData);
    };
    deptUpdate();
  }, [props.exData]);

  const changeDeptValue = (event) => {
    let data = { ...dept, [event.target.name]: event.target.value };
    setDept(data);
    props.updateDeptValue(props.value, data);
  };
  // console.log(" dept", dept);
  return (
    <div>
      {!props.exData.deptName && (
        <XSquare
          className="closeIcon"
          size={20}
          onClick={() => {
            // if(window.confirm("Do you Want to Delete Department Permanently ?"))
            return props.delDepts(props.value);
          }}
        />
      )}

      <table className="TableCol--4">
        <tbody>
          <tr>
            <td> Department Code :</td>
            <td>
              <input
                required
                type="text"
                name="deptCode"
                placeholder="Department Code"
                onChange={changeDeptValue}
                value={dept?.deptCode}
              />
            </td>
            <td>Head of Department : </td>
            <td>
              <input
                required
                type="number"
                name="deptHOD"
                placeholder="Number Only"
                onChange={changeDeptValue}
                value={dept?.deptHOD}
              />
            </td>
          </tr>

          <tr>
            <td>Senior Lecturer(s) : </td>
            <td>
              <input
                required
                type="number"
                name="deptSrLect"
                placeholder="Number Only"
                onChange={changeDeptValue}
                value={dept?.deptSrLect}
              />
            </td>

            <td>Lecturer(s):</td>
            <td>
              <input
                required
                type="number"
                name="deptLects"
                placeholder="Number Only"
                onChange={changeDeptValue}
                value={dept?.deptLects}
              />
            </td>
          </tr>
          <tr>
            <td>Instructor(s):</td>
            <td>
              <input
                required
                type="number"
                name="deptInstrs"
                placeholder="Number Only"
                onChange={changeDeptValue}
                value={dept?.deptInstrs}
              />
            </td>

            <td>Contract Lecturer(s):</td>
            <td>
              <input
                required
                type="number"
                name="deptContLectrs"
                placeholder="Number Only"
                onChange={changeDeptValue}
                value={dept?.deptContLectrs}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdmDepDetails;
