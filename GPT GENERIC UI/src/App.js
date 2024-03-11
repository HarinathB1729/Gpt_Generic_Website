import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./GlobalProvider";
import AdminColBasicDetails from "./admin/AdminHome/AdminColBasicDetails";
import AdminInstructions from "./admin/AdminInstructions";
import AdminDepartments from "./admin/AdminAcademics/AdminDepartments/AdminDepartments";
import AdminAdminStructure from "./admin/AdminHome/AdminAdminStructure/AdminAdminStructure";
import AdminHostels from "./admin/AdminStudentCorner/AdminHostels";
import AdminRouter from "./admin/AdminRouter";
import AdminAICTE from "./admin/AdminAdmininstration/AdminAICTE";
import AdminPlacements from "./admin/AdminAcademics/AdminPlacements/AdminPlacements";
import AdminAcademics from "./admin/AdminAcademics/AdminAcademics/AdminAcademics";
import AdminEvents from "./admin/AdminMedia/AdminEvents";
import AdminNotifications from "./admin/AdminMedia/AdminNotifications";
import AdminNewsHub from "./admin/AdminMedia/AdminNewsHub";
import AdminIPSGM from "./admin/AdminOthers/AdminIPSGM";
import AdminLibrary from "./admin/AdminOthers/AdminLibrary";
import AdminCommittees from "./admin/AdminCommittees/AdminCommittees";
import AdminRTI from "./admin/AdminAdmininstration/AdminRTI";
import AdminResources from "./admin/AdminStudentCorner/AdminResources";
import AdminWhyPolytechnic from "./admin/AdminOthers/AdminWhyPolytechnic";
import AdminRegistration from "./admin/AdminRegistration";
import AdminSDC from "./admin/AdminOthers/AdminSDC";
import AdminFaq from "./admin/AdminOthers/AdminFaq";
import AdminCtePrincipal from "./admin/AdminHome/AdminCtePrincipal";
import AdminHomePage from "./admin/AdminHomePage";
import AdminLogin from "./admin/AdminLogin";
import AdminAptes from "./admin/AdminAcademics/AdminAptes/AdminAptes";
import AdminChangePassword from "./admin/AdminHeader/AdminChangePassword";
import AdminLogout from "./admin/AdminHeader/AdminLogut";
import Testing from "./admin/AdminOthers/Testing";
import ClientRouter from "./client/ClientRouter";
import Body from "./client/Body/Body";
import Message from "./client/Body/Home/Message";
import Library from "./client/Body/Others/Library";
import IPSGM from "./client/Body/Home/IPSGM";
import SDC from "./client/Body/Home/SDC";
import Academic_Details from "./client/Body/Academics/Academic_Details";
import Placements from "./client/Body/Departments/Placements";
import PolytechFest from "./client/Body/Home/PolytechFest";
import Why_Polytechnic from "./client/Body/Academics/Why_Polytechnic";
import Admission from "./client/Body/Academics/Admission";
import Department from "./client/Body/Departments/Department";
import OrganizationStructure from "./client/Body/Administration/OrganizationStructure";
import Committees from "./client/Body/Committees/Committees";
import RTI from "./client/Body/Committees/RTI";
import Hostels from "./client/Body/Student_Corner/Hostels";
import Resoures from "./client/Body/Student_Corner/Resources";
import Events from "./client/Body/Media/Events";
import NewsHub from "./client/Body/Media/NewsHub";
import Notification from "./client/Body/Media/Notification";
import AICTE from "./client/Body/Others/AICTE";
import NBA from "./client/Body/Others/NBA";
import Alumni from "./client/Body/Student_Corner/Alumni";
import Contactus from "./client/Body/Others/Contactus";
import Faqs from "./client/Body/Others/Faqs";
import DeveloperTeam from "./client/Body/DeveloperTeam";
import AdminCommitteeProvider from "./GlobalProviders/AdminCommitteeProvider";
import AdminAdminOffice from "./admin/AdminAdmininstration/AdministativeOffice/AdminAdminOffice";
import { AdministrativeOffice } from "./client/Body/Administration/AdministrativeOffice";
import ScrollToTop from "./Utilities/ScrollToTop";
import AdminAlumni from "./admin/AdminStudentCorner/AdminAlumni";
import PageNotFound from "./client/PageNotFound";
import AdminCollegeDetails from "./admin/AdminHome/AdminCollegeDetails";


