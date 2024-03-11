import React, { useEffect, useState } from "react";
import TelEngObjBuilderMultiple from "../../Utilities/TelEngObjBuilderMultiple";
import { useGlobalProvider } from "../../../GlobalProvider";
import {api,BASE_URL} from "../../../api";
import ResourceFileTableBuilder from "./ResourceFileTableBuilder";

function Resources() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";

  const [dbTableData, setDbTableData] = useState({});
  const [formSub, setFormSub] = useState(false);
  const [depts, setDepts] = useState({});
  const [resource, setResource] = useState({});

  useEffect(() => {
    // console.log("didmount", glbVals);
    setGlbVals((prev) => ({ ...prev, scrollTop: true }));
    const fetchDeptNames = async () => {
      await api
        .get("dept/names")
        .then((res) => {
          let updMember = [];
          for (const [key, value] of Object.entries(res.data)) {
            if (value.deptCode != "GENERAL") updMember = [...updMember, value];
          }
          setDepts(updMember);
        })
        .catch((err) => console.log("Error :", err));
    };
    fetchDeptNames();
  }, [setGlbVals]);

  const selectionHandler = (e) => {
    
    setResource((prev) => ({
      ...prev,
      [e.target.name ]: e.target.value,
    }));
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    //RESOURCES DATA FETCHING

    setDbTableData({});

    const tRes = await api.get(
      "resources/clienttable/" +
        resource.deptCode +
        "/" +
        resource.year
    );

    if (tRes.data.length) {
      let temp = {};
      for (const [key, value] of Object.entries(tRes.data)) {
        temp = { ...temp, [key]: value };
      }
      setDbTableData(TelEngObjBuilderMultiple(temp));
    }
    setFormSub(true);
  };

  const theadData = {
    en: ["Department Code", "Year", "Subject Name", "Subject Code"],
    tel: ["డిపార్ట్మెంట్ కోడ్", "సంవత్సరం", "సబ్జెక్టు పేరు", "సబ్జెక్టు కోడ్"],
  };

  // console.log("resource :", resource);
  // console.log("dbTableData :", dbTableData);
  // console.log("depts",depts)

  return (
    <div className="Body">
      <div className="resource">
        <h2> {glbVals.telugu ? "సబ్జెక్టు వనరులు" : "Subject Resources"} </h2>
        <form method="POST" onSubmit={formDataHandler}>
          <table>
            <tbody>
              <tr>
                <td>
                  {glbVals.telugu ? "డిపార్ట్మెంట్" : "Department"}
                  <select name="deptCode" onChange={selectionHandler} required>
                    <option value="default">
                      ----{glbVals.telugu ? "ఎంచుకోండి" : "Select"} ----
                    </option>
                    {depts.length > 0 &&
                      depts.map((dept) => {
                        return (
                          <option
                            key={dept.deptName_en}
                            value={dept.deptCode}
                          >
                            {glbVals.telugu
                              ? dept.deptName_tel
                              : dept.deptName_en}
                          </option>
                        );
                      })}
                  </select>
                </td>

                <td>
                  {glbVals.telugu ? "సంవత్సరం/సెమిస్టర్" : "Year/Semester"}
                  <select name="year" onChange={selectionHandler} required>
                    <option value="default">
                      ----{glbVals.telugu ? "ఎంచుకోండి" : "Select"} ----
                    </option>
                    <option value="1year">
                      {glbVals.telugu ? "మొదటి సంవత్సరం" : "First Year "}
                    </option>
                    <option value="3sem">
                      {glbVals.telugu ? "మూడవ సెమిస్టర్" : "Third Semester "}
                    </option>
                    <option value="4sem">
                      {glbVals.telugu ? "నాలుగో సెమిస్టర్" : "Fourth Semester"}
                    </option>
                    <option value="5sem">
                      {glbVals.telugu ? "ఐదవ సెమిస్టర్" : " Fifth Semester "}
                    </option>
                    <option value="6sem">
                      {glbVals.telugu ? "ఆరవ సెమిస్టర్" : " Sixth Semester "}
                    </option>
                  </select>
                </td>
                <td>
                  <button type="submit">
                    {glbVals.telugu ? "సమర్పించండి" : "submit"}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        {formSub &&
          (Object.keys(dbTableData).length > 0 ? (
            <ResourceFileTableBuilder
              data={dbTableData}
              theadData={theadData}
              fileUrl={"resources/file/"}
            />
          ) : (
            <p className="Error">
              {glbVals.telugu ? "డేటా ఏదీ కనుగొనబడలేదు" : "No Data Found"}
            </p>
          ))}
      </div>
    </div>
  );
}
export default Resources;
