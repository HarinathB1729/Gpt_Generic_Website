import React, { useEffect, useState } from "react";
import "../adminconsole.css";
import { api, BASE_URL } from "../../api";

function GirlsHostel() {
  const [hostelsData, setHostelsData] = useState({
    ["gHostelData"]: { id: Math.random().toFixed(6) },
  });
  const [formSub, setFormSub] = useState(false);
  const [ghImgUrl, setGhImgUrl] = useState("");

  useEffect(() => {
    const fetchHostelsData = async () => {
      try {
        //BASIC DETAILS DATA FETCHING
        const bHstl = await api.get("hostels/ghostel");

        if (bHstl.data.length) {
          setHostelsData((prev) => ({
            ...prev,
            ["gHostelData"]: bHstl.data[0],
          }));
          setGhImgUrl(BASE_URL + bHstl.data[0].HostelPhotoUrl);
          // console.log(bHstl.data[0])
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchHostelsData();
  }, [formSub]);

  const gHostelData = (event) => {
    setHostelsData({
      ...hostelsData,
      ["gHostelData"]: {
        ...hostelsData.gHostelData,
        [event.target.name]: event.target.value,
      },
    });
  };

  const ghostelFileHandler = (event) => {
    setHostelsData({
      ...hostelsData,
      ["gHostelData"]: {
        ...hostelsData.gHostelData,
        [event.target.name]: event.target.files[0],
        ["HostelPhotoUrl"]: "hostels/img/ghostel",
      },
    });

    const data = new FileReader();
    data.addEventListener("load", () => {
      setGhImgUrl(data.result);
    });
    data.readAsDataURL(event.target.files[0]);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();

    await api
      .post("hostels/ghostel", hostelsData.gHostelData)
      .then((response) => {
        window.alert(response.data);
      })
      .catch((err) => {
        console.log("Error :", err.response);
      });

    const formdata = new FormData();
    formdata.append("ghostel", hostelsData.gHostelData.HostelPhoto);

    await api
      .post("hostels/img/ghostel", formdata)
      .then((response) => {
        window.alert(response.data);
      })
      .catch((err) => {
        console.log("Error :", err.response);
      });

    setFormSub(!formSub);
  };
  // console.log("Hostels Data:", hostelsData);

  return (
    <div>
      <h2>Form-Girls Hostel Details</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>
      <form method="POST" onSubmit={formDataHandler}>
        <div>          
          <table>
            <tbody>
              <tr>
                <td>Hostel Name:</td>
                <td>
                  <input
                    type="text"
                    name="HostelName_en"
                    placeholder="Girls Hostel Name"
                    onChange={gHostelData}
                    value={hostelsData.gHostelData?.HostelName_en}
                    //required
                  />
                </td>

                <td>
                  <input
                    type="text"
                    name="HostelName_tel"
                    placeholder="వసతి గృహం పేరు"
                    onChange={gHostelData}
                    value={hostelsData.gHostelData?.HostelName_tel}
                    //required
                  />
                </td>
              </tr>
              <tr>
                <td>Hostel Introduction:</td>
                <td>
                  <textarea
                    type="text"
                    name="HostelIntro_en"
                    placeholder="Girls Hostel Introduction"
                    rows="5"
                    cols="75"
                    onChange={gHostelData}
                    value={hostelsData.gHostelData?.HostelIntro_en}
                    required
                  />
                </td>

                <td>
                  <textarea
                    type="text"
                    name="HostelIntro_tel"
                    placeholder="వసతి గృహం పరిచయం"
                    onChange={gHostelData}
                    rows="5"
                    cols="75"
                    value={hostelsData.gHostelData?.HostelIntro_tel}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Hostel Address:</td>
                <td>
                  <textarea
                    type="text"
                    name="HostelAddr_en"
                    placeholder="Girls Hostel Address"
                    rows="5"
                    cols="75"
                    onChange={gHostelData}
                    value={hostelsData.gHostelData?.HostelAddr_en}
                    //required
                  />
                </td>
                <td>
                  <textarea
                    type="text"
                    name="HostelAddr_tel"
                    placeholder="వసతి గృహం చిరునామా"
                    rows="5"
                    cols="75"
                    onChange={gHostelData}
                    value={hostelsData.gHostelData?.HostelAddr_tel}
                    //required
                  />
                </td>
              </tr>
              <tr>
                <td>Hostel Supervisor Name:</td>
                <td>
                  <input
                    type="text"
                    name="HostelSup_en"
                    placeholder="Supervisor Name "
                    onChange={gHostelData}
                    value={hostelsData.gHostelData?.HostelSup_en}
                    //required
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="HostelSup_tel"
                    placeholder="పర్యవేక్షకుడు పేరు "
                    onChange={gHostelData}
                    value={hostelsData.gHostelData?.HostelSup_tel}
                    //required
                  ></input>
                </td>
              </tr>

              <tr>
                <td>Extra Facilities :</td>
                <td>
                  <textarea
                    name="HostelExFacilities_en"
                    onChange={gHostelData}
                    placeholder="Facilities (In words)"
                    rows="5"
                    cols="75"
                    value={hostelsData.gHostelData?.HostelExFacilities_en}
                  />
                </td>
                <td>
                  <textarea
                    name="HostelExFacilities_tel"
                    onChange={gHostelData}
                    placeholder="సౌకర్యాలు(మాటల్లో చెప్పాలంటే)"
                    rows="5"
                    cols="75"
                    value={hostelsData.gHostelData?.HostelExFacilities_tel}
                  />
                </td>
              </tr>
              <tr>
                <td>Mobile Number:</td>
                <td>
                  <input
                    type="text"
                    pattern="[6-9][0-9]{9}"
                    name="HostelPhno"
                    placeholder="10 Digit - Mobile number"
                    onChange={gHostelData}
                    value={hostelsData.gHostelData?.HostelPhno}
                    required
                  ></input>
                </td>
              </tr>

              <tr>
                <td>Hostel Photo:</td>
                <td>
                  <input
                    type="file"
                    name="HostelPhoto"
                    onChange={ghostelFileHandler}
                    // required
                  />
                </td>
                {ghImgUrl && (
                  <td>
                    <img
                      className="DisplayImage"
                      src={ghImgUrl}
                      alt="Girls Hostel"
                    />
                  </td>
                )}
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

export default GirlsHostel;
