import React, { useEffect, useState } from "react";
import { api, BASE_URL } from "../../../api";
import "../../adminconsole.css";
import FileDownload from "js-file-download";

function AdminAyStuRuleBook(props) {
  const key = Math.random().toFixed(6);
  const [ayStuRuleBook, setAcademics] = useState({
    ["id"]: props.id,
  });
  const [ayFiles, setAyFiles] = useState({});
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchAcademicsData = async () => {
      await api
        .get("academics/ayfachandbook")
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
  console.log("ayStuRuleBook", ayStuRuleBook);

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
      .post("academics/", ayStuRuleBook)
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
                    value={ayStuRuleBook?.AyRuleBookIntro_en}
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
                    value={ayStuRuleBook?.AyRuleBookIntro_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>AY RuleBook File : </td>
                <td>
                  <input
                    type="file"
                    name="AyStuRuleBook"
                    placeholder="Pdf file only"
                    onChange={ayFileHandler}
                    // required
                  />
                </td>
                <td>
                  {ayStuRuleBook?.AyStuRuleBookFileUrl && (
                    <button name="AyStuRuleBook" onClick={downloadBtnHandler}>
                      Student Rule Book
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

export default AdminAyStuRuleBook;
