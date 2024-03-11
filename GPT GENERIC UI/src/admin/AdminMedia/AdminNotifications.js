import React, { useEffect, useState } from "react";
import { ListPlus } from "phosphor-react";
import {api,BASE_URL} from "../../api";
import NotificationDetails from "./NotificationDetails";
import DataTableBuilder from "../../Utilities/DataTableBuilder.js";

function AdminNotifications() {
  const [newNtfc, setNewNtfc] = useState({});
  const [dbData, setDbData] = useState({});
  const [btnVis, setBtnVis] = useState(false);
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchNotfcsData = async () => {
      try {
        //BASIC DETAILS DATA FETCHING
        const ntfcs = await api.get("notifications");

        if (ntfcs.data.length) {
          let temp = {};
          for (const [key, value] of Object.entries(ntfcs.data)) {
            temp = { ...temp, [value.id]: value };
          }
          setDbData(temp);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchNotfcsData();
  }, [formSub]);

  const addNtfcsData = () => {
    let key = Math.random().toFixed(6);
    setNewNtfc((prev) => ({ ...prev, [key]: { ["id"]: key , ['ntfcLink']:''} }));
    setBtnVis(true);
  };

  const delNtfcsData = () => {
    setNewNtfc({});
    setBtnVis(false);window.scrollTo(0,0);
  };

  const updateNtfcsData = (id, data) => {
    setNewNtfc((prev) => ({ ...prev, [id]: data }));
  };

  const editDbData = async (id) => {
    // console.log("btnVis id", id);

    let updMember = {};
    for (const [key, value] of Object.entries(dbData)) {
      if (key == id) updMember = { ...updMember, [key]: value };
    }
    setNewNtfc(updMember);
    setBtnVis(true);
    window.scrollTo(0,0);
  };

  const deleteDbData = async (id) => {
    // console.log("delete id ", id);
    await api
      .delete("notifications/" + id)
      .then((res) => {
        window.alert(res.data);
        setFormSub(!formSub);
      })
      .catch((err) => console.log("Error :", err));
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata value", newNtfc);

    for (const [key, value] of Object.entries(newNtfc)) {
      await api
        .post("notifications", value)
        .then((res) => {
          window.alert(res.data);
        })
        .catch((err) => console.log(err));
    }
    setBtnVis(false);
    setFormSub(!formSub);
    setNewNtfc({});
  };

  const theadData = [
    "ID",
    "Notification Date",
    "Title-eng",
    "Title-tel",
    "Description-eng",
    "Description-tel",
    "Link",
    "New Label"
  ];

  // console.log("new notification", newNtfc);
  // console.log("DB notifications", dbData);

  return (
    <div>
      <h2>Form - Notifications</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>

      {!btnVis && (
        <center>
          <ListPlus size={28} weight="fill" onClick={addNtfcsData} />
        </center>
      )}

      {btnVis && (
        <form method="POST" onSubmit={formDataHandler}>
          <h4> New Notification(s) Details</h4>
          {Object.entries(newNtfc).map((nt) => {
            return (
              <NotificationDetails
                key={nt[0]}
                value={nt[0]}
                data={nt[1]}
                updateNtfcsData={updateNtfcsData}
                delNtfcsData={delNtfcsData}
              />
            );
          })}

          <center>
            <button type="submit">Submit</button>
          </center>
        </form>
      )}

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

export default AdminNotifications;
