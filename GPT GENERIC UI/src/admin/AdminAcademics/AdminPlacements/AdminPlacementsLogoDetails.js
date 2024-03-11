import React from "react";
import { XSquare } from "phosphor-react";
import "../../adminconsole.css";

function AdminPlacementsLogoDetails(props) {
  return (
    <div>
      <XSquare
        className="closeIcon"
        size={20}
        onClick={() => {
          // console.log("button clicked", props.value);
          return props.delLogo(props.value);
        }}
      />
      <table>
        <tbody>
          <tr>
            <td>Company Name:</td>
            <td>
              <input type="text" name="compName_en" placeholder="Company Name" required />
            </td>
            <td>
              <input type="text" name="compName_tel" placeholder="Company Name" required />
            </td>
          </tr>
          <tr>
            <td>Company Logo:</td>
            <td>
              <input type="file" name="compLogo" placeholder="jpg/pdf" required />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminPlacementsLogoDetails;
