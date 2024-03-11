import React, { useEffect, useState } from "react";
import { XSquare } from "phosphor-react";
import "../../adminconsole.css";
import {api,BASE_URL} from "../../../api";

function LabDetails(props) {
  const [lab, setLab] = useState({});
  const [labImgUrl, setLabImgUrl] = useState("");

  useEffect(() => {
    if (props.data) {
      setLab(props.data);
      setLabImgUrl(BASE_URL+props.data.labImgUrl);
    }
  }, [props.data]);

  const labDataHandler = (event) => {
    let data = { ...lab, [event.target.name]: event.target.value };
    setLab((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    props.updateLabsData(props.value, data);
  };


  const labPhotoHandler = (event) => {
    let data = {
      ...lab,
      [event.target.name]: event.target.files[0],
      ["labImgUrl"]: "labsdata/img/" +
        lab.deptCode +
        "/labs/" +
        lab?.labName_en,
    };

    // LAB PHOTO, IMAGE URL
    setLab((prev) => ({
      ...prev,
      [event.target.name]: event.target.files[0],
      ["labImgUrl"]: "labsdata/img/" +
        lab.deptCode +
        "/lab/" +
        lab?.labName_en,
    }));
    props.updateLabsData(props.value, data);

    //DISPLAY OF IMAGE
    const pic = new FileReader();
    pic.addEventListener("load", () => {
      setLabImgUrl(pic.result);
    });
    pic.readAsDataURL(event.target.files[0]);
  };

// console.log("lab",lab)
  return (
    <div>
      <XSquare
        className="closeIcon"
        size={20}
        onClick={() => {
          return props.delLabsData(props.value);
        }}
      />
        <p className="Remarks">*- Enter the fields in the given order. </p>
      <table>
        <tbody>
          <tr>
            <td> Lab Name:</td>
            <td>
              <input
                name="labName_en"
                placeholder="Lab Name"
                type="text"
                onChange={labDataHandler}
                value={lab?.labName_en}
                required
              />
            </td>
            <td>
              <input
                name="labName_tel"
                type="text"
                placeholder="ప్రయోగశాల పేరు"
                onChange={labDataHandler}
                value={lab?.labName_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td> Lab Introduction:</td>
            <td>
              <textarea
                name="labIntro_en"
                placeholder="Lab Introduction"
                rows="5"
                cols="75"
                onChange={labDataHandler}
                value={lab?.labIntro_en}
                required
              />
            </td>
            <td>
              <textarea
                name="labIntro_tel"
                placeholder="ప్రయోగశాల పరిచయం"
                rows="5"
                cols="75"
                onChange={labDataHandler}
                value={lab?.labIntro_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td> Lab Photo:</td>
            <td>
              <input
                name="labPhoto"
                type="file"
                onChange={labPhotoHandler}
                // required
              />
            </td>
            {lab?.labImgUrl && (
              <td>
                <img className="DisplayImage" src={BASE_URL+ lab?.labImgUrl} alt="Lab" />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LabDetails;
