import  express  from "express";
import {db} from "./db.js"
import multer from "multer";

const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT * FROM `colbasicdetails`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    // console.log("data",data)
    return res.json(data);
  });
});

router.post("/", (req, res) => {
  //colLogo, govtLogo not included
  const query =
    "REPLACE INTO `colbasicdetails`(`id`,`colName_en`,`colName_tel`,`colLocation_en`,`colLocation_tel`,`polycetCode`,`colIntro_en`,`colIntro_tel`,`colVision_en`,`colVision_tel`,`colMission_en`,`colMission_tel`,`colLogoUrl`,`govtLogoUrl`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.colName_en,
    req.body.colName_tel,   
    req.body.colLocation_en,  
    req.body.colLocation_tel,
    req.body.polycetCode,
    req.body.colIntro_en,   
    req.body.colIntro_tel,   
    req.body.colVision_en,
    req.body.colVision_tel,   
    req.body.colMission_en, 
    req.body.colMission_tel,    
    req.body.colLogoUrl,    
    req.body.govtLogoUrl      
  ];  
  // console.log(values)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("College Basic details updation succesful");
  });
});


//COLLEGE LOGO UPLOADING

router.post("/img/:id", (req, res, next) => {
  const customDestination = "./uploads/homepage/";
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, req.params.id+'Photo.jpeg' ); 
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("logo");

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`${req.params.id} Photo uploaded successfully!!`);
  });
});

//HOSTELS PHOTO GETTING
router.get("/img/:id", (req, res) => {
  // using Java Script method to get PDF file
  res.download("./uploads/homepage/"+req.params.id+"Photo.jpeg");
});



export default router;