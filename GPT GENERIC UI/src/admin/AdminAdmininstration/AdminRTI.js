import React, { useEffect, useState } from "react";
import "../adminconsole.css";
import { UserPlus } from "phosphor-react";
import AdminRTIMemberDetails from "./RTIMemberDetails";
import { api, BASE_URL } from "../../api";
import DataTableBuilder from "../../Utilities/DataTableBuilder";

function AdminRTI() {
  const [rtiMembers, setRtiMembers] = useState({});
  const [formSub, setFormSub] = useState(false);
  const [btnVis, setBtnVis] = useState(false);
  const [dbData, setDbData] = useState({});
  const [tableData, setTableData] = useState({});

  useEffect(() => {
    const fetchRtiData = async () => {
      //RTI DATA FETCHING
      await api
        .get("rtidata/members")
        .then((res) => {
          // console.log("res",res.data)
          let temp = {};
          for (const [key, value] of Object.entries(res.data)) {
            temp = { ...temp, [value.id]: value };
          }
          setDbData(temp);
        })
        .catch((err) => {
          console.log("error", err);
        });

      await api
        .get("rtidata/members/table")
        .then((res) => {
          // console.log("res",res.data)
          let temp = {};
          for (const [key, value] of Object.entries(res.data)) {
            temp = { ...temp, [value.id]: value };
          }
          setTableData(temp);
        })
        .catch((err) => {
          console.log("error", err);
        });
    };
    fetchRtiData();
  }, [formSub]);

  const addMember = () => {
    let id = Math.random().toFixed(6);
    setRtiMembers({ [id]: { ["id"]: id } });
    setBtnVis(true);
  };

  const updateRtiMember = (id, data) => {
    setRtiMembers((prev) => ({ ...prev, [id]: data }));
  };

  const delMember = (del) => {
    setBtnVis(false);
  };

  const editDbData = async (id) => {
    // console.log("btnVis id", id);

    let updMember = {};
    for (const [key, value] of Object.entries(dbData)) {
      if (value.id == id) updMember = { ...updMember, [value.id]: value };
    }

    // console.log("updmember",updMember)
    setRtiMembers(updMember);
    setBtnVis(true);
    setFormSub(!formSub);
    window.scrollTo(0, 0);
  };

  const deleteDbData = async (id) => {
    // console.log("delete id ",id)

    await api
      .delete("rtidata/members/" + id)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log(err));
    setFormSub(!formSub);
    setBtnVis(false);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();

    try {
      for (const [key, value] of Object.entries(rtiMembers)) {
        await api
          .post("rtidata/members", value)
          .then(function (response) {
            window.alert(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      setFormSub(true);
      setBtnVis(false);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("dbdata", dbData);
  // console.log("tabledata", tableData);
  // console.log("rtimembers",rtiMembers)

  const theadData = ["ID", "RTI MEMBER POSITION", "Staff Name"];

  return (
    <div>
      <h2>Form - Right To Information </h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>

      {!btnVis && (
        <center>
          <UserPlus size={28} weight="fill" color="blue" onClick={addMember} />
        </center>
      )}

      {btnVis && (
        <form method="POST" onSubmit={formDataHandler}>
          {Object.entries(rtiMembers).map((d) => {
            return (
              <AdminRTIMemberDetails
                key={d[0]}
                value={d[0]}
                data={d[1]}
                updateRtiMember={updateRtiMember}
                delMember={delMember}
              />
            );
          })}

          <center>
            <button type="submit">Submit</button>
          </center>
        </form>
      )}

      {/* TABLE-DATABASE DATA  */}
      {Object.keys(tableData).length > 0 && (
        <div>
          <h2>Existing Data</h2>
          <p className="Remarks">
            *- Deletion here will delete data permanently
          </p>

          <DataTableBuilder
            data={tableData}
            theadData={theadData}
            editDbData={editDbData}
            deleteDbData={deleteDbData}
          />
        </div>
      )}
    </div>
  );
}

export default AdminRTI;
