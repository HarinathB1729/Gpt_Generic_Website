import  express  from "express";
import {db} from "./db.js"
import multer from "multer";

const router = express.Router();

router.get("/dept/:id", (req, res) => {
  const deptCode = req.params.id;
  const query = "SELECT * FROM labsdata WHERE `deptCode`=?";

  db.query(query,[deptCode], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.get("/", (req, res) => {
  const query = "SELECT * FROM labsdata";

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});




router.post("/", (req, res) => {

  let  labName_en =  req.body.labName_en;
  //`facDept_en`,`facDept_tel` not added
  const query =
    "REPLACE INTO `labsdata`(`id`,`deptCode`, `labName_en`,`labName_tel`,`labIntro_en`,`labIntro_tel`,`labImgUrl`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.deptCode,
    req.body.labName_en,   
    req.body.labName_tel, 
    req.body.labIntro_en,   
    req.body.labIntro_tel,  
    req.body.labImgUrl,  
  ];  

  // console.log(values, query)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(labName_en+ " Data Updation succesful");
  });
});


//LABS PHOTO UPLOADING
router.post("/img/:id1/:id2/:id3", (req, res, next) => {	//post_id
  const customDestination = "./uploads/departments/"+req.params.id1+"/"+req.params.id2;	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, req.params.id3+'photo.jpeg'); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("labs");	//fileparameter

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`${req.params.id3} Photo uploaded successfully!!`);	//params_id
  });
});

router.get("/img/:id1/:id2/:id3", (req, res) => {
  // using Java Script method to get PDF file  
   return res.download("./uploads/departments/"+req.params.id1+"/"+req.params.id2+"/"+req.params.id3+"photo.jpeg");
});

router.delete("/dept/:id", (req, res) => {
 
  const query = "DELETE FROM `labsdata` WHERE `deptCode`=?";
  // console.log("Deletion id", req.params.id);
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(" Department Labs Data Deletion succesful !");
  });
});


export default router;