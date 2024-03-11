import  express  from "express";
import {db} from "./db.js"

const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT * FROM `polycetcoordinator`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/", (req, res) => {  
  const query =
    "REPLACE INTO `polycetcoordinator`(`id`,`coordName_en`,`coordName_tel`,`coordDesgn_en`,`coordDesgn_tel`,`coordPhno`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.coordName_en,
    req.body.coordName_tel,   
    req.body.coordDesgn_en,  
    req.body.coordDesgn_tel,
    req.body.coordPhno,      
  ];  
  // console.log(values)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Polycet coordinator data updation succesful");
  });
});

export default router;