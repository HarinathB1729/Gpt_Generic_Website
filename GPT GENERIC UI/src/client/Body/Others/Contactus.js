import { InstagramLogo } from "phosphor-react";
import React, { useEffect } from "react";
import "../../client.css";
import img from "../../img/FaceBook.png";
import img1 from "../../img/twitter.png";
import img2 from "../../img/Telegram.png";
import img3 from "../../img/Insta.png";
import img4 from "../../img/Linkedin.png";
import "../../client.css";
import { useGlobalProvider } from "../../../GlobalProvider";
import useFetchDbData from "../../Utilities/useFetchDbData";
import {api,BASE_URL} from "../../../api";

function Contactus() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";
  const contactsData = useFetchDbData("contacts");
  // console.log("contactsData", contactsData);

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));    
  }, []);

  return (
    <div className="Body">      
        <h2>Contact Us</h2>
        <div className="Contactus_Content">
          <div className="Contactus_Details">
            <div className="Contactus_Map">
              <iframe
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Government%20polytechnic,Obulavaripalli+(college)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/distance-area-calculator.html">
                  distance maps
                </a>
              </iframe>
            </div>
            {/* <div className="Contactus_Map">Google MAP</div> */}
            <div className="Contactus_Address">
              <table>
                <tbody>
                  <tr>
                    <th>{glbVals.telugu ? " చిరునామా" : "Address"}</th>
                    <td>{contactsData[lang]?.colAddress}</td>
                  </tr>
                  <tr>
                    <th>{glbVals.telugu ? " మొబైల్ నెం" : "Mobile No"}</th>
                    <td>{contactsData[lang]?.colMobno}</td>
                  </tr>
                  <tr>
                    <th>{glbVals.telugu ? " ఇమెయిల్" : "Email"}</th>
                    <td>{contactsData[lang]?.colEmail}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="Contactus_Media">
            <h2>Social Media Links</h2>
            <div className="Media">
              <a target="_blank" href={contactsData[lang]?.facebook}>
                <img src={img} />
              </a>
              <a target="_blank" href={contactsData[lang]?.twitter}>
                <img src={img1} />
              </a>             
              <a target="_blank" href={contactsData[lang]?.instagram}>
                <img src={img3} />
              </a>
              <a target="_blank" href={contactsData[lang]?.youtube}>
                <img src={img4} />
              </a>
            </div>
          </div> */}
        </div>
     
    </div>
  );
}
export default Contactus;
