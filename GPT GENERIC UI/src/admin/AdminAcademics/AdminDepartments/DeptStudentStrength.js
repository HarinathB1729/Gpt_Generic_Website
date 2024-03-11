import {api,BASE_URL} from "../../../api";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../adminconsole.css";

function DeptStudentStrength(props) {
  const [stuStr, setStuStr] = useState({ deptCode : props.deptCode});
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchStuStrData = async () => {
      //STUDENT  DATA FETCHING
      await api
        .get("stustr/dept/" + props.deptCode)
        .then((res) => {
          // console.log("res", res);
          if (res.data.length > 0) setStuStr(res.data[0]);
        })
        .catch((err) => console.log(err));
    };
    fetchStuStrData();
  }, [props.deptCode,formSub]);

  const changeColValue = (e) => {
    setStuStr((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // props.updateStuStrength(data);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata value", eventsData);

    try {
      await api
        .post("stustr", stuStr)
        .then(function (response) {
          window.alert(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };
  // console.log("stu strength props", props);
  // console.log("stu strength", stuStr);

  return (
    <form method="POST" onSubmit={formDataHandler}>
      <div>
        <h4>{props.deptCode} - Student Strength</h4>
        <table className="TableTd--2">
          <tbody>
            <tr>
              <th>Acadaminc Year</th>
              <th>Student Strength</th>
            </tr>
            <tr>
              <td>First Year</td>
              <td>
                <input
                  type="number"
                  name="fisYear"
                  onChange={changeColValue}
                  value={stuStr?.fisYear}
                  placeholder="Number Only"
                  // defaultValue={0}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Second Year</td>
              <td>
                <input
                  type="number"
                  name="secYear"
                  placeholder="Number Only"
                  value={stuStr?.secYear}
                  // defaultValue={0}
                  onChange={changeColValue}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Third Year</td>
              <td>
                <input
                  type="number"
                  name="thirdYear"
                  placeholder="Number Only"
                  value={stuStr?.thirdYear}
                  // defaultValue={0}
                  onChange={changeColValue}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <center>
          <button type="submit">submit</button>
        </center>
      </div>
    </form>
  );
}

export default DeptStudentStrength;
