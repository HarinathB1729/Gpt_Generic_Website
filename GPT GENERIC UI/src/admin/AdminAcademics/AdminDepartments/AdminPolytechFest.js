import React, { useEffect, useState } from "react";
import { ListPlus } from "phosphor-react";
import PolytechFestDetails from "./PolytechFestDetails";
import {api,BASE_URL} from "../../../api";

function AdminPolytechFest(props) {
  const [ptfData, setPtfData] = useState({});
  const [formSub, setFormSub] = useState(false);
  const [id, setId] = useState(Math.random().toFixed(6));

  useEffect(() => {
    const fetchPtfData = async () => {
      //NEWS DETAILS DATA FETCHING
      await api
        .get("polytechfest/dept/" + props.deptCode)
        .then((res) => {
          if (res.data.length) {
            // console.log("polytechfest", res.data);
            let temp = {};
            let id;
            for (const [key, value] of Object.entries(res.data)) {
              temp = { ...temp, [value.id]: value };
              id = value.id;
            }
            setPtfData(temp);
            setId((parseFloat(id) + 1).toFixed(6));
          }
        });
    };
    fetchPtfData();
  }, [props.deptCode, formSub]);

  const addPtfData = () => {
    let addItem = {
      ...ptfData,
      [id]: { ["deptCode"]: props.deptCode, ["id"]: id },
    };
    setPtfData(addItem);
    setId((parseFloat(id) + 1).toFixed(6));
  };

  const delPtfData = (del) => {
    let updPtfData = {};
    for (const [key, value] of Object.entries(ptfData)) {
      if (key != del) updPtfData = { ...updPtfData, [key]: value };
    }
    setPtfData(updPtfData);
  };

  const updatePtfData = (id, data) => {
    let updPtfData = { ...ptfData, [id]: data };
    setPtfData(updPtfData);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();

    try {
      for (const [key, value] of Object.entries(ptfData)) {
        await api
          .post("polytechfest", value)
          .then((response) => {
            window.alert(response.data);
          })
          .catch((err) => console.log(err));
      }
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("ptfData", ptfData);

  return (
    <form method="POST" onSubmit={formDataHandler}>
      <div className="NoBorder">
        <h4>{props.deptCode} - PolytechFest Data</h4>
        {Object.entries(ptfData).map((pt) => {
          return (
            <PolytechFestDetails
              key={pt[0]}
              value={pt[0]}
              data={pt[1]}
              delPtfData={delPtfData}
              updatePtfData={updatePtfData}
            />
          );
        })}

        <center>
          <ListPlus size={28} weight="fill" onClick={addPtfData} />
        </center>
        <br />
        {Object.keys(ptfData).length > 0 && (
          <center>
            <button type="submit">submit</button>
          </center>
        )}
      </div>
    </form>
  );
}

export default AdminPolytechFest;
