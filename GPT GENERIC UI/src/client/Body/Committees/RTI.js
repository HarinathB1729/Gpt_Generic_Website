import React, { useEffect } from "react";
import { useGlobalProvider } from "../../../GlobalProvider";
import ClientTableBuilder from "../../../Utilities/ClientTableBuilder";
import useFetchMultipleDbData from "../../Utilities/useFetchMultipleDbData";



function RTI() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";
  const rtiMembersData = useFetchMultipleDbData("rtidata/members/noid");
  // console.log("rtiMembersData", rtiMembersData);

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);


  const theadData = {
    en: ["RTI Officer Name", "Designation", "Role", "Contact No"],
    tel: ["సమాచార హక్కు అధికారి పేరు", "పదవి", "పాత్ర", "సంప్రదింపు సంఖ్య"],
  };

  return (
    <div className="Body">
      <h2>
        {glbVals.telugu ? "సమాచార హక్కు " : "Right To Information "}
      </h2>
      <div className="Placement_Intro">
        <div className="Placement_Introdata">
          <p>
            {glbVals.telugu
              ? "సమాచార హక్కు (Right To Information) అనేది పౌరులు ప్రభుత్వ సంస్థలు మరియు ప్రభుత్వ అధికారుల వద్ద ఉన్న సమాచారాన్ని యాక్సెస్ చేయడానికి వీలు కల్పించే ప్రాథమిక హక్కు. ప్రభుత్వ కార్యాలయాలలో, పౌరులు ప్రభుత్వ సంస్థల పనితీరు గురించి సమాచారాన్ని అభ్యర్థించడానికి మరియు స్వీకరించడానికి అనుమతించడం ద్వారా సమాచార హక్కు పారదర్శకత మరియు జవాబుదారీతనాన్ని నిర్ధారిస్తుంది."
              : "The Right to Information (RTI) is a fundamental right that enables citizens to access information held by government agencies and public authorities. In government offices, RTI ensures transparency and accountability by allowing citizens to request and receive information about the functioning of government agencies."}
          </p>
          <p>
            {glbVals.telugu
              ? "భారతదేశంలో సమాచార హక్కు చట్టం 2005లో ఆమోదించబడింది మరియు అప్పటి నుండి, పౌరులు తమ తెలుసుకునే హక్కును వినియోగించుకోవడానికి ఇది ఒక ముఖ్యమైన సాధనంగా మారింది. పౌరులు పాలన, పబ్లిక్ ప్రాజెక్ట్‌లు, ఆర్థికాలు మరియు విధానాలతో సహా వివిధ సమస్యలపై సమాచారాన్ని కోరుతూ ప్రభుత్వ కార్యాలయాలకు సమాచార హక్కు దరఖాస్తులను దాఖలు చేయవచ్చు."
              : "The RTI Act was passed in India in 2005, and since then, it has been an essential tool for citizens to exercise their right to know. Citizens can file RTI applications with government offices seeking information on various issues, including governance, public projects, finances, and policies."}
          </p>
          <p>
            {glbVals.telugu
              ? "దరఖాస్తు అందిన 30 రోజుల్లోగా ప్రభుత్వ కార్యాలయాలు ఆర్టీఐ అభ్యర్థనలకు స్పందించాలని ఆర్టీఐ చట్టం నిర్దేశిస్తుంది. పౌరులు ప్రతిస్పందనతో సంతృప్తి చెందకపోతే లేదా అభ్యర్థించిన సమాచారం అందించబడకపోతే అప్పీళ్లను దాఖలు చేసే ప్రక్రియను కూడా చట్టం వివరిస్తుంది."
              : "The RTI Act mandates that government offices respond to RTI requests within 30 days of receipt of the application. The Act also outlines the process for citizens to file appeals if they are not satisfied with the response or if the information requested is not provided."}
          </p>
          <p>
            {glbVals.telugu
              ? "మొత్తంమీద, సమాచార హక్కు చట్టం పౌరులకు ప్రభుత్వ కార్యాలయాలను జవాబుదారీగా ఉంచడానికి మరియు ప్రభుత్వ పనితీరులో పారదర్శకతను నిర్ధారించడానికి అవసరమైన సాధనం."
              : "Overall, the RTI Act has been an essential tool for citizens to hold government offices accountable and ensure transparency in government functioning."}
          </p>
        </div>
      </div>
      <div className="RTITable">
        <h3>
          {glbVals.telugu
            ? "సమాచార హక్కు - కమిటీ సభ్యుల వివరాలు"
            : "RTI - Committee Members Details"}
        </h3>
        {/* {console.log(Object.keys(rtiMembersData))} */}
        {Object.keys(rtiMembersData).length > 0 && (
          <ClientTableBuilder data={rtiMembersData} theadData={theadData} />
        )}
      </div>
    </div>
  );
}
export default RTI;
