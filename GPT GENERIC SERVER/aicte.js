import express from "express";
import { db } from "./db.js";
import multer from "multer";

const router = express.Router();


//FOR DATABASE
router.get("/", (req, res) => {
  const query = "SELECT * FROM `aictedata` ORDER BY eoaAcaYear desc";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/", (req, res) => {
  //EOA FILE NOT INCLUDED IN BOTH QUERY AND VALUES
  // console.log(req.body.eoaAcaYear);
  const query = "REPLACE INTO `aictedata`(`eoaAcaYear`) VALUES (?)";
  const values = [req.body.eoaAcaYear];

  // console.log("values:",values)
  // console.log("query:",query)

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("EOA Data Submitted Succesfully in DB");
  });
});



router.delete("/:id", (req, res) => {
  const delId = req.params.id;
  // console.log("delid",delId)
  const query = "DELETE FROM `aictedata` WHERE `eoaAcaYear`= ?";

  db.query(query, [delId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Succesfully Deleted " + delId + " EOA data");
  });
});

// setup multer for file upload

// function fileUpload(req, res, next) {
//   // console.log("id", req.params.id);

//   const dest = multer({
//     storage: multer.diskStorage({
//       destination: "./uploads/AICTE/",

//       filename: function (req, file, cb) {
//         // console.log("fname", file.fieldname);
//         cb(null, req.params.id+" EOA Report.pdf");
//       },
//     }),
//   });

//   dest.single("aicte")(req, res, next);
//   next();
// }

// // route for file upload
// router.post("/:id", fileUpload, (req, res, next) => { 
//   // console.log(req.params.id)
//   res.json(req.params.id+" EOA file uploaded successfully !!");
  
// });

router.post("/:id", (req, res, next) => {
  const customDestination = "./uploads/AICTE/";
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, req.params.id+" EOA Report.pdf"); // You can modify the filename if needed
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("aicte");

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`${req.params.id} EOA file uploaded successfully!!`);
  });
});

router.get("/:id", (req, res) => {
  // using Java Script method to get PDF file
  // console.log("request received ",req.params.id)
  res.download("./uploads/aicte/"+req.params.id+" EOA Report.pdf");
});




export default router;
