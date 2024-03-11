import React, { useContext, useEffect } from "react";
import "../../client.css";
import {BASE_URL} from "../../../api";
import { GlobalContext } from "../../../GlobalProvider";
import useFetchDbData from "../../Utilities/useFetchDbData";
import useFetchMultipleDbData from "../../Utilities/useFetchMultipleDbData";
import ClientTableBuilder from "../../../Utilities/ClientTableBuilder";

function IPSGM() {
  const physicalDirector = useFetchDbData("facultydata/physicaldirector");
  const pdMsg = useFetchDbData("ipsgm/pdmsg");

  const ipsgmPrizes = useFetchMultipleDbData("ipsgm/prizesdata/client");
  // console.log("ipsgm prizes", ipsgmPrizes);
  // console.log("physicalDirectorMsg", pdMsg);

  const [glbVals, setGlbVals] = useContext(GlobalContext);
  const lang = glbVals.telugu ? "tel" : "en";

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, [setGlbVals]);

  const theadData = {
    en: [
      "Academic Year",
      "Student PIN",
      "Student Name",
      "Venue",
      "SPORTS/GAMES Name",
      "Prize Details",
    ],
    tel: [
      "విద్యా సంవత్సరం",
      "విద్యార్థి పిన్",
      "విద్యార్థి పేరు",
      "వేదిక",
      "క్రీడలు/గేమ్స్ పేరు",
      "బహుమతి వివరాలు",
    ],
  };

  return (
    <div className="Body">
      <div className="IPSGM">
        <h2>
          {glbVals.telugu
            ? "ఇంటర్ పాలిటెక్నిక్ స్పోర్ట్స్ & గేమ్స్ మీట్"
            : " INTER POLYTECHNIC SPORTS & GAMES MEET"}
        </h2>
        <div className="IPSGM2">
          {/* <div className="Intro"> */}
          <p>
            {glbVals.telugu
              ? "ఇంటర్ పాలిటెక్నిక్ స్పోర్ట్స్ అండ్ గేమ్స్ మీట్ అనేది వార్షిక క్రీడా కార్యక్రమం, దీనిలో వివిధ పాలిటెక్నిక్ కళాశాలల విద్యార్థులు వివిధ క్రీడలు మరియు ఆటలలో ఒకరితో ఒకరు పోటీపడతారు. ఈవెంట్ సాధారణంగా హోస్ట్ పాలిటెక్నిక్ కళాశాలచే నిర్వహించబడుతుంది, అనేక ఇతర పాలిటెక్నిక్ కళాశాలల నుండి పాల్గొనేవారు."
              : "The Inter Polytechnic Sports and Games Meet is an annual sporting event in which students from different polytechnic colleges compete against each other in various sports and games. The event is typically organized by a host polytechnic college, with participants from several other polytechnic colleges."}
          </p>
          <p>
            {glbVals.telugu
              ? "ఈ కార్యక్రమం విద్యార్థులు తమ అథ్లెటిక్ సామర్థ్యాలను ప్రదర్శించడానికి మరియు స్నేహపూర్వక మరియు పోటీ వాతావరణంలో పోటీపడే అవకాశాన్ని అందిస్తుంది. ఇది పాల్గొనే కళాశాలల మధ్య స్నేహం మరియు క్రీడా స్ఫూర్తిని పెంపొందించడానికి మరియు శారీరక దృఢత్వం మరియు ఆరోగ్యకరమైన జీవనశైలిని ప్రోత్సహించడంలో సహాయపడుతుంది."
              : "The event provides an opportunity for students to showcase their athletic abilities and compete in a friendly and competitive environment. It also helps to foster a sense of camaraderie and sportsmanship among the participating colleges, and helps to promote physical fitness and healthy lifestyles."}{" "}
          </p>
          <p>
            {glbVals.telugu
              ? "ఇంటర్ పాలిటెక్నిక్ స్పోర్ట్స్ అండ్ గేమ్స్ మీట్‌లో సాధారణంగా ట్రాక్ అండ్ ఫీల్డ్, బాస్కెట్‌బాల్, వాలీబాల్, క్రికెట్ మరియు ఫుట్‌బాల్ వంటి అనేక రకాల ఈవెంట్‌లు ఉంటాయి. ఈవెంట్ సాధారణంగా చాలా రోజుల పాటు ఉంటుంది, వివిధ కళాశాలల నుండి పాల్గొనేవారు రౌండ్-రాబిన్ ఫార్మాట్‌లో ఒకరితో ఒకరు పోటీపడతారు, తర్వాత నాకౌట్ రౌండ్లు మరియు ఫైనల్‌లు జరుగుతాయి."
              : "The Inter Polytechnic Sports and Games Meet typically includes a wide range of events, such as track and field, basketball, volleyball, cricket, and football, among others. The event usually spans several days, with participants from different colleges competing against each other in a round-robin format, followed by knockout rounds and a final."}{" "}
          </p>
        </div>
      </div>
    
      <div className="IdCard">
        <div className="ID_Card_Details">
          <h2>
            {glbVals.telugu
              ? "ఫిజికల్ డైరెక్టర్ గారి సందేశం"
              : "Physical Director's Messsage"}
          </h2>
          <div className="pmsg">
            <div className="Id_Photo">
              <div className="Img">
                <img src={ BASE_URL +physicalDirector[lang]?.facImgUrl} alt="Prinicipal" />
              </div>
            </div>
            <figure className="quote">
              <blockquote>{pdMsg[lang]?.physicalDirectorMsg}</blockquote>
              <figcaption>
                &mdash; {physicalDirector[lang]?.facName},
                {physicalDirector[lang]?.facQual},{" "}
                <cite>{physicalDirector[lang]?.facDesgn}</cite>{" "}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="Prizewinners">
        <h3>{glbVals.telugu ? "ఇంటర్ పాలిటెక్నిక్ స్పోర్ట్స్ & గేమ్స్ మీట్ బహుమతి విజేతలు" : "INTER POLYTECHNIC SPORTS & GAMES MEET Prize Winners"}</h3>
        <ClientTableBuilder theadData={theadData} data={ipsgmPrizes} />
      </div>
    </div>
  );
}
export default IPSGM;
