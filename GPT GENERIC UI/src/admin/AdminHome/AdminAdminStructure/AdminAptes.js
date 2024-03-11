import React, { useEffect, useState } from "react";
import { api, BASE_URL } from "../../../api";

function AdminAptes() {
  const [formSub, setFormSub] = useState(false);
  const [aptes, setAptes] = useState({'id': Math.random().toFixed(6) });

  useEffect(() => {
    const fetchAdminStr = async () => {
      //APTES DATA FETCHING
      await api
        .get("adminStr/aptes")
        .then((res) => {
          
          if(res.data.length)
            // console.log("res data ",res.data)
            setAptes(res.data[0]);
       
        })
        .catch((err) => {
          console.log("Error :", err);
        });
    };
    fetchAdminStr();
  }, [formSub]);

  const updateAptesValue = (e) => {
    setAptes((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formDataHandler = async (e) => {
    e.preventDefault();

    await api
      .post("adminStr/aptes", aptes)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormSub(!formSub);
  };
  // console.log("aptes",aptes)

  return (
    <form method="POST" onSubmit={formDataHandler}>
      <h4>APTES</h4>
      <div>
        <table className="TableCol--4">
          <tbody>
            <tr>
              <td>Librarian : </td>
              <td>
                <input
                  name="librarian"
                  type="number"
                  value={aptes?.librarian}
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateAptesValue}
                />
              </td>
              <td>Physical Director : </td>
              <td>
                <input
                  name="physicalDirector"
                  type="number"
                  placeholder="Number Only/సంఖ్య మాత్రమే"
                  onChange={updateAptesValue}
                  value={aptes?.physicalDirector}
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

export default AdminAptes;
