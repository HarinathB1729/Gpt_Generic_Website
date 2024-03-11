import React, { useEffect, useState } from "react";
import { ListPlus } from "phosphor-react";
import EventDetails from "./EventDetails";
import {api,BASE_URL} from "../../api";
import PhotoTableBuilder from "../../Utilities/PhotoTableBuilder";

function AdminEvents() {
  const [eventsData, setEventsData] = useState({});
  const [btnVis, setBtnVis] = useState(false);
  const [dbData, setDbData] = useState({});
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        //BASIC DETAILS DATA FETCHING
        const evnts = await api.get("events");

        if (evnts.data.length) {
          let temp = {};
          for (const [key, value] of Object.entries(evnts.data)) {
            temp = { ...temp, [value.id]: value };
          }
          setDbData(temp);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchEventsData();
  }, [formSub]);

  const addEventsData = () => {
    let key = Math.random().toFixed(6);
    setEventsData((prev) => ({ ...prev, [key]: { ["id"]: key } }));
    setBtnVis(true);
  };

  const delEventsData = () => {
    setBtnVis(false);
    setEventsData({});window.scrollTo(0,0);
  };

  const updateEventsData = (id, data) => {
    setEventsData((prev) => ({ ...prev, [id]: data }));
  };

  const editDbData = async (id) => {
    let updMember = {};
    for (const [key, value] of Object.entries(dbData)) {
      if (key == id) updMember = { ...updMember, [key]: value };
    }
    // console.log("updMember",updMember)
    setBtnVis(true);
    setEventsData(updMember);
    setFormSub(!formSub);window.scrollTo(0,0);
  };

  const deleteDbData = async (id) => {
    // console.log("delete id ",id)

    await api
      .delete("events/" + id)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log(err));
    setFormSub(!formSub);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata value", eventsData);
    let eventId;

    for (const [key, value] of Object.entries(eventsData)) {
      eventId = key;
      await api
        .post("events", value)
        .then(function (response) {
          window.alert(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

      const formdata = new FormData();
      formdata.append("eventImg", eventsData[eventId].eventImg);

      await api
        .post("events/img/" + eventId, formdata)
        .then(function (response) {
          window.alert(response.data);
          //
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setBtnVis(false);
    setFormSub(!formSub);
    setEventsData({});
  };
  console.log("events", eventsData);
  // console.log("dbdata", dbData);

  const theadData = [
    "ID",
    "Event Date",
    "Name-eng",
    "Name-tel",
    "Description-eng",
    "Description-tel",
    "Path",
  ];

  return (
    <>
      <div>
        <h2>Form - Events</h2>
        <p className="Remarks">*- All Fields are Mandatory.</p>
        {!btnVis && (
          <center>
            <ListPlus size={28} weight="fill" onClick={addEventsData} />
          </center>
        )}

        {btnVis && (
          <form method="POST" onSubmit={formDataHandler}>
            <div className="NoBorder">
              <h4> Event(s) Details</h4>
              {Object.entries(eventsData).map((ed) => {
                return (
                  <EventDetails
                    key={ed[0]}
                    data={ed[1]}
                    updateEventsData={updateEventsData}
                    delEventsData={delEventsData}
                  />
                );
              })}

              <center>
                <button type="submit">Submit</button>
              </center>
            </div>
          </form>
        )}
      </div>

      {/* TABLE-DATABASE DATA  */}
      {Object.keys(dbData).length > 0 && (
        <div>
          <h2>Existing Data</h2>
          <p className="Remarks">
            *- Deletion here will delete data permanently
          </p>

          <PhotoTableBuilder
            data={dbData}
            theadData={theadData}
            imgUrl={BASE_URL+ "events/img/"}
            editDbData={editDbData}
            deleteDbData={deleteDbData}
          />
        </div>
      )}
    </>
  );
}

export default AdminEvents;
