import React, { useContext, useEffect, useState } from "react";
import CommitteeDetails from "./CommitteeDetails";
import DataTableBuilder from "../../Utilities/DataTableBuilder";
import CommitteeMembers from "./CommitteeMembers";
import { UsersThree, XSquare } from "phosphor-react";
import {api,BASE_URL} from "../../api";
import { useCommitteeContextProvider } from "../../GlobalProviders/AdminCommitteeProvider";

function AdminCommittees(props) {
  const [dbTableData, setDbTableData] = useState({});
  const [btnVis, setBtnVis] = useState(false);
  const [committee, setCommittee] = useCommitteeContextProvider();
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchCommitteesData = async () => {
      await api
        .get("committees")
        .then(async (res) => {
          // console.log("committees ", res.data);

          if (res.data.length) {
            let temp = {};
            for (const [key, value] of Object.entries(res.data)) {
              temp = { ...temp, [value.comId]: value };
              let comTemp = {};
              comTemp = {
                ...comTemp,
                comId: value.comId,
                commName_en: value.commName_en,
                commName_tel: value.commName_tel,
              };
              // console.log("comTemp", comTemp);
              // setCommittee(temp);
              setDbTableData((prev) => ({ ...prev, [value.comId]: comTemp }));
            }
          }
        })
        .catch((err) => console.log(err));
    };
    fetchCommitteesData();
  }, [formSub]);

  const assignCommitteeData = async (key) => {
    await api
      .get("committees/committee/" + key)
      .then((res) => {
        if (res.data.length) {
          setCommittee({
            [key]: {
              ["committeeData"]: res.data[0],
              ["committeeMembers"]: {},
            },
          });
        }
      })
      .catch((err) => console.log("Error:", err));

    await api
      .get("committees/members/" + key)
      .then((res) => {
        let temp = {};
        for (const [id, value] of Object.entries(res.data)) {
          temp = { ...temp, [value.id]: value };
        }

        setCommittee((prev) => ({
          ...prev,
          [key]: { ...prev[key], ["committeeMembers"]: temp },
        }));
      })
      .catch((err) => console.log("Error:", err));
  };

  const editDbData = (id) => {
    // console.log("edit", id);
    assignCommitteeData(id);
    setBtnVis(true);
    window.scrollTo(0, 0);
  };

  const addCommittee = () => {
    let key = Math.random().toFixed(6);
    setCommittee({
      [key]: {
        ["committeeData"]: { comId: key },
        ["committeeMembers"]: {},
      },
    });
    setBtnVis(true);
    
  };

  const deleteDbData = async (id) => {
    // console.log("delete id ",id)

    await api
      .delete("committees/" + id)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log(err));

      setFormSub(!formSub);    
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata", committee);

    for (const [key, value] of Object.entries(committee)) {
      await api
        .post("committees", value.committeeData)
        .then((response) => {
          window.alert(response.data);
        })
        .catch((err) => {
          console.log("Error:", err);
        });

      const formdata = new FormData();
      formdata.append("committee", value.committeeData.commMeetingPhoto);

      await api
        .post(
          "committees/img/" + value.committeeData.comId,
          formdata
        )
        .then((response) => {
          window.alert(response.data);
        })
        .catch((err) => {
          console.log("Error:", err);
        });

      for (const [key, mValue] of Object.entries(value.committeeMembers)) {
        await api
          .post("committees/members", mValue)
          .then((response) => {
            window.alert(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    setFormSub(!formSub);
    setBtnVis(false);
    setCommittee({});
  };
  const theadData = ["Committee Id", "Committee Name_en", "Committee Name_tel"];

  // console.log("dbtable", dbTableData);
  return (
    <div>
      <h2>Form - Committees</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>
      {!btnVis && (
        <center>
          <UsersThree
            weight="fill"
            color="blue"
            size={28}
            onClick={addCommittee}
          />
        </center>
      )}

      {btnVis && (
        <form method="POST" onSubmit={formDataHandler}>
          <div>
            <XSquare
              className="closeIcon"
              size={20}
              weight="fill"
              onClick={() => {
                setBtnVis(false);
              }}
            />
            <h4>Committee Details</h4>
            {Object.entries(committee).map((cmt) => {
              // console.log("map", cmt);
              return (
                <div className="NoBorder" key={cmt[0]}>
                  <CommitteeDetails />
                  <CommitteeMembers />
                </div>
              );
            })}

            <center>
              <button type="submit">submit</button>
            </center>
          </div>
        </form>
      )}

      {Object.keys(dbTableData).length > 0 && (
        <DataTableBuilder
          data={dbTableData}
          theadData={theadData}
          editDbData={editDbData}
          deleteDbData={deleteDbData}
        />
      )}
    </div>
  );
}

export default AdminCommittees;

// export default function AdminCommittees() {
//   const [cmt, setCmt] = useCommitteeContext();

//   console.log("cmt", cmt);
//   return <div>AdminCommittees</div>;
// }
