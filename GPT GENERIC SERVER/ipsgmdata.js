import  express  from "express";
import {db} from "./db.js"

const router = express.Router();

router.get("/prizesdata/client", (req, res) => {
  const query = "SELECT `acdYear`,`stuPIN`,`stuName_en`,`stuName_tel`,`venueDetails_en`,`venueDetails_tel`,`sgName_en`,`sgName_tel`,`prizeDetails_en`,`prizeDetails_tel` FROM ipsgmprizesdata ORDER BY `acdYear` DESC";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.get("/prizesdata/:id", (req, res) => {
  const query = "SELECT * FROM ipsgmprizesdata WHERE  `id`=?  ORDER BY `acdYear` DESC";
  db.query(query,[req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/prizesdata", (req, res) => {
  const query = "SELECT * FROM ipsgmprizesdata ORDER BY `acdYear` DESC";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/pdmsg", (req, res) => {
  const query = "SELECT * FROM pdmessage";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/pdmsg", (req, res) => {
  
  const query =
    "REPLACE INTO `pdmessage`(`id`,`physicalDirectorMsg_en`,`physicalDirectorMsg_tel`) VALUES (?)";
  const values = [  
    req.body.id,  
    req.body.physicalDirectorMsg_en,
    req.body.physicalDirectorMsg_tel    
  ];  
  // console.log(values)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Physical Director Message updation succesful");
  });
});


router.post("/prizesdata", (req, res) => {

  let  stuPIN =  req.body.stuPIN;
  const query =
    "REPLACE INTO `ipsgmprizesdata`(`acdYear`,`id`,`stuPIN`,`stuName_en`,`stuName_tel`,`venueDetails_en`,`venueDetails_tel`,`sgName_en`,`sgName_tel`,`prizeDetails_en`,`prizeDetails_tel`) VALUES (?)";
  const values = [
    req.body.acdYear,
    req.body.id, 
    req.body.stuPIN,     
    req.body.stuName_en,   
    req.body.stuName_tel,   
    req.body.venueDetails_en,   
    req.body.venueDetails_tel,   
    req.body.sgName_en,   
    req.body.sgName_tel,   
    req.body.prizeDetails_en,
    req.body.prizeDetails_tel    
  ];  
  // console.log(values)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(stuPIN+" IPSGM Prize Data updation succesful");
  });
});

router.delete("/prizesdata/:id", (req, res) => {
  const query = "DELETE FROM ipsgmprizesdata WHERE  `id`=? ";
  db.query(query,[req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Ipsgm Prize Data Deleted Succesfully");
  });
});

export default router;