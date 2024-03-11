import {api,BASE_URL} from "../../api";
import React, { useEffect, useState } from "react";
import { UserPlus } from "phosphor-react";
import "../adminconsole.css";
import PrizeMemberDetails from "./PrizeMemberDetails";
import DataTableBuilder from "../../Utilities/DataTableBuilder";

function AdminIPSGM() {
  const [ipsgmPrizes, setIpsgmPrizes] = useState({});
  const [dbData, setDbData] = useState({});
  const [formSub, setFormSub] = useState(false);
  const [pdMsg, setPdMsg] = useState({ id: Math.random().toFixed(6) });

  useEffect(() => {
    const fetchIpsgmData = async () => {
      try {
        //IPSGM DETAILS FETCHING

        await api
          .get("ipsgm/pdmsg")
          .then((res) => {
            if (res.data.length) setPdMsg(res.data[0]);
          })
          .catch((err) => console.log("Error:", err));

        const ipsMem = await api.get(
          "/ipsgm/prizesdata"
        );
        // console.log(ipsMem.data)
        if (ipsMem.data.length) setDbData(ipsMem.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchIpsgmData();
  }, [formSub]);

  const addAyPrizesData = () => {
    let key = Math.random().toFixed(6);
    setIpsgmPrizes((prev) => ({ ...prev, [key]: { id: key } }));
  };

  const delAyPrizeData = (id) => {
    let updMemData = {};
    for (const [key, value] of Object.entries(ipsgmPrizes)) {
      if (key !== id) updMemData = { ...updMemData, [key]: value };
    }
    // console.log("updMemData",updMemData)
    setIpsgmPrizes(updMemData);
  };

  const updateAyPrizeData = (id, data) => {
    let upd = { ...ipsgmPrizes, [id]: data };
    setIpsgmPrizes((prev) => ({ ...prev, [id]: data }));
  };

  const pdMessageHandler = (e) => {
    setPdMsg((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // console.log("pdmessage", pdMsg);
  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata:",librarian,physicalDirector)

    try {
      await api
        .post("ipsgm/pdmsg", pdMsg)
        .then((response) => {
          window.alert(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      for (const [key, value] of Object.entries(ipsgmPrizes)) {
        await api
          .post("ipsgm/prizesdata", value)
          .then((response) => {
            setIpsgmPrizes({});
            setFormSub(!formSub);
            window.alert(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      setFormSub(!formSub);
    } catch (err) {
      console.log(err);
    }
  };

  const editDbData = async (id) => {
    // console.log("edit ", id);
    await api
      .get("ipsgm/prizesdata/" + id)
      .then((res) => {
        // console.log("res", res);
        setIpsgmPrizes({ [res.data[0].id]: res.data[0] });
      })
      .catch((err) => console.log("error", err));
  };

  const deleteDbData = async (id) => {
    // console.log("delete id ", id);

    await api
      .delete("ipsgm/prizesdata/" + id)
      .then((res) => {
        setIpsgmPrizes({});
        setFormSub(!formSub);
        window.alert(res.data);
      })
      .catch((err) => console.log(err));
  };

  // console.log("dbData", dbData);
  // console.log("ipsgmPrizes", ipsgmPrizes);
  const theadData = [
    "Id",
    "Academic Year",
    "Student PIN",
    "Student Name_en",
    "Student Name_tel",
    "Venue_en",
    "Venue_tel",
    "SPORTS/GAMES Name_en",
    "SPORTS/GAME Name_tel",
    "Prize Details_en",
    "Prize Details_tel",
  ];

  return (
    <div>
      <h2>Form - IPSGM</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>
      <form method="POST" onSubmit={formDataHandler}>
        <div>
          <h4>Physical Director's Message </h4>
          <table>
            <tbody>
              <tr>
                <td>Physical Director's Message:</td>
                <td>
                  <textarea
                    required
                    name="physicalDirectorMsg_en"
                    rows="5"
                    cols="75"
                    placeholder="Physical Director Message"
                    onChange={pdMessageHandler}
                    value={pdMsg?.physicalDirectorMsg_en}
                  />
                </td>
                <td>
                  <textarea
                    required
                    name="physicalDirectorMsg_tel"
                    rows="5"
                    cols="75"
                    placeholder="ఫిజికల్ డైరెక్టర్ సందేశం"
                    onChange={pdMessageHandler}
                    value={pdMsg?.physicalDirectorMsg_tel}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4>IPSGM Prizes Details</h4>
          <table className="TableTd--6 ">
            <thead>
              <tr style={{ borderBottom: "1px solid black" }}>
                <th>Academic Year </th>
                <th>Student PIN </th>
                <th>Student Name</th>
                <th>Venue Details </th>
                <th>Sports Name</th>
                <th>Prize Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(ipsgmPrizes).map((ip) => {
                return (
                  <PrizeMemberDetails
                    key={ip[0]}
                    value={ip[0]}
                    data={ip[1]}
                    updateAyPrizeData={updateAyPrizeData}
                    delAyPrizeData={delAyPrizeData}
                  />
                );
              })}
            </tbody>
          </table>

          <center>
            <UserPlus
              size={28}
              weight="fill"
              color="blue"
              onClick={addAyPrizesData}
            />
          </center>
        </div>

        <center>
          <button type="submit">Submit</button>
        </center>
      </form>

      {Object.keys(dbData).length > 0 && (
        <>
          <h3>Existing Data</h3>
          <DataTableBuilder
            data={dbData}
            theadData={theadData}
            editDbData={editDbData}
            deleteDbData={deleteDbData}
          />
        </>
      )}
    </div>
  );
}

export default AdminIPSGM;
