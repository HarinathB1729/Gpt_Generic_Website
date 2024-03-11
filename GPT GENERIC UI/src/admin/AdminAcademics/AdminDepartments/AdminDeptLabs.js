import React, { useEffect, useState } from "react";
import { PlusCircle } from "phosphor-react";
import LabDetails from "./LabDetails";
import {api,BASE_URL} from "../../../api";

function AdminDeptLabs(props) {
  const [labsData, setLabsData] = useState({});
  const [formSub, setFormSub] = useState(false);
  const [id, setId] = useState(Math.random().toFixed(6));


  useEffect(() => {
    const fetchDeptLabsData = async () => {
      try {
        //NEWS DETAILS DATA FETCHING
        const lbs = await api.get("labsdata/dept/" + props.deptCode);
        if (lbs.data.length) {
          let temp = {};let id;
          for (const [key, value] of Object.entries(lbs.data)) {
            temp = { ...temp, [value.id]: value };
            id = value.id;
          }
          setId((parseFloat(id) + 1).toFixed(6));
          setLabsData(temp);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchDeptLabsData();
  }, [formSub]);

  const addLabs = () => {
    
    let addItem = { ...labsData, [id]: { ['deptCode']: props.deptCode, ['id']: id } };
    setLabsData(addItem);
    setId((parseFloat(id) + 1).toFixed(6));
  };

  const delLabsData = (del) => {
    let updLabsData = {};
    for (const [key, value] of Object.entries(labsData)) {
      if (key != del) updLabsData = { ...updLabsData, [key]: value };
    }

    setLabsData(updLabsData);
  };

  const updateLabsData = (id, data) => {
    let updLabsData = { ...labsData, [id]: data };
    setLabsData(updLabsData);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata value", labsData);

    for (const [key, value] of Object.entries(labsData)) {
      await api
        .post("labsdata", value)
        .then((response) => {
          window.alert(response.data);
        })
        .catch((err) => console.log(err));


        const fd = new FormData();
      fd.append("labs", value.labPhoto);

      await api
        .post(
          "labsdata/img/" +
            value.deptCode +
            "/labs/" +
            value.labName_en,
          fd
        )
        .then((response) => {
          window.alert(response.data);
        })
        .catch((err) => console.log(err));
    }
    setFormSub(!formSub);
  };

  // console.log("labsdata", labsData);
  return (
    <form method="POST" onSubmit={formDataHandler}>
      <div className="NoBorder">
        <h4>{props.deptCode} Labs Data</h4>
        {Object.entries(labsData).map((lb) => {
          return (
            <LabDetails
              key={lb[0]}
              value={lb[0]}
              data={lb[1]}
              delLabsData={delLabsData}
              updateLabsData={updateLabsData}
            />
          );
        })}
        <center>
          <PlusCircle size={32} onClick={addLabs} />
        </center>
        <br />
        {Object.keys(labsData).length > 0 && (
          <center>
            <button type="submit">submit</button>
          </center>
        )}
      </div>
    </form>
  );
}

export default AdminDeptLabs;
