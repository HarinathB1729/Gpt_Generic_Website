import { api, BASE_URL } from "./../../api";
import React, { useEffect, useState } from "react";

function AdminBasicDetails() {
  let key = Math.random().toFixed(6);
  //HARDCODED
  const [basicDetails, setBasicDetails] = useState({ ["id"]: key });
  const [colLogoUrl, setColLogoUrl] = useState("");
  const [govtLogoUrl, setGovtLogoUrl] = useState("");
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchBasicContacts = async () => {
      //BASIC DETAILS DATA FETCHING
      await api.get("basicdetails").then((res) => {
        // console.log("basics",res.data[0])
        setBasicDetails(res.data[0]);
        setColLogoUrl(BASE_URL + res.data[0].colLogoUrl);
        setGovtLogoUrl(BASE_URL + res.data[0].govtLogoUrl);
      });
    };
    fetchBasicContacts();
  }, [formSub]);

  const changeBasicDetails = (e) => {
    setBasicDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const colLogoHandler = (e) => {
    setBasicDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
      ["colLogoUrl"]: "basicdetails/img/colLogo",
    }));

    const data = new FileReader();
    data.addEventListener("load", () => {
      setColLogoUrl(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  };

  const govtLogoHandler = (e) => {
    setBasicDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
      ["govtLogoUrl"]: "basicdetails/img/govtLogo",
    }));

    const data = new FileReader();
    data.addEventListener("load", () => {
      setGovtLogoUrl(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("form Data:", basicDetails, contacts);

    await api
      .post("basicdetails", basicDetails)
      .then((res) => window.alert(res.data))
      .catch((err) => console.log("Error :", err));

    const formdata = new FormData();
    formdata.append("logo", basicDetails.colLogo);

    await api
      .post("basicdetails/img/colLogo", formdata)
      .then((res) => window.alert(res.data))
      .catch((err) => console.log("Error :", err));

    const fd = new FormData();
    fd.append("logo", basicDetails.govtLogo);

    await api
      .post("basicdetails/img/govtLogo", fd)
      .then((res) => window.alert(res.data))
      .catch((err) => console.log("Error :", err));

    setFormSub(!formSub);
  };

  console.log("basicDetails :", basicDetails);

  return (
    <div>
      <h2>Form - Basic Details</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>

      <form method="POST" onSubmit={formDataHandler}>
        <div>
          <h4>Enter Basic Details </h4>
          <table>
            <tbody>
              <tr>
                <td>College Name : </td>
                <td>
                  <input
                    //required
                    id="0"
                    type="text"
                    name="colName_en"
                    placeholder="Ex: Government Polytechnic / SV Government Polytechnic"
                    onChange={changeBasicDetails}
                    value={basicDetails?.colName_en}
                  />
                </td>
                <td>
                  <input
                    //required
                    id="1"
                    type="text"
                    name="colName_tel"
                    placeholder="ఉదా: ప్రభుత్వ పాలిటెక్నిక్ / SV ప్రభుత్వ పాలిటెక్నిక్"
                    onChange={changeBasicDetails}
                    value={basicDetails?.colName_tel}
                  />
                </td>
              </tr>

              <tr>
                <td>College Location : </td>
                <td>
                  <input
                    //required
                    type="text"
                    name="colLocation_en"
                    placeholder="College Location"
                    onChange={changeBasicDetails}
                    value={basicDetails?.colLocation_en}
                  />
                </td>
                <td>
                  <input
                    //required
                    type="text"
                    name="colLocation_tel"
                    placeholder="కళాశాల స్థానం"
                    onChange={changeBasicDetails}
                    value={basicDetails?.colLocation_tel}
                  />
                </td>
              </tr>

              <tr>
                <td>POLYCET CODE :</td>
                <td>
                  <input
                    type="text"
                    placeholder="POLYCET CODE"
                    name="polycetCode"
                    onChange={changeBasicDetails}
                    value={basicDetails?.polycetCode}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Vision & Mission</h4>
          <table>
            <tbody>
              <tr>
                <td>College Introduction : </td>
                <td>
                  <textarea
                    //required
                    placeholder="College Introduction about 5-10 lines"
                    name="colIntro_en"
                    rows="5"
                    cols="75"
                    onChange={changeBasicDetails}
                    value={basicDetails?.colIntro_en}
                  />
                </td>
                <td>
                  <textarea
                    //required
                    placeholder="కళాశాల పరిచయం - గురించి 5-10 పంక్తులు"
                    name="colIntro_tel"
                    rows="5"
                    cols="75"
                    onChange={changeBasicDetails}
                    value={basicDetails?.colIntro_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>College Vision : </td>
                <td>
                  <textarea
                    //required
                    placeholder="College Vision"
                    name="colVision_en"
                    rows="5"
                    cols="75"
                    onChange={changeBasicDetails}
                    value={basicDetails?.colVision_en}
                  />
                </td>
                <td>
                  <textarea
                    //required
                    placeholder="కళాశాల దృష్టి"
                    name="colVision_tel"
                    rows="5"
                    cols="75"
                    onChange={changeBasicDetails}
                    value={basicDetails?.colVision_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>College Mission : </td>
                <td>
                  <textarea
                    //required
                    placeholder="College Mission"
                    name="colMission_en"
                    rows="5"
                    cols="75"
                    onChange={changeBasicDetails}
                    value={basicDetails?.colMission_en}
                  />
                </td>
                <td>
                  <textarea
                    //required
                    placeholder="కళాశాల మిషన్"
                    name="colMission_tel"
                    rows="5"
                    cols="75"
                    onChange={changeBasicDetails}
                    value={basicDetails?.colMission_tel}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4> Logos</h4>

          <table>
            <tbody>
              <tr>
                <td>College Logo : </td>
                <td>
                  <input
                    //required
                    type="file"
                    name="colLogo"
                    placeholder="jpg/jpeg/png"
                    onChange={colLogoHandler}
                  />
                </td>
                {colLogoUrl && (
                  <td>
                    <img
                      className="DisplayImage"
                      src={colLogoUrl}
                      alt="College Logo"
                    />
                  </td>
                )}
              </tr>
              <tr>
                <td>Government Logo : </td>
                <td>
                  <input
                    //required
                    type="file"
                    name="govtLogo"
                    placeholder="jpg/jpeg/png"
                    onChange={govtLogoHandler}
                  />
                </td>
                {basicDetails?.govtLogoUrl && (
                  <td>
                    <img
                      className="DisplayImage"
                      src={govtLogoUrl}
                      alt="Government Logo"
                    />
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>

        <center>
          <button type="submit">
            {basicDetails?.colName_en ? "Update" : "Submit"}
          </button>
        </center>
      </form>
    </div>
  );
}

export default AdminBasicDetails;
