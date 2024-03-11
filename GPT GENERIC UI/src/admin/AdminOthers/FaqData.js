import React, { useState } from "react";
import { XSquare } from "phosphor-react";

function FaqData(props) {
  const [faq, setFaq] = useState(props.data);

  const changeColValue = (e) => {
    let data = { ...faq, [e.target.name]: e.target.value };
    setFaq((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    props.updateFaqData(props.value, data);
  };

  // console.log("props",props.data)
  return (
    <div>
      <XSquare
        className="closeIcon"
        size={20}
        onClick={() => {
          return props.delFaqData(props.value);
        }}
      />
      <table>
        <tbody>
        <tr>
            <td>FAQ Question No:</td>
            <td>
              <input
                required
                name="qno"
                placeholder="Question Number"
                onChange={changeColValue}
                value={faq?.qno}
              />
            </td>
        
          </tr>
          <tr>
            <td>FAQ Question:</td>
            <td>
              <input
                required
                name="faqQstn_en"
                placeholder="Question"
                onChange={changeColValue}
                value={faq?.faqQstn_en}
              />
            </td>
            <td>
              <input
                required
                name="faqQstn_tel"
                placeholder="ప్రశ్న"
                onChange={changeColValue}
                value={faq?.faqQstn_tel}
              />
            </td>
          </tr>

          <tr>
            <td>FAQ Answer:</td>
            <td>
              <textarea
                required
                name="faqAns_en"
                rows="5"
                cols="75"
                placeholder="Answer"
                onChange={changeColValue}
                value={faq?.faqAns_en}
              />
            </td>
            <td>
              <textarea
                required
                name="faqAns_tel"
                rows="5"
                cols="75"
                placeholder="సమాధానం"
                onChange={changeColValue}
                value={faq?.faqAns_tel}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FaqData;
