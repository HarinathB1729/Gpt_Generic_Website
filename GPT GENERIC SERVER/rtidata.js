import  express  from "express";
import {db} from "./db.js"

const router = express.Router();

router.get("/members/noid", (req, res) => {
  const query = "SELECT `rtiMemName_en`,`rtiMemName_tel`,`rtiMemDesgn_en`,`rtiMemDesgn_tel`,`rtiMemPos_en`,`rtiMemPos_tel`,`rtiMemPhno` FROM rtimembersdata";
  
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/members/table", (req, res) => {
  const query = "SELECT id,rtiMemPos_en,rtiMemName_en FROM rtimembersdata ORDER BY CASE rtiMemPos_en \
  WHEN 'Appellate Authority' THEN 1\
  WHEN 'Public Information Officer' THEN 2 \
  WHEN 'Assistant PIO' THEN 3\
  ELSE 4\
  END ASC,rtiMemName_en asc";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/members", (req, res) => {
  const query = "SELECT * FROM rtimembersdata ORDER BY CASE rtiMemPos_en \
  WHEN 'Appellate Authority' THEN 1\
  WHEN 'Public Information Officer' THEN 2 \
  WHEN 'Assistant PIO' THEN 3\
  ELSE 4\
  END ASC,rtiMemName_en asc";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/members", (req, res) => {
  const name = req.body.rtiMemName_en;
  const query =
    "REPLACE INTO `rtimembersdata`(`id`,`rtiMemName_en`,`rtiMemName_tel`,`rtiMemDesgn_en`,`rtiMemDesgn_tel`,`rtiMemPos_en`,`rtiMemPos_tel`,`rtiMemPhno`) VALUES (?)";
  const values = [   
    req.body.id,  
    req.body.rtiMemName_en,   
    req.body.rtiMemName_tel,   
    req.body.rtiMemDesgn_en,   
    req.body.rtiMemDesgn_tel,   
    req.body.rtiMemPos_en,   
    req.body.rtiMemPos_tel,   
    req.body.rtiMemPhno,
  ];  
  // console.log(values)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(name+" Data updation succesful");
  });
});

router.delete("/members/:id", (req, res) => {

  const query = "DELETE FROM `rtimembersdata` WHERE `id`=?";
  // console.log("Deletion id", req.params.id);
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(" RTI Member Data Deletion succesful !");
  });
});

export default router;