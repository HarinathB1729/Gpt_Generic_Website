import React, { useState } from "react";
import AddResources from "./AddResources";
import { FilePlus } from "phosphor-react";
import "../adminconsole.css";
import {api} from "../../api";
import ResourcesExistingData from "./ResourcesExistingData";


function AdminResources() {
  const [resources, setResources] = useState({});
  const [btnVis, setBtnVis] = useState(false);
  const [formSub, setFormSub] = useState(false);


  const addRes = () => {
    let key = Math.random().toFixed(6);
    setResources((prev) => ({ ...prev, [key]: { ["id"]: key } }));
    setBtnVis(true);
  };

  const delResourcesData = () => {
    setResources({});
    setBtnVis(false);
    // console.log("item to delete", del);
  };

  const updateResourcesData = (id, data) => {
    setBtnVis(true);
    setResources({});
    setResources((prev) => ({ ...prev, [id]: data }));
  };

  const emptyResourcesData = () => {
    setBtnVis(false);
    setResources({});
  };

  const formDataHandler = async (e) => {
    e.preventDefault();

    for (const [key, value] of Object.entries(resources)) {
      await api
        .post("resources", value)
        .then(function (res) {
          window.alert(res.data)
        })
        .catch(function (error) {
          console.log(error);
        });

      // {snackbar && <CustomizedSnackbars alertType={"success"} message={msg} /> }

      const formdata = new FormData();
      formdata.append("file", value.subFile);

      await api
        .post(
          "resources/file/" +
            value.deptCode +
            "/" +
            value.year_en +
            "/" +
            value.subCode,
          formdata
        )
        .then(function (res) {
          window.alert(res.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setBtnVis(false);
    setFormSub(!formSub);
    setResources({});
  };
  console.log("resources", resources);


  return (
    <div>
      <h2>Form - Resources</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>     

      {!btnVis && (
        <center>
          <FilePlus size={32} weight="fill" onClick={addRes} />
        </center>
      )}

      {btnVis && (
        <>
          <form method="POST" onSubmit={formDataHandler}>
            <div className="NoBorder">
              {Object.entries(resources).map((res) => {
                return (
                  <AddResources
                    key={res[0]}
                    value={res[0]}
                    data={res[1]}
                    updateResourcesData={updateResourcesData}
                    delResourcesData={delResourcesData}
                  />
                );
              })}

              <center>
                <button type="submit">Submit</button>
              </center>
            </div>
          </form>
          {/* {snack && <CustomizedSnackbars message={snack} alertType="success" />} */}
        </>
      )}

      <ResourcesExistingData
        updateResourcesData={updateResourcesData}
        emptyResourcesData={emptyResourcesData}
      />
    </div>
  );
}
export default AdminResources;
