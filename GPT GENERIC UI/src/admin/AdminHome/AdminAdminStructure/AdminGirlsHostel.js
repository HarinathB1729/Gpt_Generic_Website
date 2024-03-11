import React, { useEffect, useState } from "react";
import {api,BASE_URL} from "../../../api";

function AdminGirlsHostel() {
  const [girlsHostelData, setGirlsHostelData] = useState({
    id : Math.random().toFixed(6)
  });
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchAdminStr = async () => {
      //BOYS HOSTEL DATA FETCHING

      await api
        .get("adminStr/ghostel")
        .then((res) => {
          if (res.data.length) {
            setGirlsHostelData(res.data[0]);
          }
        })
        .catch((err) => console.log("Error :", err));
    };
    fetchAdminStr();
  }, [formSub]);

  const updateGirlsHostelValue = (e) => {
    setGirlsHostelData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const formDataHandler = async (e) => {
    e.preventDefault();

    await api
      .post("adminStr/ghostel", girlsHostelData)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form method="POST" onSubmit={formDataHandler}>
      <h4>Girls Hostel Staff</h4>
      <div id="girlHostel">
        <table className="TableCol--4">
          <tbody>
            <tr>
              <td> Hostel Supervisor : </td>
              <td>
                <input
                  name="gHostelSup"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateGirlsHostelValue}
                  value={girlsHostelData?.gHostelSup}
                />
              </td>

              <td> Hostel Manager : </td>
              <td>
                <input
                  name="gHostelMgr"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateGirlsHostelValue}
                  value={girlsHostelData?.gHostelMgr}
                />
              </td>
            </tr>
            <tr>
              <td> Senior Assistant(s): </td>
              <td>
                <input
                  name="gHostelSrAsst"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateGirlsHostelValue}
                  value={girlsHostelData?.gHostelSrAsst}
                />
              </td>

              <td> Junior Assistant(s): </td>
              <td>
                <input
                  name="gHostelJrAssts"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateGirlsHostelValue}
                  value={girlsHostelData?.gHostelJrAssts}
                />
              </td>
            </tr>
            <tr>
              <td> Hostel Subordinate(s): </td>
              <td>
                <input
                  name="gHostelSubs"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateGirlsHostelValue}
                  value={girlsHostelData?.gHostelSubs}
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

export default AdminGirlsHostel;
