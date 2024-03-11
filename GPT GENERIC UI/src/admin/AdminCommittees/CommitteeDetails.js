import React, { useEffect, useState } from "react";
import "../adminconsole.css";
import {api,BASE_URL} from "../../api";
import { useCommitteeContextProvider } from "../../GlobalProviders/AdminCommitteeProvider";

function CommitteeDetails() {
  const [committee, setCommittee] = useCommitteeContextProvider();
  const comId = Object.keys(committee)[0];
  const [commImgUrl, setCommImgUrl] = useState(BASE_URL+ committee[comId].committeeData?.commImgUrl);

  const changeColValue = (e) => {
    setCommittee((prev) => ({ ...prev, [comId]: {...committee[comId],  ['committeeData'] :{...committee[comId].committeeData,  [e.target.name]: e.target.value}}}))
      // console.log("data",data)      
  };

  const colLogoHandler = (e) => {
    setCommittee((prev) => ({ ...prev, [comId]: {...committee[comId],  ['committeeData'] :{...committee[comId].committeeData,  [e.target.name]: e.target.files[0], ['commImgUrl']: "committees/img/"+[comId] }}}))
   
    const data = new FileReader();
    data.addEventListener("load", () => {
      setCommImgUrl(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  };


  // console.log("committee", committee)
  return (
    <div className="NoBorder">
      
      <table>
        <tbody>
          <tr>
            <td> Committee Name:</td>
            <td>
              <input
                name="commName_en"
                type="text"
                placeholder="Committee Name"
                onChange={changeColValue}
                value={committee[comId].committeeData?.commName_en}
                required
              />
            </td>
            <td>
              <input
                name="commName_tel"
                type="text"
                placeholder="Committee Name_tel"
                onChange={changeColValue}
                value={committee[comId].committeeData?.commName_tel}
                required
              />
            </td>
          </tr>

          <tr>
            <td>Committee Description :</td>
            <td>
              <textarea
                name="commDescr_en"
                rows="5"
                cols="75"
                placeholder=" Committee Description"
                onChange={changeColValue}
                value={committee[comId].committeeData?.commDescr_en}
                required
              />
            </td>
            <td>
              <textarea
                name="commDescr_tel"
                rows="5"
                cols="75"
                placeholder=" Committee Description"
                onChange={changeColValue}
                value={committee[comId].committeeData?.commDescr_tel}
                required
              />
            </td>
          </tr>

          <tr>
            <td> Committee Meetings Photo:</td>
            <td>
              <input
                name="commMeetingPhoto"
                type="file"
                onChange={colLogoHandler}
                //required
              />
            </td>
            {commImgUrl && (
                  <td>
                    <img
                      className="DisplayImage"
                      src={commImgUrl}
                      alt="Committee Meeting"
                    />
                  </td>
                )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CommitteeDetails;
