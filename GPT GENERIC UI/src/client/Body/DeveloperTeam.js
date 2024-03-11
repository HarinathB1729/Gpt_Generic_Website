import React, { useEffect } from "react";
import img from "../img/Harinathsir.jpg";
import naresh from "../img/naresh.jpg";
import sai from "../img/saiRam.jpg";
import harsha from "../img/harsha.jpg";
import mahendra from "../img/Mahendra.jpeg";
import krishna from "../img/Krishna.png";
import avinash from "../img/avinash.jpg";
import siddu from "../img/siddu.jpg";
import syfulla from "../img/syfulla.jpg";
import HOD from "../img/devaraj sir.jpg";
import { useGlobalProvider } from "../../GlobalProvider";

function DeveloperTeam() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);

  const Front_End = "HTML, CSS, React JS";
  const Server = "NodeJs + Express Js";
  const Database = "MySQL";
  const webhosting = "Google Cloud Platform";
  const faculty_count = [0, 1, 2, 3, 4, 5, 6, 7];
  const Name = [
    "N.Naresh",
    "T.Sai Ram Kishore",
    "P.Harsha vardhan",
    "K.Mahendra Kumar",
    "D.Naga Krishna Chaitanya",
    "R.Avinash",
    "B.Vara Siddi Vinayaka",
    "S.Reddy Syfulla"
  ];
  const Designation = [
    "Student",
    "Student",
    "Student",
    "Student",
    "Student",
    "Student",
    "Student",
    "Student"       
  ];
  const Qualification = [
    "3rd Year DCME",
    "3rd Year DCME",
    "3rd Year DCME",
    "2nd Year DCME",
    "2nd Year DCME",
    "2nd Year DCME",
    "2nd Year DCME",
    "2nd Year DCME"    
  ];

  const photos = [
    naresh,
    sai,
    harsha,
    mahendra,
    krishna,
    avinash,   
    siddu,
    syfulla,
  ];
  
  const hod_Name = "C.Devaraj";
  const hod_Qual = "M.Tech";
  const hod_Exp = "30";
  return (
    <div className="Body">
      <div className="project_Details">
        <h3>{glbVals.telugu? "సాంకేతిక వివరాలు" :"Technical Details"}</h3>
        <table>
          <tr>
            <th>{glbVals.telugu? "ఫ్రంట్-ఎండ్" :"Front-End"}</th>
            <td>{Front_End}</td>
          </tr>
          <tr>
            <th>{glbVals.telugu? "బ్యాక్-ఎండ్" :"Back-End"}</th>
            <td>{Server}</td>
          </tr>
          <tr>
            <th>{glbVals.telugu? "డేటాబేస్" :"DataBase"}</th>
            <td>{Database}</td>
          </tr>
          <tr>
            <th>{glbVals.telugu? "వెబ్ హోస్టింగ్" :"Web Hosting"}</th>
            <td>{webhosting}</td>
          </tr>
        </table>
      </div>
      <div className="Points">
        <h3>{glbVals.telugu? "ప్రాజెక్ట్ ముఖ్యాంశాలు" :"Project Highlights"}</h3>
        <ol>
          <li>
            {glbVals.telugu
              ? "ఇది రియాక్ట్ ఉపయోగించి అభివృద్ధి చేయబడిన ఒకే పేజీ అప్లికేషన్ (నెట్‌ఫ్లిక్స్, ఇన్‌స్టాగ్రామ్ వెబ్‌సైట్‌లు వంటివి)."
              : " This is a Single Page Application developed using React (like Netflix, Instagram Websites)."}
          </li>
          <li>
            {glbVals.telugu
              ? "రాష్ట్రంలోని అన్ని ప్రభుత్వ పాలిటెక్నిక్ కళాశాలల కోసం ఒక సాధారణ వెబ్‌సైట్ రూపకల్పనపై ప్రాజెక్ట్ దృష్టి సారించింది మరియు ఏదైనా పాలిటెక్నిక్ కళాశాలకు ప్రతిరూపం ఇవ్వవచ్చు."
              : "Project is focused on designing a Generic Website for all the Govt. Polytechnic Colleges in the State and can be replicated to any Polytechnic College."}
          </li>
          <li>
            {glbVals.telugu
              ? "ప్రాజెక్ట్ ద్విభాషా వెబ్‌సైట్‌ను లక్ష్యంగా చేసుకుంది (వెబ్‌సైట్ అభ్యర్థనపై వెబ్‌పేజీల కంటెంట్‌లను ఇంగ్లీష్ లేదా తెలుగులో ప్రదర్శిస్తుంది)"
              : "Project is aimed at Bilingual Website (Website will display the contents of the WebPages in English or Telugu on request)"}
          </li>
          <li>
            {glbVals.telugu
              ? "శోధన ఇంజిన్ ఆప్టిమైజేషన్ అనుకూలమైనది, ఎందుకంటే ఇది తక్కువ పేజీ లోడ్ సమయం మరియు వేగవంతమైన రెండరింగ్ వేగాన్ని కలిగి ఉంటుంది."
              : "Search Engine Optimization friendly, because it has lower page load time and faster rendering speed."}
          </li>
          <li>
            {glbVals.telugu
              ? "క్లయింట్ సర్వర్ కమ్యూనికేషన్ కోసం RESTful API ఇంటిగ్రేషన్.డేటాబేస్ నిర్వహణ కోసం RESTful API ఇంటిగ్రేషన్."
              : "RESTful API Integration for Client Server Communication.."}
          </li>
        </ol>
      </div>
      <div>
        <div className="HOD">
          <div className="HOD1">
            <div className="Id_Photo ">
              <h3>{glbVals.telugu? "విభాగాధిపతి" :"Head of Department"}</h3>
              <div className="Img">
                <img src={HOD} />
              </div>
              <div className="Details">
                <h4>{hod_Name}</h4>
                <h4>{hod_Qual}</h4>
                <h4>{hod_Exp} {glbVals.telugu? "సం. అనుభవం" :"years of Experience"}</h4>
              </div>
            </div>
            <div className="Id_Photo ">
              <h3>{glbVals.telugu? "ప్రాజెక్ట్ గైడ్" :"Project Guide"}</h3>
              <div className="Img">
                <img src={img} />
              </div>
              <div className="Details">
                <h4>{glbVals.telugu? "బి.హరినాథ్" :"B.Harinath"}</h4>
                <h4>{glbVals.telugu? "బి టెక్" :"B Tech"}</h4>
                <h4>{glbVals.telugu? "10 సం. అనుభవం" :"10 years of Experience"}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Faculty">
        <h3>{glbVals.telugu? "ప్రాజెక్ట్ గైడ్" :"Developer's Student Team"}</h3>
        <div className="profiles">
          {faculty_count.map((i) => {
            return (
              <div key={i} className="profile">
                <div className="Image">
                  <img src={photos[i]} />
                </div>
                <div className="Data">
                  <h4>{Name[i]}</h4>
                  <h4>{Designation[i]}</h4>
                  <h4>{Qualification[i]}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default DeveloperTeam;
