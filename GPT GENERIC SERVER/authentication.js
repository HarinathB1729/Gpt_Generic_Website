import express from "express";
import { db } from "./db.js";

const router = express.Router();

router.get("/", (req, res) => {
  const query = "SELECT `username` FROM users ";

  db.query(query, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/check", (req, res) => {
  // console.log(req.body.username, req.body.password);
  const query = "SELECT `password` FROM users WHERE `username`=? ";

  db.query(query, [req.body.username], (err, data) => {
    if (err) return res.json(err);

    if (data.length == 0) return res.json("Invalid Username");
    else {
      if (data[0].password === req.body.password) {
        res.json("success");
      } else return res.json("Invalid Password");
    }
  });
});

router.post("/pwdupdation", (req, res) => {
  const query =
    "REPLACE INTO `users`(`username`,`password`) VALUES (?) ";
  const values = [    
    req.body.username,   
    req.body.password,      
  ];  
  // console.log(values,query)
  
  db.query(query, [values], (err, data) => {
    if (err) return console.log(err);
    return res.json("Password Updated Succesfully !!");
  });
});

export default router;
