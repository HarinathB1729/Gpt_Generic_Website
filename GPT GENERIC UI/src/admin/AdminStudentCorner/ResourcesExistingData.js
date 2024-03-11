import { api } from "../../api";
import React, { useEffect, useState } from "react";
import FileTableBuilder from "../../Utilities/FileTableBuilder";
import CustomizedSnackbars from "../../Utilities/CustomizedSnackbars";

const ResourcesExistingData = (props) => {
  const [dbData, setDbData] = useState({});
  const [dbTableData, setDbTableData] = useState({});
  const [formSub, setFormSub] = useState(false);
  const [depts, setDepts] = useState({});
  const [resource, setResource] = useState({});

  useEffect(() => {
    const fetchDeptNames = async () => {
      await api
        .get("dept/names")
        .then((res) => {
          let updMember = [];
          for (const [key, value] of Object.entries(res.data)) {
            if (value.deptCode != "GENERAL") updMember = [...updMember, value];
          }
          setDepts(updMember);
        })
        .catch((err) => console.log("Error :", err));
    };
    fetchDeptNames();
  }, []);

  const selectionHandler = (e) => {
    setResource((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const editDbData = async (id) => {
    // console.log("edit id", id);
    let updMember = {};
    for (const [key, value] of Object.entries(dbData)) {
      if (key == id) {
        updMember = {
          ...updMember,
          ...value,
          ["subFile"]:
            "resources/file/" +
            value.deptCode +
            "/" +
            value.year_en +
            "/" +
            value.subCode,
        };
        props.updateResourcesData([key], value);
      }
    }
    // console.log("updmember", updMember);
  };

  const deleteDbData = async (id) => {
    // console.log("delete id ", id);

    await api
      .delete("resources/" + id)
      .then((response) => {
        window.alert(response.data);
        // const callSnackbar = (<CustomizedSnackbars alertType={"error"} message={response.data} /> );
        // setSnack(callSnackbar);
      })
      .catch((error) => console.log(error));
    props.emptyResourcesData();
    setFormSub(!formSub);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    //RESOURCES DATA FETCHING
    setDbData({});
    setDbTableData({});
    // console.log("form resource",resource)

    await api
      .get("resources/" + resource.deptCode + "/" + resource.year_en)
      .then((res) => {
        // console.log("res", res.data);
        if (res.data.length) {
          // console.log("ress data",ress.data)
          let temp = {};
          for (const [key, value] of Object.entries(res.data)) {
            temp = { ...temp, [value.id]: value };
          }
          setDbData(temp);
        } else props.emptyResourcesData();
      })
      .catch((err) => {
        console.log(err);
      });

    await api
      .get("resources/table/" + resource.deptCode + "/" + resource.year_en)
      .then((res) => {
        // console.log("res table", res.data);
        if (res.data.length) {
          console.log("tres");
          let temp = {};
          for (const [key, value] of Object.entries(res.data)) {
            temp = { ...temp, [value.id]: value };
          }
          setDbTableData(temp);
        } else props.emptyResourcesData();
      })
      .catch((err) => {
        console.log(err);
      });

    setFormSub(true);
  };

  const theadData = [
    "ID",
    "Department Code",
    "Year",
    "Subject Code",
    "Subject Name",
  ];

  // console.log("dbdata", dbData);
  // console.log("depts", depts);
  // console.log("resource", resource);

  return (
    <div>
      <h2>Existing Data</h2>
      <p className="Remarks">*- Deletion here will delete data permanently</p>

      <form method="POST" onSubmit={formDataHandler}>
        <table>
          <tbody>
            <tr>
              <td>
                <select name="deptCode" onChange={selectionHandler} required>
                  <option value="default">----Select ----</option>
                  {depts.length > 0 &&
                    depts.map((dept) => {
                      return (
                        <option key={dept.deptCode} value={dept.deptCode}>
                          {dept.deptCode}
                        </option>
                      );
                    })}
                </select>
              </td>

              <td>
                <select name="year_en" onChange={selectionHandler} required>
                  <option value="default">----Select ----</option>
                  <option value="1year">First Year </option>
                  <option value="3sem">Third Semester </option>
                  <option value="4sem">Fourth Semester</option>
                  <option value="5sem">Fifth Semester </option>
                  <option value="6sem">Sixth Semester </option>
                </select>
              </td>
              <td>
                <button type="submit">submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {formSub &&
        (Object.keys(dbTableData).length > 0 ? (
          <FileTableBuilder
            data={dbTableData}
            theadData={theadData}
            fileUrl={"resources/file/"}
            editDbData={editDbData}
            deleteDbData={deleteDbData}
          />
        ) : (
          <center>
            <p className="Remarks">No Data Found</p>
          </center>
        ))}
    </div>
  );
};

export default ResourcesExistingData;
