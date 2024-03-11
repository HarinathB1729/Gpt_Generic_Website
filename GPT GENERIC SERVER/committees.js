import  express  from "express";
import {db} from "./db.js"
import multer from "multer";

const router = express.Router();


router.get("/names", (req, res) => {
  const query = "SELECT comId,commName_en,commName_tel FROM committees ";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.get("/", (req, res) => {
  const query = "SELECT * FROM committees";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/committee/name/:id", (req, res) => {
  let commName = req.params.id;
  // console.log("commName",commName)

  const query = "SELECT * FROM committees WHERE `commName`=? ";
  db.query(query,[commName], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/committee/:id", (req, res) => {
  let comId = req.params.id;
  // console.log("comid",comId)

  const query = "SELECT * FROM committees WHERE `comId`=? ";
  db.query(query,[comId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/", (req, res) => {
  let commName_en = req.body.commName_en;

  const query =
    "REPLACE INTO `committees`(`comId`,`commName_en`,`commName_tel`,`commDescr_en`,`commDescr_tel`,`commImgUrl`) VALUES (?)";
  const values = [
    req.body.comId,
    req.body.commName_en,   
    req.body.commName_tel,   
    req.body.commDescr_en,   
    req.body.commDescr_tel,   
    req.body.commImgUrl,   
  ];  
  // console.log(values)
  
  db.query(query, [values], (err, data) => {
    if (err) return console.log(err);
    return res.json(commName_en +" Data updation succesful");
  });
});

router.get("/members/:id/noid", (req, res) => {
  let comId = req.params.id;
  const query = "SELECT `commMemName_en`,`commMemName_tel`,`commMemDesgn_en`,`commMemDesgn_tel`,`commMemRole_en`,`commMemRole_tel`,`commMemPhno` FROM `committeemembers` WHERE `comId` = ? ";
 
  db.query(query, [comId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/members/:id", (req, res) => {
  let comId = req.params.id;
  const query = "SELECT * FROM `committeemembers` WHERE `comId` = ?";

  db.query(query, [comId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


// router.get("/members/:id", (req, res) => {
//   let comId = req.params.id;
//   const query = "SELECT * FROM `committeemembers` WHERE `comId` = ? \
//   ORDER BY CASE commMemRole_en \
//   WHEN 'Chairman' THEN 1\
//   WHEN 'Vice Chairman' THEN 2 \
//   WHEN 'Member' THEN 3\
//   Else 4\
//   END ASC, commMemName_en asc";

//   db.query(query, [comId], (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });



router.post("/members", (req, res) => {
  //ID REMOVED TO GET DATA IN ORDER
  let memName =  req.body.commMemName_en;   
  const query =
    "REPLACE INTO `committeemembers`(`comId`,`id`,`commMemName_en`,`commMemName_tel`,`commMemDesgn_en`,`commMemDesgn_tel`,`commMemRole_en`,`commMemRole_tel`,`commMemPhno`) VALUES (?)";
  const values = [   
    req.body.comId,
    req.body.id,  
    req.body.commMemName_en,   
    req.body.commMemName_tel,   
    req.body.commMemDesgn_en,   
    req.body.commMemDesgn_tel,   
    req.body.commMemRole_en,   
    req.body.commMemRole_tel,   
    req.body.commMemPhno,
  ];  
  // console.log(query, values)
  
  db.query(query, [values], (err, data) => {
    if (err) return console.log(err);
    return res.json("Committee Member "+memName+" Data updation succesful");
  });
});


//COMMITTEE PHOTO UPLOADING
router.post("/img/:id", (req, res, next) => {	//post_id
  const customDestination = "./uploads/committees/"+req.params.id;	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, 'committeephoto.jpeg'); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("committee");	//fileparameter

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`Committee Photo uploaded successfully!!`);	//params_id
  });
});

router.get("/img/:id", (req, res) => {
  // using Java Script method to get PDF file  
  // console.log("id",req.params.id)
  return res.download("./uploads/committees/"+req.params.id+"/committeephoto.jpeg");
});

router.delete("/:id", (req, res) => {
  const delId = req.params.id;
  // console.log("delid",delId)
  const query = "DELETE FROM `committees` WHERE `comId`= ?";

  db.query(query, [delId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Succesfully Deleted Committee with Id:" + delId );
  });
});


export default router;