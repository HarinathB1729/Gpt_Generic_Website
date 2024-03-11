import React, { useEffect, useState } from "react";
import { api, BASE_URL } from "../../../api";
import "../../adminconsole.css";
import FileDownload from "js-file-download";

function AdminAyFacHandBook(props) {
  const key = Math.random().toFixed(6);
  const [ayFacHandBook, setAcademics] = useState({
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
  console.log("ayFacHandBook", ayFacHandBook);

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
      .post("academics/", ayFacHandBook)
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
                    value={ayFacHandBook?.AyFacHandBook_en}
                  />
                </td>
                <td>
                  <textarea
                    name="AyFacHandBook_tel"
                    placeholder="అకడమిక్ ఇయర్ ఫ్యాకల్టీ హ్యాండ్ బుక్ గురించి"
                    rows={5}
                    cols={75}
                    onChange={ayDataHandler}
                    value={ayFacHandBook?.AyFacHandBook_tel}
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
                  {ayFacHandBook?.AyFacHandBookFileUrl && (
                    <button name="AyFacHandBook" onClick={downloadBtnHandler}>
                      FACULTY HANDBOOK
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

export default AdminAyFacHandBook;
