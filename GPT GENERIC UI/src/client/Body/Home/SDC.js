import React, { useEffect } from "react";
import { useGlobalProvider } from "../../../GlobalProvider";
import useFetchDbData from "../../Utilities/useFetchDbData";
import { api, BASE_URL } from "../../../api";

function SDC() {
  const sdcData = useFetchDbData("sdc");

  console.log("sdc", sdcData);

  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);

  return (
    <div className="Body">
      <div className="SDC">
        <h2>
          {glbVals.telugu
            ? "నైపుణ్య అభివృద్ధి కేంద్రం "
            : "Skill Development Center "}
        </h2>
        <div className="Committees">
          <div className="Committees_Introduction">
            <div className="logo">
              <img
                src={BASE_URL + sdcData[lang]?.sdcPhotoUrl}
                alt="SDC photo"
              />
            </div>
            <div className="Committees_Message">
              <p>{sdcData[lang]?.sdcIntro}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="College_Details">
        <h3>
          {glbVals.telugu
            ? "నైపుణ్యాభివృద్ధి కేంద్రం- ఇన్‌ఛార్జ్"
            : "Skill Developement Center - In-Charge"}
        </h3>
        <table>
          <tr>
            <th>{glbVals.telugu ? "ఇన్‌ఛార్జ్ పేరు" : " In-Charge Name"}</th>
            <td>{sdcData[lang]?.sdcInchargeName}</td>
          </tr>
          <tr>
            <th>
              {glbVals.telugu ? "ఇన్‌ఛార్జ్ హోదా" : " In-Charge Designation"}
            </th>
            <td>{sdcData[lang]?.sdcInchargeDesgn}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default SDC;
