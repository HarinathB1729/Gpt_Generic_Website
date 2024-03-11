import React, { useEffect } from "react";
import "../../client.css";
import { useGlobalProvider } from "../../../GlobalProvider";
import useFetchMultipleDbData from "../../Utilities/useFetchMultipleDbData";
import {BASE_URL} from "../../../api";

function NewsHub() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";
  const newsHubData = useFetchMultipleDbData("news");
  // console.log("newsItemsdata", newsHubData);

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);

  const months = {
    en: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    tel: [
      "జనవరి",
      "ఫిబ్రవరి",
      "మార్చి",
      "ఏప్రిల్",
      "మే",
      "జూన్ ",
      "జూలై ",
      "ఆగస్టు ",
      "సెప్టెంబర్",
      "అక్టోబర్ ",
      "అక్టోబర్",
      "నవంబర్",
      "డిసెంబర్",
    ],
  };

  const DateHandler = (n) => {
    switch (n) {
      case 1:
        return "01";
      case 2:
        return "02";
      case 3:
        return "03";
      case 4:
        return "04";
      case 5:
        return "05";
      case 6:
        return "06";
      case 7:
        return "07";
      case 8:
        return "08";
      case 9:
        return "09";
      default:
        return n;
    }
  };

  return (
    <div className="Body">
      <div className="Event">
        <h1>{glbVals.telugu ? "న్యూస్ హబ్": "NewsHub"}</h1>
        {Object.entries(newsHubData).map((newsItem) => {
          // console.log("newsItem", newsItem);
          const date = new Date(newsItem[1][lang].newsItemDate);
          // console.log("date", date);
          return (
            <div key={newsItem[0]} className="Event1">
              <div className="Event_photo">
                <img src={BASE_URL+ newsItem[1][lang]?.newsItemImgUrl} alt="NEWS ITEM Photo" />
              </div>
              <div className="Event_Content">
                <div className="date">
                  <div className="day">
                    <div className="Day">
                      <strong> {DateHandler(date.getDate())} {months[lang][date.getMonth()]}</strong>
                    </div>
                    <div className="month">
                      <strong>{date.getFullYear()} </strong>
                    </div>
                  </div>
                  <div className="Tittle">
                    <b>{newsItem[1][lang]?.newsItemTitle}</b>
                  </div>
                </div>
                <div className="content">
                  <p>{newsItem[1][lang]?.newsItemDesc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default NewsHub;
