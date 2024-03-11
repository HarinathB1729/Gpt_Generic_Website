
import {api,BASE_URL} from "./../../api";
import React, { useEffect, useState } from "react";


function AdminColBasicDetails() {
  let key = Math.random().toFixed(6);
  //HARDCODED
  const [basicDetails, setBasicDetails] = useState({ ["id"]: key });
  const [contacts, setContacts] = useState({ ["id"]: key });
  const [colLogoUrl, setColLogoUrl] = useState("");
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchBasicContacts = async () => {
      try {
        //BASIC DETAILS DATA FETCHING
        const basics = await api.get("basicdetails");
        if (basics.data.length)
        {
          // console.log("basics",basics.data[0])
          setBasicDetails(basics.data[0]);
          setColLogoUrl(BASE_URL+ basics.data[0].colLogoUrl);
        } 
        // setColLogoUrl("/basicdetails/img/colLogo");
        

        // CONTACTS DATA FETCHING
        const contacts = await api.get("contacts");
        if (contacts.data.length) setContacts(contacts.data[0]);
      } catch (err) {
        console.log(err);
      }
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
      ["colLogoUrl"]:  "basicdetails/img/colLogo",
    }));

    const data = new FileReader();
    data.addEventListener("load", () => {
      setColLogoUrl(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
  };

  const changeContactsDetails = (e) => {
    setContacts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("form Data:", basicDetails, contacts);

    await api
      .post("basicdetails", basicDetails)
      .then((res) => window.alert(res.data))
      .catch((err) => console.log("Error :", err));

    const formdata = new FormData();
    formdata.append("colLogo", basicDetails.colLogo);

    await api
      .post("basicdetails/img/colLogo", formdata)
      .then((res) => window.alert(res.data))
      .catch((err) => console.log("Error :", err));

    await api
      .post("contacts", contacts)
      .then((res) => window.alert(res.data))
      .catch((err) => console.log("Error :", err));

    setFormSub(!formSub);
  };

  // console.log("basicDetails :", basicDetails);
  // console.log("contacts :", contacts);


  return (
    <div>
      <h2>Form - College Basic Details</h2>
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
                <td>Address : </td>
                <td>
                  <textarea
                    //required
                    placeholder="College Address"
                    name="colAddress_en"
                    rows="5"
                    cols="75"
                    onChange={changeContactsDetails}
                    value={contacts?.colAddress_en}
                  />
                </td>
                <td>
                  <textarea
                    //required
                    placeholder="కళాశాల చిరునామా"
                    name="colAddress_tel"
                    rows="5"
                    cols="75"
                    onChange={changeContactsDetails}
                    value={contacts?.colAddress_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>Mobile no : </td>
                <td>
                  <input
                    //required
                    type="number"
                    min="6000000000"
                    max="9999999999"
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Enter Valid Mobile Number")
                    }
                    placeholder="10 Digit - Mobile number"
                    name="colMobno"
                    onChange={changeContactsDetails}
                    value={contacts?.colMobno}
                  />
                </td>
              </tr>
              <tr>
                <td>Email : </td>
                <td>
                  <input
                    //required
                    placeholder="Email ID"
                    type="email"
                    name="colEmail"
                    onChange={changeContactsDetails}
                    value={contacts?.colEmail}
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
          <h4>Enter Map Coordinates :</h4>
          <table className="TableCol--4">
            <tbody>
              <tr>
                <td>College Latitude : </td>
                <td>
                  <input
                    //required
                    placeholder="Latitude Ex: 12.123456"
                    type="tel"
                    //pattern="[0-9][0-9].[0-9]{6}"
                    name="colLatitude"
                    onChange={changeContactsDetails}
                    value={contacts?.colLatitude}
                  />
                </td>

                <td>College Longitude : </td>
                <td>
                  <input
                    //required
                    placeholder="Longitude Ex: 12.123456"
                    type="tel"
                    //pattern="[0-9][0-9].[0-9]{6}"
                    name="colLongitude"
                    onChange={changeContactsDetails}
                    value={contacts?.colLongitude}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4>Enter Socila Media Details :</h4>
          <table className="TableCol--4">
            <tbody>
              <tr>
                <td>Facebook ID : </td>
                <td>
                  <input
                    //required
                    placeholder="https://www.facebook.com/filename"
                    type="url"
                    //pattern="https://www.facebook.com/.*"
                    name="facebook"
                    onChange={changeContactsDetails}
                    value={contacts?.facebook}
                  />
                </td>

                <td>Instagram ID : </td>
                <td>
                  <input
                    //required
                    placeholder="https://www.instagram.com/filename"
                    //pattern="https://www.instagram.com/.*"
                    type="url"
                    name="instagram"
                    onChange={changeContactsDetails}
                    value={contacts?.instagram}
                  />
                </td>
              </tr>
              <tr>
                <td>Twitter ID : </td>
                <td>
                  <input
                    //required
                    placeholder="https://www.twitter.com/filename"
                    //pattern="https://www.twitter.com/.*"
                    type="url"
                    name="twitter"
                    onChange={changeContactsDetails}
                    value={contacts?.twitter}
                  />
                </td>

                <td>Youtube ID : </td>
                <td>
                  <input
                    //required
                    placeholder="https://www.youtube.com/filename"
                    //pattern="https://www.youtube.com/.*"
                    type="url"
                    name="youtube"
                    onChange={changeContactsDetails}
                    value={contacts?.youtube}
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
          <h4> Photos & Logos</h4>

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
              {/* <tr>
                <td>Government Logo : </td>
                <td>
                  <input
                    //required
                    type="file"
                    name="govtLogo"
                    placeholder="jpg/jpeg/png"
                    onChange={govLogoHandler}
                  />
                </td>
                {govtLogo.length ? (
                  <td>
                    <img
                      className="Image--1"
                      src={govtLogo}
                      alt="Government Logo"
                    />
                  </td>
                ) : (
                  ""
                )}
              </tr> */}
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

export default AdminColBasicDetails;
