import  express  from "express";
import {db} from "./db.js"
import multer from "multer";

const router = express.Router();


router.get("/clienttable/:id1/:id2", (req, res) => {
  const query = "SELECT deptCode, year_en,  year_tel, subName_en,  subName_tel, subCode FROM resourcesdata WHERE deptCode=? AND year_en=? ORDER BY year_en";

  db.query(query, [req.params.id1, req.params.id2 ], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/table/:id1/:id2", (req, res) => {
  const query = "SELECT id, deptCode, year_en, subCode, subName_en FROM resourcesdata WHERE deptCode=? AND year_en=? ORDER BY year_en";

  db.query(query, [req.params.id1, req.params.id2 ], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.get("/dept/:id", (req, res) => {
  const deptCode = req.params.id;
  const query = "SELECT * FROM resourcesdata WHERE `deptCode`=?";

  db.query(query,[deptCode], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.get("/:id1/:id2", (req, res) => {
  // console.log("id1,id2",req.params.id1,req.params.id2)
  const query = "SELECT * FROM resourcesdata WHERE deptCode=? AND year_en=?";

  db.query(query,[req.params.id1, req.params.id2 ], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.get("/", (req, res) => {
  const query = "SELECT * FROM resourcesdata ";

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});



router.post("/", (req, res) => {

  let  subCode =  req.body.subCode;
  //`facDept_en`,`facDept_tel` not added
  const query =
    "REPLACE INTO `resourcesdata`(`id`, `deptCode`,`year_en`,`year_tel`,`subName_en`,`subName_tel`,`subCode`) VALUES (?)";
  const values = [
    req.body.id,  
    req.body.deptCode,   
    req.body.year_en,   
    req.body.year_tel, 
    req.body.subName_en,   
    req.body.subName_tel, 
    req.body.subCode,
  ];  
  // console.log(values, query)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(subCode+ " Data Updation succesful");
  });
});


//RESOURCES FILE UPLOADING
router.post("/file/:id1/:id2/:id3", (req, res, next) => {	//post_id
  const customDestination = "./uploads/resources/"+req.params.id1+"/"+req.params.id2;	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, req.params.id3+'file.pdf'); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("file");	//fileparameter

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`${req.params.id3} file uploaded successfully!!`);	//params_id
  });
});

router.get("/file/:id1/:id2/:id3", (req, res) => {

   return res.download("./uploads/resources/"+req.params.id1+"/"+req.params.id2+"/"+req.params.id3+"file.pdf");
});


router.delete("/:id", (req, res) => {

  const query =
    "DELETE FROM `resourcesdata` WHERE id=?";
  
  // console.log(values, query)
  
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Resource Deletion succesful");
  });
});

router.delete("/dept/:id", (req, res) => {
 
  const query = "DELETE FROM `deptsstructure` WHERE `deptCode`=?";
  // console.log("Deletion id", req.params.id);
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(" Department Resources Deletion succesful !");
  });
});


export default router;