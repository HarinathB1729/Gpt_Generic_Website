import  express  from "express";
import {db} from "./db.js"

const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT * FROM `contacts`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/", (req, res) => {
  //colLogo, govtLogo not included
  const query =
    "REPLACE INTO `contacts`(`id`,`colAddress_en`,`colAddress_tel`,`colMobno`,`colEmail`,`colLatitude`,`colLongitude`,`facebook`,`instagram`,`twitter`,`youtube`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.colAddress_en,
    req.body.colAddress_tel,   
    req.body.colMobno,  
    req.body.colEmail,
    req.body.colLatitude,   
    req.body.colLongitude,   
    req.body.facebook,
    req.body.instagram,   
    req.body.twitter, 
    req.body.youtube,       
  ];  
  // console.log(values)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Contact details updation succesful");
  });
});

export default router;