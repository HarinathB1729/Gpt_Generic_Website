import express from "express";
import { db } from "./db.js";
import multer from "multer";

const router = express.Router();

router.get("/body", (req, res) => {
  const query = "SELECT deptCode, deptName_en, deptName_tel, deptLogoUrl, yearAdmStrength FROM `departments` WHERE deptCode!='GENERAL' ORDER BY deptCode ASC";
  
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/namesdesc", (req, res) => {
  const query = "SELECT deptCode,deptName_en, deptName_tel FROM `departments` ORDER BY deptCode DESC";
  
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/names", (req, res) => {
  const query = "SELECT deptCode,deptName_en, deptName_tel FROM `departments` ORDER BY deptCode";
  
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/adminstr", (req, res) => {
 
  let deptCode = req.body.deptCode;
  const query = "REPLACE INTO `departments`(`deptId`,`deptCode`) VALUES (?) ORDER BY deptCode ASC";
  const values = [req.body.deptId, req.body.deptCode];
  // console.log(query, values);

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(deptCode + " Data updation succesful");
  });
});


router.get("/:id", (req, res) => {
  let deptCode = req.params.id;
  const query = "SELECT * FROM `departments` WHERE `deptCode`=? ORDER BY deptCode ASC";
  // console.log(query, deptId)
  db.query(query, [deptCode], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.get("/", (req, res) => {
  const query = "SELECT * FROM `departments` ORDER BY deptCoode ASC";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/", (req, res) => {
  //colLogo, govtLogo not included
  let deptName_en = req.body.deptName_en;
  const query =
    "REPLACE INTO `departments`(`deptId`,`deptName_en`,`deptName_tel`,`deptIntro_en`,`deptIntro_tel`,`deptVision_en`,`deptVision_tel`,`deptMission_en`,`deptMission_tel`,`deptCode`,`deptEmail`,`yearAdmStrength`,`deptLogoUrl`,`deptCurrFileUrl`) VALUES (?)";
  const values = [
    req.body.deptId,
    req.body.deptName_en,
    req.body.deptName_tel,
    req.body.deptIntro_en,
    req.body.deptIntro_tel,
    req.body.deptVision_en,
    req.body.deptVision_tel,
    req.body.deptMission_en,
    req.body.deptMission_tel,
    req.body.deptCode,
    req.body.deptEmail,   
    req.body.yearAdmStrength,
    req.body.deptLogoUrl,
    req.body.deptCurrFileUrl,
  ];
  // console.log(  req.body.deptLogoUrl,req.body.deptCurrFileUrl,);
  // console.log("values :",values)

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(deptName_en + " Data updation succesful");
  });
});


//LOGO UPLOADING
router.post("/logo/:id", (req, res, next) => {	//post_id
  const customDestination ="./uploads/departments/"+req.params.id ;	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, req.params.id+' Logo.jpeg'); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("logo");	//fileparameter

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`${req.params.id} Logo uploaded successfully!!`);	//params_id
  });
});

router.get("/logo/:id", (req, res) => {
   return res.download("./uploads/departments/"+req.params.id+"/"+req.params.id+" Logo.jpeg");
});



router.post("/curriculum/:id", (req, res, next) => {	//post_id
  const customDestination = "./uploads/departments/"+req.params.id;	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, req.params.id+' curriculum.pdf'); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("curriculum");	//fileparameter

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`${req.params.id} Curriculum file uploaded successfully!!`);	//params_id
  });
});

router.get("/curriculum/:id", (req, res) => {
   return res.download("./uploads/departments/"+req.params.id+"/"+req.params.id+" curriculum.pdf");
});

router.delete("/:id", (req, res) => {

  const query = "DELETE FROM `departments` WHERE `deptCode`=?";
  // console.log("Deletion id", req.params.id);
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(" Department basic Data Deletion succesful !");
  });
});

export default router;
