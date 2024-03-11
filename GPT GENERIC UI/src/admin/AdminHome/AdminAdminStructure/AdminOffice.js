import React, { useEffect, useState } from "react";
import {api,BASE_URL} from "../../../api";

function AdminOffice() {
  const [officeStr, setOfficeStr] = useState({'id': Math.random().toFixed(6)});
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchAdminStr = async () => {
      //OFFICE DATA FETCHING
      await api
        .get("adminStr/office")
        .then((res) => {
          if (res.data.length) setOfficeStr(res.data[0]);
        })
        .catch((err) => console.log("Error :", err));
    };
    fetchAdminStr();
  }, [formSub]);

  const updateOfficeValue = (e) => {
    setOfficeStr((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formDataHandler = async (e) => {
    e.preventDefault();

    await api
      .post("adminStr/office", officeStr)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormSub(!formSub);
  };
  // console.log("office str",officeStr)

  return (
    <form method="POST" onSubmit={formDataHandler}>
      <h4>Office Staff Strength</h4>
      <div>
        <table className="TableCol--4">
          <tbody>
            <tr>
              <td> Administrative Officer: </td>
              <td>
                <input
                  name="admOfficer"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateOfficeValue}
                  value={officeStr?.admOfficer}
                />
              </td>
              <td> Office Superintendent: </td>
              <td>
                <input
                  name="offSupdnt"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateOfficeValue}
                  value={officeStr?.offSupdnt}
                />
              </td>
            </tr>
            <tr>
              <td> Senior Assistant: </td>
              <td>
                <input
                  name="srAsst"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateOfficeValue}
                  value={officeStr?.srAsst}
                />
              </td>

              <td> Junior Assistant(s): </td>
              <td>
                <input
                  name="jrAssts"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateOfficeValue}
                  value={officeStr?.jrAssts}
                />
              </td>
            </tr>
            <tr>
            <td> Contract Staff(s): </td>
              <td>
                <input
                  name="contrStaff"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateOfficeValue}
                  value={officeStr?.contrStaff}
                />
              </td>
              <td> Office Subordinate(s): </td>
              <td>
                <input
                  name="offSubs"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateOfficeValue}
                  value={officeStr?.offSubs}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <center>
        <button type="submit">submit</button>
      </center>
    </form>
  );
}

export default AdminOffice;
