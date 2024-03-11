import  express  from "express";
import {db} from "./db.js"
import multer from "multer";

const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT * FROM `ctedata`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/", (req, res) => {
  //ctePhoto, princPhoto not included both in query and values
  const query =
    "REPLACE INTO `ctedata`(`id`,`cteName_en`,`cteName_tel`,`cteDesig_en`,`cteDesig_tel`,`cteMsg_en`,`cteMsg_tel`,`cteImgUrl`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.cteName_en,
    req.body.cteName_tel,   
    req.body.cteDesig_en,  
    req.body.cteDesig_tel,
    req.body.cteMsg_en,   
    req.body.cteMsg_tel,      
    req.body.cteImgUrl,   
  ];  
  // console.log(values)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("CTE DATA updation succesful");
  });
});


//CTE PHOTO UPLOADING
router.post("/img", (req, res, next) => {	//post_id
  const customDestination = "./uploads/cte/";	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, 'cte.jpeg'); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("cte");	//fileparameter

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`CTE/Director Photo uploaded successfully!!`);	//params_id
  });
});

router.get("/img", (req, res) => {
  // using Java Script method to get PDF file  
  // console.log("id",req.params.id)
  return res.download("./uploads/cte/cte.jpeg");
});


export default router;