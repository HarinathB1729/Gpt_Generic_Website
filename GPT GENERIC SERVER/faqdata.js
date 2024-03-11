import express from "express";
import { db } from "./db.js";

const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT * FROM `faqdata` order by qno";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/:id", (req, res) => {
  const query = "SELECT * FROM `faqdata` WHERE `id`=?";
  db.query(query,[req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/", (req, res) => {
  //colLogo, govtLogo not included
  const query =
    "REPLACE INTO `faqdata`(`id`,`qno`,`faqQstn_en`,`faqQstn_tel`,`faqAns_en`,`faqAns_tel`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.qno,
    req.body.faqQstn_en,
    req.body.faqQstn_tel,
    req.body.faqAns_en,
    req.body.faqAns_tel,
  ];
  // console.log(query, values)

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("FAQ Data updation succesful");
  });
});

router.delete("/:id", (req, res) => {
  const delId = req.params.id;
  // console.log("delid",delId)
  const query = "DELETE FROM `faqdata` WHERE `id`= ?";

  db.query(query, [delId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Succesfully Deleted FAQ data");
  });
});

export default router;
