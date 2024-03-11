import {api,BASE_URL} from "./../../api";
import React, { useEffect, useState } from "react";

function AdminContacts() {
  const [formSub, setFormSub] = useState(false);
  let key = Math.random().toFixed(6);
  //HARDCODED
  const [contacts, setContacts] = useState({ ["id"]: key });

  useEffect(() => {
    const fetchBasicContacts = async () => {
      try {      

        // CONTACTS DATA FETCHING
        const contacts = await api.get("contacts");
        if (contacts.data.length) setContacts(contacts.data[0]);

      } catch (err) {
        console.log(err);
      }
    };
    fetchBasicContacts();
  }, [formSub]);

  const changeContactsDetails = (e) => {
    setContacts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };



  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("form Data:", basicDetails, contacts);

    await api
      .post("contacts", contacts)
      .then((res) => window.alert(res.data))
      .catch((err) => console.log("Error :", err));

    setFormSub(!formSub);
  };

  // console.log("contacts :", contacts);

  return (
    <div>
    <h2>Form - Contact Details</h2>
    <p className="Remarks">*- All Fields are Mandatory.</p>

    <form method="POST" onSubmit={formDataHandler}>
      <div>
        <h4>Enter Contacts Details </h4>
        <table>
          <tbody>
            
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

      <center>
        <button type="submit">
          {contacts?.colAddress_en ? "Update" : "Submit"}
        </button>
      </center>
    </form>
  </div>
  )
}

export default AdminContacts