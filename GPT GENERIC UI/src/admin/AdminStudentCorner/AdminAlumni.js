import {api} from "../../api";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminAlumni() {
  const [coord, setCoord] = useState({
    id: Math.random().toFixed(6),
  });
  const [formSub, setFormSub] = useState(false);

  const changeColHandler = (event) => {
    setCoord((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  useEffect(() => {
    const fetchCoordData = async () => {
      try {
        //COORDINATOR DETAILS DATA FETCHING
        const pc = await api.get("alumni/coordinator");
        if (pc.data.length) setCoord(pc.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCoordData();
  }, [formSub]);

  const formDataHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await api
        .post("alumni/coordinator", coord)
        .then((res) => {
          window.alert(res.data);
        })
        .catch((err) => console.log("Error :", err));
      setFormSub(!formSub);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("coord", coord);
  return (
    <div>
      <h2>Form - Alumni </h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>
      <form method="POST" onSubmit={formDataHandler}>
        <div>
          <h4>Alumni Coordinator Details</h4>
          <table>
            <tbody>
              <tr>
                <td> Coordinator Name:</td>
                <td>
                  <input
                    required
                    name="coordName_en"
                    placeholder="Coordinator Name"
                    type="text"
                    onChange={changeColHandler}
                    value={coord?.coordName_en}
                  />
                </td>
                <td>
                  <input
                    required
                    name="coordName_tel"
                    placeholder="సమన్వయకర్త పేరు "
                    type="text"
                    onChange={changeColHandler}
                    value={coord?.coordName_tel}
                  />
                </td>
              </tr>
              <tr>
                <td> Coordinator Batch:</td>
                <td>
                  <input
                    required
                    name="coordBatch"
                    placeholder="Coordinator Batch"
                    type="text"
                    onChange={changeColHandler}
                    value={coord?.coordBatch}
                  />
                </td>                
              </tr>
              <tr>
                <td>Coordinator Mobile No:</td>
                <td>
                  <input
                    required
                    name="coordPhno"
                    type="number"
                    min={6000000000}
                    max={9999999999}
                    placeholder="Coordinator Contact Number "
                    onChange={changeColHandler}
                    value={coord?.coordPhno}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <center>
          <button type="submit">Submit</button>
        </center>
      </form>
    </div>
  );
}

export default AdminAlumni;
