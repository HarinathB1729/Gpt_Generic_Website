import {api,BASE_URL} from "../../api";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminWhyPolytechnic() {
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
        const pc = await api.get("polycetcoordinator");
        if (pc.data.length) setCoord(pc.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCoordData();
  }, [formSub]);

  const navigate = useNavigate();

  const formDataHandler = async (e) => {
    e.preventDefault();

    try {
        const res = await api
        .post("polycetcoordinator", coord)
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
      <h2>Form - Why Polytechnic? </h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>
      <form method="POST" onSubmit={formDataHandler}>
        <div>
          <h4>POLYCET Coordinator Details</h4>
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
                <td> Coordinator Designation:</td>
                <td>
                  <input
                    required
                    name="coordDesgn_en"
                    placeholder="Coordinator Designation"
                    type="text"
                    onChange={changeColHandler}
                    value={coord?.coordDesgn_en}
                  />
                </td>
                <td>
                  <input
                    required
                    name="coordDesgn_tel"
                    placeholder="సమన్వయకర్త పదవి "
                    type="text"
                    onChange={changeColHandler}
                    value={coord?.coordDesgn_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>Coordinator Contact No:</td>
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

export default AdminWhyPolytechnic;
