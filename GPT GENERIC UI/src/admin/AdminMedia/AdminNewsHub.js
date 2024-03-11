import React, { useEffect, useState } from "react";
import { ListPlus } from "phosphor-react";
import NewsHubDetails from "./NewsHubDetails";
import {api,BASE_URL} from "../../api";
import PhotoTableBuilder from "../../Utilities/PhotoTableBuilder";

function AdminNewsHub() {
  const [newshub, setNewsHub] = useState({});
  const [btnVis, setBtnVis] = useState(false);
  const [dbData, setDbData] = useState({});
  const [formSub, setFormSub] = useState(false);
  const url = "news/img/";

  useEffect(() => {
    const fetchNewsHubData = async () => {
      try {
        //NEWS DETAILS DATA FETCHING
        const news = await api.get("news");
        if (news.data.length) {
          let temp = {};
          for (const [key, value] of Object.entries(news.data)) {
            temp = { ...temp, [value.id]: value };
          }
          setDbData(temp);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchNewsHubData();
  }, [formSub]);

  const addNewsHub = () => {
    let key = Math.random().toFixed(6);
    setNewsHub((prev) => ({ ...prev, [key]: { ["id"]: key } }));
    setBtnVis(true);
  };

  const delNewsHub = () => {
    setBtnVis(false);
    setNewsHub({});window.scrollTo(0,0);
  };

  const updateNewsHub = (id, data) => {
    setNewsHub((prev) => ({ ...prev, [id]: data }));
  };

  const editDbData = async (id) => {
    // console.log("btnVis id", id);
    let updMember = {};
    for (const [key, value] of Object.entries(dbData)) {
      if (key == id) updMember = { ...updMember, [key]: value };
    }    
    // console.log("updMember",updMember)
    setNewsHub(updMember);
    setFormSub(!formSub);
    setBtnVis(true);window.scrollTo(0,0);
  };

  const deleteDbData = async (id) => {
    // console.log("delete id ",id)

    await api
      .delete("news/" + id)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log(err));
    setFormSub(!formSub);
    setNewsHub({});
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    let newsItemId;

    for (const [key, value] of Object.entries(newshub)) {
      newsItemId = key;
      await api
        .post("news", value)
        .then((res) => {
          window.alert(res.data);
          //
        })
        .catch((err) => console.log(err));
    }

    const formdata = new FormData();
    formdata.append("newsImg", newshub[newsItemId].newsItemImg);

    await api
      .post("news/img/" + newsItemId, formdata)
      .then(function (response) {
        window.alert(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    setBtnVis(false);
    setFormSub(!formSub);
    setNewsHub({});
  };

  const theadData = [
    "ID",
    "News-Item Date",
    "Title-eng",
    "Title-tel",
    "Description-eng",
    "Description-tel",  
    "Photo URL"  
  ];

  return (
    <div>
      <h2>Form - News Hub</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>
      {!btnVis && (
        <center>
          <ListPlus size={28} weight="fill" onClick={addNewsHub} />
        </center>
      )}

      {btnVis && (
        <form method="POST" onSubmit={formDataHandler}>
          <div className="NoBorder">
            <h4>News Item(s) Details</h4>

            {Object.entries(newshub).map((nh) => {
              return (
                <NewsHubDetails
                  key={nh[0]}
                  data={nh[1]}
                  updateNewsHub={updateNewsHub}
                  delNewsHub={delNewsHub}
                />
              );
            })}

            <center>
              <button type="submit">Submit</button>
            </center>
          </div>
        </form>
      )}

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
            imgUrl={BASE_URL+ url}
            editDbData={editDbData}
            deleteDbData={deleteDbData}
          />
        </div>
      )}
    </div>
  );
}

export default AdminNewsHub;
