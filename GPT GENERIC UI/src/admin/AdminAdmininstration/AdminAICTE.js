import React, { useEffect, useState } from "react";
import { ListPlus } from "phosphor-react";
import EoaData from "./EoaData";
import {api,BASE_URL} from "../../api";
import AdminAicteTable from "./AdminAicteTable";

function AdminAICTE() {
  const [eoaYrData, setEoaYrData] = useState({});
  const [dbData, setDbData] = useState({});
  const [formSub, setFormSub] = useState(false);

  const addEoa = () => {
    let key = Math.random().toFixed(6);
    setEoaYrData((prev) => ({ ...prev, [key]: { id: key } }));
  };

  const delEoaYrData = (del) => {
    let updMember = {};
    for (const [key, value] of Object.entries(eoaYrData)) {
      if (key != del) updMember = { ...updMember, [key]: value };
    }
    setEoaYrData(updMember);
    setFormSub(true);
  };

  const updateEoaYrData = (id, data) => {
    setEoaYrData((prev) => ({ ...prev, [id]: data }));
  };

  useEffect(() => {
    // console.log("useeffect called");
    const fetchEoaYrsData = async () => {
      try {
        //AY-EOA DATA FETCHING
        const act = await api.get("aicte");

        if (act.data.length) {
          let temp = {};
          for (const [key, value] of Object.entries(act.data)) {
            temp = { ...temp, [value.eoaAcaYear]: value };
          }
          // console.log(temp)
          setDbData(temp);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchEoaYrsData();
  }, [formSub]);

  const formDataHandler = async (e) => {
    e.preventDefault();

    for (const [key, value] of Object.entries(eoaYrData)) {
      const formdata = new FormData();
      formdata.append("aicte", value.eoaReport);

      await api
        .post("aicte/" + value.eoaAcaYear, formdata)
        .then((response) => {
          window.alert(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });

      // PostAxios("/aicte",value);

      await api.post("aicte", value).catch((error) => {
        console.log(error.message);
      });
    }
    setFormSub(true);
    setEoaYrData({});
  };

  const theadData = ["Academic Year"];
  // console.log("form", formSub);
  // console.log("Database data", dbData);

  const deleteDbData = async (del) => {
    // console.log("delete id ",del)
    await api
      .delete("aicte/" + del)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });

    setFormSub(true);
  };

  const editDbData = (id) => {
    // console.log("edit id",id)
    let updMember = {};
    for (const [key, value] of Object.entries(dbData)) {
      if (key == id) updMember = { ...updMember, [key]: value };
    }
    // console.log("updMember",updMember)
    setEoaYrData(updMember);
  };

  return (
    <div>
      <h2>Form - AICTE</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>

      <center>
        <ListPlus size={28} weight="fill" onClick={addEoa} />
      </center>

      {Object.keys(eoaYrData).length > 0 && (
        <form method="POST" onSubmit={formDataHandler}>
          <div>
            <h4> Academic Year - EOA Reports Data </h4>

            <table className="TableCol--2">
              <tbody>
                {Object.entries(eoaYrData).map((eyd) => {
                  return (
                    <EoaData
                      key={eyd[0]}
                      value={eyd[0]}
                      data={eyd[1]}
                      updateEoaYrData={updateEoaYrData}
                      delEoaYrData={delEoaYrData}
                    />
                  );
                })}
              </tbody>
            </table>
            <br />
          </div>
          <center>
            <button type="submit">Submit</button>
          </center>
        </form>
      )}

      <h2>Existing Data</h2>
      {Object.keys(dbData).length > 0 && (
        <AdminAicteTable
          data={dbData}
          theadData={theadData}
          editDbData={editDbData}
          deleteDbData={deleteDbData}
        />
      )}
    </div>
  );
}

export default AdminAICTE;
