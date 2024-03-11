import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../GlobalProvider";
import useFetchMultipleDbData from "../../Utilities/useFetchMultipleDbData";
import ClientTableBuilder from "../../../Utilities/ClientTableBuilder";

function PolytechFest() {
  const [glbVals, setGlbVals] = useContext(GlobalContext);
  const lang = glbVals.telugu ? "tel" : "en";

  const polytechFest = useFetchMultipleDbData("polytechfest/client/");
  console.log("polytechfest",polytechFest)

  const theadData = {
    en: [
      "Academic Year",
      "Department",
      "Project Name",
      "Project Description",
      "Student Team",
      "Project guide",
      "Project status",
    ],
    tel: [
      "విద్యా సంవత్సరం",
      "శాఖ",
      "ప్రాజెక్ట్ పేరు",
      "ప్రాజెక్ట్ వివరణ",
      "విద్యార్థి బృందం",
      "ప్రాజెక్ట్ గైడ్",
      "ప్రాజెక్ట్ స్థితి",
    ],
  };

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);

  return (
    <div className="Body">
      <h2>{glbVals.telugu ? "పాలీ టెక్ ఫెస్ట్ " : "PolytechFest"}</h2>
      <div className="Committees">
        <div className="Committees_Message">
          <p>
            {glbVals.telugu
              ? "పాలిటెక్‌ఫెస్ట్ అనేది ఆంధ్రప్రదేశ్‌లోని పాలిటెక్నిక్ కళాశాలచే నిర్వహించబడే వార్షిక సాంకేతిక మరియు సాంస్కృతిక ఉత్సవం. రాష్ట్రవ్యాప్తంగా వివిధ సాంకేతిక సంస్థలు మరియు కళాశాలల నుండి విద్యార్థులను ఈ ఉత్సవం ఆకర్షిస్తుంది."
              : "Polytechfest is an annual technical and cultural festival organized by the Polytechnic College in Andhra Pradesh. The festival attracts students from various technical institutes and colleges across the state."}
          </p>
          {/* <p> {glbVals.telugu ? "ఈ కార్యక్రమంలో సెమినార్‌లు, వర్క్‌షాప్‌లు, కోడింగ్ పోటీలు, రోబోటిక్స్ పోటీలు మరియు క్విజ్‌లతో సహా అనేక సాంకేతిక మరియు సాంస్కృతిక కార్యకలాపాలు ఉన్నాయి. ఈ పండుగలో నృత్యం, సంగీతం, నాటకం మరియు ఫ్యాషన్ షోలు వంటి వివిధ సాంస్కృతిక కార్యక్రమాలు కూడా ఉన్నాయి." : "The event includes a range of technical and cultural activities, including seminars, workshops, coding competitions, robotics contests, and quizzes. The festival also includes various cultural events such as dance, music, drama, and fashion shows."}</p> */}
          <p>
            {" "}
            {glbVals.telugu
              ? "పండుగ యొక్క ప్రాథమిక లక్ష్యం విద్యార్థుల సాంకేతిక మరియు సృజనాత్మక నైపుణ్యాలను ప్రోత్సహించడం మరియు ప్రదర్శించడం మరియు వారి సంబంధిత రంగాలలోని నిపుణులతో సంభాషించడానికి వారికి వేదికను అందించడం. యువతలో ఆవిష్కరణలు మరియు వ్యవస్థాపకతను ప్రోత్సహించడం కూడా ఈ పండుగ లక్ష్యం."
              : "The primary objective of the festival is to encourage and showcase the technical and creative skills of students and provide a platform for them to interact with experts in their respective fields. The festival also aims to promote innovation and entrepreneurship among the youth."}
          </p>
          <p>
            {" "}
            {glbVals.telugu
              ? "మొత్తంమీద, పాలిటెక్‌ఫెస్ట్ విద్యార్థులకు వారి నైపుణ్యాలు మరియు సృజనాత్మకతను ప్రదర్శించడానికి, వివిధ రంగాలలోని నిపుణుల నుండి నేర్చుకోవడానికి మరియు రాష్ట్రవ్యాప్తంగా ఉన్న సహచరులతో కనెక్ట్ అవ్వడానికి ఒక ప్రత్యేక అవకాశాన్ని అందిస్తుంది."
              : "Overall, Polytechfest provides a unique opportunity for students to showcase their skills and creativity, learn from experts in various fields, and connect with peers from across the state."}
          </p>
        </div>
      </div>
      {/* </div> */}

      {/* POLYTECHFEST TABLE */}
      {Object.keys(polytechFest).length > 0 && (
        <div className="PFtable">
          <h3>
            {}
            {glbVals.telugu
              ? "పాలీ టెక్ ఫెస్ట్ వివరాలు"
              : "PolytechFest Details"}
          </h3>
          <ClientTableBuilder theadData={theadData} data={polytechFest} />
        </div>
      )}
    </div>
  );
}
export default PolytechFest;
