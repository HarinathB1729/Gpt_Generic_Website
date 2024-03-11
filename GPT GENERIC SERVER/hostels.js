import  express  from "express";
import {db} from "./db.js"
import multer from "multer";

const router = express.Router();

router.get("/ghostel", (req, res) => {
  const query = "SELECT * FROM `ghostel`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/ghostel", (req, res) => {  
  //GHOSTEL PHOTO NOT INCLUDED IN BOTH QUERY AND VALUES
  const query =
    "REPLACE INTO `ghostel`(`id`,`HostelName_en`,`HostelName_tel`,`HostelIntro_en`,`HostelIntro_tel`,`HostelAddr_en`,`HostelAddr_tel`,`HostelSup_en`,`HostelSup_tel`,`HostelExFacilities_en`,`HostelExFacilities_tel`,`HostelPhno`,`HostelPhotoUrl`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.HostelName_en,
    req.body.HostelName_tel,
    req.body.HostelIntro_en,
    req.body.HostelIntro_tel,     
    req.body.HostelAddr_en,  
    req.body.HostelAddr_tel,    
    req.body.HostelSup_en,
    req.body.HostelSup_tel,   
    req.body.HostelExFacilities_en,  
    req.body.HostelExFacilities_tel,
    req.body.HostelPhno,
    req.body.HostelPhotoUrl
  ];  
  // console.log("ghostel values:",values)
  // console.log("query:",query)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Girls Hostel data updation succesful");
  });
});


router.get("/bhostel", (req, res) => {
  const query = "SELECT * FROM `bhostel`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/bhostel", (req, res) => {  
  //GHOSTEL PHOTO NOT INCLUDED IN BOTH QUERY AND VALUES
  const query =
    "REPLACE INTO `bhostel`(`id`,`HostelName_en`,`HostelName_tel`,`HostelIntro_en`,`HostelIntro_tel`,`HostelAddr_en`,`HostelAddr_tel`,`HostelSup_en`,`HostelSup_tel`,`HostelExFacilities_en`,`HostelExFacilities_tel`,`HostelPhno`,`HostelPhotoUrl`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.HostelName_en,
    req.body.HostelName_tel,
    req.body.HostelIntro_en,
    req.body.HostelIntro_tel,     
    req.body.HostelAddr_en,  
    req.body.HostelAddr_tel,    
    req.body.HostelSup_en,
    req.body.HostelSup_tel,   
    req.body.HostelExFacilities_en,  
    req.body.HostelExFacilities_tel,
    req.body.HostelPhno,
    req.body.HostelPhotoUrl   
  ];  
  console.log("bhostel values:",values)
  // console.log("query:",query)

  db.query(query, [values], (err, data) => {
    if (err) return console.log(err);
    return res.json("Boys Hostel data updation succesful");
  });
});


//BOYS HOSTELS PHOTO UPLOADING
router.post("/img/bhostel", (req, res, next) => {	//post_id
  const customDestination = "./uploads/hostels/bhostel/";	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, 'bhostel.jpeg'); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("bhostel");	//fileparameter

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`Boys Hostel Photo uploaded successfully!!`);	//params_id
  });
});

//HOSTELS PHOTO GETTING
router.get("/img/bhostel", (req, res) => {
  // using Java Script method to get PDF file
  res.download("./uploads/hostels/bhostel/bhostel.jpeg");
});


//GIRLS HOSTELS PHOTO UPLOADING

router.post("/img/ghostel", (req, res, next) => {	//post_id
  const customDestination = "./uploads/hostels/ghostel/";	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, 'ghostel.jpeg'); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("ghostel");	//fileparameter

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`Girls Hostel Photo uploaded successfully!!`);	//params_id
  });
});
//HOSTELS PHOTO GETTING
router.get("/img/ghostel", (req, res) => {
  // using Java Script method to get PDF file
  res.download("./uploads/hostels/ghostel/ghostel.jpeg");
});


export default router;