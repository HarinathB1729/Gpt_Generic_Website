import React, { useEffect } from "react";
import img from "../../img/nba.jpg";
import {useGlobalProvider} from "../../../GlobalProvider";

function NBA() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);

  const NBA_intro =
    "The National Board of Accreditation (NBA) is one of the two major bodies responsible for accreditation of higher education institutions in India, along with the National Assessment and Accreditation Council (NAAC).[1] NBA accredits technical programmes, such engineering and management programmes, while NAAC accredits general colleges and universities.[2] NBA is a full member of the Washington Accord. ";
  return (
    <div className="Body">
      <h2>National Board of Accreditation</h2>
      <div className="Committees">
        <div className="Introduction">
          <div className="Intro">
            <p>{NBA_intro}</p>
          </div>
          <div className="IMG">
            <img src={img} />
          </div>
        </div>
      </div>
      {/* <div className="CommitteeTable">
        <PolyTechFestTable />
      </div> */}
    </div>
  );
}
export default NBA;
