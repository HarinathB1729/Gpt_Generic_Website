import {api,BASE_URL} from "../../api";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../adminconsole.css";
import FileDownload from "js-file-download";

function AdminLibrary() {
  const [libData, setLibData] = useState({
    id: Math.random().toFixed(6),
  });

  const libDataHandler = (event) => {
    setLibData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    const fetchLibdData = async () => {
      try {
        //COORDINATOR DETAILS DATA FETCHING
        const lib = await api.get("library");
        if (lib.data.length) setLibData(lib.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLibdData();
  }, []);

  const libFileHandler = (event) => {
    setLibData((prev) => ({
      ...prev,
      [event.target.name]: event.target.files[0],
    }));
  };

  const downloadBtnHandler = async (e) => {
    // console.log("btn clicked");
    e.preventDefault();

    api({
      url: "/library/books",
      method: "GET",
      responseType: "blob", // Important
    })
      .then((response) => {
        FileDownload(response.data, "LibraryBooks.pdf");
      })
      .catch((err) => console.log("Error :", err));
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata", libData);
    try {
      const formData = new FormData();

      formData.append("librarybooks", libData.libraryBooks);
      await api
        .post("library/books", formData, {
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

      await api
        .post("library", libData)
        .then((response) => {
          window.alert(response.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("libData", libData);
  return (
    <div>
      <h2>Form - Library</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>
      <form method="POST" onSubmit={formDataHandler}>
        <div>
          <h4>Introduction about Library</h4>
          <table>
            <tbody>
              <tr>
                <td>Library Introduction:</td>
                <td>
                  <textarea
                    required
                    name="libraryIntro_en"
                    rows="5"
                    cols="75"
                    placeholder="Library Introduction"
                    onChange={libDataHandler}
                    value={libData?.libraryIntro_en}
                  />
                </td>
                <td>
                  <textarea
                    required
                    name="libraryIntro_tel"
                    rows="5"
                    cols="75"
                    placeholder="గ్రంధాలయం పరిచయం"
                    onChange={libDataHandler}
                    value={libData?.libraryIntro_tel}
                  />
                </td>
              </tr>

              <tr>
                <td>Librararian Message:</td>
                <td>
                  <textarea
                    required
                    name="librarianMsg_en"
                    rows="5"
                    cols="75"
                    placeholder="Librarian Message"
                    onChange={libDataHandler}
                    value={libData?.librarianMsg_en}
                  />
                </td>
                <td>
                  <textarea
                    required
                    name="librarianMsg_tel"
                    rows="5"
                    cols="75"
                    placeholder="లైబ్రేరియన్ సందేశం"
                    onChange={libDataHandler}
                    value={libData?.librarianMsg_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>Library Contact No:</td>
                <td>
                  <input
                    required
                    name="libraryPhno"
                    type="text"
                    // pattern="[6-9][0-9]{9}"
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Enter Valid Mobile Number")
                    }
                    placeholder="Library Contact Number"
                    onChange={libDataHandler}
                    value={libData?.libraryPhno}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Library Books Details</h4>
          <table>
            <tbody>
              <tr>
                <td>Library Books Details:</td>
                <td>
                  <input
                    // required
                    type="file"
                    placeholder="pdf"
                    name="libraryBooks"
                    onChange={libFileHandler}
                  />
                </td>
                <td>
                  <button name="libraryBooks" onClick={downloadBtnHandler}>
                    LibraryBooks
                  </button>
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

export default AdminLibrary;
