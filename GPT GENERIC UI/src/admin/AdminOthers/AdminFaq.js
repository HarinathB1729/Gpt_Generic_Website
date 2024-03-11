import React, { useEffect, useState } from "react";
import { ListPlus } from "phosphor-react";
import FaqData from "./FaqData";
import {api,BASE_URL} from "../../api";
import DataTableBuilder from "../../Utilities/DataTableBuilder";

function AdminFaq() {
  const [faqData, setFaqData] = useState({});
  const [formSub, setFormSub] = useState(false);
  const [dbData, setDbData] = useState({});
  const [btnVis, setBtnVis] = useState(false);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        //FAQ DATA FETCHING
        const fq = await api.get("faqs");

        if (fq.data.length) {
          let temp = {};
          for (const [key, value] of Object.entries(fq.data)) {
            temp = { ...temp, [value.id]: value };
          }
          setDbData(temp);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchFaqData();
  }, [formSub]);

  const addFaqData = () => {
    let key = Math.random().toFixed(6);
    setFaqData((prev) => ({ ...prev, [key]: { ["id"]: key } }));
    setBtnVis(true);
  };

  const delFaqData = (del) => {
    setBtnVis(false);   
  };

  const updateFaqData = (id, data) => {
    setFaqData((prev) => ({ ...prev, [id]: data }));
  };

  const editDbData = async (id) => {
    let updMember = {};
    for (const [key, value] of Object.entries(dbData)) {
      if (value.id == id) updMember = { ...updMember, [key]: value };
    }
    setBtnVis(true);
    setFaqData(updMember);
    setFormSub(!formSub);
    window.scrollTo(0,0);
  };

  const deleteDbData = async (id) => {
    // console.log("delete id ",id)

    await api
      .delete("faqs/" + id)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log("Error :", err));
    setFormSub(!formSub);
    setBtnVis(false);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    // console.log("formdata value", eventsData);

    for (const [key, value] of Object.entries(faqData)) {
      await api
        .post("faqs", value)
        .then((response) => {
          window.alert(response.data);
          // console.log("res", response);
        })
        .catch((error) => console.log("Error :", error));
    }

    setBtnVis(false);
    setFormSub(!formSub);
    setFaqData({});
  };


  const theadData = [
    "Id",
    "Qstn no",
    "FAQ Qstn-Eng",
    "FAQ Qstn-Tel",
    "FAQ Ans-Eng",
    "FAQ Ans-Tel",
  ];
  console.log("dbData:", dbData);
  console.log("faqData:", faqData);
  return (
    <div>
      <h2>Form - Frequently Asked Questions</h2>
      <p className="Remarks">*- All Fields are Mandatory.</p>

      {!btnVis && (
        <center>
          <ListPlus size={32} weight="fill" onClick={addFaqData} />
        </center>
      )}

      {btnVis && (
        <form method="POST" onSubmit={formDataHandler}>
          {Object.entries(faqData).map((fq) => {
            return (
              <FaqData
                key={fq[0]}
                value={fq[0]}
                data={fq[1]}
                updateFaqData={updateFaqData}
                delFaqData={delFaqData}
              />
            );
          })}
          <center>
            <button type="submit">Submit</button>
          </center>
        </form>
      )}

      {/* TABLE-DATABASE DATA */}
      {Object.keys(dbData).length > 0 && (
        <>
          <h3>Existing Data</h3>
          <p className="Remarks">
            *- Deletion here will Delete data permanently
          </p>
          <DataTableBuilder
            data={dbData}
            theadData={theadData}
            editDbData={editDbData}
            deleteDbData={deleteDbData}
          />
        </>
      )}
    </div>
  );
}

export default AdminFaq;
