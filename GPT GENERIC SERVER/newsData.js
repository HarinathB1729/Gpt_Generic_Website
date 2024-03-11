import  express  from "express";
import {db} from "./db.js"
import multer from "multer";

const router = express.Router();

//GET TWO NEWSITEMS DATA FROM DATABASE
router.get("/tworows", (req, res) => {
  const query = "SELECT `id`,`newsItemDate`,`newsItemTitle_en`,`newsItemTitle_tel`,`newsItemDesc_en`,`newsItemDesc_tel`,`newsItemImgUrl` FROM `newsdata` ORDER BY `newsItemDate` DESC LIMIT 2";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//GET NEWSITEMS DATA FROM DATABASE
router.get("/", (req, res) => {
  const query = "SELECT `id`,`newsItemDate`,`newsItemTitle_en`,`newsItemTitle_tel`,`newsItemDesc_en`,`newsItemDesc_tel`,`newsItemImgUrl` FROM `newsdata` ORDER BY `newsItemDate` DESC";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//GET SPECIFIC NEWSITEM DATA FROM DATABASE
router.get("/:id", (req, res) => {
  const query = "SELECT `id`,`newsItemDate`,`newsItemTitle_en`,`newsItemTitle_tel`,`newsItemDesc_en`,`newsItemDesc_tel`,`newsItemImgUrl` FROM `newsdata` WHERE id=?";
  db.query(query,[req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});


//POST NEWSITEMS DATA TO DATABASE
router.post("/", (req, res) => {
  //newsitemphoto not included both in query, values
  let newsItemDate = req.body.newsItemDate;

  const query =
    "REPLACE INTO `newsdata`(`id`,`newsItemDate`,`newsItemTitle_en`,`newsItemTitle_tel`,`newsItemDesc_en`,`newsItemDesc_tel`,`newsItemImgUrl`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.newsItemDate,      
    req.body.newsItemTitle_en,
    req.body.newsItemTitle_tel,   
    req.body.newsItemDesc_en,  
    req.body.newsItemDesc_tel,
    req.body.newsItemImgUrl      
  ];  
  // console.log(values)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(newsItemDate+" Newsdata updation succesful");
  });
});

//DELETE NEWSITEM DATA FROM DATABASE
router.delete("/:id", (req, res) => {  
  const delId= req.params.id;
  // console.log("delid",delId)
  const query =
    "DELETE FROM `newsdata` WHERE `id`= ?";
    
  db.query(query, [delId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Succesfully Deleted News Item "+delId);
  });
});

//NEWSITEM PHOTO UPLOADING
router.post("/img/:id", (req, res, next) => {	//post_id
  const customDestination = "./uploads/NewsItems/"+req.params.id;	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, 'newsItem.jpeg'); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("newsImg");	//fileparameter

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`NewsItem Photo uploaded successfully!!`);	//params_id
  });
});

//NEWSITEM PHOTO GETTING
router.get("/img/:id", (req, res) => {
    res.download("./uploads/NewsItems/"+req.params.id+"/newsItem.jpeg");
});



export default router;