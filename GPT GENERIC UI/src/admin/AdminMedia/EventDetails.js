import React, { useEffect, useState } from "react";
import { XSquare } from "phosphor-react";
import "../adminconsole.css";
import DateHandler from "../DateHandler";
import {api,BASE_URL} from "../../api";

function EventDetails(props) {
  const [eventData, setEventData] = useState(props.data);
  const [eventImgUrl, setEventImgUrl] = useState();
  
  useEffect(()=>{
    if(props.data){
      setEventImgUrl(BASE_URL+props.data?.eventImgUrl)
    }
  },[props.data])
  // console.log("props", props.data);

  const changeColValue = (e) => {
    let data = { ...eventData, [e.target.name]: e.target.value };
    setEventData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    props.updateEventsData(props.data.id, data);
  };

  const fileChangeHandler = (e) => {
    let file = {
      ...eventData,
      [e.target.name]: e.target.files[0],
      ["eventImgUrl"]: "events/img/" + eventData.id,
    };
    setEventData((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
      ["eventImgUrl"]: "events/img/" + eventData.id,
    }));
    const data = new FileReader();
    data.addEventListener("load", () => {
      setEventImgUrl(data.result);
    });
    data.readAsDataURL(e.target.files[0]);
    // console.log(file)
    props.updateEventsData(props.data.id, file);
  };

  //DATE HANDLER
  let date = DateHandler(eventData?.eventDate, true);

  return (
    <div>
      <XSquare
        className="closeIcon"
        size={20}
        onClick={() => {
          return props.delEventsData(props.data.id);
        }}
      />

      <table>
        <tbody>
          <tr>
            <td> Event Date:</td>
            <td>
              <input                
                name="eventDate"
                type="date"
                onChange={changeColValue}
                value={date}
                required
              />
            </td>
          </tr>
          <tr>
            <td> Event Name:</td>
            <td>
              <input                
                name="eventName_en"
                type="text"
                placeholder="Event Name"
                onChange={changeColValue}
                value={eventData?.eventName_en}
                required
              />
            </td>
            <td>
              <input
                required
                name="eventName_tel"
                type="text"
                placeholder="ఈవెంట్ పేరు"
                onChange={changeColValue}
                value={eventData?.eventName_tel}
              />
            </td>
          </tr>
          <tr>
            <td> Event Description:</td>
            <td>
              <textarea
                placeholder="Event Description"
                rows="5"
                cols="75"
                name="eventDesc_en"
                onChange={changeColValue}
                value={eventData?.eventDesc_en}
              />
            </td>
            <td>
              <textarea
                placeholder="ఈవెంట్ వివరణ"
                rows="5"
                cols="75"
                name="eventDesc_tel"
                onChange={changeColValue}
                value={eventData?.eventDesc_tel}
              />
            </td>
          </tr>

          <tr>
            <td>Event Photo:</td>
            <td>
              <input
                // required
                type="file"
                name="eventImg"
                onChange={fileChangeHandler}
              />
            </td>
            {eventImgUrl && (
              <td>
                <img className="DisplayImage" src={eventImgUrl} alt="Event" />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EventDetails;
