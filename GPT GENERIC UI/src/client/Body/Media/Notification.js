import React, { useEffect } from "react";
import "../../client.css";
import { useGlobalProvider } from "../../../GlobalProvider";
import useFetchMultipleDbData from "../../Utilities/useFetchMultipleDbData";


function Notification() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";
  const notifications = useFetchMultipleDbData("notifications");
  // console.log("newsItemsdata", notifications);

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

  const tittle = ["Holiday", "Results"];
  const Description =
    "World Teachers’ Day is celebrated on October 5 but every country celebrates the day on different dates and in India";
  const Notifications_count = [0, 1, 2, 3, 4];
  return (
    <div className="Body">
      <div className="notification">
        <h1>{glbVals.telugu ? "నోటిఫికేషన్‌లు" : "Notifications"}</h1>
        {Object.entries(notifications).map((ntfc) => {
          // console.log("newsItem", newsItem);
          const date = new Date(ntfc[1][lang].ntfcDate);
          // console.log("date", date);

          return (
            <div key={ntfc[0]} className="notifications">
              <div className="notification_date">
                <div className="day">
                  <strong>
                    {DateHandler(date.getDate())}{" "}
                    {months[lang][date.getMonth()]}
                  </strong>
                </div>
                <div className="year">
                  <strong>{date.getFullYear()}</strong>
                </div>
              </div>
              <div className="notification_content">
              <h3>{ntfc[1][lang]?.ntfcName} {ntfc[1][lang]?.ntfcNewItem ? <sup className="super">New</sup> : ''}</h3>
                <p>
                  {ntfc[1][lang]?.ntfcDesc}{" "}
                  {ntfc[1][lang].ntfcLink && (
                    <a target="_blank" href={ntfc[1][lang]?.ntfcLink}>
                      {glbVals.telugu ? "లింక్" : "Link"}
                    </a>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Notification;
