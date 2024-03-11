import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../GlobalProvider";
import useFetchDbData from "../../Utilities/useFetchDbData";


function Why_Polytechnic() {
  const [glbVals, setGlbVals] = useContext(GlobalContext);
  const lang = glbVals.telugu ? "tel" : "en";
  const polycetCoordinator = useFetchDbData("polycetcoordinator");
  const basicDetails = useFetchDbData("basicdetails");

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));   

  }, []);


  return (
    <div className="Body">
      <div className="Why_Polytechnic">

        <h2>{glbVals.telugu ? 'పాలిటెక్నిక్ ఎందుకు ?': 'Why Polytechnic?'} </h2>
        <h3>{glbVals.telugu ? '10వ తరగతి ఉత్తీర్ణులైన వారికి, ఇంజినీరింగ్ చాలా సులభం మరియు విద్యను కొనసాగించడానికి తెలివైన మార్గం - పాలిటెక్నిక్': "For those who have passed class 10th, Engineering is the easiest and wisest way to pursue Education – Polytechnic "}</h3>
        <ul>
          <li>{glbVals.telugu ? 'పాలీ సెట్ ద్వారా అందరికీ తక్కువ ఫీజు మరియు ఫీజు రీయింబర్స్‌మెంట్ సౌకర్యం': ' Low fees and fee reimbursement facility for all through POLYCET'}</li>
          <li>{glbVals.telugu ? 'పాలిటెక్నిక్‌లు పూర్తి చేసిన విద్యార్థులకు మరిన్ని ఉపాధి అవకాశాలు.': 'More employment opportunities for students who complete polytechnics.'}
          </li>
          <li>{glbVals.telugu ? 'ఆధునిక సాంకేతిక పరిజ్ఞానం ప్రకారం కోర్సుల రూపకల్పన': ' Design of courses according to modern technology.'}</li>
          <li>{glbVals.telugu ? 'నిపుణులైన అధ్యాపకులచే విద్యా బోధన.': ' Academic teaching by expert faculty.'}</li>
          <li>{glbVals.telugu ? 'పాలిటెక్నిక్ వల్ల అధిక నైపుణ్యాభివృద్ధి.': ' High skill development due to polytechnic.'}</li>
          <li>{glbVals.telugu ? 'మానసిక ఒత్తిడి లేని ఉత్తమ విద్య విద్యార్థులకు 6 నెలల పారిశ్రామిక శిక్షణ.': ' Best education without mental stress 6 months industrial training for students.'}
          </li>
          <li>{glbVals.telugu ? 'పాలిటెక్నిక్ ద్వారా ఇంజనీరింగ్ కాలేజీలో చదివిన వారికే క్యాంపస్ ప్లేస్‌మెంట్ అవకాశాలు ఎక్కువగా ఉన్నాయి.': 'Campus placement opportunities are more for those who studied in engineering college through polytechnic.'}
          </li>
          <li>{glbVals.telugu ? 'పాలిటెక్నిక్ (ఈ-సెట్ పరీక్ష ద్వారా) రెండవ సంవత్సరం బి టెక్‌లో ప్రత్యక్ష ప్రవేశం.': ' Direct admission to second year B.Tech through polytechnic (through E-CET exam).'}
          </li>
          <li>{glbVals.telugu ? '3 సంవత్సరాలలో ఇంజనీరింగ్ విద్యను పూర్తి చేసే అవకాశం మరియు 6 సంవత్సరాల ఫీజు రీయింబర్స్‌మెంట్ సౌకర్యం (3 సంవత్సరాల పాలిటెక్నిక్ మరియు 3 సంవత్సరాల ఇంజనీరింగ్).': ' Opportunity to complete engineering education in 3 years and 6 years fee reimbursement Facility (3 years Polytechnic and 3 years Engineering).'}
          </li>
          <li>{glbVals.telugu ? 'ఇంటర్మీడియట్ ద్వారా ఇంజనీరింగ్ విద్యార్థులకు మాత్రమే 4 సంవత్సరాలు ఫీజు రీయింబర్స్‌మెంట్.': ' Fee reimbursement for 4 years only for engineering students through Intermediate.'}
          </li>
          <li>{glbVals.telugu ? 'నాణ్యమైన బోధన కోసం వర్చువల్ తరగతి గదులు.': ' Virtual classrooms for quality teaching.'}</li>
          <li>{glbVals.telugu ? 'ఇంగ్లీష్ మరియు తెలుగులో స్వీయ-అధ్యయనం కోసం మేనేజ్‌మెంట్ సిస్టమ్ నేర్చుకోవడం.': 'Learning Management System for self-study in English and Telugu.'}
          </li>
          <li>{glbVals.telugu ? 'ప్రయోగాలను సులభంగా అర్థం చేసుకోవడానికి వర్చువల్ లాబొరేటరీలు.': ' Virtual laboratories for easy understanding of experiments.'}</li>
          <li>{glbVals.telugu ? 'నిరంతర డిజిటల్ సేవలకు ఇంటర్నెట్ సదుపాయం.': ' Internet access for continuous digital services.'}</li>
          <li>{glbVals.telugu ? 'విద్యార్థుల కోసం సమగ్ర సమాచార నిర్వహణ కోసం నిర్వహణ సమాచార వ్యవస్థ.': '  Management Information System for comprehensive information management for students.'}
          </li>
          <li>{glbVals.telugu ? 'ప్రస్తుత పరిశ్రమ అవసరాలకు అనుగుణంగా పాఠ్యప్రణాళిక సవరణ.': 'Curriculum modification according to current industry requirements.'}
          </li>
          <li>{glbVals.telugu ? 'CISCO, APSSDC రాష్ట్ర స్థాయి క్రీడా వారాలు IPSGMతో ఉత్తమ కోర్సు శిక్షణ కోసం అవగాహన.': ' Awareness for best course training with CISCO, APSSDC State Level Sports Weeks IPSGM.'}
          </li>
          <li>{glbVals.telugu ? 'రాష్ట్ర స్థాయి సాంకేతిక నైపుణ్య ప్రదర్శనలు - A P పాలీ టెక్ ఫెస్ట్.': ' State Level Technical Skill Exhibitions - AP Poly Tech Fest .'}</li>
          <li>{glbVals.telugu ? 'జగనన్న విద్యా దీవెన మరియు వసతి దీవెన ద్వారా విద్యార్థులకు ఫీజు రీయింబర్స్‌మెంట్ అందించడం. SC/ST విద్యార్థులకు వసతి మరియు భోజన సదుపాయాలతో.': ' Provision of fee reimbursement to students through Jagananna Vidya deevena and vasathi deevena.With accommodation and meal facilities for SC/ST students.'}
          </li>
          <li>{glbVals.telugu ? 'ఈ ప్రభుత్వ మోడల్ రెసిడెన్షియల్ పాలిటెక్నిక్ కళాశాలలు.': ' This Government Model Residential Polytechnic Colleges .'}</li>
          <li>{glbVals.telugu ? 'బాలికల విద్య కోసం 18 మహిళా పాలిటెక్నిక్ కళాశాలలు మరియు ఎంపిక చేసిన బాలికలు.': "18 Women's Polytechnic Colleges for girls' education and selected girls."}
          </li>
          <li>{glbVals.telugu ? 'ఏఐసీటీఈ నుంచి ఏటా రూ. 50,000 ప్రోగ్రెస్ స్కాలర్‌షిప్‌లు 3 సంవత్సరాల వరకు ఇవ్వబడతాయి.': 'Annually from AICTE Rs. 50,000 progress scholarships will be given for up to 3 years.'}
          </li>
        </ul>
      </div>
      <div className="College_Details">
        <h3>{glbVals.telugu ? "పాలీ సెట్ కోఆర్డినేటర్" :" Poly Cet Coordinator"}</h3>
        <table>
          <tr>
            <th>{glbVals.telugu ? "పాలీ సెట్ కళాశాల కోడ్" :" Poly Cet College Code"}</th>
            <td>{basicDetails[lang]?.polycetCode}</td>
          </tr>
          <tr>
            <th>{glbVals.telugu ? "కోఆర్డినేటర్ పేరు" :" Coordinator Name"}</th>
            <td>{polycetCoordinator[lang]?.coordName}</td>
          </tr>
          <tr>
            <th>{glbVals.telugu ? "కోఆర్డినేటర్ హోదా" :" Coordinator Designation"}</th>
            <td>{polycetCoordinator[lang]?.coordDesgn}</td>
          </tr>
          <tr>
            <th>{glbVals.telugu ? "కోఆర్డినేటర్ మొబైల్ నెం" :" Coordinator Mobile No"}</th>
            <td>{polycetCoordinator[lang]?.coordPhno}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Why_Polytechnic;
