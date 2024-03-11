import React, { useEffect, useState } from "react";
import { api, BASE_URL } from "../../../api";
import "../../adminconsole.css";
import FileDownload from "js-file-download";

function AdminAyCalender(props) {
  const key = Math.random().toFixed(6);
  const [ayCalender, setAcademics] = useState({
    ["id"]: props.id,
  });
  const [ayFiles, setAyFiles] = useState({});
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchAcademicsData = async () => {
      await api
        .get("academics/aycalender")
        .then(function (res) {
          // console.log("res",response.data)
          if (res.data.length) setAcademics(res.data[0]);
          // window.alert(response.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    };
    fetchAcademicsData();
  }, [formSub]);
  // console.log("ayCalender", ayCalender);

  const ayFileHandler = (event) => {
    setAcademics((prev) => ({
      ...prev,
      [event.target.name + "FileUrl"]:
        "academics/file/" + [event.target.name],
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

  
  const downloadBtnHandler = async (e) => {
    e.preventDefault();

    api({
      url: BASE_URL+"academics/file/" + e.target.name,
      method: "GET",
      responseType: "blob", // Important
    }).then((response) => {
      FileDownload(response.data, e.target.name + ".pdf");
    });
  };


  const formDataHandler = async (event) => {
    event.preventDefault();

    await api
      .post("academics/", ayCalender)
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
                    value={ayCalender?.AyCalenderIntro_en}
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
                    value={ayCalender?.AyCalenderIntro_tel}
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
                  {ayCalender?.AyCalenderFileUrl && (
                    <button name="AyCalender" onClick={downloadBtnHandler}>
                      AY Calender
                    </button>
                  )}
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

export default AdminAyCalender;
