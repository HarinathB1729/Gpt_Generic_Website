import React, { useEffect, useState } from "react";
import {api,BASE_URL} from "../../../api";
import "../../adminconsole.css";
import FileDownload from "js-file-download";


function AdminAcademics() {
  const key = Math.random().toFixed(6);
  const [academics, setAcademics] = useState({
    ["id"]: key,
  });
  const [ayFiles, setAyFiles] = useState({});
  const [formSub, setFormSub] =useState(false);

  useEffect(()=>{
    const fetchAcademicsData= async ()=>{
      await api
      .get("academics/")
      .then(function (res) {
        // console.log("res",response.data)
        if(res.data.length)
          setAcademics(res.data[0])
        // window.alert(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });

    };
    fetchAcademicsData();

  },[formSub])
  console.log("academics",academics)

  const ayFileHandler = (event) => {
    setAcademics((prev) => ({
      ...prev,
      [event.target.name + "FileUrl"]:
        BASE_URL+"academics/file/" + [event.target.name],
    }));
    setAyFiles((prev) => ({
      ...prev,
      [event.target.name]: event.target.files[0],
    }));
  };

  const ayDataHandler = (event) => {
    setAcademics((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const formDataHandler = async (event) => {
    event.preventDefault();

    await api
      .post("academics/", academics)
      .then(function (response) {
        window.alert(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });

    for (const [key, value] of Object.entries(ayFiles)) {
      const formData = new FormData();
      formData.append("academics", value);

      await api
        .post("academics/file/" + key, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then(function (response) {
          window.alert(response.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

  const downloadBtnHandler = async (e) => {
    e.preventDefault();

    api({
      url: "academics/file/" + e.target.name,
      method: "GET",
      responseType: "blob", // Important
    }).then((response) => {
      FileDownload(response.data, e.target.name + ".pdf");
    });
  };

  // console.log("academics",academics)
  // console.log("academics files:", ayFiles)

  return (
    <div>
      <h2>Form - Academics</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>

      <form method="POST" onSubmit={formDataHandler}>
        <div>
          <h4>Academic Year Calender </h4>
          <table>
            <tbody>
              <tr>
                <td>AY Calender Introduction :</td>
                <td>
                  <textarea
                    type="text"
                    name="AyCalenderIntro_en"
                    placeholder="About Academi Year Calender "
                    rows={5}
                    cols={75}
                    onChange={ayDataHandler}
                    value={academics?.AyCalenderIntro_en}
                  />
                </td>
                <td>
                  <textarea
                    type="text"
                    name="AyCalenderIntro_tel"
                    placeholder="విద్యా సంవత్సర క్యాలెండర్ గురించి "
                    rows={5}
                    cols={75}
                    onChange={ayDataHandler}
                    value={academics?.AyCalenderIntro_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>AY Calender File : </td>
                <td>
                  <input
                    type="file"
                    name="AyCalender"
                    onChange={ayFileHandler}
                    // required
                  />
                </td>
                <td>
                {academics?.AyCalenderIntro_en &&  <button name="AyCalender" onClick={downloadBtnHandler}>
                    AY Calender
                  </button>}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4>Academic Year TimeTable </h4>
          <table>
            <tbody>
              <tr>
                <td>AY TimeTable Introduction :</td>
                <td>
                  <textarea
                    name="AyTimeTableIntro_en"
                    placeholder="About Academi Year TimeTable"
                    rows={5}
                    cols={75}
                    onChange={ayDataHandler}
                    value={academics?.AyTimeTableIntro_en}
                  />
                </td>
                <td>
                  <textarea
                    name="AyTimeTableIntro_tel"
                    placeholder="అకడమిక్ ఇయర్ టైమ్ టేబుల్ గురించి"
                    rows={5}
                    cols={75}
                    onChange={ayDataHandler}
                    value={academics?.AyTimeTableIntro_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>AY Time Table File: </td>
                <td>
                  <input
                    type="file"
                    name="AyTimeTable"
                    placeholder="Pdf file only"
                    onChange={ayFileHandler}
                    // required
                  />
                </td>
                <td>
                {academics?.AyTimeTableIntro_en &&  <button name="AyTimeTable" onClick={downloadBtnHandler}>
                    AY TimeTable
                  </button>}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Academic Year RuleBook </h4>
          <table>
            <tbody>
              <tr>
                <td>AY RuleBook Introduction :</td>
                <td>
                  <textarea
                    type="text"
                    name="AyRuleBookIntro_en"
                    placeholder="About Academic Year Rule Book"
                    rows={5}
                    cols={75}
                    onChange={ayDataHandler}
                    value={academics?.AyRuleBookIntro_en}
                  />
                </td>
                <td>
                  <textarea
                    type="text"
                    name="AyRuleBookIntro_tel"
                    placeholder="అకడమిక్ ఇయర్ రూల్ బుక్ గురించి"
                    rows={5}
                    cols={75}
                    onChange={ayDataHandler}
                    value={academics?.AyRuleBookIntro_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>AY RuleBook File : </td>
                <td>
                  <input
                    type="file"
                    name="AyRuleBook"
                    placeholder="Pdf file only"
                    onChange={ayFileHandler}
                    // required
                  />
                </td>
                <td>
                {academics?.AyRuleBookIntro_en &&  <button name="AyRuleBook" onClick={downloadBtnHandler}>
                   AY RuleBook
                  </button>}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4>Faculty HandBook </h4>
          <table>
            <tbody>
              <tr>
                <td>AY Faculty HandBook Introduction :</td>
                <td>
                  <textarea
                    name="AyFacHandBook_en"
                    placeholder="About Academic Year Faculty Hand Book"
                    rows={5}
                    cols={75}
                    onChange={ayDataHandler}
                    value={academics?.AyFacHandBook_en}
                  />
                </td>
                <td>
                  <textarea
                    name="AyFacHandBook_tel"
                    placeholder="అకడమిక్ ఇయర్ ఫ్యాకల్టీ హ్యాండ్ బుక్ గురించి"
                    rows={5}
                    cols={75}
                    onChange={ayDataHandler}
                    value={academics?.AyFacHandBook_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>AY Faculty HandBook File: </td>
                <td>
                  <input
                    type="file"
                    name="AyFacHandBook"
                    placeholder="Pdf file only"
                    onChange={ayFileHandler}
                    // required
                  />
                </td>
                <td>
                {academics?.AyFacHandBook_en &&  <button name="AyFacHandBook" onClick={downloadBtnHandler}>
                    Faculty HandBook
                  </button>}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <center>
          <button type="submit">Submit</button>
        </center>
      </form>
    </div>
  );
}

export default AdminAcademics;
