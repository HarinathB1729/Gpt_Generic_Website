import Table from "../table/Table";
import React, { useEffect } from "react";
import "../../client.css";
import medha from "../../img/medha.png";
import efftronics from "../../img/efftronics.jpg";
import { useGlobalProvider } from "../../../GlobalProvider";
import useFetchDbData from "../../Utilities/useFetchDbData";
import useFetchMultipleDbData from "../../Utilities/useFetchMultipleDbData";
import { api, BASE_URL } from "../../../api";
import ClientTableBuilder from "../../../Utilities/ClientTableBuilder";

function Placements() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);

  const tpoData = useFetchDbData("placements/tpo");
  const ayPlacements = useFetchMultipleDbData("placements/clientayplacements");
  // console.log("tpodata", tpoData);
  // console.log("ayplacments", ayPlacements);
  // console.log("NAME", tpoData[lang].tpoName);

  const Introduction = [
    " Placement refers to the process of connecting the selected person and the employer in order to establish an ongoing employment relationship. In this step the employee is given the activities he/she needs to perform and is told about his/her duties.",
    " Encouraging Students to actively participate in Sports & Games has always been the policy of the institution. Top performers at the institution level are allowed to represent at District & State Level every year. Encouraging Students to actively participate in Sports & Games has always been the policy of the institution. Top performers at the institution level are allowed to represent at District & State Level every year.Encouraging Students to actively participate in Sports & Games has always been the policy of the institution. Top performers at the institution level are allowed to represent at District & State Level every year.",
  ];
  const theadData = {
    en: [
      "Academic Year",
      "Student PIN",
      "Student Name",
      "Department",
      "Company",
      "Remarks",
    ],
    tel: [
      "విద్యా సంవత్సరం",
      "విద్యార్థి పిన్",
      "విద్యార్థి పేరు",
      "విభాగం",
      "కంపెనీ",
      "వ్యాఖ్యలు"
    ],
  };

  const Company_Logo = [efftronics, medha];
  const Company_Name = ["Efftronics", "Medha Servo Drives"];
  const partners_count = [0, 1];
  return (
    <div className="Body">
      <div className="placement">
        <h3>
          {glbVals.telugu
            ? "నియామకాల సెల్"
            : "Placements Cell"}
        </h3>
        <div className="Placement_Intro">
          <div className="Placement_Introdata">
            <p>
              {glbVals.telugu
                ? "శిక్షణ మరియు ప్లేస్మెంట్ అధికారి ప్రోగ్రాం నిర్వహణ బాధ్యత వహిస్తారు, కార్యకలాపాలు, అమలు, మరియు అంతర్గత కళాశాల కార్యక్రమాలతో సహా కెరీర్ సర్వీస్ సెంటర్ యొక్క అన్ని ప్రధాన కార్యక్రమాల మార్కెటింగ్, ప్రీ-ప్రోగ్రాం దశ నుండి అన్ని నిశ్చితార్థం కార్యకలాపాలను నడిపించడం, కార్యక్రమం ద్వారా, మరియు పర్యవేక్షణ ద్వారా పోస్ట్-ప్రోగ్రాం దశ, నియంత్రణ మరియు రిపోర్టింగ్ పురోగతి.\
                   కార్యక్రమం కార్యకలాపాలు కోసం పరిచయం యొక్క ప్రధాన పాయింట్ గా, మీరు విద్యా సంస్థల్లో అన్ని పాల్గొనే విజయానికి దోహదం ఒక కీలక పాత్ర పోషిస్తుంది.\
                  ట్రైనింగ్ అండ్ ప్లేస్మెంట్ ఆఫీసర్ ట్రైనింగ్ అండ్ ప్లేస్మెంట్ మేనేజర్తో కలిసి పనిచేస్తారు. "
                : "The Training & Placement Officer will be responsible for program management, operations, execution, and marketing of all major programs of the Career Service Center including the in-house college programs, leading all engagement activities from the pre-program stage, through the program, and the post-program stage by monitoring, controlling and reporting progress.\
                   As the main point of contact for program operations, you will play a key role in contributing to the success of all participating participants in academic institutions.\
                   The Training & Placement Officer will work closely with the Training & Placement Manager. "}
            </p>
          </div>
        </div>

        <div className="IdCard">
          <div className="ID_Card_Details">
            <div className="pmsg">
              <div className="Id_Photo">
                <div className="Img">
                  <img
                    src={BASE_URL + tpoData[lang]?.tpoPhotoUrl}
                    alt="Commissioner"
                  />
                </div>
              </div>
              <figure class="quote">
                <blockquote>{tpoData[lang]?.tpoMsg}</blockquote>
                <figcaption>
                  &mdash; {tpoData[lang]?.tpoName},
                  <cite>
                    {glbVals.telugu
                      ? "శిక్షణ & ప్లేస్‌మెంట్ అధికారి"
                      : "Training & Placement officer"}
                  </cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {Object.keys(ayPlacements).length > 0 && (
          <div className="PFtable">
            <h3>
            {glbVals.telugu ? "ప్లేస్‌మెంట్ వివరాలు" : "Placement Details"}
            </h3>
            <ClientTableBuilder theadData={theadData} data={ayPlacements} />
          </div>
        )}
        <br />
      
        <div className="Course_offered">
          <h3>
            {glbVals.telugu
              ? "భాగస్వాముల పేర్లు & లోగోలు"
              : "Hiring Partners Names & Logos"}
          </h3>
          <div className="Course_offered1">
            {/* -------------Sliding----------- */}
            <div className="continer">
              <div className="slidebar">
                {partners_count.map((i) => {
                  return (
                    <div key={Math.random()} className="item">
                      <div className="image">
                        <img src={Company_Logo[i]} alt="Hiring Partners" />
                      </div>
                      <div className="text">
                        <h4> {Company_Name[i]}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Placements;
