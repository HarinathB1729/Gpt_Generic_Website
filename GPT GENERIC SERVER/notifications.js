import express from "express";
import { db } from "./db.js";

const router = express.Router();

router.get("/newNtfc", (req, res) => {
  const query = "SELECT * FROM `notificationsdata` WHERE ntfcNewItem=1";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/tworows", (req, res) => {
  const query = "SELECT `id`, `ntfcDate`,`ntfcName_en`,`ntfcName_tel`,`ntfcDesc_en`,`ntfcDesc_tel`,`ntfcLink`,`ntfcNewItem` FROM `notificationsdata`  ORDER BY `ntfcDate` DESC LIMIT 2";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/", (req, res) => {
  const query = "SELECT `id`, `ntfcDate`,`ntfcName_en`,`ntfcName_tel`,`ntfcDesc_en`,`ntfcDesc_tel`,`ntfcLink`,`ntfcNewItem` FROM `notificationsdata`  ORDER BY `ntfcDate` DESC";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/", (req, res) => {
  let  ntfcDate = req.body.ntfcDate;
  const query =
    "REPLACE INTO `notificationsdata`(`id`,`ntfcDate`,`ntfcName_en`,`ntfcName_tel`,`ntfcDesc_en`,`ntfcDesc_tel`,`ntfcLink`,`ntfcNewItem`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.ntfcDate,
    req.body.ntfcName_en,
    req.body.ntfcName_tel,
    req.body.ntfcDesc_en,
    req.body.ntfcDesc_tel,
    req.body.ntfcLink,
    req.body.ntfcNewItem,
  ];
  // console.log(values)

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(ntfcDate+" Notification data updation succesful");
  });
});

router.delete("/:id", (req, res) => {
  const delId = req.params.id;
  // console.log("delid",delId)
  const query = "DELETE FROM `notificationsdata` WHERE `id`= ?";

  db.query(query, [delId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Succesfully Deleted Notification "+delId);
  });
});

export default router;
