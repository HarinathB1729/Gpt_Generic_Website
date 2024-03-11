import express from "express";
import { db } from "./db.js";
import multer from "multer";

const router = express.Router();

//GET EVENTS DATA FROM DATABASE
router.get("/", (req, res) => {
  const query = "SELECT `id`,`eventDate`,`eventName_en`,`eventName_tel`,`eventDesc_en`,`eventDesc_tel`,`eventImgUrl` FROM `eventsdata` ORDER BY `eventDate` DESC";
  db.query(query, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});

//GET EVENTS DATA FROM DATABASE
router.get("/tworows", (req, res) => {
  const query = "SELECT `id`,`eventDate`,`eventName_en`,`eventName_tel`,`eventDesc_en`,`eventDesc_tel`,`eventImgUrl` FROM `eventsdata` ORDER BY `eventDate` DESC LIMIT 2";
  db.query(query, (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});


//GET SPECIFIC EVENT DATA FROM DATABASE
router.get("/:id", (req, res) => {
  const query = "SELECT `id`,`eventDate`,`eventName_en`,`eventName_tel`,`eventDesc_en`,`eventDesc_tel`,`eventImgUrl` FROM `eventsdata` WHERE id=?";
  db.query(query,[req.params.id], (err, data) => {
    if (err) return res.json(err);

    return res.json(data);
  });
});


//POST EVENTS DATA TO DATABASE
router.post("/", (req, res) => {
  //eventphoto not included both in query, values
  let eventDate = req.body.eventDate;
  const query =
    "REPLACE INTO `eventsdata`(`id`,`eventDate`,`eventName_en`,`eventName_tel`,`eventDesc_en`,`eventDesc_tel`,`eventImgUrl`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.eventDate,
    req.body.eventName_en,
    req.body.eventName_tel,
    req.body.eventDesc_en,
    req.body.eventDesc_tel,  
    req.body.eventImgUrl,   
  ];
  // console.log(values);

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(eventDate+" Event data updation succesful");
  });
});


//DELETE EVENT DATA FROM DATABASE
router.delete("/:id", (req, res) => {
  const delId = req.params.id;
  // console.log("delid",delId)
  const query = "DELETE FROM `eventsdata` WHERE `id`= ?";

  db.query(query, [delId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Succesfully Deleted Event data");
  });
});

//EVENT PHOTO UPLOADING

router.post("/img/:id", (req, res, next) => {	//post_id
  const customDestination = "./uploads/Events/"+req.params.id;	//destination
  
  const storage = multer.diskStorage({
    destination: customDestination,
    filename: (req, file, cb) => {
      cb(null, 'eventPhoto.jpeg'); 	//filename
    }
  });

  const uploadWithCustomDestination = multer({ storage: storage }).single("eventImg");	//fileparameter

  uploadWithCustomDestination(req, res, function(err) {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }
    
    res.json(`Event Photo uploaded successfully!!`);	//params_id
  });
});

//EVENT PHOTO GETTING
router.get("/img/:id", (req, res) => {
  // using Java Script method to get PDF file
  res.download("./uploads/Events/"+req.params.id+"/eventPhoto.jpeg");
});


export default router;
