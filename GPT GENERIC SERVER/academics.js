import express from "express";
import multer from "multer";
import { db } from "./db.js";

const router = express.Router();

router.get("/aycalender", (req, res) => {
  const query = "SELECT `id`,`AyCalenderIntro_en`,`AyCalenderIntro_tel`,`AyCalenderFileUrl` FROM academics";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/ayfachandbook", (req, res) => {
  const query = "SELECT `id`,`AyFacHandBook_en`,`AyFacHandBook_tel`,`AyFacHandBookFileUrl` FROM academics";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/aysturulebook", (req, res) => {
  const query = "SELECT `id`,`AyRuleBookIntro_en`,`AyRuleBookIntro_tel`,`AyRuleBookFileUrl` FROM academics";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/", (req, res) => {
  const query = "SELECT * FROM academics";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.post("/aycalender", (req, res) => {
  const query =
    "REPLACE INTO `academics`(`id`,`AyCalenderIntro_en`,`AyCalenderIntro_tel`,`AyCalenderFileUrl`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.AyCalenderIntro_en,
    req.body.AyCalenderIntro_tel,
    req.body.AyCalenderFileUrl,
  ];
  console.log(values)

  db.query(query, [values], (err, data) => {
    if (err) return console.log(err);
    return res.json("AY Calender Data updation succesful");
  });
});

router.post("/", (req, res) => {
  const query =
    "REPLACE INTO `academics`(`id`,`AyCalenderIntro_en`,`AyCalenderIntro_tel`,`AyCalenderFileUrl`,`AyTimeTableIntro_en`,`AyTimeTableIntro_tel`,`AyTimeTableFileUrl`,`AyRuleBookIntro_en`,`AyRuleBookIntro_tel`,`AyRuleBookFileUrl`,`AyFacHandBook_en`,`AyFacHandBook_tel`,`AyFacHandBookFileUrl`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.AyCalenderIntro_en,
    req.body.AyCalenderIntro_tel,
    req.body.AyCalenderFileUrl,
    req.body.AyTimeTableIntro_en,
    req.body.AyTimeTableIntro_tel,
    req.body.AyTimeTableFileUrl,
    req.body.AyRuleBookIntro_en,
    req.body.AyRuleBookIntro_tel,
    req.body.AyRuleBookFileUrl,
    req.body.AyFacHandBook_en,
    req.body.AyFacHandBook_tel,
    req.body.AyFacHandBookFileUrl,
  ];
  // console.log(values)

  db.query(query, [values], (err, data) => {
    if (err) return console.log(err);
    return res.json("Academics Data updation succesful");
  });
});

router.post("/file/:id", (req, res, next) => {
  const customDestination = "./uploads/Academics/";
  const file_name = req.params.id;
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, file_name + ".pdf"); // You can modify the filename if needed
    },
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single(
    "academics"
  );

  uploadWithCustomDestination(req, res, function (err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }

    res.json(`${req.params.id} file uploaded successfully!!`);
  });
});

router.get("/file/:id", (req, res) => {
  // using Java Script method to get PDF file
  // console.log("id",req.params.id)
  res.download("./uploads/Academics/" + req.params.id + ".pdf");
});

export default router;
