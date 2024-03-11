import  express  from "express";
import {db} from "./db.js"
import multer from "multer";

const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT * FROM adminofficestaffdata \
  ORDER BY CASE staffDesgn_en \
  WHEN 'Administrative Officer' THEN 1\
  WHEN 'Office Superintendent' THEN 2 \
  WHEN 'Senior Assistant' THEN 3\
  WHEN 'Junior Assistant' THEN 4 \
  WHEN 'Contract Staff' THEN 5\
  WHEN 'Office Subordinates' THEN 6\
  END ASC, staffExp DESC";

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


router.post("/", (req, res) => {

  let  staffName_en =  req.body.staffName_en;

  const query =
    "REPLACE INTO `adminofficestaffdata`(`id`, `staffName_en`,`staffName_tel`,`staffDesgn_en`,`staffDesgn_tel`,`staffQual_en`,`staffQual_tel`,`staffExp`,`staffImgUrl`) VALUES (?)";
  const values = [
    req.body.id,   
    req.body.staffName_en,   
    req.body.staffName_tel, 
    req.body.staffDesgn_en,   
    req.body.staffDesgn_tel, 
    req.body.staffQual_en,   
    req.body.staffQual_tel, 
    req.body.staffExp,
    req.body.staffImgUrl,
  ];  
  // console.log(values, query)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(staffName_en+ " Data Updation succesful");
  });
});

router.post("/img/:id", (req, res, next) => {
  const customDestination = "./uploads/departments/administrativeoffice/";
  const file_name = req.params.id;
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, file_name+' photo.jpeg'); // You can modify the filename if needed
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("staff");

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`Staff Photo uploaded successfully!!`);
  });
});


router.get("/img/:id", (req, res) => {
  // using Java Script method to get PDF file  
   return res.download("./uploads/departments/administrativeoffice/"+req.params.id+" photo.jpeg");
});

router.delete("/:id", (req, res) => {
  const query = "DELETE FROM adminofficestaffdata WHERE `id`=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Staff Data Deleted Succesfully !!");
  });
});



export default router;