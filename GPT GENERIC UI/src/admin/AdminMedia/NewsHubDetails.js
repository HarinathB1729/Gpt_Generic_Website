import React, { useEffect, useState } from "react";
import { XSquare } from "phosphor-react";
import "../adminconsole.css";
import DateHandler from "../DateHandler";
import {api,BASE_URL} from "../../api";

function NewsHubDetails(props) {
  const [newsItemData, setNewsItemData] = useState(props.data);
  const [newsImgUrl, setNewsImgUrl] = useState(props.data?.newsItemImgUrl);

    useEffect(()=>{
    if(props.data){
      setNewsImgUrl(BASE_URL+props.data?.newsItemImgUrl)
    }
  },[props.data])
  // console.log("props",props.data)


  const changeColValue = (e) => {
    let data = { ...newsItemData, [e.target.name]: e.target.value };
    setNewsItemData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    props.updateNewsHub(props.data.id, data);
  };

  const fileChangeHandler = (e) => {
    let file = { ...newsItemData, [e.target.name]: e.target.files[0],['newsItemImgUrl'] : "news/img/" + newsItemData.id };
    setNewsItemData((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0], ['newsItemImgUrl'] :  "news/img/" + newsItemData.id
    }));

    const data = new FileReader();
    data.addEventListener("load", () => {
      setNewsImgUrl(data.result);
    });
    
    data.readAsDataURL(e.target.files[0]);
    // console.log(file)
    props.updateNewsHub(props.data.id, file);
  };

  //DATE HANDLER
  let date = DateHandler(newsItemData?.newsItemDate, true);
  // console.log(date)

  return (
    <div>
      <XSquare
        className="closeIcon"
        size={20}
        onClick={() => {
          return props.delNewsHub(props.data.id);
        }}
      />

      <table>
        <tbody>
          <tr>
            <td> News Item Published Date:</td>
            <td>
              <input
                name="newsItemDate"
                type="date"
                onChange={changeColValue}
                value={date}
                required
              />
            </td>
          </tr>
          <tr>
            <td> News Item Title</td>
            <td>
              <input
                name="newsItemTitle_en"
                type="text"
                placeholder="News Item Title"
                onChange={changeColValue}
                value={newsItemData?.newsItemTitle_en}
                required
              />
            </td>
            <td>
              <input
                name="newsItemTitle_tel"
                type="text"
                placeholder="వార్తా వస్తువు  శీర్షిక"
                onChange={changeColValue}
                value={newsItemData?.newsItemTitle_tel}
                required
              />
            </td>
          </tr>
          <tr>
            <td> News Item Description:</td>
            <td>
              <textarea
                placeholder="News Item Description"
                rows="5"
                cols="75"
                name="newsItemDesc_en"
                onChange={changeColValue}
                value={newsItemData?.newsItemDesc_en}
                required
              ></textarea>
            </td>
            <td>
              <textarea
                placeholder="వార్తా వస్తువు వివరణ"
                rows="5"
                cols="75"
                name="newsItemDesc_tel"
                onChange={changeColValue}
                value={newsItemData?.newsItemDesc_tel}
                required
              ></textarea>
            </td>
          </tr>

          <tr>
            <td>News Item Photo:</td>
            <td>
              <input
                type="file"
                name="newsItemImg"
                onChange={fileChangeHandler}
                // required
              />
            </td>
            {newsImgUrl && (
              <td>
                <img className="DisplayImage" src={newsImgUrl} alt="NewsItem" />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NewsHubDetails;