class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<ClientRouter />}>
              <Route path="/" element={<Body />} />
              <Route path="/message" element={<Message />} />
              <Route path="/Library" element={<Library />} />
              <Route path="/IPSGM" element={<IPSGM />} />
              <Route path="/PolytechFest" element={<PolytechFest />} />
              <Route path="/sdc" element={<SDC />} />
              <Route path="/whypolytechnic" element={<Why_Polytechnic />} />
              <Route path="/Academicdetails" element={<Academic_Details />} />
              <Route path="/Admissions" element={<Admission />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/department/:deptCode" element={<Department />} />
              <Route
                path="/organizationstructure"
                element={<OrganizationStructure />}               
              />
              <Route
                path="/administrativeoffice"
                element={<AdministrativeOffice />}
              />
              <Route path="/Committees/:comId" element={<Committees />} />
              <Route path="/rti" element={<RTI />} />
              <Route path="/Hostels/:hostelId" element={<Hostels />} />
              <Route path="/Resources" element={<Resoures />} />
              <Route path="/Events" element={<Events />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/newshub" element={<NewsHub />} />
              <Route path="/notifications" element={<Notification />} />
              <Route path="/AICTE" element={<AICTE />} />
              <Route path="/NBA" element={<NBA />} />
              <Route path="/Alumni" element={<Alumni />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/developers" element={<DeveloperTeam />} />
            </Route>
           
            <Route exact path="/auth" element={<AdminHomePage />}>           
              <Route path="/auth/" element={<AdminRegistration />} />
              <Route path="/auth/login" element={<AdminLogin />} />
            </Route>
            <Route exact path="/admin" element={<AdminRouter/>}>
              <Route path="/admin/" element={<AdminInstructions />} />
              <Route
                path="/admin/cteprincipal"
                element={<AdminCtePrincipal />}
              />
              <Route
                path="/admin/basicdetails"
                element={<AdminCollegeDetails />}
                // element={<AdminColBasicDetails />}
              />
              <Route path="/admin/departments" element={<AdminDepartments />} />
              <Route
                path="/admin/administrativestructure"
                element={<AdminAdminStructure />}
              />
              <Route
                path="/admin/administrativeoffice"
                element={<AdminAdminOffice />}
              />
              <Route
                path="/admin/changepassword"
                element={<AdminChangePassword />}
              />
              <Route path="/admin/logout" element={<AdminLogout />} />
              <Route path="/admin/events" element={<AdminEvents />} />
              <Route path="/admin/aptes" element={<AdminAptes />} />
              <Route path="/admin/newshub" element={<AdminNewsHub />} />
              <Route path="/admin/hostels" element={<AdminHostels />} />
              <Route path="/admin/academics" element={<AdminAcademics />} />
              <Route path="/admin/placements" element={<AdminPlacements />} />
              <Route path="/admin/aicte" element={<AdminAICTE />} />
              <Route
                path="/admin/committees"
                element={
                  <AdminCommitteeProvider>
                    <AdminCommittees />
                  </AdminCommitteeProvider>
                }
              />
              <Route path="/admin/righttoinformation" element={<AdminRTI />} />
              <Route
                path="/admin/skilldevelopementcenter"
                element={<AdminSDC />}
              />
              <Route path="/admin/resources" element={<AdminResources />} />
              <Route path="/admin/library" element={<AdminLibrary />} />
              <Route path="/admin/ipsgm" element={<AdminIPSGM />} />
              <Route
                path="/admin/whypolytechnic"
                element={<AdminWhyPolytechnic />}
              />
              <Route path="/admin/faqs" element={<AdminFaq />} />
              <Route path="/admin/alumni" element={<AdminAlumni />} />
              <Route
                path="/admin/notifications"
                element={<AdminNotifications />}
              />
            </Route>
            <Route path="/pagenotfound" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    );
  }
}

export default App;
