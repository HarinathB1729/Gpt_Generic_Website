import React, { useEffect } from "react";
import { useGlobalProvider } from "../../../GlobalProvider";
import { Tree, TreeNode } from 'react-organizational-chart';
import useFetchMultipleDbData from "../../Utilities/useFetchMultipleDbData";


function OrganizationStructure() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";
  const depts = useFetchMultipleDbData("adminstr/depts");
  const office = useFetchMultipleDbData("adminstr/office");
  const bhostel = useFetchMultipleDbData("adminstr/bhostel");
  const ghostel = useFetchMultipleDbData("adminstr/ghostel");
  // console.log("bhostel", bhostel)
  //  console.log("ghostel", ghostel)
  // console.log("office", office)
  // console.log("depts", depts)

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);

  return (
    <div className="Body">
      <h2 >{glbVals.telugu ? "సంస్థ నిర్మాణం" : "Organization Structure "}</h2>
      <div className="Committees">
        <div className="Committees_Message">
          <div id="wordtree_basic">
            {/* {glbVals.telugu ? "పేజీ నిర్మాణంలో ఉంది" : "Page is under Construction"} */}
            <Tree label={<div><h4 style={{color:'#9c27b0'}}>{glbVals.telugu ? "ప్రిన్సిపాల్" : "Principal"}</h4></div>}>
              {
                Object.values(depts).map((dept) => {
                  let head = String(dept['en']?.deptCode);
                  if (head == 'GENERAL')
                    head = 'HGES'
                  else
                    head = head.replace(head[0], 'H').concat('S')

                  return <TreeNode label={<div><i>{head}</i></div>}>
                    <TreeNode
                      label={
                        <div>
                          {glbVals.telugu ? "సీనియర్ లెక్చరర్" : "Senior Lecturer"} - {dept['en']?.deptSrLect} <br />
                          {glbVals.telugu ? "లెక్చరర్లు" : "Lecturers"} - {dept['en']?.deptLects} <br />
                          {glbVals.telugu ? "బోధకులు" : "Instructors"} - {dept['en']?.deptInstrs} <br />
                          {glbVals.telugu ? "కాంట్రాక్ట్ లెక్చరర్లు" : "Contract Lecturers"} - {dept['en']?.deptContLectrs} <br />
                        </div>} />
                  </TreeNode>
                })
              }
              {
                Object.values(office).map((ofc) => {
                  // console.log("ofc ",ofc)
                  return <TreeNode label={<div><i>{glbVals.telugu ? "అడ్మినిస్ట్రేటివ్ అధికారి" : "Administrative Officer"}</i></div>}>
                    <TreeNode
                      label={
                        <div>
                          {glbVals.telugu ? "కార్యాలయ సూపరింటెండెంట్" : "Office Superintendent"} - {ofc['en']?.offSupdnt} <br />
                          {glbVals.telugu ? "సీనియర్ అసిస్టెంట్లు" : "Senior Assistants"} - {ofc['en']?.srAsst} <br />
                          {glbVals.telugu ? "జూనియర్ అసిస్టెంట్లు" : "Junior Assistants"} - {ofc['en']?.jrAssts} <br />
                          {glbVals.telugu ? "కాంట్రాక్ట్ సిబ్బంది" : "Contract Staff"} - {ofc['en']?.contrStaff} <br />
                          {glbVals.telugu ? "కార్యాలయ సబార్డినేట్లు" : "Office Subordinates"} - {ofc['en']?.offSubs} <br />
                        </div>} />
                  </TreeNode>
                })
              }
              {
                Object.values(bhostel).map((bh) => {
                  return <TreeNode label={<div><i>{glbVals.telugu ? "బాయ్స్ హాస్టల్ సూపర్‌వైజర్" : "Boys Hostel Supervisor"}</i></div>}>
                    <TreeNode
                      label={
                        <div>
                          {glbVals.telugu ? "హాస్టల్ మేనేజర్" : "Hostel Manager"} - {bh['en']?.bHostelMgr} <br />
                          {glbVals.telugu ? "సీనియర్ అసిస్టెంట్లు" : "Senior Assistants"} - {bh['en']?.bHostelSrAsst} <br />
                          {glbVals.telugu ? "జూనియర్ అసిస్టెంట్లు" : "Junior Assistants"} - {bh['en']?.bHostelJrAssts} <br />
                          {glbVals.telugu ? "హాస్టల్ సబార్డినేట్లు" : "Hostel Subordinates"} - {bh['en']?.bHostelSubs} <br />
                        </div>} />
                  </TreeNode>
                })
              }
              {
                Object.values(ghostel).map((gh) => {
                  return <TreeNode label={<div><i>{glbVals.telugu ? "బాలికల హాస్టల్ సూపర్‌వైజర్" : "Girls Hostel Supervisor"}</i></div>}>
                    <TreeNode
                      label={
                        <div>
                          {glbVals.telugu ? "హాస్టల్ మేనేజర్" : "Hostel Manager"} - {gh['en']?.gHostelMgr} <br />
                          {glbVals.telugu ? "సీనియర్ అసిస్టెంట్లు" : "Senior Assistants"} - {gh['en']?.gHostelSrAsst} <br />
                          {glbVals.telugu ? "జూనియర్ అసిస్టెంట్లు" : "Junior Assistants"} - {gh['en']?.gHostelJrAssts} <br />
                          {glbVals.telugu ? "హాస్టల్ సబార్డినేట్లు" : "Hostel Subordinates"} - {gh['en']?.gHostelSubs} <br />
                        </div>} />
                  </TreeNode>
                })
              }
            </Tree>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrganizationStructure;
