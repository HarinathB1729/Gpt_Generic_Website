import  express  from "express";
import {db} from "./db.js"

const router = express.Router();



router.get("/client/:id", (req, res) => {
  const deptCode = req.params.id;
  const query = "SELECT `acdYear`, `projName_en`,`projName_tel`,`projDescr_en`,`projDescr_tel`,`stuTeam_en`,`stuTeam_tel`,`projGuide_en`,`projGuide_tel`,`projStatus_en`,`projStatus_tel` FROM polytechfestdata WHERE `deptCode`=?";

  db.query(query,[deptCode], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/client", (req, res) => { 
  const query = "SELECT `acdYear`,`deptCode`, `projName_en`,`projName_tel`,`projDescr_en`,`projDescr_tel`,`stuTeam_en`,`stuTeam_tel`,`projGuide_en`,`projGuide_tel`,`projStatus_en`,`projStatus_tel` FROM polytechfestdata WHERE `projCheck`='on'";

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.get("/dept/:id", (req, res) => {
  const deptCode = req.params.id;
  const query = "SELECT * FROM polytechfestdata WHERE `deptCode`=?";

  db.query(query,[deptCode], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.get("/", (req, res) => {
  const query = "SELECT * FROM polytechfestdata";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.post("/", (req, res) => {

  let  acdYear =  req.body.acdYear;
  //`facDept_en`,`facDept_tel` not added
  const query =
    "REPLACE INTO `polytechfestdata`(`id`,`deptCode`,`acdYear`, `projName_en`,`projName_tel`,`projDescr_en`,`projDescr_tel`,`stuTeam_en`,`stuTeam_tel`,`projGuide_en`,`projGuide_tel`,`projStatus_en`,`projStatus_tel`,`projCheck`) VALUES (?)";
 
    const values = [
    req.body.id,
    req.body.deptCode,
    req.body.acdYear,
    req.body.projName_en,   
    req.body.projName_tel, 
    req.body.projDescr_en,   
    req.body.projDescr_tel,  
    req.body.stuTeam_en,   
    req.body.stuTeam_tel, 
    req.body.projGuide_en,   
    req.body.projGuide_tel,  
    req.body.projStatus_en,   
    req.body.projStatus_tel, 
    req.body.projCheck,      
  ];  

  // console.log(values, query)
  
  db.query(query, [values], (err, data) => {
    if (err) return console.log(err);
    return res.json(acdYear+ " Polytechfest Data Updation succesful");
  });
});

router.delete("/dept/:id", (req, res) => {
  
  const query = "DELETE FROM `polytechfestdata` WHERE `deptCode`=?";
  // console.log("Deletion id", req.params.id);
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(" Department polytechfest Data Deletion succesful !");
  });
});


export default router;