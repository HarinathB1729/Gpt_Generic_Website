import {api,BASE_URL} from "../../api";
import React, { useEffect, useState } from "react";

function AdminCte() {
  let key = Math.random().toFixed(6);
  const [cteData, setCteData] = useState({ ["id"]: key });
  const [cteImgUrl, setCteImgUrl] = useState('');
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchCtePrincData = async () => {
      try {
        //CTE DETAILS  FETCHING
        const cte = await api.get("ctedata");

        if (cte.data.length > 0) {
          setCteData(cte.data[0]);
          setCteImgUrl(BASE_URL+cte.data[0].cteImgUrl)
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCtePrincData();
  }, [formSub]);

  const cteDataHandler = (e) => {
    setCteData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const commPhotoHandler = (e) => {
    setCteData((prev) => ({ ...prev, [e.target.name]: e.target.files[0], ['cteImgUrl']: "ctedata/img"}));

    const cPic = new FileReader();
    cPic.addEventListener("load", () => {
      setCteImgUrl(cPic.result);
    });

    cPic.readAsDataURL(e.target.files[0]);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();

    // console.log("form Data:", cteData);

    await api
      .post("ctedata", cteData)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log("Error :", err));

      const formdata = new FormData();
      formdata.append("cte",cteData.ctePhoto)

      await api
      .post("ctedata/img", formdata)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log("Error :", err));


    setFormSub(!formSub);
  };

  return (
    <>
      <p className="Remarks">*- All Fields are Mandatory.</p>
      <form method="POST" onSubmit={formDataHandler}>
        <div>
          <h4>Commissioner of Technical Education Details</h4>
          <table>
            <tbody>
              <tr>
                <td>Commissioner Name:</td>
                <td>
                  <input
                    type="text"
                    name="cteName_en"
                    placeholder="Commissioner Name"
                    onChange={cteDataHandler}
                    value={cteData?.cteName_en}
                  />
                </td>

                <td>
                  <input
                    type="text"
                    name="cteName_tel"
                    placeholder="కమిషనర్ పేరు"
                    onChange={cteDataHandler}
                    value={cteData?.cteName_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>Commissioner Designation:</td>
                <td>
                  <input
                    type="text"
                    name="cteDesig_en"
                    placeholder="Commissioner Designation"
                    onChange={cteDataHandler}
                    value={cteData?.cteDesig_en}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="cteDesig_tel"
                    placeholder="కమిషనర్ పదవి"
                    onChange={cteDataHandler}
                    value={cteData?.cteDesig_tel}
                  />
                </td>
              </tr>

              <tr>
                <td>Commissioner Message : </td>
                <td>
                  <textarea
                    rows="5"
                    cols="75"
                    name="cteMsg_en"
                    placeholder="Commissioner Message"
                    onChange={cteDataHandler}
                    value={cteData?.cteMsg_en}
                  />
                </td>
                <td>
                  <textarea
                    rows="5"
                    cols="75"
                    name="cteMsg_tel"
                    placeholder="కమిషనర్ సందేశం"
                    onChange={cteDataHandler}
                    value={cteData?.cteMsg_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>Commissioner Photo : </td>
                <td>
                  <input
                    type="file"
                    name="ctePhoto"
                    placeholder="jpg/jpeg/png"
                    onChange={commPhotoHandler}
                  />
                </td>
                {cteData?.cteImgUrl && (
                  <td>
                    <img
                      className="DisplayImage"
                      src={cteImgUrl}
                      alt="College Logo"
                    />
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
        <center>
          <button type="submit">
            {cteData?.cteName_en ? "Update" : "Submit"}
          </button>
        </center>
      </form>
    </>
  );
}

export default AdminCte;
