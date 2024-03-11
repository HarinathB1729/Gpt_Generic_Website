import  express  from "express";
import {db} from "./db.js"
import multer from "multer";

const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT * FROM `principaldata`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/", (req, res) => {
  //ctePhoto, princPhoto not included both in query and values
  const query =
    "REPLACE INTO `principaldata`(`id`,`princName_en`,`princName_tel`,`princDesig_en`,`princDesig_tel`,`princQual_en`,`princQual_tel`,`princExp`,`princMsg_en`,`princMsg_tel`,`princImgUrl`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.princName_en,
    req.body.princName_tel,   
    req.body.princDesig_en,  
    req.body.princDesig_tel,
    req.body.princQual_en,   
    req.body.princQual_tel,  
    req.body.princExp,    
    req.body.princMsg_en,  
    req.body.princMsg_tel,   
    req.body.princImgUrl,   
  ];  
  // console.log(values)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("PRINCIPAL Data updation succesful");
  });
});

// function fileUpload(req, res, next) {
//   // console.log("id",req.params.id)

//   const dest = multer({ storage: multer.diskStorage({
//    destination : "./uploads/principal/",
//    filename: function (req, file, cb) {      
//            cb(null, 'principal.jpeg');
//          }
//        }),
//      });
 
//  dest.single("principal")(req,res,next);  
//  next();
// }

// // route for file upload
// router.post("/img", fileUpload, (req, res, next) => {
//   res.json("Principal photo uploaded successfully !!");
//   // res.sendStatus(200);
// });

router.post("/img", (req, res, next) => {	//post_id
  const customDestination = "./uploads/principal/";	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, 'principal.jpeg' ); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("principal");	//fileparameter

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`Principal photo uploaded successfully!!`);	//params_id
  });
});

router.get("/img", (req, res) => {
  // using Java Script method to get PDF file  
  // console.log("id",req.params.id)
  return res.download("./uploads/principal/principal.jpeg");
});


export default router;