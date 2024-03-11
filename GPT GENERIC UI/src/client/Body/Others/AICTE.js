import React, { useEffect, useState } from "react";
import img from "../../img/aictelogo.png";
import { useGlobalProvider } from "../../../GlobalProvider";
import AicteTable from "../../../admin/AdminAdmininstration/AicteTable";
import {api,BASE_URL} from "../../../api";

function AICTE() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";
  const [aicteData, setAicteData] = useState({});

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));

    const fetchEoaYrsData = async () => {
      //AY-EOA DATA FETCHING
      const act = await api.get("aicte");

      if (act.data.length) {
        let temp = {};
        for (const [key, value] of Object.entries(act.data)) {
          temp = { ...temp, [value.eoaAcaYear]: value };
        }
        // console.log(temp)
        setAicteData(temp);
      }
    };
    fetchEoaYrsData();
  }, []);

  const para_1 = {
    en: "All India Council for Technical Education (AICTE) was set up in November 1945 as a national-level Apex Advisory Body to conduct a survey on the facilities available for technical education and to promote development in the country in a coordinated and integrated manner.",
    tel: " సాంకేతిక విద్య కోసం అందుబాటులో ఉన్న సౌకర్యాలపై సర్వే చేయడానికి మరియు దేశంలో సమన్వయంతో మరియు సమగ్ర పద్ధతిలో అభివృద్ధిని ప్రోత్సహించడానికి జాతీయ స్థాయి అపెక్స్ అడ్వైజరీ బాడీగా ఆల్ ఇండియా కౌన్సిల్ ఫర్ టెక్నికల్ ఎడ్యుకేషన్ (AICTE) నవంబర్ 1945లో ఏర్పాటు చేయబడింది.",
  };

  const para_2 = {
    en: " All India Council for Technical Education (AICTE), is an Apex body and a Regulator of Technical Education in the Country. It is responsible for planning and coordinated development of the Technical Education system throughout the Country.",
    tel: "ఆల్ ఇండియా కౌన్సిల్ ఫర్ టెక్నికల్ ఎడ్యుకేషన్ (AICTE), దేశంలోని ఒక అపెక్స్ బాడీ మరియు రెగ్యులేటర్ ఆఫ్ టెక్నికల్ ఎడ్యుకేషన్. ఇది దేశవ్యాప్తంగా సాంకేతిక విద్యా వ్యవస్థ యొక్క ప్రణాళిక మరియు సమన్వయ అభివృద్ధికి బాధ్యత వహిస్తుంది.",
  };

  const para_3 = {
    en: "The AICTE Act was constituted to provide for the establishment of an All India Council for Technical Education with a view to proper planning and co-ordinated development of a technical education system throughout the country, the promotion of qualitative improvements of such education in relation to planned.",
    tel: "AICTE చట్టం దేశవ్యాప్తంగా సాంకేతిక విద్యా వ్యవస్థ యొక్క సరైన ప్రణాళిక మరియు సమన్వయ అభివృద్ధి, ప్రణాళికాబద్ధమైన విద్యకు సంబంధించి అటువంటి విద్య యొక్క గుణాత్మక మెరుగుదలలను ప్రోత్సహించే ఉద్దేశ్యంతో ఆల్ ఇండియా కౌన్సిల్ ఫర్ టెక్నికల్ ఎడ్యుకేషన్ స్థాపన కోసం ఏర్పాటు చేయబడింది.",
  };

  const para_4 = {
    en: "AICTE ranking or accreditation has no specific benefits for institutes. Approval from this council is mandatory for college offering technical education, including engineering, management,and other courses that come under the 10 statutory bodies of AICTE.",
    tel: " AICTE ర్యాంకింగ్ లేదా అక్రిడిటేషన్ వల్ల ఇన్‌స్టిట్యూట్‌లకు నిర్దిష్ట ప్రయోజనాలు లేవు. AICTE యొక్క 10 చట్టబద్ధమైన సంస్థల పరిధిలోకి వచ్చే ఇంజనీరింగ్, మేనేజ్‌మెంట్ మరియు ఇతర కోర్సులతో సహా సాంకేతిక విద్యను అందించే కళాశాలలకు ఈ కౌన్సిల్ ఆమోదం తప్పనిసరి.",
  };

  return (
    <div className="Body">
      <div className="AICTE">
        <h2>
          {glbVals.telugu
            ? "ఆల్ ఇండియా కౌన్సిల్ ఫర్ టెక్నికల్ ఎడ్యుకేషన్ (AICTE)"
            : "All India Council for Technical Education (AICTE)"}
        </h2>
        <div className="Introduction">
          <div className="Intro">
            <p>{glbVals.telugu ? para_1.tel : para_1.en}</p>
            <p>{glbVals.telugu ? para_2.tel : para_2.en}</p>
            <p>{glbVals.telugu ? para_3.tel : para_3.en}</p>
            <p>{glbVals.telugu ? para_4.tel : para_4.en}</p>
          </div>
          <div className="IMG">
            <img className="img" src={img} />
          </div>
        </div>
        {/* <div className="msg">
          <h2>AICTE Message</h2>
          <p>{AICTE_msg}</p>
        </div> */}
        <div className="EOA">
          <h3>
            {glbVals.telugu
              ? "AICTE - ఆమోదాల నివేదికల పొడిగింపు"
              : "AICTE - Extension of Approval Reports"}
          </h3>
          <AicteTable data={aicteData} />
        </div>
      </div>
    </div>
  );
}
export default AICTE;
