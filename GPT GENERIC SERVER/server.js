import express from "express";
import cors from "cors";
const port = process.env.PORT || 8800;

import sdcRoutes from "./sdc.js";
import RegistrationRoutes from "./Registration.js";
import adminStrRoutes from "./AdminStructure.js";
import basicDetailsRoutes from "./colbasicdetails.js";
import contactsRoutes from "./contacts.js";
import cteDataRoutes from "./cteData.js";
import principalDataRoutes from "./principalData.js";
import eventsDataRoutes from "./eventsData.js";
import newsDataRoutes from "./newsData.js";
import notificationsRoutes from "./notifications.js";
import polycetCoordinator from "./polycetcoordinator.js";
import libraryData from "./libraryData.js";
import hostelRoutes from "./hostels.js";
import aicteRoutes from "./aicte.js";
import academicsRoutes from "./academics.js";
import facultyDataRoutes from "./facultydata.js";
import adminStaffRoutes from "./adminOfficeStaff.js";
import labsDataRoutes from "./labsdata.js";
import ipsgmRoutes from "./ipsgmdata.js";
import rtiDataRoutes from "./rtidata.js";
import committeesRoutes from "./committees.js";
import test from "./test.js";
import faqRoutes from "./faqdata.js";
import placementsRoutes from "./placements.js";
import polytechfestRoutes from "./polytechfest.js";
import departmentRoutes from "./departments.js";
import stuStrRoutes from "./studentstrength.js";
import testingRoutes from "./Testing.js";
import authenticationRoutes from "./authentication.js";
import resourcesRoutes from "./resources.js";
import alumniRoutes from "./alumnicoordinator.js";

const app = express();

app.use(express.json());
app.use(cors());

// serving front end build files
app.use(express.static("./files/"));

app.use("/api/auth", authenticationRoutes);
app.use("/api/sdc", sdcRoutes);
app.use("/api/register", RegistrationRoutes);
app.use("/api/adminstr", adminStrRoutes);
app.use("/api/basicdetails", basicDetailsRoutes);
app.use("/api/contacts", contactsRoutes);
app.use("/api/ctedata", cteDataRoutes);
app.use("/api/principaldata", principalDataRoutes);
app.use("/api/events", eventsDataRoutes);
app.use("/api/news", newsDataRoutes);
app.use("/api/notifications", notificationsRoutes);
app.use("/api/polycetcoordinator", polycetCoordinator);
app.use("/api/library", libraryData);
app.use("/api/hostels", hostelRoutes);
app.use("/api/aicte", aicteRoutes);
app.use("/api/academics", academicsRoutes);
app.use("/api/facultydata", facultyDataRoutes);
app.use("/api/adminstaff", adminStaffRoutes);
app.use("/api/labsdata", labsDataRoutes);
app.use("/api/ipsgm", ipsgmRoutes);
app.use("/api/rtidata", rtiDataRoutes);
app.use("/api/committees", committeesRoutes);
app.use("/api/test", test);
app.use("/api/faqs", faqRoutes);
app.use("/api/placements", placementsRoutes);
app.use("/api/dept", departmentRoutes);
app.use("/api/polytechfest", polytechfestRoutes);
app.use("/api/stustr", stuStrRoutes);
app.use("/api/testing", testingRoutes);
app.use("/api/resources", resourcesRoutes);
app.use("/api/alumni", alumniRoutes);

app.get("/", (req, res) => {
  res.json("message from server");
});

app.listen(port, () => {
  console.log("connected to server. running at port no.", port);
});
