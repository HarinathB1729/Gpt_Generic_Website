import React, { useState } from "react";
import { Upload } from "phosphor-react";
import AdminPlacementsLogoDetails from "./AdminPlacementsLogoDetails";

function AdminPlacementLogos() {
  const [logo, setLogo] = useState([]);

  const addLogo = () => {
    let addItem = [...logo, Math.random()];
    setLogo(addItem);
  };

  const delLogo = (del) => {
    let delItem = logo.filter((i) => {
      // console.log("item to delete", del);
      return i !== del;
    });
    setLogo(delItem);
    // console.log("item to delete", del);
  };

  return (
    <>
      {logo.map((d) => {
        return (
          <AdminPlacementsLogoDetails key={d} value={d} delLogo={delLogo} />
        );
      })}

      <center>
        <Upload size={28} color="blue" onClick={addLogo} />
      </center>
    </>
  );
}

export default AdminPlacementLogos;
