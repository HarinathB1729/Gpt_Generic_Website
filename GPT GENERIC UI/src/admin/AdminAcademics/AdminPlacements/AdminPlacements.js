import React, { useEffect, useState } from "react";
import AdminPlacementLogos from "./AdminPlacementLogos";
import AdminPlacementsDetails from "./AdminPlacementsDetails";
import "../../adminconsole.css";
import {api,BASE_URL} from "../../../api";
import DataTableBuilder from "../../../Utilities/DataTableBuilder";

function AdminPlacements() {
  let key = Math.random().toFixed(6);
  const [tpoData, setTpoData] = useState({
    id: key,
  });
  const [ayPlacements, setAyPlacements] = useState({});
  const [tpoImgUrl, setTpoImgUrl] = useState("");
  const [dbData, setDbData] = useState({});
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchTpoData = async () => {
      //TPO DATA FETCHING
      await api
        .get("placements/tpo")
        .then((response) => {
          setTpoData(response.data[0]);
          setTpoImgUrl(BASE_URL+"placements/tpo/img");
        })
        .catch((err) => console.log(err));

      //AYPLACEMENTS DATA FETCHING
      await api
        .get("placements/ayplacements")
        .then((response) => {
          // console.log("response",response.data)
          if (response.data.length) {
            let temp = {};
            for (const [key, value] of Object.entries(response.data)) {
              temp = { ...temp, [value.id]: value };
            }
            setDbData(temp);
          }
        })
        .catch((err) => console.log(err));
    };
    fetchTpoData();
  }, [formSub]);

  const tpoPhotoHandler = (e) => {
    setTpoData((prev) => ({ ...prev, [e.target.name]: e.target.files[0],
      ["tpoPhotoUrl"]: "placements/tpo/img"  }));
    const tPic = new FileReader();

    tPic.addEventListener("load", () => {
      setTpoImgUrl(tPic.result);
    });
    tPic.readAsDataURL(e.target.files[0]);
  };

  const changeTpoValue = (e) => {
    setTpoData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateAyPlacements = (data) => {
    setAyPlacements(data);
  };

  const editDbData = async (id) => {
    // console.log("edit id", id);

    let updMember = {};
    for (const [key, value] of Object.entries(dbData)) {
      if (key == id) updMember = { ...updMember, [key]: value };
    }
    // console.log("updmember",updMember)
    setAyPlacements(updMember);
    setFormSub(!formSub);
  };

  const deleteDbData = async (id) => {
    // console.log("delete id ", id);
    await api
      .delete("placements/ayplacements/" + id)
      .then((res) => {
        window.alert(res.data);
        setFormSub(!formSub);
        setAyPlacements({});
      })
      .catch((err) => console.log("Error :", err));
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata value", eventsData);

    await api
      .post("placements/tpo", tpoData)
      .then(function (response) {
        window.alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    const formdata = new FormData();
    formdata.append("tpo", tpoData.tpoPhoto);

    await api
      .post("placements/tpo/img", formdata)
      .then(function (response) {
        window.alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    for (const [key, value] of Object.entries(ayPlacements)) {
      await api
        .post("placements/ayplacements", value)
        .then(function (response) {
          window.alert(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setFormSub(!formSub);
    setAyPlacements({});
  };

  const theadData = [
    "ID",
    "acdYear",
    "Dept Code",
    "stuPIN",
    "stuName_en",
    "stuName_tel",   
    "compName_en",
    "compName_tel",
    "remarks_en",
    "remarks_tel",
  ];

  // console.log("tpo", tpoData);
  // console.log("tpophoto", tpoImgUrl);
  console.log("placments details", ayPlacements);

  return (
    <div>
      <h2>Form - Placements</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>
      <form method="POST" onSubmit={formDataHandler}>
        <div>
          <h4>Training & Placement Officer </h4>
          <table>
            <tbody>
              <tr>
                <td> TPO Name:</td>
                <td>
                  <input
                    name="tpoName_en"
                    type="text"
                    placeholder="TPO Name"
                    onChange={changeTpoValue}
                    value={tpoData?.tpoName_en}
                    //required
                  />
                </td>
                <td>
                  <input
                    name="tpoName_tel"
                    type="text"
                    placeholder="శిక్షణ & ప్లేస్‌మెంట్ అధికారి పేరు"
                    onChange={changeTpoValue}
                    value={tpoData?.tpoName_tel}
                    //required
                  />
                </td>
              </tr>
              <tr>
                <td>TPO Message :</td>
                <td>
                  <textarea
                    name="tpoMsg_en"
                    rows="5"
                    cols="75"
                    onChange={changeTpoValue}
                    value={tpoData?.tpoMsg_en}
                    placeholder=" TPO Description"
                    //required
                  />
                </td>
                <td>
                  <textarea
                    name="tpoMsg_tel"
                    rows="5"
                    cols="75"
                    onChange={changeTpoValue}
                    value={tpoData?.tpoMsg_tel}
                    placeholder="శిక్షణ & ప్లేస్‌మెంట్ సెల్ వివరణ"
                    //required
                  />
                </td>
              </tr>
              <tr>
                <td>TPO Contact No:</td>
                <td>
                  <input
                    name="tpoPhno"
                    type="text"
                    pattern="[6-9][0-9]{9}"
                    onChange={changeTpoValue}
                    value={tpoData?.tpoPhno}
                    placeholder="TPO Contact Number"
                    //required
                  />
                </td>
              </tr>
              <tr>
                <td> TPO Photo:</td>
                <td>
                  <input
                    name="tpoPhoto"
                    type="file"
                    onChange={tpoPhotoHandler}
                  />
                </td>
                {tpoImgUrl && (
                  <td>
                    <img className="DisplayImage" src={tpoImgUrl} alt="tpo" />
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Placement Details</h4>
          <AdminPlacementsDetails
            updateAyPlacements={updateAyPlacements}
            data={ayPlacements}
          />
        </div>
        {/*  <div>
          <h4> Hiring Partners Names & Logos</h4>
          <AdminPlacementLogos />
        </div> */}

        <center>
          <button type="submit">Submit</button>
        </center>
      </form>

      {/* TABLE-DATABASE DATA */}

      {Object.keys(dbData).length > 0 && (
        <>
          <h2>Existing Data</h2>
          <p className="Remarks">
            *- Deletion here will Delete data permanently
          </p>
          <DataTableBuilder
            data={dbData}
            theadData={theadData}
            editDbData={editDbData}
            deleteDbData={deleteDbData}
          />
        </>
      )}
    </div>
  );
}

export default AdminPlacements;
