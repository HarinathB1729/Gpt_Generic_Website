import React, { useEffect, useState } from "react";
import { XSquare } from "phosphor-react";
import "../../adminconsole.css";
import { api, BASE_URL } from "../../../api";

function OfficeStaffDetails(props) {
  const [staff, setStaff] = useState(props.data);
  const [staffImgUrl, setStaffImgUrl] = useState("");

  useEffect(() => {
    if (props.data) {
      setStaff(props.data);
      setStaffImgUrl(BASE_URL+props.data.staffPhoto);
    }
  }, [props.data]);

  const staffDataHandler = (event) => {
    let data = { ...staff, [event.target.name]: event.target.value };
    setStaff((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    props.updateStaffData(props.value, data);
  };

  const staffPhotoHandler = (event) => {
    let file = {
      ...staff,
      [event.target.name]: event.target.files[0],
      ["staffImgUrl"]: "adminstaff/img/" + props.value,
    };
    setStaff((prev) => ({
      ...prev,
      [event.target.name]: event.target.files[0],
      ["staffImgUrl"]: "adminstaff/img/" + props.value,
    }));
    props.updateStaffData(props.value, file);

    const data = new FileReader();
    data.addEventListener("load", () => {
      setStaffImgUrl(data.result);
    });

    data.readAsDataURL(event.target.files[0]);
  };

  const selectionHandler = (e) => {
    let [a, b] = e.target.value.split("_");
    let data = {
      ...staff,
      [e.target.name + "_en"]: a,
      [e.target.name + "_tel"]: b,
    };
    setStaff((prev) => ({
      ...prev,
      [e.target.name + "_en"]: a,
      [e.target.name + "_tel"]: b,
    }));
    props.updateStaffData(props.value, data);
  };

  // console.log("staff:",staff)

  return (
    <div>
      <XSquare
        className="closeIcon"
        size={20}
        onClick={() => {
          return props.delStaffData(props.value);
        }}
      />
      <table>
        <tbody>
          <tr>
            <td> Staff Designation:</td>
            <td>
              <select
                name="staffDesgn"
                type="text"
                onChange={selectionHandler}
                value={staff?.staffDesgn_en + "_" + staff?.staffDesgn_tel}
                required
              >
                <option value="">----Select----</option>
                <option value="Administrative Officer_అడ్మినిస్ట్రేటివ్ అధికారి">
                  Administrative Officer
                </option>
                <option value="Office Superintendent_కార్యాలయ సూపరింటెండెంట్">
                  Office Superintendent
                </option>
                <option value="Senior Assistant_సీనియర్ అసిస్టెంట్">
                  Senior Assistant
                </option>
                <option value="Junior Assistant_జూనియర్ అసిస్టెంట్">
                  Junior Assistant
                </option>
                <option value="Contract Staff_కాంట్రాక్ట్ సిబ్బంది">
                  Contract Staff
                </option>
                <option value="Office Subordinates_కార్యాలయ సబార్డినేట్లు">
                  Office Subordinates
                </option>
              </select>
            </td>
            <td></td>
          </tr>

          <tr>
            <td> Staff Name:</td>
            <td>
              <input
                name="staffName_en"
                placeholder="Staff Name"
                type="text"
                onChange={staffDataHandler}
                value={staff?.staffName_en}
                required
              />
            </td>
            <td>
              <input
                name="staffName_tel"
                placeholder="కార్యాలయ సిబ్బంది పేరు"
                type="text"
                onChange={staffDataHandler}
                value={staff?.staffName_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td> Staff Qualification:</td>
            <td>
              <input
                name="staffQual_en"
                placeholder="Staff Qualification "
                type="text"
                onChange={staffDataHandler}
                value={staff?.staffQual_en}
                required
              />
            </td>
            <td>
              <input
                name="staffQual_tel"
                placeholder="కార్యాలయ సిబ్బంది అర్హత"
                type="text"
                onChange={staffDataHandler}
                value={staff?.staffQual_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td> Years of Experience:</td>
            <td>
              <input
                name="staffExp"
                placeholder="Staff Experience"
                type="number"
                onChange={staffDataHandler}
                value={staff?.staffExp}
                required
              />
            </td>
          </tr>
          <tr>
            <td> Staff Photo:</td>
            <td>
              <input
                name="staffPhoto"
                type="file"
                onChange={staffPhotoHandler}
                // required
              />
            </td>
            {staffImgUrl && (
              <td>
                <img
                  className="DisplayImage"
                  src={staffImgUrl}
                  alt="staff"
                />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OfficeStaffDetails;
