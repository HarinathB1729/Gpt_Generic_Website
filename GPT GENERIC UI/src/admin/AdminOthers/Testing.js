import axios from "axios";
import React, { useState } from "react";

function Testing() {
  const [imgSrc, setImgSrc] = useState("");
  const [file, setFile] = useState("");



  const imagePreviewHandler = (e) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImgSrc(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };

  const fileHandler = (e) => {
    
    setFile(e.target.files[0]);
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("image", file);
    try {
      await axios
        .post("testing/image/" + 0.12345, formdata)
        .then((res) => console.log("response", res))
        .catch((err) => {
          console.log("Error:", err);
        });
    } catch (err) {
      console.log("Error", err);
    }
  };

  const imagePreview = async () => {
    axios
      .get("testing/image/" + '0.12345')
      .then((res) => {
        console.log("response", res)
      //  setImgSrc(res.config.url);     // on receive from db, directly set it to the IMAGE SRC
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  console.log("file", file);
  return (
    <div>    
      <form method="POST" onSubmit={formDataHandler}>
        {/* <input type="file" name="image" onChange={imagePreviewHandler} /> */}
        <img src={imgSrc} alt="image"  style={{width:"200px", height:"200px", border:'1px solid black'}} />
        <input type="file" name="file" onChange={fileHandler} />
        <button onClick={imagePreview}>Image from db</button>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Testing;
