import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchDbData from "../../Utilities/useFetchDbData";
import { useGlobalProvider } from "../../../GlobalProvider";
import { api, BASE_URL } from "../../../api";

function Hostels() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);

  const { hostelId } = useParams();
  // console.log("hostelid",id)
  const hostelData = useFetchDbData("hostels/" + hostelId);
  // console.log("hostelData", hostelData);

  // const Hostel_Message =
  //   "The principal is the chief executive and the chief academic officer of a university or college in certain parts of the Commonwealth.In the United States, the principal is the head of school at most pre-university, non-boarding schools.The principal is the chief executive and the chief academic officer of a university or college in certain parts of the Commonwealth.In the United States, the principal is the head of school at most pre-university, non-boarding schools.";

  return (
    <div className="Body">
      <div className="Hostel">
        <h2>{hostelData[lang]?.HostelName}</h2>
        <div className="Committees">
          <div className="Committees_Introduction">
            <div className="logo">
              <img
                src={BASE_URL + hostelData[lang]?.HostelPhotoUrl}
                alt="Hostel Photo"
              />
            </div>
            <div className="Committees_Message">
              <p>{hostelData[lang]?.HostelIntro}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Hostel_Address">
        <h3>{glbVals.telugu ? "హాస్టల్ వివరాలు" : " Hostel Details"}</h3>
        <table>
          <tr>
            <th>{glbVals.telugu ? "హాస్టల్ పేరు" : " Hostel Name"}</th>
            <td>{hostelData[lang]?.HostelName}</td>
          </tr>
          <tr>
            <th>{glbVals.telugu ? "హాస్టల్ చిరునామా" : " Hostel Address"}</th>
            <td>{hostelData[lang]?.HostelAddr}</td>
          </tr>
          <tr>
            <th>
              {glbVals.telugu
                ? "హాస్టల్‌లో అదనపు సౌకర్యాలు"
                : " Extra Facilities at Hostel"}
            </th>
            <td>{hostelData[lang]?.HostelExFacilities}</td>
          </tr>
          <tr>
            <th>
              {glbVals.telugu
                ? "హాస్టల్ సూపర్‌వైజర్ పేరు"
                : "Hostel Supervisor Name"}
            </th>
            <td>{hostelData[lang]?.HostelSup}</td>
          </tr>

          <tr>
            <th>{glbVals.telugu ? "సంప్రదింపు నంబర్" : " Contact Number"}</th>
            <td>+91 {hostelData[lang]?.HostelPhno}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Hostels;
