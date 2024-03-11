import {api,BASE_URL} from "../../api";
import React, { useEffect, useState } from "react";

function AdminPrincipal() {
  let key = Math.random().toFixed(6);
  const [princData, setPrincData] = useState({ ["id"]: key });
  const [princImgUrl, setPrincImgUrl] = useState('');
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchCtePrincData = async () => {
      try {
        //PRINCIPAL DATA FETCHING
        const princ = await api.get("principaldata");

        if (princ.data.length > 0){
          setPrincData(princ.data[0]);
          setPrincImgUrl(BASE_URL+princ.data[0].princImgUrl)
        } 
      } catch (err) {
        console.log(err);
      }
    };
    fetchCtePrincData();
  }, [formSub]);

  const princDataHandler = (e) => {
    setPrincData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const princPhotoHandler = (e) => {
    setPrincData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] , ['princImgUrl']: "principaldata/img"}));
    const pPic = new FileReader();

    pPic.addEventListener("load", () => {
      setPrincImgUrl(pPic.result);
    });

    pPic.readAsDataURL(e.target.files[0]);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("form Data:", princData);

    await api
      .post("principaldata", princData)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log("Error :", err));

      const formdata = new FormData();
      formdata.append("principal",princData.princPhoto)

      await api
      .post("principaldata/img", formdata)
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
          <h4>Principal Details</h4>
          <table>
            <tbody>
              <tr>
                <td>Principal Name:</td>
                <td>
                  <input
                    type="text"
                    name="princName_en"
                    placeholder="Principal Name"
                    onChange={princDataHandler}
                    value={princData?.princName_en}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="princName_tel"
                    placeholder="ప్రిన్సిపాల్ పేరు"
                    onChange={princDataHandler}
                    value={princData?.princName_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>Principal Designation:</td>
                <td>
                  <input
                    type="text"
                    name="princDesig_en"
                    placeholder="Principal Designation"
                    onChange={princDataHandler}
                    value={princData?.princDesig_en}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="princDesig_tel"
                    placeholder="ప్రిన్సిపాల్  పదవి"
                    onChange={princDataHandler}
                    value={princData?.princDesig_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>Principal Qualification:</td>
                <td>
                  <input
                    type="text"
                    name="princQual_en"
                    placeholder="Principal Qualification"
                    onChange={princDataHandler}
                    value={princData?.princQual_en}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="princQual_tel"
                    placeholder="ప్రిన్సిపాల్ అర్హత"
                    onChange={princDataHandler}
                    value={princData?.princQual_tel}
                  />
                </td>
              </tr>
              <tr>
                <td> Years of Experience:</td>
                <td>
                  <input
                    name="princExp"
                    placeholder="Principal Experience"
                    type="number"
                    onChange={princDataHandler}
                    value={princData?.princExp}
                  />
                </td>
              </tr>

              <tr>
                <td>Principal Message : </td>
                <td>
                  <textarea
                    rows="5"
                    cols="75"
                    name="princMsg_en"
                    placeholder="Principal  Message"
                    onChange={princDataHandler}
                    value={princData?.princMsg_en}
                  />
                </td>
                <td>
                  <textarea
                    rows="5"
                    cols="75"
                    name="princMsg_tel"
                    placeholder="ప్రిన్సిపాల్ సందేశం"
                    onChange={princDataHandler}
                    value={princData?.princMsg_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>Principal Photo : </td>
                <td>
                  <input
                    type="file"
                    name="princPhoto"
                    placeholder="jpg/jpeg/png"
                    onChange={princPhotoHandler}
                  />
                </td>
                {princData?.princImgUrl && (
                  <td>
                    <img
                      className="DisplayImage"  
                      src={princImgUrl}
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
            { princData?.cteName_en ? "Update" : "Submit"}
          </button>
        </center>
      </form>
    </>
  );
}

export default AdminPrincipal;
