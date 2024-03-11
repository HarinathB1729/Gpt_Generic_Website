import  express  from "express";
import {db} from "./db.js"

const router = express.Router();


router.post("/", (req, res) => {
  const query =
    "REPLACE INTO `users`(`email`,`username`,`password`) VALUES (?)";
  const values = [
    req.body.email,
    req.body.username,   
    req.body.password,   
  ];  
  // console.log(values)
  
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Registration succesful");
  });
});


export default router;