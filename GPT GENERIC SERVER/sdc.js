import  express  from "express";
import {db} from "./db.js"
import multer from "multer";

const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT * FROM sdcdata";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/", (req, res) => {
 //SDC PHOTO,INCHARGE PHOTO NOT INCLUDED IN BOTH QUERY AND VALUES
  const query =
    "REPLACE INTO `sdcdata`(`id`,`sdcInchargeName_en`,`sdcInchargeName_tel`,`sdcInchargeDesgn_en`,`sdcInchargeDesgn_tel`,`sdcIntro_en`,`sdcIntro_tel`,`sdcPhotoUrl`,`sdcInchargePhotoUrl`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.sdcInchargeName_en,
    req.body.sdcInchargeName_tel,   
    req.body.sdcInchargeDesgn_en,
    req.body.sdcInchargeDesgn_tel,   
    req.body.sdcIntro_en,
    req.body.sdcIntro_tel,
    req.body.sdcPhotoUrl,
    req.body.sdcInchargePhotoUrl
  ];  

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("SDC Data updation is succesful");
  });
});


//SDC PHOTO UPLOADING
router.post("/:id", (req, res, next) => {	//post_id
  const customDestination = "./uploads/sdc/";	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, req.params.id+'.jpeg'); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("sdc");	//fileparameter

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`${req.params.id} Photo uploaded successfully!!`);	//params_id
  });
});


router.get("/:id", (req, res) => {
  // using Java Script method to get PDF file  
  // console.log("id",req.params.id)
  return res.download("./uploads/sdc/"+req.params.id+".jpeg");
});


export default router;