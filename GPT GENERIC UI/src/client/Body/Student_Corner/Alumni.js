import React, { useEffect } from "react";
import {useGlobalProvider} from "../../../GlobalProvider";
import useFetchDbData from "../../Utilities/useFetchDbData";

function Alumni() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";
  const alumniCoord = useFetchDbData("alumni/coordinator");
  // console.log("alumnicoord",alumniCoord)

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);
  
 return (
    <div className="Body">
      <h2>{glbVals.telugu ? "పూర్వ విద్యార్థులు" : "Alumni"}</h2>
      <div className="Committees">
          <div className="Committees_Message">
          {/* <div className="logo">
            <img src={img} alt="Committe photo" />
          </div> */}
          <div className="Committees_Message">
           <p>{glbVals.telugu ? "పాలిటెక్నిక్ కళాశాల పూర్వ విద్యార్థులు పాలిటెక్నిక్ కళాశాలలో డిప్లొమా లేదా డిగ్రీ ప్రోగ్రామ్‌ను పూర్తి చేసిన వ్యక్తులను సూచిస్తారు. పాలిటెక్నిక్ కళాశాలలు ఇంజనీరింగ్, టెక్నాలజీ మరియు అప్లైడ్ సైన్సెస్ వంటి రంగాలలో ఆచరణాత్మక మరియు సాంకేతిక విద్యను అందించడంపై దృష్టి పెడతాయి." : "Polytechnic college alumni refer to individuals who have completed a diploma or degree program at a polytechnic college. Polytechnic colleges focus on providing practical and technical education in fields such as engineering, technology, and applied sciences."}</p>
           <p>{glbVals.telugu ? "పాలిటెక్నిక్ కళాశాల పూర్వ విద్యార్థులు సాధారణంగా వారి సంబంధిత రంగాలలోని యజమానులకు ఆకర్షణీయంగా ఉండేలా ప్రత్యేక నైపుణ్యాలు మరియు జ్ఞానాన్ని కలిగి ఉంటారు. వారు తయారీ, నిర్మాణం, టెలికమ్యూనికేషన్స్ మరియు మరిన్నింటితో సహా వివిధ పరిశ్రమలలో పని చేయవచ్చు." : "Polytechnic college alumni typically have specialized skills and knowledge that make them attractive to employers in their respective fields. They may go on to work in a variety of industries, including manufacturing, construction, telecommunications, and more."}</p>
           <p>{glbVals.telugu ? "వారి సాంకేతిక నైపుణ్యాలతో పాటు, పాలిటెక్నిక్ కళాశాల పూర్వ విద్యార్థులు సమస్య-పరిష్కారం, కమ్యూనికేషన్ మరియు జట్టుకృషి వంటి విలువైన సాఫ్ట్ నైపుణ్యాలను కూడా కలిగి ఉండవచ్చు. అనేక పాలిటెక్నిక్ కళాశాలలు అభ్యాసం మరియు పరిశ్రమ భాగస్వామ్యాలను కూడా నొక్కిచెబుతున్నాయి, ఇది పూర్వ విద్యార్థులకు ఉద్యోగ విఫణిలో ప్రయోజనాన్ని అందిస్తుంది." : "In addition to their technical skills, polytechnic college alumni may also possess valuable soft skills such as problem-solving, communication, and teamwork. Many polytechnic colleges also emphasize hands-on learning and industry partnerships, which can give alumni an advantage in the job market."}</p>
           <p>{glbVals.telugu ? "పాలిటెక్నిక్ కళాశాల పూర్వ విద్యార్థులు పూర్వ విద్యార్థుల నెట్‌వర్క్‌లు, జాబ్ ప్లేస్‌మెంట్ సేవలు మరియు వారి కెరీర్‌ను ముందుకు తీసుకెళ్లడంలో సహాయపడే ఇతర వనరులకు కూడా ప్రాప్యత కలిగి ఉండవచ్చు. మొత్తంమీద, పాలిటెక్నిక్ కళాశాల పూర్వ విద్యార్థులు శ్రామికశక్తిలో ముఖ్యమైన మరియు విలువైన భాగం, వివిధ రకాల పరిశ్రమలకు వారి ప్రత్యేక నైపుణ్యాలు మరియు జ్ఞానాన్ని అందించారు." : "Polytechnic college alumni may also have access to alumni networks, job placement services, and other resources that can help them advance their careers. Overall, polytechnic college alumni are an important and valuable part of the workforce, contributing their specialized skills and knowledge to a variety of industries."}</p>
          </div>
        </div>
      </div>
      <div className="College_Details">
        <h3>{glbVals.telugu ? "పూర్వ విద్యార్థులు కోఆర్డినేటర్" :"Alumni Coordinator Details"}</h3>
        <table>
          <tbody>
          <tr>
            <th>{glbVals.telugu ? "కోఆర్డినేటర్ పేరు" :" Coordinator Name"}</th>
            <td>{alumniCoord[lang]?.coordName}</td>
          </tr>
          <tr>
            <th>{glbVals.telugu ? "కోఆర్డినేటర్ బ్యాచ్" :" Coordinator Batch"}</th>
            <td>{alumniCoord[lang]?.coordBatch}</td>
          </tr>
          <tr>
            <th>{glbVals.telugu ? "కోఆర్డినేటర్ మొబైల్ నెం" :" Coordinator Mobile No"}</th>
            <td>{alumniCoord[lang]?.coordPhno}</td>
          </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
export default Alumni;
