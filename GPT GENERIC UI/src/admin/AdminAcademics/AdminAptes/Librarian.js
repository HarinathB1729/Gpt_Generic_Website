import {api,BASE_URL} from "../../../api";
import React, { useEffect, useState } from "react";

function Librarian() {
  const [librarian, setLibrarian] = useState({
    id: Math.random().toFixed(6),
    facDesgn_en: "Librarian",
    facDesgn_tel: "గ్రంథపాలకుడు",
    facDept_en: "General Section",
    facDept_tel: "జనరల్ సెక్షన్ ",
    deptCode: "GENERAL",
  });

  const [libImgUrl, setLibImgUrl] = useState("");
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchFacultyData = async () => {
      //LIBRARIAN DATA FETCHING
      await api
        .get("facultydata/librarian/")
        .then((res) => {
          // console.log("lib",res.data)

          if (res.data.length > 0) {
            setLibrarian(res.data[0]);
            setLibImgUrl(BASE_URL+res.data[0].facImgUrl);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchFacultyData();
  }, [formSub]);

  const libPhotoHandler = (e) => {
    setLibrarian((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
      ["facImgUrl"]:"facultydata/img/GENERAL/faculty/" +librarian.facName_en,
    }));

    const data = new FileReader();
    data.addEventListener("load", () => {
      setLibImgUrl(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  };

  const librarianHandler = (event) => {
    setLibrarian((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata:",librarian,physicalDirector)

    await api
      .post("facultydata", librarian)
      .then(function (response) {
        window.alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    const formdata = new FormData();
    formdata.append("faculty", librarian.facPhoto);

    await api
      .post(
        "/facultydata/img/GENERAL/faculty/" +
          librarian.facName_en,
        formdata
      )
      .then(function (response) {
        window.alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    setFormSub(!formSub);
  };

  // console.log("Librarian Data:", librarian);

  return (
    <form method="POST" onSubmit={formDataHandler}>
      <div>
        <h4>Librarian Details</h4>
        <p className="Remarks">*- Enter the fields in the given order. </p>
        <table>
          <tbody>
            <tr>
              <td> Librarian Name:</td>
              <td>
                <input
                  name="facName_en"
                  placeholder="Librarian Name"
                  type="text"
                  onChange={librarianHandler}
                  value={librarian?.facName_en}
                  required
                />
              </td>
              <td>
                <input
                  name="facName_tel"
                  placeholder="గ్రంథపాలకుడు పేరు"
                  type="text"
                  onChange={librarianHandler}
                  value={librarian?.facName_tel}
                  required
                />
              </td>
            </tr>
            <tr>
              <td> Librarian Qualification:</td>
              <td>
                <input
                  name="facQual_en"
                  placeholder="Librarian Qualification "
                  type="text"
                  onChange={librarianHandler}
                  value={librarian?.facQual_en}
                  required
                />
              </td>
              <td>
                <input
                  name="facQual_tel"
                  placeholder="గ్రంథపాలకుడు అర్హత"
                  type="text"
                  onChange={librarianHandler}
                  value={librarian?.facQual_tel}
                  required
                />
              </td>
            </tr>
            <tr>
              <td> Years of Experience:</td>
              <td>
                <input
                  name="facExp"
                  placeholder="Librarian Experience"
                  type="number"
                  onChange={librarianHandler}
                  value={librarian?.facExp}
                  required
                />
              </td>
            </tr>
            <tr>
              <td> Librarian Photo:</td>
              <td>
                <input
                  name="facPhoto"
                  type="file"
                  onChange={libPhotoHandler}
                  // required
                />
              </td>
              {libImgUrl && (
                <td>
                  <img
                    className="DisplayImage"
                    src={libImgUrl}
                    alt="Librarian"
                  />
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
      <center>
        <button type="submit">Submit</button>
      </center>
    </form>
  );
}

export default Librarian;
