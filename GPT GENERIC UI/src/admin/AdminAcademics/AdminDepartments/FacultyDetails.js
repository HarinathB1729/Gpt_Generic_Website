import React, { useEffect, useState } from "react";
import { XSquare } from "phosphor-react";
import "../../adminconsole.css";
import {api,BASE_URL} from "../../../api";

function FacultyDetails(props) {
  const [faculty, setFaculty] = useState({});
  const [facImgUrl, setFacImgUrl] = useState("");
  

  useEffect(() => {
    if (props.data) {
      setFaculty(props.data);
      setFacImgUrl(BASE_URL+props.data.facImgUrl);
    }
  }, [props.data]);

  const facultyDataHandler = (event) => {
    let data = { ...faculty, [event.target.name]: event.target.value };
    setFaculty((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    props.updateFacultyData(props.value, data);
  };

  const facultyPhotoHandler = (event) => {
    let data = {
      ...faculty,
      [event.target.name]: event.target.files[0],
      ["facImgUrl"]:
        "facultydata/img/" +
        faculty?.deptCode +
        "/faculty/" +
        faculty?.facName_en,
    };
    // FACULTY PHOTO, IMAGE URL
    setFaculty((prev) => ({
      ...prev,
      [event.target.name]: event.target.files[0],
      ["facImgUrl"]:
        "facultydata/img/" +
        faculty?.deptCode +
        "/faculty/" +
        faculty?.facName_en,
    }));
    props.updateFacultyData(props.value, data);

    //DISPLAY OF IMAGE
    const pic = new FileReader();
    pic.addEventListener("load", () => {
      setFacImgUrl(pic.result);
    });
    pic.readAsDataURL(event.target.files[0]);
  };

  const selectionHandler = (e) => {
    let [a, b] = e.target.value.split("_");
    let data = {
      ...faculty,
      [e.target.name + "_en"]: a,
      [e.target.name + "_tel"]: b,
    };
    setFaculty((prev) => ({
      ...prev,
      [e.target.name + "_en"]: a,
      [e.target.name + "_tel"]: b,
    }));
    props.updateFacultyData(props.value, data);
  };

  // console.log("faculty:", faculty);
  // console.log("props",props.data)

  return (
    <div>
      <XSquare
        className="closeIcon"
        size={20}
        onClick={() => {
          return props.delFacultyData(props.value);
        }}
      />
      <p className="Remarks">*- Enter the fields in the given order. </p>

      <table>
        <tbody>
          <tr>
            <td> Faculty Designation:</td>
            <td>
              <select
                name="facDesgn"
                type="text"
                onChange={selectionHandler}
                value={faculty?.facDesgn_en + "_" + faculty?.facDesgn_tel}
                required
              >
                <option value="">----Select----</option>
                <option value="Head of Department_విభాగం అధిపతి">
                  Head of Department
                </option>
                <option value="Senior Lecturer_సీనియర్ ఉపన్యాసకుడు">
                  Senior Lecturer
                </option>
                <option value="Lecturer_ఉపన్యాసకుడు">Lecturer</option>
                <option value="Instructor_బోధకుడు">Instructor</option>
                <option value="Contract Lecturer_ఒప్పందం ఉపన్యాసకుడు">
                  Contract Lecturer
                </option>
              </select>
            </td>
            <td></td>
          </tr>

          <tr>
            <td> Faculty Name:</td>
            <td>
              <input
                name="facName_en"
                placeholder="Faculty Name"
                type="text"
                onChange={facultyDataHandler}
                value={faculty?.facName_en}
                required
              />
            </td>
            <td>
              <input
                name="facName_tel"
                placeholder="అధ్యాపకుడు పేరు"
                type="text"
                onChange={facultyDataHandler}
                value={faculty?.facName_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td> Faculty Qualification:</td>
            <td>
              <input
                name="facQual_en"
                placeholder="Faculty Qualification "
                type="text"
                onChange={facultyDataHandler}
                value={faculty?.facQual_en}
                required
              />
            </td>
            <td>
              <input
                name="facQual_tel"
                placeholder="అధ్యాపకుడు అర్హత"
                type="text"
                onChange={facultyDataHandler}
                value={faculty?.facQual_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td> Years of Experience:</td>
            <td>
              <input
                name="facExp"
                placeholder="Faculty Experience"
                type="number"
                onChange={facultyDataHandler}
                value={faculty?.facExp}
                required
              />
            </td>
            
          </tr>
          <tr>
            <td> Faculty Photo:</td>
            <td>
              <input
                name="facPhoto"
                type="file"
                onChange={facultyPhotoHandler}
                // required
              />
            </td>
            {facImgUrl && (
              <td>
                <img className="DisplayImage" src={facImgUrl} alt="Faculty" />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FacultyDetails;
