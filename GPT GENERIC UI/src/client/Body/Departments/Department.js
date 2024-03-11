import { api, BASE_URL } from "../../../api";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArchiveBox } from "phosphor-react";
import { useGlobalProvider } from "../../../GlobalProvider";
import useFetchMultipleDbData from "../../Utilities/useFetchMultipleDbData";
import usefetchDbData from "../../Utilities/useFetchDbData";
import ClientTableBuilder from "../../../Utilities/ClientTableBuilder";
import FileDownload from "js-file-download";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Departments() {
  const { deptCode } = useParams();
  const navigate = useNavigate();
  const [glbVals, setGlbVals] = useGlobalProvider();
  const [strCounter, setStrCounter] = useState(false);
  const lang = glbVals.telugu ? "tel" : "en";

  useEffect(() => {
    const checkDepartment = async () => {
      await api
        .get("dept/" + deptCode)
        .then((res) => {
          // console.log("res", res.data);
          if (!res.data.length) navigate("/pagenotfound");
        })
        .catch((err) => {
          console.log("Error :", err);
        });
    };
    checkDepartment();
  }, [deptCode]);

  const deptData = usefetchDbData("dept/" + deptCode);
  const faculty = useFetchMultipleDbData("facultydata/dept/" + deptCode);
  const hod = usefetchDbData("facultydata/dept/" + deptCode + "/hod");
  // console.log("hod",hod)
  const labs = useFetchMultipleDbData("labsdata/dept/" + deptCode);
  const deptStrength = usefetchDbData("stustr/dept/" + deptCode + "/strength");
  const firstStrength = usefetchDbData("stustr/firstyear");
  const polytechFest = useFetchMultipleDbData(
    "polytechfest/client/" + deptCode
  );
  const deptPlacements = useFetchMultipleDbData("placements/dept/" + deptCode);
  // console.log("deptplacments",deptPlacements)

  const theadData = {
    en: [
      "Academic Year",
      "Project Name",
      "Project Description",
      "Student Team",
      "Project guide",
      "Project status",
    ],
    tel: [
      "విద్యా సంవత్సరం",
      "ప్రాజెక్ట్ పేరు",
      "ప్రాజెక్ట్ వివరణ",
      "Student Team",
      "ప్రాజెక్ట్ గైడ్",
      "ప్రాజెక్ట్ స్థితి",
    ],
  };
  const tPlacmentsheadData = {
    en: [
      "Academic Year",
      "Department",
      "Student PIN",
      "Student Name",
      "Company Name",
      "Remarks",
    ],
    tel: [
      "విద్యా సంవత్సరం",
      "విభాగం",
      "విద్యార్థి పిన్",
      "విద్యార్థి పేరు",
      "కంపెనీ పేరు",
      "వ్యాఖ్యలు",
    ],
  };
  // console.log("deptData", deptData);

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, [deptCode, setGlbVals]);

  const downloadCurrFileHandler = async (e) => {
    e.preventDefault();

    if (deptData[lang]?.deptCurrFileUrl) {
      await api({
        url: deptData[lang]?.deptCurrFileUrl,
        method: "GET",
        responseType: "blob", // Important
      }).then((response) => {
        FileDownload(response.data, deptCode + " Curriculum.pdf");
      });
    } else {
      console.error("DeptCurrFileUrl is undefined");
    }
  };

  return (
    <div className="Body">
      <div className="Dept">
        <h2>{deptData[lang]?.deptName}</h2>
        <div className="Introduction">
          <div className="Intro">
            <p>{deptData[lang]?.deptIntro}</p>
          </div>
          <div className="Introduction_Img">
            <div>
              <img src={BASE_URL + hod[lang]?.facImgUrl} alt="HOD " />
            </div>
            <div>
              <h4>
                {hod[lang]?.facName}, {hod[lang]?.facQual}
              </h4>
              <h4>{hod[lang]?.facDesgn}</h4>
              {/* <h4>{deptData[lang]?.deptName}</h4> */}
            </div>
          </div>
        </div>
        <div className="vision_mission">
          <div className="vision_mission1">
            <div className="CB">
              <div className="circlebody">
                <div className="circle1 circle">
                  <strong>{glbVals.telugu ? "దృష్టి" : "Vision"}</strong>
                </div>
                <div className="circle2 circle">
                  <strong>{glbVals.telugu ? "లక్ష్యం" : "Mission"}</strong>
                </div>
                <div className="circle3 circle">
                  <strong>{deptData[lang]?.deptCode}</strong>
                </div>
              </div>
            </div>
            <div className="content">
              <h4>{glbVals.telugu ? "దృష్టి" : "Vision"} : </h4>
              <p>{deptData[lang]?.deptVision}</p>
              <h4>{glbVals.telugu ? "లక్ష్యం" : "Mission"} :</h4>
              <p>{deptData[lang]?.deptMission}</p>
            </div>
          </div>
        </div>

        <ScrollTrigger
          onEnter={() => {
            setStrCounter(true);
          }}
        >
          <div className="main">
            <div className="cardDiv">
              <h3>{deptData[lang]?.deptName}</h3>
              {/* <h3>{deptData[lang]?.deptCode}</h3> */}
            </div>
            <div className="cardDiv">
              <h1>
                {strCounter && (
                  <CountUp
                    duration={2}
                    start={0}
                    end={Object.keys(labs).length}
                  />
                )}
              </h1>
              <h3>{glbVals.telugu ? "ప్రయోగశాలలు" : "Laboratories"}</h3>
            </div>
            <div className="cardDiv">
              <h1>
                {strCounter && (
                  <CountUp
                    duration={2}
                    start={0}
                    end={Object.keys(faculty).length}
                  />
                )}
              </h1>
              <h3>{glbVals.telugu ? "అధ్యాపకులు" : "Faculty"}</h3>
            </div>
            <div className="card1 cardDiv">
              <h1>
                {strCounter && (
                  <CountUp
                    duration={2}
                    start={0}
                    end={
                      deptCode == "GENERAL"
                        ? firstStrength["en"]?.firstyearstrength
                        : deptStrength["en"]?.deptstrength
                    }
                  />
                )}
              </h1>
              <h3>{glbVals.telugu ? "విద్యార్థులు" : "Students"}</h3>
            </div>
          </div>
        </ScrollTrigger>

        {Object.keys(labs).length > 0 && (
          <div className="Z">
            <h3>
              {deptCode} - {glbVals.telugu ? "ప్రయోగశాలలు" : "Laboratories"}
            </h3>
            {Object.entries(labs).map((lab) => {
              return (
                <div key={lab[0]} className="zdiv">
                  <div className="zdivImg">
                    <img src={BASE_URL + lab[1][lang]?.labImgUrl} alt="Lab" />
                  </div>
                  <div className="zdivContent">
                    <h4>{lab[1][lang]?.labName}</h4>
                    <p>{lab[1][lang]?.labIntro}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {Object.keys(faculty).length > 0 && (
          <div className="Faculty">
            <h3>
              {deptCode} - {glbVals.telugu ? "అధ్యాపకులు" : "Faculty"}
            </h3>
            <div className="profiles">
              {Object.entries(faculty).map((fac) => {
                return (
                  <div key={fac[0]} className="profile">
                    <div className="Image">
                      <img
                        src={BASE_URL + fac[1][lang]?.facImgUrl}
                        alt="faculty"
                      />
                    </div>
                    <div className="Data">
                      <h4>
                        {fac[1][lang]?.facName}, {fac[1][lang]?.facQual}
                      </h4>
                      <h4>{fac[1][lang]?.facDesgn}</h4>
                      <h4>
                        {fac[1][lang]?.facExp}{" "}
                        {glbVals.telugu ? "సం. అనుభవం" : "Years Experience"}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {Object.keys(polytechFest).length > 0 && (
          <div className="PFtable">
            <h3>
              {deptCode} -
              {glbVals.telugu
                ? " పాలీ టెక్ ఫెస్ట్ వివరాలు"
                : " PolytechFest Details"}
            </h3>
            <ClientTableBuilder theadData={theadData} data={polytechFest} />
          </div>
        )}
        <br />

        {Object.keys(deptPlacements).length > 0 && (
          <div className="PFtable">
            <h3>
              {deptCode} -
              {glbVals.telugu ? " ప్లేస్‌మెంట్ వివరాలు" : " Placement Details"}
            </h3>
            <ClientTableBuilder
              theadData={tPlacmentsheadData}
              data={deptPlacements}
            />
          </div>
        )}
        <br />

        {/* {deptCode != "GENERAL" && deptData[lang]?.deptCurrFileUrl && (
          <div className="fileDownload">
            <h3>
              {glbVals.telugu
                ? deptCode + " టైం టేబుల్ : "
                : deptCode + " Time Table : "}
            </h3>
            <br />

            <ArchiveBox
              size={32}
              weight="duotone"
              onClick={downloadCurrFileHandler}
            />
          </div>
        )}

        <br /> */}

        {deptCode != "GENERAL" && deptData[lang]?.deptCurrFileUrl && (
          <div className="fileDownload">
            <h3>
              {glbVals.telugu
                ? deptCode + " కరికులం ఫైల్ : "
                : deptCode + " Curriculum File : "}
            </h3>
            <br />

            <ArchiveBox
              size={32}
              weight="duotone"
              onClick={downloadCurrFileHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default Departments;
