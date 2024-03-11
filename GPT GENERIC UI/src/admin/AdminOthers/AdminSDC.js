import React, { useEffect, useState } from "react";
import { api, BASE_URL } from "../../api";


function AdminSDC() {
  const [availability, setAvailability] = useState(false);
  const [formSub, setFormSub] = useState(false);
  const [sdcData, setSdcData] = useState({
    id: Math.random().toFixed(6),
  });
  const [sdcImgUrl, setSdcImgUrl] = useState({});
  const [sdcInchargeImgUrl, setSdcInchargeImgUrl] = useState({});

  useEffect(() => {
    const fetchSdcdata = async () => {
      await api
        .get("sdc")
        .then((res) => {
          console.log("res", res.data[0]);
          setSdcData(res.data[0]);
          setSdcImgUrl(BASE_URL+res.data[0].sdcPhotoUrl);
          setSdcInchargeImgUrl(BASE_URL+res.data[0].sdcInchargePhotoUrl);
          setAvailability(true);
        })
        .catch((err) => console.log(err));
       };
    fetchSdcdata();
  }, [formSub]);

  const sdcDataHandler = (event) => {
    setSdcData({ ...sdcData, [event.target.name]: event.target.value });
  };

  const sdcImgHandler = (event) => {
    setSdcData({
      ...sdcData,
      [event.target.name]: event.target.files[0],
      ["sdcPhotoUrl"]: "sdc/sdcPhoto",
    });
    const data = new FileReader();
    data.addEventListener("load", () => {
      setSdcImgUrl(data.result);
    });

    data.readAsDataURL(event.target.files[0]);
  };

  const sdcInchargeImgHandler = (event) => {
    setSdcData({
      ...sdcData,
      [event.target.name]: event.target.files[0],
      ["sdcInchargePhotoUrl"]: "/sdc/sdcInchargePhoto",
    });
    const data = new FileReader();
    data.addEventListener("load", () => {
      setSdcInchargeImgUrl(data.result);
    });
    data.readAsDataURL(event.target.files[0]);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();

    await api
      .post("sdc", sdcData)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log(err));

    let formdata = new FormData();
    formdata.append("sdc", sdcData.sdcPhoto);
    await api
      .post("sdc/sdcPhoto", formdata)
      .then((res) => {
        // console.log("res",res)
        window.alert("SDC ", res.data);
      })
      .catch((err) => console.log(err));

    let fd = new FormData();
    fd.append("sdc", sdcData.sdcInchargePhoto);
    await api
      .post("sdc/sdcInchargePhoto", fd)
      .then((res) => {
        // console.log("res",res)
        window.alert("SDC Incharge ", res.data);
      })
      .catch((err) => console.log(err));

    setFormSub(!formSub);
  };
  // console.log("SDC Data:", sdcData);

  return (
    <div>
      <h2>Form-Skill Developement Center</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>
      <form>
        <div className="NoBorder">
          <table>
            <tbody>
              {!availability && (
                <tr>
                  <td>
                    <center>
                      <input
                        type="checkbox"
                        name="sdcAvailability"
                        onChange={(e) => {
                          setAvailability(true);
                        }}
                      />
                      Skill Developement Center
                    </center>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {availability && (
            <>
              <div>
                <h4>Skill Developement Center </h4>
                <table>
                  <tbody>
                    <tr>
                      <td> SDC Introduction:</td>
                      <td>
                        <textarea
                          name="sdcIntro_en"
                          rows="5"
                          cols="75"
                          placeholder="SDC INTRODUCTION"
                          onChange={sdcDataHandler}
                          value={sdcData?.sdcIntro_en}
                          required
                        />
                      </td>
                      <td>
                        <textarea
                          name="sdcIntro_tel"
                          rows="5"
                          cols="75"
                          placeholder="స్కిల్ డెవలప్మెంట్ సెంటర్ గురించి "
                          onChange={sdcDataHandler}
                          value={sdcData?.sdcIntro_tel}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> SDC Photo:</td>

                      <td>
                        <input
                          name="sdcPhoto"
                          type="file"
                          onChange={sdcImgHandler}
                          required
                        />
                      </td>

                      {sdcImgUrl && (
                        <td>
                          <img
                            width="100px"
                            height="100px"
                            src={sdcImgUrl}
                            alt="SDC"
                          />
                        </td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h4>SDC Incharge </h4>
                <table>
                  <tbody>
                    <tr>
                      <td> Incharge Name:</td>
                      <td>
                        <input
                          name="sdcInchargeName_en"
                          type="text"
                          placeholder="Incharge Name"
                          value={sdcData?.sdcInchargeName_en}
                          onChange={sdcDataHandler}
                          required
                        />
                      </td>
                      <td>
                        <input
                          name="sdcInchargeName_tel"
                          type="text"
                          placeholder="ఇంచార్జ్ పేరు"
                          value={sdcData?.sdcInchargeName_tel}
                          onChange={sdcDataHandler}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> Designation :</td>
                      <td>
                        <input
                          name="sdcInchargeDesgn_en"
                          type="text"
                          placeholder="Incharge Designation"
                          value={sdcData?.sdcInchargeDesgn_en}
                          onChange={sdcDataHandler}
                          required
                        />
                      </td>
                      <td>
                        <input
                          name="sdcInchargeDesgn_tel"
                          type="text"
                          placeholder="ఇంచార్జ్ పదవి"
                          value={sdcData?.sdcInchargeDesgn_tel}
                          onChange={sdcDataHandler}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td> Incharge Photo:</td>
                      <td>
                        <input
                          name="sdcInchargePhoto"
                          type="file"
                          onChange={sdcInchargeImgHandler}
                          // required
                        />
                      </td>
                      {sdcInchargeImgUrl && (
                        <td>
                          <img
                            width="100px"
                            height="100px"
                            src={sdcInchargeImgUrl}
                            alt="SDC incharge"
                          />
                        </td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
              <center>
                <button onClick={formDataHandler}>
                  {!availability ? "Submit" : "Update"}
                </button>
              </center>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default AdminSDC;
