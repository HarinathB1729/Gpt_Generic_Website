import React, { useEffect, useState } from "react";
import "../adminconsole.css";
import { XSquare, Download } from "phosphor-react";
import { api } from "../../api";
import FileDownload from "js-file-download";

function AddResources(props) {
  const [resource, setResource] = useState(props.data);
  const [depts, setDepts] = useState({});

  useEffect(() => {
    const fetchDeptNames = async () => {
      await api
        .get("dept/names")
        .then((res) => {
          // console.log("res", res.data);

          let updMember = [];
          for (const [key, value] of Object.entries(res.data)) {
            if (value.deptCode != "GENERAL") updMember = [...updMember, value];
          }
          setDepts(updMember);
        })
        .catch((err) => console.log("Error :", err));
    };
    fetchDeptNames();
  }, []);

  const changeColValue = (e) => {
    setResource((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    let data = { ...resource, [e.target.name]: e.target.value };
    props.updateResourcesData(props.value, data);
  };

  const subFileHandler = (e) => {
    setResource((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    let data = { ...resource, [e.target.name]: e.target.files[0] };
    props.updateResourcesData(props.value, data);
  };

  const selectionHandler = (e) => {
    let data = {
      ...resource,
      [e.target.name]: e.target.value,
    };
    setResource((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    props.updateResourcesData(props.value, data);
  };

  const yearSelectionHandler = (e) => {
    let [a, b] = e.target.value.split("_");
    let data = {
      ...resource,
      [e.target.name + "_en"]: a,
      [e.target.name + "_tel"]: b,
    };
    setResource((prev) => ({
      ...prev,
      [e.target.name + "_en"]: a,
      [e.target.name + "_tel"]: b,
    }));
    props.updateResourcesData(props.value, data);
  };

  const downloadBtnHandler = async () => {
    api({
      url:
        "resources/file/" +
        resource?.deptCode +
        "/" +
        resource?.year_en +
        "/" +
        resource?.subCode,
      method: "GET",
      responseType: "blob", // Important
    }).then((response) => {
      FileDownload(response.data, resource?.subCode + " file.pdf");
    });
  };

  // console.log("props",props)
  // console.log("resource :", resource);
  // console.log("depts :", depts);
  return (
    <>
      <div>
        <XSquare
          className="closeIcon"
          size={28}
          onClick={() => {
            // console.log("button clicked", props.value);
            return props.delResourcesData();
          }}
        />
        <h4> Resource Details </h4>

        <table>
          <tbody>
            <tr>
              <td>Department Code : </td>
              <td>
                <select
                  name="deptCode"
                  onChange={selectionHandler}
                  value={resource?.deptCode}
                >
                  <option value="default">----Select ----</option>
                  {depts.length > 0 &&
                    depts.map((dept) => {
                      return (
                        <option key={dept.deptCode} value={dept.deptCode}>
                          {dept.deptCode}
                        </option>
                      );
                    })}
                </select>
              </td>
            </tr>
            <tr>
              <td>Year : </td>
              <td>
                <select
                  name="year"
                  onChange={yearSelectionHandler}
                  value={resource?.year_en+ "_" + resource?.year_tel}
                >
                  <option value="default">----Select ----</option>
                  <option value="1year_మొదటి సంవత్సరం">First Year </option>
                  <option value="3sem_మూడవ సెమిస్టర్">Third Semester </option>
                  <option value="4sem_నాలుగో సెమిస్టర">Fourth Semester</option>
                  <option value="5sem_ఐదవ సెమిస్టర్">Fifth Semester </option>
                  <option value="6sem_ఆరవ సెమిస్టర్">Sixth Semester </option>
                </select>
              </td>
            </tr>

            <tr>
              <td>Subject Name : </td>
              <td>
                <input
                  type="text"
                  name="subName_en"
                  placeholder="Subject Name"
                  onChange={changeColValue}
                  value={resource?.subName_en}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name="subName_tel"
                  placeholder="పాఠ్యాంశము పేరు"
                  onChange={changeColValue}
                  value={resource?.subName_tel}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Subject Code:</td>
              <td>
                <input
                  type="text"
                  placeholder="Subject Code/పాఠ్యాంశము కోడ్"
                  onChange={changeColValue}
                  value={resource?.subCode}
                  name="subCode"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Subject File :</td>
              <td>
                <input
                  type="File"
                  placeholder="word/pdf"
                  onChange={subFileHandler}
                  name="subFile"
                  required
                />
              </td>
              {props?.deptCode && (
                <td>
                  <Download
                    size={26}
                    weight="fill"
                    onClick={downloadBtnHandler}
                  />
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AddResources;
