import React, { useEffect, useState } from "react";
import { UserPlus } from "phosphor-react";
import "../adminconsole.css";
import CommitteeMember from "./CommitteeMember";
import {api,BASE_URL} from "../../api";
import { useCommitteeContextProvider } from "../../GlobalProviders/AdminCommitteeProvider";

function CommitteeMembers(props) {
  const [committee, setCommittee] = useCommitteeContextProvider();
  const comId = Object.keys(committee)[0];

  const [id, setId] = useState(Math.random().toFixed(6));

  useEffect(() => {
    const fetchMembersData = async () => {
      await api
        .get("committees/members/" + comId)
        .then((res) => {
          // console.log("res",res.data)
          let temp = {};
          for (const [key, value] of Object.entries(res.data)) {
            temp = { ...temp, [value.id]: value };
          }
          // console.log("members temp", temp);
          setCommittee((prev) => ({
            ...prev,
            [comId]: { ...committee[comId], ["committeeMembers"]: temp },
          }));
        })
        .catch((err) => console.log("Error:", err));
    };
    fetchMembersData();
  }, []);

  const addMember = () => {
    setCommittee((prev) => ({
      ...prev,
      [comId]: {
        ...prev[comId],
        ["committeeMembers"]: {
          ...prev[comId].committeeMembers,
          [id]: { ["id"]: id, ["comId"]: comId },
        },
      },
    }));
    setId((parseFloat(id) + 1).toFixed(6));
  };

  const delMember = (id) => {
    let updMemData = {};
    for (const [key, value] of Object.entries(committee[comId].committeeMembers)) {
      if (key !== id) updMemData = { ...updMemData, [key]: value };
    }
    setCommittee((prev) => ({
      ...prev,
      [comId]: { ...prev[comId], ["committeeMembers"]: updMemData },
    }));
  };

  const updateMemberData = (id, data) => {
    setCommittee((prev) => ({
      ...prev,
      [comId]: {
        ...prev[comId],
        ["committeeMembers"]: { ...prev[comId].committeeMembers, [id]: data },
      },
    }));
  };

  // console.log("comMembers:", committee);
  return (
    <>
      <table className="TableCol--4 ">
        <thead>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th>Member Name</th>
            <th>Member Designation</th>
            <th>Member Role</th>
            <th>Member Contact no</th>
          </tr>
        </thead>
        <tbody>
         
          {Object.keys(committee[comId].committeeMembers).length > 0 &&
            Object.entries(committee[comId].committeeMembers).map((cm) => {
              return (
                <CommitteeMember
                  key={cm[0]}
                  value={cm[0]}
                  data={cm[1]}
                  delMember={delMember}
                  updateMemberData={updateMemberData}
                />
              );
            })}
        </tbody>
      </table>

      <center>
        <UserPlus
          size={28}
          weight="fill"
          color="blue"
          onClick={addMember}
          style={{ marginTop: "1rem" }}
        />
      </center>
    </>
  );
}

export default CommitteeMembers;
