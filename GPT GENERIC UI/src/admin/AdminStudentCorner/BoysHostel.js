import React, { useEffect, useState } from "react";
import "../adminconsole.css";
import { api, BASE_URL } from "../../api";

function BoysHostel() {
  const [hostelsData, setHostelsData] = useState({
    ["bHostelData"]: { id: Math.random().toFixed(6) },
  });
  const [formSub, setFormSub] = useState(false);
  const [bhImgUrl, setBhImgUrl] = useState("");

  useEffect(() => {
    const fetchHostelsData = async () => {
      try {
        //BASIC DETAILS DATA FETCHING
        const bHstl = await api.get("hostels/bhostel");

        if (bHstl.data.length) {
          setHostelsData((prev) => ({
            ...prev,
            ["bHostelData"]: bHstl.data[0],
          }));
          setBhImgUrl(BASE_URL + bHstl.data[0].HostelPhotoUrl);
          // console.log(bHstl.data[0])
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchHostelsData();
  }, [formSub]);

  const bHostelData = (event) => {
    setHostelsData({
      ...hostelsData,
      ["bHostelData"]: {
        ...hostelsData.bHostelData,
        [event.target.name]: event.target.value,
      },
    });
  };

  const bHostelFileHandler = (event) => {
    setHostelsData({
      ...hostelsData,
      ["bHostelData"]: {
        ...hostelsData.bHostelData,
        [event.target.name]: event.target.files[0],
        ["HostelPhotoUrl"]: "hostels/img/bhostel",
      },
    });

    const data = new FileReader();
    data.addEventListener("load", () => {
      setBhImgUrl(data.result);
    });
    data.readAsDataURL(event.target.files[0]);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();

    await api
      .post("hostels/bhostel", hostelsData.bHostelData)
      .then((response) => {
        window.alert(response.data);
      })
      .catch((err) => {
        console.log("Error :", err.response);
      });

    const formdata = new FormData();
    formdata.append("bhostel", hostelsData.bHostelData.HostelPhoto);

    await api
      .post("hostels/img/bhostel", formdata)
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
      <h2>Form-Boys Hostel Details</h2>
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
                    placeholder="Boys Hostel Name"
                    onChange={bHostelData}
                    value={hostelsData.bHostelData?.HostelName_en}
                    //required
                  />
                </td>

                <td>
                  <input
                    type="text"
                    name="HostelName_tel"
                    placeholder="వసతి గృహం పేరు"
                    onChange={bHostelData}
                    value={hostelsData.bHostelData?.HostelName_tel}
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
                    placeholder="Boys Hostel Introduction"
                    onChange={bHostelData}
                    rows="5"
                    cols="75"
                    value={hostelsData.bHostelData?.HostelIntro_en}
                    required
                  />
                </td>

                <td>
                  <textarea
                    type="text"
                    name="HostelIntro_tel"
                    placeholder="వసతి గృహం పరిచయం"
                    onChange={bHostelData}
                    rows="5"
                    cols="75"
                    value={hostelsData.bHostelData?.HostelIntro_tel}
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
                    placeholder="Boys Hostel Address"
                    rows="5"
                    cols="75"
                    onChange={bHostelData}
                    value={hostelsData.bHostelData?.HostelAddr_en}
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
                    onChange={bHostelData}
                    value={hostelsData.bHostelData?.HostelAddr_tel}
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
                    onChange={bHostelData}
                    value={hostelsData.bHostelData?.HostelSup_en}
                    //required
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="HostelSup_tel"
                    placeholder="పర్యవేక్షకుడు పేరు "
                    onChange={bHostelData}
                    value={hostelsData.bHostelData?.HostelSup_tel}
                    //required
                  ></input>
                </td>
              </tr>

              <tr>
                <td>Extra Facilities :</td>
                <td>
                  <textarea
                    name="HostelExFacilities_en"
                    onChange={bHostelData}
                    placeholder="Facilities (In words)"
                    rows="5"
                    cols="75"
                    value={hostelsData.bHostelData?.HostelExFacilities_en}
                  />
                </td>
                <td>
                  <textarea
                    name="HostelExFacilities_tel"
                    onChange={bHostelData}
                    placeholder="సౌకర్యాలు(మాటల్లో చెప్పాలంటే)"
                    rows="5"
                    cols="75"
                    value={hostelsData.bHostelData?.HostelExFacilities_tel}
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
                    onChange={bHostelData}
                    value={hostelsData.bHostelData?.HostelPhno}
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
                    onChange={bHostelFileHandler}
                    // required
                  />
                </td>
                {bhImgUrl && (
                  <td>
                    <img
                      className="DisplayImage"
                      src={bhImgUrl}
                      alt="Boys Hostel"
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

export default BoysHostel;
