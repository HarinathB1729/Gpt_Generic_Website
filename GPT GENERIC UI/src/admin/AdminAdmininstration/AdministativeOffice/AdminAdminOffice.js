import React, { useEffect, useState } from "react";
import { UserPlus } from "phosphor-react";
import OfficeStaffDetails from "./OfficeStaffDetails";
import {api,BASE_URL} from "../../../api";
import PhotoTableBuilder from "../../../Utilities/PhotoTableBuilder";

function AdminAdminOffice(props) {
  const [officeStaffData, setOfficeStaffData] = useState({});
  const [btnVis, setBtnVis] = useState(false);
  const [dbData, setDbData] = useState({});
  const [formSub, setFormSub] = useState(false);
  const url = "adminstaff/img/";

  useEffect(() => {
    const fetchFacultyData = async () => {
      //OFFICE STAFF DATA FETCHING
      const fac = await api.get("adminstaff/");
      if (fac.data.length) {
        let temp = {};
        for (const [key, value] of Object.entries(fac.data)) {
          temp = { ...temp, [value.id]: value };
        }
        setDbData(temp);
      }
    };
    fetchFacultyData();
  }, [formSub]);

  const addStaffHandler = () => {
    let key = Math.random().toFixed(6);
    let addItem = { ...officeStaffData, [key]: { id: key } };
    setOfficeStaffData(addItem);
    setBtnVis(true);
  };

  const delStaffData = () => {
    setBtnVis(false);
  };

  const updateStaffData = (id, data) => {
    setOfficeStaffData((prev) => ({ ...prev, [id]: data }));
  };

  const editDbData = async (id) => {
    // console.log("btnVis id", id);
    let name;
    let updMember = {};
    for (const [key, value] of Object.entries(dbData)) {
      if (key == id) updMember = { ...updMember, [key]: value };
    }
    updMember = {
      ...updMember,
      [id]: {
        ...updMember[id],
        ["staffPhoto"]: "adminstaff/img/" + id,
      },
    };

    setOfficeStaffData(updMember);
    setBtnVis(true);
    setFormSub(!formSub);window.scrollTo(0,0);
  };

  const deleteDbData = async (id) => {
    // console.log("delete id ",id)

    await api
      .delete("adminstaff/" + id)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log(err));
    setFormSub(!formSub);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata officeStaffData", officeStaffData);

    try {
      for (const [key, value] of Object.entries(officeStaffData)) {
        await api
          .post("adminstaff", value)
          .then((response) => {
            window.alert(response.data);
          })
          .catch((err) => console.log(err));

        const formdata = new FormData();
        formdata.append("staff", value.staffPhoto);

        await api
          .post("adminstaff/img/" + value.id, formdata)
          .then((response) => {
            window.alert(response.data);
          })
          .catch((err) => console.log(err));
      }

      setBtnVis(false);
      setFormSub(!formSub);
      setOfficeStaffData({});
    } catch (err) {
      console.log(err);
    }
  };

  const theadData = [
    "ID",
    "Staff Name-eng",
    "Staff Name--tel",
    " Designation-eng",
    " Designation-tel",
    " Qualification-eng",
    " Qualification-tel",
    " Experience",
    " Photo URL",
  ];

  // console.log("officeStaffData", officeStaffData);
  return (
    <div>
      <h2>Form - Administrative Office</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>

      {!btnVis && (
        <center>
          <UserPlus
            size={28}
            weight="fill"
            color="blue"
            onClick={addStaffHandler}
          />
        </center>
      )}
      {btnVis && (
        <form method="POST" onSubmit={formDataHandler}>
          <div className="NoBorder">
            <h4> Office Staff Data</h4>
            {Object.entries(officeStaffData).map((fd) => {
              return (
                <OfficeStaffDetails
                  key={fd[0]}
                  value={fd[0]}
                  data={fd[1]}
                  delStaffData={delStaffData}
                  updateStaffData={updateStaffData}
                />
              );
            })}

            <center>
              <button type="submit">submit</button>
            </center>
          </div>
        </form>
      )}

      {/* TABLE-DATABASE DATA  */}
      {Object.keys(dbData).length > 0 && (
        <div>
          <h2>Existing Data</h2>
          <p className="Remarks">
            *- Deletion here will delete data permanently
          </p>

          <PhotoTableBuilder
            data={dbData}
            theadData={theadData}
            imgUrl={BASE_URL + url}
            editDbData={editDbData}
            deleteDbData={deleteDbData}
          />
        </div>
      )}
    </div>
  );
}

export default AdminAdminOffice;
