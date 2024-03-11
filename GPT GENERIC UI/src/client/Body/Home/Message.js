import React, {  useEffect } from "react";
import "../../client.css";
import { useGlobalProvider } from "../../../GlobalProvider";
import {BASE_URL} from "../../../api";
import useFetchDbData from "../../Utilities/useFetchDbData";

function Message() {
  // const [cte, setCte] = useState({});
  // const [principal, setPrincipal] = useState({});
  const cte = useFetchDbData("ctedata");
  const principal = useFetchDbData("principaldata");

  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));   
  }, [setGlbVals]);

  // console.log("cte",cte)
  // console.log("principal",principal)

  return (
    <div className="Body">
      <div className="IdCard">
        <div className="ID_Card_Details">
          <h2>
            {glbVals.telugu ? "కమిషనర్ గారి సందేశం" : "Commissioner's Messsage"}{" "}
          </h2>
          <div className="pmsg">
            <div className="Id_Photo">
              <div className="Img">
                <img src={BASE_URL+ cte[lang]?.cteImgUrl} alt="Commissioner" />
              </div>
            </div>
            <figure class="quote">
              <blockquote>{cte[lang]?.cteMsg}</blockquote>
              <figcaption>
                &mdash; {cte[lang]?.cteName},{" "}
                <cite>{cte[lang]?.cteDesig}</cite>{" "}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="IdCard">
        <div className="ID_Card_Details">
          <h2>
            {glbVals.telugu ? "ప్రిన్సిపాల్ గారి సందేశం" : "Prinicipal's Messsage"}
          </h2>
          <div className="pmsg">
            <div className="Id_Photo">
              <div className="Img">
                <img src={BASE_URL+ principal[lang]?.princImgUrl} alt="Prinicipal" />
              </div>
            </div>
            <figure class="quote">
              <blockquote>{principal[lang]?.princMsg}</blockquote>
              <figcaption>
                &mdash; {principal[lang]?.princName},
                {principal[lang]?.princQual},{" "}
                <cite>{principal[lang]?.princDesig}</cite>{" "}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Message;
