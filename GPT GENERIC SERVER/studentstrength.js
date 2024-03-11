import express from "express";
import { db } from "./db.js";

const router = express.Router();

router.get("/firstyear", (req, res) => {
  const query = "SELECT SUM(fisYear) as firstyearstrength FROM `stustrength`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.get("/dept/:id/strength", (req, res) => {
  let deptCode = req.params.id;
  const query = "SELECT SUM(fisYear+secYear+thirdYear) as deptstrength FROM `stustrength`  WHERE `deptCode`=? ";

  db.query(query,[deptCode], (err, data) => {    
    if (err) return res.json(err);
    return res.json(data);    
  });
});

router.get("/dept/:id", (req, res) => {
  let deptCode = req.params.id;
  const query = "SELECT * FROM `stustrength`  WHERE `deptCode`=? ";

  db.query(query,[deptCode], (err, data) => {    
    if (err) return res.json(err);
    return res.json(data);    
  });
});


router.get("/", (req, res) => {
  const query = "SELECT SUM(fisYear+secYear+thirdYear) as colstrength FROM `stustrength`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});



router.post("/", (req, res) => {
  let deptCode = req.body.deptCode;
  
  const query =
    "REPLACE INTO `stustrength`(`deptCode`,`fisYear`,`secYear`,`thirdYear`) VALUES (?)";
  const values = [
    // req.body.id,
    req.body.deptCode,
    req.body.fisYear,
    req.body.secYear,
    req.body.thirdYear,
  ];

  // console.log(query, values);

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(deptCode +" Department Student strength updation succesful");
  });
});

router.delete("/dept/:id", (req, res) => {
 
  const query = "DELETE FROM `stustrength` WHERE `deptCode`=?";
  // console.log("Deletion id", req.params.id);
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(" Department stustrength Data Deletion succesful !");
  });
});


export default router;
