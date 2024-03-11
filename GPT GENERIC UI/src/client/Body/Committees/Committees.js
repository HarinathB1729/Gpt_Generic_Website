import React, { useState, useEffect } from "react";
import { useGlobalProvider } from "../../../GlobalProvider";
import { useParams, useNavigate } from "react-router-dom";
import {api,BASE_URL} from "../../../api";
import TelEngObjBuilder from "../../Utilities/TelEngObjBuilder";
import TelEngObjBuilderMultiple from "../../Utilities/TelEngObjBuilderMultiple";
import ClientTableBuilder from "../../../Utilities/ClientTableBuilder";
// import { useNavigate } from "react-router";

function Committees() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";

  // console.log("committees id", comId);
  const [committee, setCommittee] = useState({});
  const [commMembers, setCommMembers] = useState({});
  const { comId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
    const fetchCommitteeData = async () => {
      await api
        .get("committees/committee/" + comId)
        .then((res) => {
          // console.log("res", res.data);
          if (res.data.length) {
            setCommittee(TelEngObjBuilder(res.data[0]));
          } 
          else navigate("/pagenotfound");
        })
        .catch((err) => {
          console.log("Error :", err);
        });

      await api
        .get("committees/members/" + comId + "/noid")
        .then((res) => {
          // console.log("res", res.data);
          if (res.data.length) {
            setCommMembers(TelEngObjBuilderMultiple(res.data));
          }
        })
        .catch((err) => console.log("Error :", err));
    };
    fetchCommitteeData();
  }, [comId]);

  const theadData = {
    en: ["Member Name", "Designation", "Role", "Contact No"],
    tel: ["సభ్యుని పేరు", "హోదా", "పాత్ర", "సంప్రదంచాల్సిన నెం"],
  };

  // console.log("committees ", committee);
  // console.log("committee Members ", commMembers);

  return (
    <div className="Body">
      <h2>{committee[lang]?.commName}</h2>
      <div className="Committees">
        <div className="Committees_Introduction">
          <div className="logo">
            <img src={BASE_URL+ committee[lang]?.commImgUrl} alt="Committe photo" />
          </div>
          <div className="Committees_Message">
            <p>{committee[lang]?.commDescr}</p>
          </div>
        </div>
      </div>
      <div className="CommitteeTable">
        <h3>
        {committee[lang]?.commName} {glbVals.telugu
            ? " - సభ్యుల వివరాలు"
            : " - Members Details"}{" "}
        </h3>
        {Object.keys(commMembers).length > 0 && (
          <ClientTableBuilder data={commMembers} theadData={theadData} />
        )}
      </div>
    </div>
  );
}
export default Committees;
