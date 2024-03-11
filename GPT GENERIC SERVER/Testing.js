import express from "express";
import { db } from "./db.js";
import multer from "multer";

const router = express.Router();

//FILE POSTING DIFFERENT DESTINATIONS

function fileUpload(req, res, next) {
  const dest = multer({ storage: multer.diskStorage({
   destination : "./uploads/file/"+req.params.id,
   filename: function (req, file, cb) {      
           cb(null, 'file.pdf');
         }
       }),
     });
 
 dest.single("file")(req,res,next);  
 next();
}


// route for file upload
// let eventUpl;
router.post("/file/:id", fileUpload, (req, res,next) => {    
   res.send("file received");   
});


// FILE POSTING SINGLE DESTINATION-SINGLE FILE

const uplAyCal = multer({
  storage: multer.diskStorage({
    destination: "./uploads/files",
    filename: function (req, file, cb) {
      cb(null, "file.pdf");
    },
  }),
});

// route for file upload
router.post("/file", uplAyCal.single("file"), (req, res, next) => {
  // console.log("File Handler")
  res.json(req.file.originalname + " file successfully uploaded !!");
  // res.sendStatus(200);
});

router.get("/file/", (req, res) => {
  // using Java Script method to get PDF file
  let id= req.params.id;
  res.download("./uploads/files/file.pdf");
});



//IMAGE POSTING DIFFERENT DESTINATIONS

function imageUpload(req, res, next) {
  // console.log("id",req.params.id)

  const dest = multer({ storage: multer.diskStorage({
   destination : "./uploads/Department/"+req.params.id,
   filename: function (req, file, cb) {      
           cb(null, 'image.jpeg');
         }
       }),
     });
 
 dest.single("image")(req,res,next);  
 next();
}


// route for file upload

router.post("/image/:id", imageUpload, (req, res,next) => {    
   res.send("file received");   
});

//download
router.get("/image/:id", (req, res) => {
  // using Java Script method to get PDF file
  let id= req.params.id;
  res.download("./uploads/Department/"+id+"/image.jpeg");
});




export default router;