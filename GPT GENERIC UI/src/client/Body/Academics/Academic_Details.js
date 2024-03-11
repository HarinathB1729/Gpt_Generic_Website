import React, { useEffect } from "react";
import { useGlobalProvider } from "../../../GlobalProvider";
import useFetchDbData from "../../Utilities/useFetchDbData";
import FileDownload from "js-file-download";
import {api} from "../../../api";

function Academic_Details() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);

  const academics = useFetchDbData("academics");
  // console.log("academics", academics);

  const intro =
    "A federal statute that protects the privacy of personally identifiable student records and controls circumstances under which such records may be disclosed.";

  const downloadBtnHandler = async (e) => {
    e.preventDefault();
    // console.log("btn", e.target.name);

    await api({
      url: "/academics/file/" + e.target.name,
      method: "GET",
      responseType: "blob", // Important
    }).then((response) => {
      FileDownload(response.data, e.target.name + ".pdf");
    });
  };

  return (
    <div className="Body">
      <div className="AcaDetails">
        {/* <u><h2>{glbVals.telugu ? "అకడమిక్ వివరాలు" : "Academic Details"}</h2></u> */}
        <div className="Acadiv">
          <div className="fileDownload">
            <h3>
              {glbVals.telugu
                ? "విద్యా సంవత్సరం క్యాలెండర్"
                : "Academic Year Calender"}
            </h3>
            <div>
              <p>{academics[lang]?.AyCalenderIntro}</p>
            </div>
            <button name="AyCalender" onClick={downloadBtnHandler}>
              {glbVals.telugu ? "డౌన్‌లోడ్" : "Download"}
            </button>
          </div>
          <div className="fileDownload">
            <h3>
              {glbVals.telugu
                ? "విద్యా సంవత్సరం టైమ్ టేబుల్"
                : "Academic Year Time Table"}
            </h3>
            <div>
              <p>{academics[lang]?.AyTimeTableIntro}</p>
            </div>

            <button name="AyTimeTable" onClick={downloadBtnHandler}>
              {glbVals.telugu ? "డౌన్‌లోడ్" : "Download"}
            </button>
          </div>
          <div className="fileDownload">
            <h3>
              {glbVals.telugu
                ? "విద్యార్థుల కోసం విద్యా సంవత్సరం రూల్ బుక్"
                : "Academic Rule Book for the students"}
            </h3>
            <div>
              <p>{academics[lang]?.AyRuleBookIntro}</p>
            </div>
            
            <button  name="AyRuleBook" onClick={downloadBtnHandler}>
              {glbVals.telugu ? "డౌన్‌లోడ్" : "Download"}
            </button>
          </div>
          <div className="fileDownload">
            <h3>
              {glbVals.telugu ? "ఫ్యాకల్టీ హ్యాండ్ బుక్" : "Faculty Hand Book "}
            </h3>
            <div>
              <p>{academics[lang]?.AyFacHandBook}</p>
            </div>

            <button name="AyFacHandBook" onClick={downloadBtnHandler}>
              {glbVals.telugu ? "డౌన్‌లోడ్" : "Download"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Academic_Details;
