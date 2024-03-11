import  express  from "express";
import {db} from "./db.js"
import multer from "multer";

const router = express.Router();

router.get("/dept/:id/hod", (req, res) => {
  const deptCode = req.params.id;
  const query = "SELECT * FROM facultydata WHERE `deptCode`=? AND facDesgn_en='Head of Department'";

  db.query(query,[deptCode], (err, data) => {
    if (err) return res.json(err);
    // console.log("data",data)
    return res.json(data);
  });
});

router.get("/dept/table/:id", (req, res) => {
  const deptCode = req.params.id;
  const query = "SELECT id,deptCode,facName_en,facDesgn_en FROM facultydata WHERE `deptCode`=? \
  ORDER BY CASE facDesgn_en \
  WHEN 'Head of Department' THEN 1\
  WHEN 'Senior Lecturer' THEN 2 \
  WHEN 'Lecturer' THEN 3\
  WHEN 'Librarian' THEN 4 \
  WHEN 'Physical Director' THEN 5\
  WHEN 'Instructor' THEN 6 \
  WHEN 'Contract Lecturer' THEN 7\
  ELSE 8\
  END ASC, facExp DESC,facName_en asc";

  db.query(query,[deptCode], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/dept/:id", (req, res) => {
  const deptCode = req.params.id;
  const query = "SELECT * FROM facultydata WHERE `deptCode`=? \
  ORDER BY CASE facDesgn_en \
  WHEN 'Head of Department' THEN 1\
  WHEN 'Senior Lecturer' THEN 2 \
  WHEN 'Lecturer' THEN 3\
  WHEN 'Librarian' THEN 4 \
  WHEN 'Physical Director' THEN 5\
  WHEN 'Instructor' THEN 6 \
  WHEN 'Contract Lecturer' THEN 7\
  ELSE 8\
  END ASC, facExp DESC,facName_en asc";

  db.query(query,[deptCode], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/", (req, res) => {
  const query = "SELECT * FROM facultydata ";

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/", (req, res) => {

  let  facName_en =  req.body.facName_en;
  //`facDept_en`,`facDept_tel` not added , id removed
  const query =
    "REPLACE INTO `facultydata`(`id`,`deptCode`, `facName_en`,`facName_tel`,`facDesgn_en`,`facDesgn_tel`,`facQual_en`,`facQual_tel`,`facExp`,`facImgUrl`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.deptCode, 
    req.body.facName_en,   
    req.body.facName_tel, 
    req.body.facDesgn_en,   
    req.body.facDesgn_tel, 
    req.body.facQual_en,   
    req.body.facQual_tel, 
    req.body.facExp,
    req.body.facImgUrl,
  ];  
  // console.log(values, query)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(facName_en+ " Data Updation succesful");
  });
});

router.get("/librarian", (req, res) => {
  // console.log("librarian")
  const query = "SELECT * FROM facultydata WHERE facDesgn_en = 'librarian'";

  db.query(query, (err, data) => {
    if (err) return  res.json(err);
    return  res.json(data);
  });
});


router.get("/physicaldirector", (req, res) => {
  const query = "SELECT * FROM facultydata WHERE facDesgn_en = 'Physical Director'";
  // console.log("id",req.params.id)

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//FACULTY PHOTO UPLOADING
router.post("/img/:id1/:id2/:id3", (req, res, next) => {	//post_id
  const customDestination = "./uploads/departments/"+req.params.id1+"/"+req.params.id2;	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, req.params.id3+'photo.jpeg'); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("faculty");	//fileparameter

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

router.delete("/:id", (req, res) => {
  const query = "DELETE FROM `facultydata` WHERE `id`=?";
  // console.log("Deletion id", req.params.id);
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(" Faculty Data Deletion succesful !");
  });
});

router.delete("/dept/:id", (req, res) => {
 
  const query = "DELETE FROM `facultydata` WHERE `deptCode`=?";
  // console.log("Deletion id", req.params.id);
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(" Department Faculty Data Deletion succesful !");
  });
});

export default router;