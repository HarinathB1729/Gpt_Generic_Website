import  express  from "express";
import {db} from "./db.js"

const router = express.Router();

router.get("/coordinator", (req, res) => {
  const query = "SELECT * FROM `alumnicoordinator`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/coordinator", (req, res) => {  
  const query =
    "REPLACE INTO `alumnicoordinator`(`id`,`coordName_en`,`coordName_tel`,`coordBatch`,`coordPhno`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.coordName_en,
    req.body.coordName_tel,   
    req.body.coordBatch,      
    req.body.coordPhno,      
  ];  
  // console.log(values)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Alumni coordinator data updation succesful");
  });
});

export default router;