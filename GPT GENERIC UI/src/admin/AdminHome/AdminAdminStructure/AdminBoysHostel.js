import React, { useEffect, useState } from "react";
import { api, BASE_URL } from "../../../api";

function AdminBoysHostel() {
  const [boysHostelData, setBoysHostelData] = useState({
    id: Math.random().toFixed(6),
  });
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchAdminStr = async () => {
      //BOYS HOSTEL DATA FETCHING

      await api
        .get("adminStr/bhostel")
        .then((res) => {
          if (res.data.length) {
            setBoysHostelData(res.data[0]);
          }
        })
        .catch((err) => console.log("Error :", err));
    };
    fetchAdminStr();
  }, [formSub]);

  const updateBoysHostelValue = (e) => {
    setBoysHostelData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formDataHandler = async (e) => {
    e.preventDefault();

    await api
      .post("adminStr/bhostel", boysHostelData)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log("bhostel",boysHostelData)

  return (
    <form method="POST" onSubmit={formDataHandler}>
      <h4>Boys Hostel Staff</h4>
      <div>
        <table className="TableCol--4">
          <tbody>
            <tr>
              <td> Hostel Supervisor : </td>
              <td>
                <input
                  name="bHostelSup"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateBoysHostelValue}
                  value={boysHostelData?.bHostelSup}
                />
              </td>

              <td> Hostel Manager : </td>
              <td>
                <input
                  name="bHostelMgr"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateBoysHostelValue}
                  value={boysHostelData?.bHostelMgr}
                />
              </td>
            </tr>
            <tr>
              <td> Senior Assistant(s): </td>
              <td>
                <input
                  name="bHostelSrAsst"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateBoysHostelValue}
                  value={boysHostelData?.bHostelSrAsst}
                />
              </td>

              <td> Junior Assistant(s): </td>
              <td>
                <input
                  name="bHostelJrAssts"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateBoysHostelValue}
                  value={boysHostelData?.bHostelJrAssts}
                />
              </td>
            </tr>
            <tr>
              <td> Hostel Subordinate(s): </td>
              <td>
                <input
                  name="bHostelSubs"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateBoysHostelValue}
                  value={boysHostelData?.bHostelSubs}
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

export default AdminBoysHostel;
