import express from "express";
import { db } from "./db.js";

const router = express.Router();

router.get("/office", (req, res) => {
  const query = "SELECT * FROM officestructure";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/depts/table", (req, res) => {
  // router.delete("/")
  const query = "SELECT deptId,deptCode FROM  `deptsstructure` ORDER BY deptCode ASC";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/depts", (req, res) => {
  // router.delete("/")
  const query = "SELECT * FROM  `deptsstructure` ORDER BY deptCode ASC";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/aptes", (req, res) => {
  const query = "SELECT * FROM aptesstructure";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/bhostel", (req, res) => {
  const query = "SELECT * FROM bhostelstructure";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.get("/ghostel", (req, res) => {
  const query = "SELECT * FROM ghostelstructure";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

router.post("/depts", (req, res) => {
  let deptCode = req.body.deptCode;

  const query =
    "REPLACE INTO `deptsstructure` (`deptId`,`deptCode`,`deptHOD`,`deptSrLect`,`deptLects`,`deptInstrs`,`deptContLectrs`) VALUES (?) ";

  const values = [
    req.body.deptId,
    req.body.deptCode,
    req.body.deptHOD,
    req.body.deptSrLect,
    req.body.deptLects,
    req.body.deptInstrs,
    req.body.deptContLectrs,
  ];

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(deptCode + " structure updation succesful");
  });
});


router.post("/aptes", (req, res) => {
  const query =
    "REPLACE INTO `aptesstructure`(`id`,`librarian`,`physicalDirector`) VALUES (?)";
  const values = [req.body.id, req.body.librarian, req.body.physicalDirector];
  // console.log(values)

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(
      "Librarian, Physical Director structure updation succesful"
    );
  });
});

router.post("/office", (req, res) => {
  const query =
    "REPLACE INTO `officestructure`(`id`,`admOfficer`,`offSupdnt`,`srAsst`,`jrAssts`,`contrStaff`,`offSubs`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.admOfficer,
    req.body.offSupdnt,
    req.body.srAsst,
    req.body.jrAssts,
    req.body.contrStaff,
    req.body.offSubs,
  ];
  // console.log(values)

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Office structure updation succesful");
  });
});

router.post("/bhostel", (req, res) => {
  const query =
    "REPLACE INTO `bhostelstructure`(`id`,`bHostelSup`,`bHostelMgr`,`bHostelSrAsst`,`bHostelJrAssts`,`bHostelSubs`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.bHostelSup,
    req.body.bHostelMgr,
    req.body.bHostelSrAsst,
    req.body.bHostelJrAssts,
    req.body.bHostelSubs,
  ];
  console.log(values)

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Boys Hostel structure updation succesful");
  });
});

router.post("/ghostel", (req, res) => {
  const query =
    "REPLACE INTO `ghostelstructure`(`id`,`gHostelSup`,`gHostelMgr`,`gHostelSrAsst`,`gHostelJrAssts`,`gHostelSubs`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.gHostelSup,
    req.body.gHostelMgr,
    req.body.gHostelSrAsst,
    req.body.gHostelJrAssts,
    req.body.gHostelSubs,
  ];
  console.log(values)

  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Girls Hostel structure updation succesful");
  });
});

router.delete("/dept/:id", (req, res) => {
 
  const query = "DELETE FROM `deptsstructure` WHERE `deptId`=?";
  // console.log("Deletion id", req.params.id);
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(" Department Structure Deletion succesful !");
  });
});


export default router;
