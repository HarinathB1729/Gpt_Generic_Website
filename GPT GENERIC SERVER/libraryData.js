import  express  from "express";
import {db} from "./db.js"
import multer from "multer";

const router = express.Router();

// setup multer for file upload

const uplLibBooks = multer({
  storage: multer.diskStorage({
    destination: "./uploads/library",
    filename: function (req, file, cb) {     
      cb(null, 'libraryBooks.pdf');
    },
  }),
});

// route for file upload
router.post("/books", uplLibBooks.single("librarybooks"), (req, res, next) => {

  res.json(req.file.originalname + " file successfully uploaded !!");
  // res.sendStatus(200);
 
});


router.get("/books", (req, res) => {
  // using Java Script method to get PDF file
  
  return res.download("./uploads/library/libraryBooks.pdf");
});



router.get("/", (req, res) => {
  const query = "SELECT * FROM `librarydata`";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/", (req, res) => {  
  //LIBRARIAN PHOTO, BOOKS NOT INCLUEDE IN BOTH QUERY, VALUES
  const query =
    "REPLACE INTO `librarydata`(`id`,`libraryIntro_en`,`libraryIntro_tel`,`librarianMsg_en`,`librarianMsg_tel`,`libraryPhno`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.libraryIntro_en,
    req.body.libraryIntro_tel,   
    req.body.librarianMsg_en,
    req.body.librarianMsg_tel,   
    req.body.libraryPhno    
  ];  
  // console.log(values)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Library data updation succesful");
  });
});

export default router;