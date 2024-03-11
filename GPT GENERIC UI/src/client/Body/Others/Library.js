import React, { useEffect } from "react";
import FileDownload from "js-file-download";
import { ArchiveBox } from "phosphor-react";
import { useGlobalProvider } from "../../../GlobalProvider";
import {api,BASE_URL} from "../../../api";
import useFetchDbData from "../../Utilities/useFetchDbData";

function Library() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";

  const libraryData = useFetchDbData("library");
  // console.log("library", libraryData);

  const librarian = useFetchDbData("facultydata/librarian/");
  // console.log("librarian", librarian);

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);

  // console.log("librarian", librarian, libImgUrl);

  const libraryBooksIntro = {
    en: "A federal statute that protects the privacy of personally identifiable student records and controls circumstances under which such records may be disclosed.",

    tel: "వ్యక్తిగతంగా గుర్తించదగిన విద్యార్థి రికార్డుల గోప్యతను రక్షించే సమాఖ్య శాసనం మరియు అటువంటి రికార్డులను బహిర్గతం చేసే పరిస్థితులను నియంత్రిస్తుంది",
  };

  const downloadBtnHandler = async (e) => {
    e.preventDefault();

    await api({
      url: "/library/books",
      method: "GET",
      responseType: "blob", // Important
    }).then((response) => {
      FileDownload(response.data, "LibraryBooks.pdf");
    });
  };

  return (
    <div className="Body">
      <div className="Library">
        <h2>{glbVals.telugu ? "గ్రంధాలయం" : "Library"}</h2>

        <div className="Committees">
          <div className="Committees_Message">
            <p>
              {glbVals.telugu
                ? "పాలిటెక్నిక్ కళాశాలల్లోని లైబ్రరీ విద్యార్థులకు, అధ్యాపకులకు మరియు పరిశోధకులకు ముఖ్యమైన వనరుగా పనిచేస్తుంది, పుస్తకాలు, పత్రికలు మరియు ఇతర విద్యా సామగ్రి యొక్క విస్తారమైన సేకరణకు ప్రాప్యతను అందిస్తుంది."
                : "The library in Polytechnic colleges serves as an important resource for students, faculty, and researchers, providing access to a vast collection of books, journals, and other educational materials."}
            </p>
            <p>
              {glbVals.telugu
                ? "లైబ్రరీ బుక్ లెండింగ్, రిఫరెన్స్ అసిస్టెన్స్, ఆన్‌లైన్ డేటాబేస్ యాక్సెస్ మరియు ఇంటర్‌లైబ్రరీ లోన్ సర్వీసెస్ వంటి అనేక రకాల సేవలను అందిస్తుంది. సేకరణలో పాఠ్యపుస్తకాలు, రిఫరెన్స్ పుస్తకాలు, పరిశోధనా పత్రాలు, మ్యాగజైన్‌లు మరియు వివిధ అధ్యయన రంగాలకు సంబంధించిన పీరియాడికల్‌లు ఉన్నాయి."
                : "The library offers a range of services such as book lending, reference assistance, online database access, and interlibrary loan services. The collection includes textbooks, reference books, research papers, magazines, and periodicals related to various fields of study."}
            </p>
            <p>
              {glbVals.telugu
                ? "లైబ్రరీ విద్యార్థులకు కంప్యూటర్లు, ప్రింటర్లు మరియు ఇతర అవసరమైన పరికరాలకు ప్రాప్యతతో పాటు ప్రాజెక్ట్‌లపై అధ్యయనం చేయడానికి మరియు పని చేయడానికి సౌకర్యాలను అందిస్తుంది. లైబ్రేరియన్లు వారి విద్యా మరియు పరిశోధన అవసరాలకు మద్దతుగా సంబంధిత సమాచారం మరియు వనరులను కనుగొనడంలో విద్యార్థులకు సహాయపడటానికి శిక్షణ పొందుతారు."
                : "The library also provides facilities for students to study and work on projects, with access to computers, printers, and other necessary equipment. The librarians are trained to assist students in finding relevant information and resources to support their academic and research needs."}
            </p>
            <p>
              {glbVals.telugu
                ? "మొత్తంమీద, పాలిటెక్నిక్ కళాశాలల్లోని లైబ్రరీ విద్యార్థులకు వారి అధ్యయనాలు మరియు పరిశోధనలలో రాణించడానికి అవసరమైన వనరులను మరియు మద్దతును అందించడం ద్వారా విద్యా నైపుణ్యాన్ని ప్రోత్సహించడంలో కీలక పాత్ర పోషిస్తుంది."
                : "Overall, the library in Polytechnic colleges plays a crucial role in promoting academic excellence by providing students with the necessary resources and support to excel in their studies and research."}
            </p>
          </div>
        </div>

        <div className="IdCard">
          <div className="ID_Card_Details">
            <h2>
              {glbVals.telugu
                ? "లైబ్రేరియన్ గారి సందేశం"
                : "Librarian's Messsage"}
            </h2>
            <div className="pmsg">
              <div className="Id_Photo">
                <div className="Img">
                  <img src={BASE_URL+librarian[lang]?.facImgUrl} alt="Librarian" />
                </div>
              </div>
              <figure className="quote">
                <blockquote>{libraryData[lang]?.librarianMsg}</blockquote>
                <figcaption>
                  &mdash; {librarian[lang]?.facName},{librarian[lang]?.facQual},{" "}
                  <cite>{librarian[lang]?.facDesgn}</cite>{" "}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="fileDownload">
          <h2>
            {glbVals.telugu
              ? "గ్రంధాలయం పుస్తకాల వివరాలు"
              : "Library Books Details"}
          </h2>
          <div>
            <p>{libraryBooksIntro[lang]}</p>
          </div>
          <p>
            {glbVals.telugu ? " ఇక్కడ డౌన్‌లోడ్ చేసుకోండి" : "Download Here"}
            <ArchiveBox
              size={32}
              weight="duotone"
              onClick={downloadBtnHandler}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
export default Library;
