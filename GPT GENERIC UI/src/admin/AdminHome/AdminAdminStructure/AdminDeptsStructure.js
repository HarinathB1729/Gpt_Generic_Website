import { api, BASE_URL } from "../../../api";
import React, { useEffect, useState } from "react";
import { ListPlus } from "phosphor-react";
import AdmDepDetails from "./AdmDepDetails";
import DataTableBuilder from "../../../Utilities/DataTableBuilder";

function AdminDeptsStructure() {
  const [departments, setDepartments] = useState({});
  const [formSub, setFormSub] = useState(false);
  const [btnVis, setBtnVis] = useState(false);
  const [dbData, setDbData] = useState({});
  const [tableData, setTableData] = useState({});

  useEffect(() => {
    const fetchAdminStr = async () => {
      try {
        //DEPARTMENTS DATA FETCHING
        await api
          .get("adminstr/depts")
          .then((res) => {
            // console.log("res",res.data)
            let temp = {};
            for (const [key, value] of Object.entries(res.data)) {
              temp = { ...temp, [value.deptId]: value };
            }
            setDbData(temp);
          })
          .catch((err) => {
            console.log("error", err);
          });

        await api
          .get("adminstr/depts/table")
          .then((res) => {
            // console.log("res",res.data)
            let temp = {};
            for (const [key, value] of Object.entries(res.data)) {
              temp = { ...temp, [value.deptId]: value };
            }
            setTableData(temp);
          })
          .catch((err) => {
            console.log("error", err);
          });
      } catch (err) {
        console.log(err);
      }
    };
    fetchAdminStr();
  }, [formSub]);

  const addDepts = () => {
    let key = Math.random().toFixed(6);
    // setDepartments((prev) => ({ ...prev, [key]: { ["deptId"]: key } }));
    setDepartments(({ [key]: { ["deptId"]: key } }));
    setBtnVis(true);
  };

  const delDepts = (del) => {
    setBtnVis(false);
  };

  const updateDeptValue = (id, data) => {
    // console.log("update record",id,data)
    setDepartments((prev) => ({ ...prev, [id]: data }));
  };

  const editDbData = async (id) => {
    // console.log("btnVis id", id);

    let updMember = {};
    for (const [key, value] of Object.entries(dbData)) {
      if (value.deptId == id)
        updMember = { ...updMember, [value.deptId]: value };
    }

    // console.log("updmember",updMember)
    setDepartments(updMember);
    setBtnVis(true);
    setFormSub(!formSub);
    window.scrollTo(0, 0);
  };

  const deleteDbData = async (id) => {
    // console.log("delete id ",id)

    //deptsstructure
    await api
    .delete("adminstr/dept/" + id)
    .then((res) => {
      window.alert(res.data);
    })
    .catch((err) => console.log(err));

    setFormSub(!formSub);
    setBtnVis(false);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("form Data:", reg);
    try {
      for (const [key, value] of Object.entries(departments)) {
        await api
          .post("adminstr/depts", value)
          .then((res) => {
            window.alert(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      setFormSub(!formSub);
      setBtnVis(false);
    } catch (err) {
      window.alert("Error:", err);
    }
  };

  const theadData = ["Dept ID", "Dept Code"];

  // console.log("departments",departments)
  // console.log("dbdata", dbData);
  // console.log("tabledata", tableData);

  return (
    <div>
      <center><h4>Department wise - Administrative Structure</h4></center>
      {!btnVis && (
        <center>
          <ListPlus size={28} weight="fill" color="blue" onClick={addDepts} />
        </center>
      )}

{btnVis && (
      <form method="POST" onSubmit={formDataHandler}>
        <div className="NoBorder">         

          {Object.entries(departments).map((dept) => {
            return (
              <AdmDepDetails
                key={dept[0]}
                value={dept[0]}
                exData={dept[1]}
                updateDeptValue={updateDeptValue}
                delDepts={delDepts}
              />
              // console.log("dept",key," ",value)
            );
          })}
        </div>
        <center>
          <button type="submit">submit</button>
        </center>
      </form>)}

       {/* TABLE-DATABASE DATA  */}
       {Object.keys(tableData).length > 0 && (
        <div>
          <h2>Existing Data</h2>
          <p className="Remarks">
            *- Deletion here will delete Department Structure and finally Cascading effect on Department Data.
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

export default AdminDeptsStructure;
