import React, { useEffect } from "react";
import { useGlobalProvider } from "../../../GlobalProvider";
import useFetchMultipleDbData from "../../Utilities/useFetchMultipleDbData";
import {BASE_URL} from "../../../api";


export const AdministrativeOffice = () => {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";

  const adminStaff = useFetchMultipleDbData("adminstaff/");

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);

  return (
    <div className="Body">
      <div className="SDC">
        <h2>
          {glbVals.telugu ? "పరిపాలనా కార్యాలయం" : "Administrative Office "}
        </h2>
        <div className="Committees">
          <div className="Committees_Message">
            <p>
              {glbVals.telugu
                ? "ఏదైనా పాలిటెక్నిక్ కళాశాలలో అడ్మినిస్ట్రేటివ్ ఆఫీస్ అనేది ఒక కీలకమైన అంశం, సంస్థ యొక్క సజావుగా పనితీరును నిర్ధారించడానికి బాధ్యత వహిస్తుంది. పాలిటెక్నిక్ కళాశాలల్లోని అడ్మినిస్ట్రేటివ్ ఆఫీస్ గురించి ఇక్కడ కొన్ని కీలక అంశాలు ఉన్నాయి:"
                : "An administrative office is a crucial component of any Polytechnic College, responsible for ensuring the smooth functioning of the institution. Here are some key points about the administrative office in Polytechnic colleges:"}
            </p>
            <ol className="Points">
              <li>
                {glbVals.telugu
                  ? "విధులు: పాలిటెక్నిక్ కళాశాల యొక్క అడ్మినిస్ట్రేటివ్ కార్యాలయం విద్యార్థుల ప్రవేశాలు, పరీక్ష నిర్వహణ, అధ్యాపకుల నియామకం మరియు నిర్వహణ, విద్యార్థి వ్యవహారాలు, సౌకర్యాల నిర్వహణ, ఆర్థిక నిర్వహణ మరియు రికార్డ్ కీపింగ్ వంటి అనేక రకాల విధులను నిర్వహిస్తుంది."
                  : "Functions: The administrative office of a Polytechnic college handles a range of functions such as student admissions, examination management, faculty recruitment and management, student affairs, facilities management, financial management, and record-keeping. "}
              </li>
              <li>
                {glbVals.telugu
                  ? "సిబ్బంది: కార్యాలయంలో సాధారణంగా గుమాస్తాలు, అడ్మినిస్ట్రేటివ్ అసిస్టెంట్లు, అకౌంటెంట్లు మరియు ఇతర సహాయక సిబ్బంది వంటి సిబ్బంది ఉంటారు. వారు సంస్థ యొక్క సజావుగా పనితీరును నిర్ధారించడానికి కళాశాలలోని ఇతర విభాగాలతో సమన్వయంతో పని చేస్తారు."
                  : " Staffing: The office is usually staffed with personnel such as clerks, administrative assistants, accountants, and other support staff. They work in coordination with other departments of the college to ensure the smooth functioning of the institution."}
              </li>
              <li>
                {glbVals.telugu
                  ? "విద్యార్థి సేవలు: అడ్మినిస్ట్రేటివ్ కార్యాలయం విద్యార్థులకు కౌన్సెలింగ్, అకడమిక్ అడ్వైజింగ్ మరియు కెరీర్ గైడెన్స్ వంటి వివిధ సేవలను కూడా అందిస్తుంది. విద్యార్థుల రికార్డులను నిర్వహించడానికి మరియు విద్యార్థుల డేటాను నిర్వహించడానికి వారు బాధ్యత వహిస్తారు."
                  : " Student Services: The administrative office also provides various services to the students such as counseling, academic advising, and career guidance. They are responsible for maintaining student records and managing student data."}
              </li>
              <li>
                {glbVals.telugu
                  ? "కమ్యూనికేషన్: అడ్మినిస్ట్రేటివ్ ఆఫీస్ అనేది కళాశాల మరియు ప్రభుత్వ సంస్థలు, యజమానులు మరియు ఇతర విద్యా సంస్థల వంటి బాహ్య ఏజెన్సీల మధ్య కమ్యూనికేషన్‌కు సంబంధించిన ప్రాథమిక స్థానం."
                  : "Communication: The administrative office is the primary point of contact for communication between the college and external agencies such as government bodies, employers, and other educational institutions. "}
              </li>
              <li>
                {glbVals.telugu
                  ? "సాంకేతికత: సాంకేతిక పరిజ్ఞానం యొక్క పెరుగుతున్న వినియోగంతో, పరిపాలనా కార్యాలయం దాని విధులను క్రమబద్ధీకరించడానికి వివిధ సాఫ్ట్‌వేర్ మరియు సాధనాలను స్వీకరించింది. వీటిలో విద్యార్థుల సమాచార వ్యవస్థలు, డిజిటల్ రికార్డ్-కీపింగ్ సిస్టమ్‌లు మరియు కమ్యూనికేషన్ మరియు సహకారం కోసం ఆన్‌లైన్ ప్లాట్‌ఫారమ్‌లు ఉన్నాయి."
                  : "Technology: With the increasing use of technology, the administrative office has adopted various software and tools to streamline its functions. These include student information systems, digital record-keeping systems, and online platforms for communication and collaboration."}
              </li>
            </ol>
            <p>
              {glbVals.telugu
                ? "మొత్తంమీద, పాలిటెక్నిక్ కళాశాల యొక్క సజావుగా పనితీరును నిర్ధారించడంలో పరిపాలనా కార్యాలయం కీలక పాత్ర పోషిస్తుంది మరియు దాని సమర్థవంతమైన నిర్వహణ సంస్థ యొక్క విజయానికి కీలకం."
                : " Overall, the administrative office plays a critical role in ensuring the smooth functioning of a Polytechnic college, and its efficient operation is key to the success of the institution."}
            </p>
          </div>
        </div>
      </div>
      <div className="Faculty">
        <h3>
          {glbVals.telugu
            ? "పరిపాలనా కార్యాలయ సిబ్బంది"
            : "Administrative Office Staff"}
        </h3>
        <div className="profiles">
          {Object.entries(adminStaff).map((staff) => {
            return (
              <div key={staff[0]} className="profile">
                <div className="Image">
                  <img src={BASE_URL+staff[1][lang]?.staffImgUrl} alt="Staff" />
                </div>
                <div className="Data">
                  <h4>
                    {staff[1][lang]?.staffName}, {staff[1][lang]?.staffQual}
                  </h4>
                  <h4>{staff[1][lang]?.staffDesgn}</h4>
                  <h4>
                    {staff[1][lang]?.staffExp}
                    {glbVals.telugu ? "సం. అనుభవం" : "Years Experience"}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
