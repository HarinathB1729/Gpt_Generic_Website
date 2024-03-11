import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../../GlobalProvider";
import useFetchMultipleDbData from "../../Utilities/useFetchMultipleDbData";
import CountUp from "react-countup";

function Admission() {
  const [glbVals, setGlbVals] = useContext(GlobalContext);
  const lang = glbVals.telugu ? "tel" : "en";
  const [strCounter, setStrCounter] = useState(false);

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
  }, []);

  const departments = useFetchMultipleDbData("dept/body");
  // console.log("depts", departments);

  return (
    <div className="Body">
      <div className="Admission">
        <h2>{glbVals.telugu ? "ప్రవేశాలు" : "Admissions"}</h2>
        <div className="Admission1">
          <div className="departments">
            {Object.entries(departments).map((dept, i) => {
              if (dept[1]["en"]?.yearAdmStrength > 0) {
                return (
                  <div className="dept">                    
                    <div className="dept_name">
                      <strong>
                        <CountUp
                          duration={1}
                          start={0}
                          end={dept[1]["en"]?.yearAdmStrength}
                        />
                      </strong>
                      <h4>
                        {glbVals.telugu ? "సీట్లు/సంవత్సరం" : "Seats/Year"}
                      </h4>
                      <h4>{dept[1][lang]?.deptName}</h4>
                    </div>
                    <h4 style={{ color: "#9c27b0" }}>
                      {glbVals.telugu
                        ? "డిపార్ట్మెంట్ కోడ్"
                        : "Department Code"}{" "}
                      : <u>{dept[1]["en"]?.deptCode}</u>
                    </h4>
                  </div>
                );
              } else return;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Admission;
