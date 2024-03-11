import React, { useEffect, useState } from "react";
import {api,BASE_URL} from "../../../api";



function PhysicalDirector() {
  const [physicalDirector, setPhysicalDirector] = useState({
    id: Math.random().toFixed(6),
    facDesgn_en: "Physical Director",
    facDesgn_tel: "ఫిజికల్ డైరెక్టర్",
    facDept_en: "General Section",
    facDept_tel: "జనరల్ సెక్షన్ ",
    deptCode: "GENERAL",
  });

  const [pdImgUrl, setPdImgUrl] = useState("");
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchFacultyData = async () => {
      await api
        .get("facultydata/physicaldirector/")
        .then((res) => {
          // console.log("pd",res.data)

          if (res.data.length > 0) {
            setPhysicalDirector(res.data[0]);
            setPdImgUrl(BASE_URL+res.data[0].facImgUrl);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchFacultyData();
  }, [formSub]);

  const pdPhotoHandler = (e) => {
    setPhysicalDirector((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
      ["facImgUrl"]:
        "facultydata/img/GENERAL/faculty/" +
        physicalDirector.facName_en,
    }));

    const data = new FileReader();
    data.addEventListener("load", () => {
      setPdImgUrl(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  };

  const physicalDirectorHandler = (event) => {
    setPhysicalDirector((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata:",librarian,physicalDirector)

    await api
      .post("facultydata", physicalDirector)
      .then(function (response) {
        window.alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    const fd = new FormData();
    fd.append("faculty", physicalDirector.facPhoto);

    await api
      .post(
        "/facultydata/img/GENERAL/faculty/" +
          physicalDirector.facName_en,
        fd
      )
      .then(function (response) {
        window.alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setFormSub(!formSub);
  };

  // console.log("Physical Director Data:", physicalDirector);

  return (
    <form method="POST" onSubmit={formDataHandler}>
      <div>
        <h4>Physical Director Details</h4>
        <p className="Remarks">*- Enter the fields in the given order. </p>
        <table>
          <tbody>
            <tr>
              <td> Physical Director Name:</td>
              <td>
                <input
                  name="facName_en"
                  placeholder="Physical Director Name"
                  type="text"
                  onChange={physicalDirectorHandler}
                  value={physicalDirector?.facName_en}
                  required
                />
              </td>
              <td>
                <input
                  name="facName_tel"
                  placeholder="ఫిజికల్ డైరెక్టర్ పేరు"
                  type="text"
                  onChange={physicalDirectorHandler}
                  value={physicalDirector?.facName_tel}
                  required
                />
              </td>
            </tr>
            <tr>
              <td> Physical Director Qualification:</td>
              <td>
                <input
                  name="facQual_en"
                  placeholder="Physical Director Qualification "
                  type="text"
                  onChange={physicalDirectorHandler}
                  value={physicalDirector?.facQual_en}
                  required
                />
              </td>
              <td>
                <input
                  name="facQual_tel"
                  placeholder="ఫిజికల్ డైరెక్టర్ అర్హత"
                  type="text"
                  onChange={physicalDirectorHandler}
                  value={physicalDirector?.facQual_tel}
                  required
                />
              </td>
            </tr>
            <tr>
              <td> Years of Experience:</td>
              <td>
                <input
                  name="facExp"
                  placeholder="Physical Director Experience"
                  type="number"
                  onChange={physicalDirectorHandler}
                  value={physicalDirector?.facExp}
                  required
                />
              </td>
            </tr>
            <tr>
              <td> Physical Director Photo:</td>
              <td>
                <input
                  name="facPhoto"
                  type="file"
                  onChange={pdPhotoHandler}
                  // required
                />
              </td>
              {pdImgUrl && (
                <td>
                  <img
                    className="DisplayImage"
                    src={pdImgUrl}
                    alt="Physical Director"
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

export default PhysicalDirector;
