import React, { useEffect, useState } from "react";
import { UserPlus } from "phosphor-react";
import "../../adminconsole.css";
import Adminplacmemberdetails from "./Adminplacmemberdetails";

function AdminPlacementDetails(props) {
  const [placementMembers, setPlacementMembers] = useState({});

  useEffect(() => {
    setPlacementMembers(props.data);
  }, [props.data]);

  const addMember = () => {
    let key = Math.random().toFixed(6);
    setPlacementMembers((prev) => ({
      ...prev,
      [key]: { id: key },
    }));
  };

  const delMember = (id) => {
    let updMemData = {};
    for (const [key, value] of Object.entries(placementMembers)) {
      if (key !== id) updMemData = { ...updMemData, [key]: value };
    }
    setPlacementMembers(updMemData);
    props.updateAyPlacements(updMemData);
  };

  const updateMemberData = (id, data) => {
    setPlacementMembers((prev) => ({ ...prev, [id]: data }));
    let upd = { ...placementMembers, [id]: data };
    props.updateAyPlacements(upd);
  };
  // console.log("placementMembers", placementMembers);

  return (
    <>
      <table className="TableTd--6">
        <tbody>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th>Acadamic Year </th>
            <th>Dept Code</th>
            <th>Student PIN </th>
            <th>Student Name </th>            
            <th>Name of the Company </th>
            <th>Remarks </th>
          </tr>
          {Object.entries(placementMembers).map((pm) => {
            return (
              <Adminplacmemberdetails
                key={pm[0]}
                value={pm[0]}
                data={pm[1]}
                delMember={delMember}
                updateMemberData={updateMemberData}
              />
            );
          })}
        </tbody>
      </table>
      <center>
        <UserPlus size={28} weight="fill" color="blue" onClick={addMember} />
      </center>
    </>
  );
}

export default AdminPlacementDetails;
