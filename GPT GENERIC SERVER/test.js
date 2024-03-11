import express from "express";
import { db } from "./db.js";

const router = express.Router();

router.get("/", (req, res) => {
  // console.log("hi")

  const query = "SELECT * FROM image";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.post("/",(req,res)=>{

  const query="INSERT INTO `image`(`image`) VALUES (?)";
  const values = [req.file]
  // console.log(values,query)

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Image updation succesful");
  });
})


router.post("/date",(req,res)=>{

  // const values = [req.file];
  const query="INSERT INTO `test`(`date`) VALUES (?)";
  const values = [req.body.date]
  // console.log(values,query)

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("date updation succesful");
  });
})

router.get("/date", (req, res) => {
  
  const query = "SELECT DATE_FORMAT(date, '%d %M %Y') FROM `test`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.get("/image", (req, res) => {
 
  const query = "SELECT * FROM image";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.post("/image",(req,res)=>{

  const query = "INSERT INTO `image`(`image`) VALUES (?)";
  const image = req.files; // get the image data from the uploaded file
  const values = [image];

  db.query(query, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to upload image" });
    }
    return res.json("Image upload successful");
  });
})



export default router;