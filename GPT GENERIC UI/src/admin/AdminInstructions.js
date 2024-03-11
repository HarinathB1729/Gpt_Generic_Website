import React from "react";
import { useGlobalProvider } from "../GlobalProvider";

function AdminInstructions() {
  // const [glbVals, setGlbVals] = useGlobalProvider();
  // console.log("glbVals", glbVals);

  return (
    <div>
      <h2>AdminInstructions</h2>
      <p className="Remarks">*- Read Instructions Carefully.</p>
      <ol>
        <li>
          Care should be taken while uploading Data. The Same Data will be
          reflected on to the website.
        </li>
        
        &nbsp;<li>All Fields are Mandatory</li>
        &nbsp;<li>Order of Uploading Data</li>
        <ul>
          <li>Basic Details Page</li>
          <li>CTE Principal Page </li>
          <li>
            Administrative Structure Page(Very Important. Updations on this page
            will have cascading effect on entire Website)
          </li>

          <li>Any Other..</li>

        </ul>
        &nbsp;
        <li>For Adding Any Department :
         <ul>
         <li>Add Deparment Structure (Path: Home -> Administrative Structure -> Add Department(Emoji))  </li>
            <li>Add Deparment Data  (Pathi: Acdemics -> Departments -> Existing Departments -> Select & Edit Deparment )</li>
            <li>Enter Department Details, Faculty Details, Lab Details, Student Strength, PolytechFest Data</li>
            <li>Subject Resources of Departments are uploaded in Resources Page.(Path :Student Corner -> Resources)</li>
            <li>Placements data of Departments will be uploaded in Placements Page (Path : Academics -> Placements )</li>
          </ul>
        </li>
        
        &nbsp;
        <li>Enter Departments Code in Capital Letters. ex: 'DCME'</li>
        &nbsp;<li>Department Code for General Deparment is: 'GENERAL'</li>
        &nbsp;
        <li>
          Librarian, PhysicalDirector Data shoudl be uploaded in APTES Page, and
          they comes under GENERAL Section
        </li>
        &nbsp;
        <li>
          Quality Images are to be uploaded. Use .. for Image Compression.
        </li>
        &nbsp;
        <li>
          For Uploading Telugu Data, English-telugu Translators can be used. Suggestion: Google Translate.
        </li>
        &nbsp;<li>Events: Any Events done at College. Minimum no.of Entries for Events is 2</li>
        &nbsp;<li>NewsItems: Any News paper events about College / Deparment. Minimum no.of Entries for NewsItems is 2</li>
        &nbsp;<li>Notifications: Any Notifications to Staff & Students. Minimum no.of Entries for Notifications is 2</li>
      </ol>
      {/* <button onClick={toggle}>Toggle</button> */}
      
    </div>
  );
}

export default AdminInstructions;
