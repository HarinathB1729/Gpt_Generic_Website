import React, { useEffect, useState } from "react";
import { UserPlus } from "phosphor-react";
import FacultyDetails from "./FacultyDetails";
import { api, BASE_URL } from "../../../api";
import DataTableBuilder from "../../../Utilities/DataTableBuilder";

function AdminFaculty(props) {
  const [facultyData, setFacultyData] = useState({});
  const [dbData, setDbData] = useState({});
  const [tableData, setTableData] = useState({});
  const [btnVis, setBtnVis] = useState(false);
  const [formSub, setFormSub] = useState(false);
  // const url = "facultydata/img/"+ props.deptCode+"/faculty";

  // console.log("props", props);
  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        //FACULTY DATA FETCHING
        await api
          .get("facultydata/dept/" + props.deptCode)
          .then((res) => {
            // console.log("res",res.data)
            setDbData(res.data);
          })
          .catch((err) => {
            console.log("error", err);
          });

        const fac = await api.get("facultydata/dept/table/" + props.deptCode);
        if (fac.data.length) {
          let temp = {};
          let id;
          for (const [key, value] of Object.entries(fac.data)) {
            // if (
            //   value.facDesgn_en != "Librarian" &&
            //   value.facDesgn_en != "Physical Director"
            // ) {
            temp = { ...temp, [value.id]: value };
            id = value.id;
            // }
          }
          // setId((parseFloat(id) + 1).toFixed(6));
          // setFacultyData(temp);
          setTableData(temp);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchFacultyData();
  }, [formSub]);

  const addFaculty = () => {
    const id = Math.random().toFixed(6);

    let addItem = {
      [id]: { ["deptCode"]: props.deptCode, ["id"]: id },
    };
    // console.log("additem",addItem)
    setFacultyData(addItem);
    // setId((parseFloat(id) + 1).toFixed(6));
    setBtnVis(true);
  };

  const delFacultyData = (del) => {
    setBtnVis(false);
  };

  const updateFacultyData = (id, data) => {
    setFacultyData((prev) => ({ ...prev, [id]: data }));
  };

  const editDbData = async (id) => {
    // console.log("btnVis id", id);

    let updMember = {};
    for (const [key, value] of Object.entries(dbData)) {
      if (value.id == id) updMember = { ...updMember, [value.id]: value };
    }

    // console.log("updmember",updMember)
    setFacultyData(updMember);
    setBtnVis(true);
    setFormSub(!formSub);
    window.scrollTo(0, 0);
  };

  const deleteDbData = async (id) => {
    // console.log("delete id ",id)

    await api
      .delete("facultydata/" + id)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log(err));
    setFormSub(!formSub);
    setBtnVis(false);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata value, facultyData", facultyData);

    for (const [key, value] of Object.entries(facultyData)) {
      await api
        .post("facultydata", value)
        .then((response) => {
          window.alert(response.data);
        })
        .catch((err) => console.log(err));

      const fd = new FormData();
      fd.append("faculty", value.facPhoto);

      await api
        .post(
          "facultydata/img/" + value.deptCode + "/faculty/" + value.facName_en,
          fd
        )
        .then((response) => {
          window.alert(response.data);
        })
        .catch((err) => console.log(err));
    }
    setFormSub(!formSub);
    setBtnVis(false);
  };

  const theadData = ["ID", "Dept Code", "Staff Name-eng", "Designation-eng"];

  // console.log("facultyData", facultyData);
  // console.log("dbdata", dbData);
  // console.log("tabledata", tableData);

  return (
    <div className="NoBorder">
      <h2>{props.deptCode} - Faculty Data</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>
      {!btnVis && (
        <center>
          <UserPlus size={28} weight="fill" color="blue" onClick={addFaculty} />
        </center>
      )}
      {btnVis && (
        <form method="POST" onSubmit={formDataHandler}>
          {Object.entries(facultyData).map((fd) => {
            return (
              <FacultyDetails
                key={fd[0]}
                value={fd[0]}
                data={fd[1]}
                delFacultyData={delFacultyData}
                updateFacultyData={updateFacultyData}
              />
            );
          })}
          <br />
          <center>
            <button type="submit">submit</button>
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

export default AdminFaculty;
