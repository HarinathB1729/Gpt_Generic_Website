import React, { useEffect, useState } from "react";
import "../client.css";
import { NavLink } from "react-router-dom";
import { Users } from "phosphor-react";
import { useGlobalProvider } from "../../GlobalProvider";
import {api,BASE_URL} from "../../api";
import TelEngObjBuilderMultiple from "../Utilities/TelEngObjBuilderMultiple";
import useFetchDbData from "../Utilities/useFetchDbData";

function Footer() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";

  const basicDetails = useFetchDbData("basicdetails");
  const [committees, setCommittees] = useState({
    en: [["Right to Information", "/rti"]],
    tel: [["సమాచార హక్కు", "/rti"]],
  });

  useEffect(() => {
    api
      .get("committees/names")
      .then((res) => {
        // console.log("res", res.data);
        if (res.data.length) {
          let commit = TelEngObjBuilderMultiple(res.data);
          // console.log("commit", commit);
          let nbi = { ...committees };
          for (const [key, value] of Object.entries(commit)) {
            // console.log("commit value",value)
            nbi.en.unshift([
              value.en.commName,
              "/committees/" + value.en.comId,
            ]);
            nbi.tel.unshift([
              value.tel.commName,
              "/committees/" + value.tel.comId,
            ]);
          }
          // console.log("nbi", nbi);
          setCommittees(nbi);
        }
      })
      .catch((err) => console.log("Error :", err));
  }, []);

  // console.log("Committes", committees);
  // console.log("basicdetails", basicDetails);

  return (
    <div className="footer">
      <div className="colData">
        <div className="clgLogo">
          <img src={BASE_URL+ basicDetails[lang]?.colLogoUrl} alt="CollegeLogo" />
        </div>
        <h2>
          {basicDetails[lang]?.colName}, {basicDetails[lang]?.colLocation}{" "}
        </h2>
      </div>
      <div className="middle">
        <h2>{glbVals.telugu ? "బాహ్య లింకులు" : "External Links"}</h2>
        <div className="links">
          <ul>
            {Object.entries(committees[lang]).map((comm, i) => {
              // console.log("comm", comm);
              return (
                <li key={comm[0]}>
                  <NavLink to={comm[1][1]}>{comm[1][0]}</NavLink>
                </li>
              );
            })}
          </ul>
          <ul>
            <li>
              <a
                target="_blank"
                href="http://sbtetap.gov.in/Screens/Mainhome.aspx"
              >
                {glbVals.telugu ? "SBTET, AP" : "SBTET, AP"}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://dteap.nic.in/"
              >
                {glbVals.telugu ? "DTE, AP" : " DTE, AP"}
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.aicte-india.org/">
                {glbVals.telugu ? "ఏఐసిటిఈ, న్యూఢిల్లీ" : "AICTE, New Delhi"}
              </a>
            </li>
            <li>
              <a target="_blank" href="https://nptel.ac.in/">
                {glbVals.telugu ? "NPTEL" : "NPTEL"}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://sbtet.ap.gov.in/APSBTET/results.do"
              >
                {glbVals.telugu ? "డిప్లొమా ఫలితాలు" : "Diploma Results"}
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/aicte">{glbVals.telugu ? "ఏఐసిటిఈ":"AICTE"}</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">{glbVals.telugu ? "సంప్రదించండి":"Contact Us"}</NavLink>
            </li>
            <li>
              <NavLink to="/faqs">{glbVals.telugu ? "తరచుగా అడుగు ప్రశ్నలు":"FAQs"}</NavLink>
            </li>
            <li>
              <NavLink to="/organizationstructure">{glbVals.telugu ? "సంస్థ నిర్మాణం": "Organization Structure"}</NavLink>
            </li>
            <li>
              <NavLink to="/developers">{glbVals.telugu ? "డెవలపర్లు":"Developers"}</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="visCount">
        <h2>{glbVals.telugu ? "సందర్శకుల సంఖ్య":"Visitors Count"}</h2>
        <div>
          <h2 className="count">2345</h2>
          <Users size={38} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
