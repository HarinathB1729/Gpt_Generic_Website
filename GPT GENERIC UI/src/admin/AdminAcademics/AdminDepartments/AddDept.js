import React, { useEffect, useState } from "react";
import "../../adminconsole.css";
import { Download, XSquare } from "phosphor-react";
import {api,BASE_URL} from "../../../api";
import FileDownload from "js-file-download";

function AddDept(props) {
  let key = Math.random().toFixed(6);
  const [deptData, setDeptData] = useState(props.data);
  const [deptLogoUrl, setDeptLogoUrl] = useState("");
  const [deptFileUrl, setDeptFileUrl] = useState("");

  // console.log("props", props.data);
  useEffect(() => {
    // console.log("useeffect");
    const fetchDeptData = async () => {
      try {
        //Department DETAILS DATA FETCHING
        await api
          .get("dept/" + props.data.deptCode)
          .then((response) => {
            // console.log("DB response", response.data);
            if (response.data.length) {
              setDeptData(response.data[0]);
              setDeptLogoUrl(BASE_URL+response.data[0].deptLogoUrl);
              setDeptFileUrl(BASE_URL+response.data[0].deptCurrFileUrl);
            }
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    };
    fetchDeptData();
  }, []);

  const updateDeptData = (event) => {
    setDeptData({ ...deptData, [event.target.name]: event.target.value });
  };

  const deptFileHandler = (event) => {
    event.preventDefault();
    setDeptData((prev) => ({
      ...prev,
      [event.target.name]: event.target.files[0],
      ["deptCurrFileUrl"]:
        "dept/curriculum/" + props.data.deptCode,
    }));
  };

  const deptLogoHandler = (event) => {
    event.preventDefault();

    setDeptData((prev) => ({
      ...prev,
      [event.target.name]: event.target.files[0],
      ["deptLogoUrl"]: "dept/logo/" + props.data.deptCode,
    }));

    //DISPLAY OF IMAGE
    const pic = new FileReader();
    pic.addEventListener("load", () => {
      setDeptLogoUrl(pic.result);
    });
    pic.readAsDataURL(event.target.files[0]);
  };

  const downloadBtnHandler = async (e) => {
    e.preventDefault();

    api({
      url: deptFileUrl,
      method: "GET",
      responseType: "blob", // Important
    }).then((response) => {
      FileDownload(response.data, props.data.deptCode + " Curriculum.pdf");
    });
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata value", eventsData);

    await api
      .post("dept", deptData)
      .then(function (response) {
        window.alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    if (deptData.deptCode != "GENERAL") {
      const formdata = new FormData();
      formdata.append("logo", deptData.deptLogo);
      await api
        .post("dept/logo/" + deptData.deptCode, formdata)
        .then(function (response) {
          window.alert(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

      const fd = new FormData();
      fd.append("curriculum", deptData.deptCurriculum);

      await api
        .post("dept/curriculum/" + deptData.deptCode, fd)
        .then(function (response) {
          window.alert(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  console.log("Dept Data:", deptData);

  return (
    <>
      <form method="POST" onSubmit={formDataHandler}>
        <div>
          <XSquare
            className="closeIcon"
            size={28}
            onClick={() => {
              return props.delDept(props.value);
            }}
          />
          <h4> {props.data.deptCode} - Details </h4>
          <table className="TableCol--3">
            <tbody>
              <tr>
                <td>Department Code :</td>
                <td>
                  <input
                    type="text"
                    placeholder="Department Code"
                    name="deptCode"
                    onChange={updateDeptData}
                    value={deptData?.deptCode}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Department Name : </td>
                <td>
                  <input
                    type="text"
                    name="deptName_en"
                    placeholder="Department Name "
                    onChange={updateDeptData}
                    value={deptData?.deptName_en}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="deptName_tel"
                    placeholder="శాఖ పేరు "
                    onChange={updateDeptData}
                    value={deptData?.deptName_tel}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Department Introduction : </td>
                <td>
                  <textarea
                    rows="5"
                    cols="75"
                    name="deptIntro_en"
                    placeholder="Department Introduction 5-10 lines"
                    onChange={updateDeptData}
                    value={deptData?.deptIntro_en}
                    required
                  ></textarea>
                </td>
                <td>
                  <textarea
                    rows="5"
                    cols="75"
                    name="deptIntro_tel"
                    placeholder="శాఖ పరిచయం 5-10 పంక్తులు"
                    onChange={updateDeptData}
                    value={deptData?.deptIntro_tel}
                    required
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td>Department Vision : </td>
                <td>
                  <textarea
                    placeholder="Department Vision"
                    rows="5"
                    cols="75"
                    name="deptVision_en"
                    onChange={updateDeptData}
                    value={deptData?.deptVision_en}
                    required
                  ></textarea>
                </td>
                <td>
                  <textarea
                    placeholder="శాఖ విజన్"
                    rows="5"
                    cols="75"
                    name="deptVision_tel"
                    onChange={updateDeptData}
                    value={deptData?.deptVision_tel}
                    required
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td>Department Mission : </td>
                <td>
                  <textarea
                    placeholder="Department Mission"
                    rows="5"
                    cols="75"
                    name="deptMission_en"
                    onChange={updateDeptData}
                    value={deptData?.deptMission_en}
                    required
                  ></textarea>
                </td>
                <td>
                  <textarea
                    placeholder="శాఖ మిషన్"
                    rows="5"
                    cols="75"
                    name="deptMission_tel"
                    onChange={updateDeptData}
                    value={deptData?.deptMission_tel}
                    required
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>Email : </td>
                <td>
                  <input
                    placeholder="Department Email/విభాగం ఇమెయిల్"
                    type="email"
                    name="deptEmail"
                    onChange={updateDeptData}
                    value={deptData?.deptEmail}
                    required
                  />
                </td>
              </tr>

              {!(props.data?.deptCode === "GENERAL") && (
                <>
                  <tr>
                    <td>Department Logo :</td>
                    <td>
                      <input
                        type="file"
                        placeholder="Department Logo"
                        name="deptLogo"
                        onChange={deptLogoHandler}
                      />
                    </td>
                    {deptLogoUrl && (
                      <td>
                        <img
                          className="DisplayImage"
                          src={deptLogoUrl}
                          alt="Department Logo"
                        />
                      </td>
                    )}
                  </tr>

                  <tr>
                    <td>Yearly Admission Strength :</td>
                    <td>
                      <input
                        type="number"
                        placeholder="Admission Strength/ప్రవేశ బలం"
                        name="yearAdmStrength"
                        onChange={updateDeptData}
                        value={deptData?.yearAdmStrength}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Curriculum File :</td>
                    <td>
                      <input
                        type="file"
                        placeholder="Department Curriculum File"
                        name="deptCurriculum"
                        onChange={deptFileHandler}
                      />
                    </td>
                    {deptFileUrl && (
                      <td>
                        <Download
                          size={26}
                          weight="fill"
                          onClick={downloadBtnHandler}
                        />
                      </td>
                    )}
                  </tr>
                  {/* <tr>
                    <td>AY Time Table File :</td>
                    <td>
                      <input
                        type="file"
                        placeholder="Department Curriculum File"
                        name="deptTimeTable"
                        onChange={deptFileHandler}
                      />
                    </td>
                    {deptFileUrl && (
                      <td>
                        <Download
                          size={26}
                          weight="fill"
                          onClick={downloadBtnHandler}
                        />
                      </td>
                    )}
                  </tr> */}
                </>
              )}
            </tbody>
          </table>
          <center>
            <button type="submit">submit</button>
          </center>
        </div>
      </form>
    </>
  );
}

export default AddDept;
