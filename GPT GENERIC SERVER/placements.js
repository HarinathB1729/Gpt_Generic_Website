import express from "express";
import { db } from "./db.js";
import multer from "multer";

const router = express.Router();

router.get("/tpo", (req, res) => {
  const query = "SELECT * FROM `tpodata`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/tpo", (req, res) => {
  //colLogo, govtLogo not included
  const query =
    "REPLACE INTO `tpodata`(`id`,`tpoName_en`,`tpoName_tel`,`tpoMsg_en`,`tpoMsg_tel`,`tpoPhno`,`tpoPhotoUrl`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.tpoName_en,
    req.body.tpoName_tel,
    req.body.tpoMsg_en,
    req.body.tpoMsg_tel,
    req.body.tpoPhno,
    req.body.tpoPhotoUrl
  ];

  // console.log(query, values)

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("TPO Data updation succesful");
  });
});

//TPO PHOTO UPLOADING

router.post("/tpo/img", (req, res, next) => {	//post_id
  const customDestination = "./uploads/tpo/";	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, "tpo.jpeg" ); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("tpo");	//fileparameter

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`TPO Photo uploaded successfully!!`);	//params_id
  });
});

//TPO PHOTO GETTING
router.get("/tpo/img", (req, res) => {
  // using Java Script method to get PDF file
  return res.download("./uploads/tpo/tpo.jpeg");
});

router.get("/clientayplacements", (req, res) => {
  const query =
    "SELECT `acdYear`,`stuPIN`,`stuName_en`,`stuName_tel`,`deptCode`,`compName_en`,`compName_tel`,`remarks_en`,`remarks_tel` FROM `placementdetails`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/dept/:id", (req, res) => {
  const query =
    "SELECT `acdYear`,`deptCode`,`stuPIN`,`stuName_en`,`stuName_tel`,`compName_en`,`compName_tel`,`remarks_en`,`remarks_tel` FROM `placementdetails` WHERE deptCode = ?";
  db.query(query,[req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


// router.get("/ayplacements/table", (req, res) => {
//   const query =
//     "SELECT `id`, `acdYear`,`stuPIN`,`stuName_en`,`deptCode`,`compName_en`,`remarks_en` FROM `placementdetails`";
//   db.query(query, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });



router.get("/ayplacements", (req, res) => {
  const query =
    "SELECT `id`, `acdYear`,`stuPIN`,`stuName_en`,`stuName_tel`,`deptCode`,`compName_en`,`compName_tel`,`remarks_en`,`remarks_tel` FROM `placementdetails`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/ayplacements", (req, res) => {
  let stuPIN = req.body.stuPIN;
  const query =
    "REPLACE INTO `placementdetails`(`id`,`acdYear`,`compName_en`,`compName_tel`,`deptCode`,`remarks_en`,`remarks_tel`,`stuName_en`,`stuName_tel`,`stuPIN`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.acdYear,
    req.body.compName_en,
    req.body.compName_tel,
    req.body.deptCode,    
    req.body.remarks_en,
    req.body.remarks_tel,
    req.body.stuName_en,
    req.body.stuName_tel,
    req.body.stuPIN,
  ];

  // console.log(query, values)

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(stuPIN + " Placements Data updation succesful");
  });
});


router.get("/ayplacements/:id", (req, res) => {
  const query =
    "SELECT `id`, `acdYear`,`stuPIN`,`stuName_en`,`stuName_tel`,`deptCode`,`compName_en`,`compName_tel`,`remarks_en`,`remarks_tel` FROM `placementdetails` WHERE `id`=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.delete("/ayplacements/:id", (req, res) => {
  const query = "DELETE FROM `placementdetails` WHERE `id`=?";
  // console.log("Deletion id", req.params.id);
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(" Placements Data Deletion succesful !");
  });
});

router.delete("/dept/:id", (req, res) => {
 
  const query = "DELETE FROM `placementdetails` WHERE `deptCode`=?";
  // console.log("Deletion id", req.params.id);
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(" Department Placements Data Deletion succesful !");
  });
});


export default router;
