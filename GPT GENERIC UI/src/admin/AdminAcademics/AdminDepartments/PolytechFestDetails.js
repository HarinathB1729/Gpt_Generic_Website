import React, { useState } from "react";
import { XSquare } from "phosphor-react";
import "../../adminconsole.css";

function PolytechFestDetails(props) {
  const [ptf, setPtf] = useState(props.data);

  const ptfDataHandler = (event) => {
    let data = { ...ptf, [event.target.name]: event.target.value };
    setPtf((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    props.updatePtfData(props.value, data);
  };

  return (
    <div>
      <XSquare
        className="closeIcon"
        size={20}
        onClick={() => {
          return props.delPtfData(props.value);
        }}
      />
      <table>
        <tbody>
          <tr>
            <td>Academic Year</td>
            <td>
              <input
                type="text"
                placeholder="Ex: 2020-21"
                pattern="[1-2][0-9]{3}-[0-9]{2}"
                name="acdYear"
                onChange={ptfDataHandler}
                value={ptf?.acdYear}
                required
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Project Name</td>
            <td>
              <input
                type="text"
                placeholder="Project Name"
                name="projName_en"
                onChange={ptfDataHandler}
                value={ptf?.projName_en}
                required
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="ప్రాజెక్ట్ పేరు"
                name="projName_tel"
                onChange={ptfDataHandler}
                value={ptf?.projName_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Project Description</td>
            <td>
              <textarea
                rows="5"
                cols="75"
                placeholder="Project Description"
                name="projDescr_en"
                onChange={ptfDataHandler}
                value={ptf?.projDescr_en}
                required
              />
            </td>
            <td>
              <textarea
                rows="5"
                cols="75"
                placeholder="
                ప్రాజెక్ట్ వర్ణన"
                name="projDescr_tel"
                onChange={ptfDataHandler}
                value={ptf?.projDescr_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Students Team</td>
            <td>
              <textarea
                rows="5"
                cols="75"
                placeholder="Students Team"
                name="stuTeam_en"
                onChange={ptfDataHandler}
                value={ptf?.stuTeam_en}
                required
              />
            </td>
            <td>
              <textarea
                rows="5"
                cols="75"
                placeholder="విద్యార్థుల బృందం"
                name="stuTeam_tel"
                onChange={ptfDataHandler}
                value={ptf?.stuTeam_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Project Guide</td>
            <td>
              <input
                type="text"
                placeholder="Project Guide"
                name="projGuide_en"
                onChange={ptfDataHandler}
                value={ptf?.projGuide_en}
                required
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="
                ప్రాజెక్ట్ మార్గదర్శకుడు"
                name="projGuide_tel"
                onChange={ptfDataHandler}
                value={ptf?.projGuide_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Project Selection Status</td>
            <td>
              <textarea
                rows="5"
                cols="75"
                placeholder="Project Selection Status"
                name="projStatus_en"
                onChange={ptfDataHandler}
                value={ptf?.projStatus_en}
                required
              />
            </td>
            <td>
              <textarea
                rows="5"
                cols="75"
                placeholder="
                ప్రాజెక్ట్ ఎంపిక స్థితి"
                name="projStatus_tel"
                onChange={ptfDataHandler}
                value={ptf?.projStatus_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td>To be uploaded in POLYTECHFEST Page ? </td>
            <td>
              <input
                type="checkbox"
                name="projCheck"
                onChange={ptfDataHandler}
                checked={ptf?.projCheck == 'on' ? true : false}
                // required
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PolytechFestDetails;
