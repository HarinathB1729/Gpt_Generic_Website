import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../client.css";
import { House, List, Bell, SignIn } from "phosphor-react";
import facebook from "../img/FaceBook.png";
import instagram from "../img/Insta.png";
import Twitter from "../img/twitter.png";
import youtube from "../img/youtube.png";
import NavBar from "./NavBar";
import Badge from "@mui/material/Badge";
import govtLogo from "../img/govtlogo.png";
import { useGlobalProvider } from "../../GlobalProvider";
import {api,BASE_URL} from "../../api";
import TelEngObjBuilderMultiple from "../Utilities/TelEngObjBuilderMultiple";
import useFetchDbData from "../Utilities/useFetchDbData";
import useFetchMultipleDbData from "../Utilities/useFetchMultipleDbData";

function Header() {
  const [glbVals, setGlbVals] = useGlobalProvider();
  const lang = glbVals.telugu ? "tel" : "en";
  const basicDetails = useFetchDbData("basicdetails");
  const newNotifications = useFetchMultipleDbData("notifications/newNtfc");
  const [contacts,setContacts] = useState({});
  // console.log(" new ntfc", newNotifications);

  useEffect(() => {
    api
      .get("committees/names")
      .then((res) => {
        // console.log("res", res.data);
        if (res.data.length) {
          let commit = TelEngObjBuilderMultiple(res.data);
          // console.log("commit", commit);
          let nbi = { ...navBarItems };
          for (const [key, value] of Object.entries(commit)) {
            // console.log("commit value",value)
            nbi.en["Committees"].unshift([
              value.en.commName,
              "committees/" + value.en.comId,
            ]);
            nbi.tel["కమిటీలు"].unshift([
              value.tel.commName,
              "committees/" + value.tel.comId,
            ]);
          }
          // console.log("nbi", nbi);
          setNavBarItems(nbi);
        }
      })
      .catch((err) => console.log("Error :", err));

    //DEPARTEMENTS
    api
      .get("dept/namesdesc")
      .then((res) => {
        // console.log("res", res.data);
        if (res.data.length) {
          let dept = TelEngObjBuilderMultiple(res.data);
          // console.log("dept", dept);
          let nbi = { ...navBarItems };
          for (const [key, value] of Object.entries(dept)) {
            // console.log("dept value",value)
            nbi.en["Departments"].unshift([
              value.en.deptName,
              "department/" + value.en.deptCode,
            ]);
            nbi.tel["విభాగాలు"].unshift([
              value.tel.deptName,
              "department/" + value.tel.deptCode,
            ]);
          }
          // console.log("nbi", nbi);
          setNavBarItems(nbi);
        }
      })
      .catch((err) => console.log("Error :", err));

      //social media links
      api.get("/contacts")
      .then((res)=>{
        // console.log("contacts",res.data[0])
        setContacts(res.data[0])
      })
      .catch((err)=> console.log(err))
  }, []);

    // console.log("contacts", contacts);
  // console.log("committees", committees);

  useEffect(() => {
    let nbi = { ...navBarItems };
    // console.log("before nbi", nbi);
    const fetchPageData = async () => {
      await api
        .get("sdc")
        .then((res) => {
          // console.log("sdc res", res);
          if (res.data.length) {
            nbi.en["About Us"].push(["Skill Developement Centre", "/sdc"]);
            nbi.tel["మా గురించి"].push(["నైపుణ్యాభివృద్ధి కేంద్రం", "/sdc"]);
            // console.log("nbi", nbi);
            setNavBarItems(nbi);
          }
        })
        .catch((err) => console.log(err));
    };
    fetchPageData();
  }, []);

  useEffect(() => {
    let nbi = { ...navBarItems };
    // console.log("before nbi", nbi);
    const fetchHostelsData = async () => {
      await api
        .get("hostels/bhostel")
        .then((res) => {
          // console.log("sdc res", res);
          if (res.data.length) {
            nbi.en["Student Corner"].unshift([
              "Boys Hostel",
              "/Hostels/bhostel",
            ]);
            nbi.tel["విద్యార్థి కార్నర్"].unshift([
              "బాలుర హాస్టల్",
              "/Hostels/bhostel",
            ]);
            // setNavBarItems(nbi);
          }
        })
        .catch((err) => console.log(err));

      await api
        .get("hostels/ghostel")
        .then((res) => {
          // console.log("sdc res", res);
          if (res.data.length) {
            nbi.en["Student Corner"].unshift([
              "Girls Hostel",
              "/Hostels/ghostel",
            ]);
            nbi.tel["విద్యార్థి కార్నర్"].unshift([
              "బాలికల హాస్టల్",
              "/Hostels/ghostel",
            ]);

            // setNavBarItems(nbi);
          }
        })
        .catch((err) => console.log(err));

      setNavBarItems(nbi);
    };
    fetchHostelsData();
  }, []);

  const [navBarItems, setNavBarItems] = useState({
    en: {
      ["About Us"]: [
        ["Message", "/message"],
        ["IPSGM", "/ipsgm"],
        ["Polytech Fest", "/polytechfest"],
      ], //"SDC", "NBA"

      ["Academics"]: [
        ["Why Polytechnic?", "/whypolytechnic"],
        ["Admissions", "/admissions"],
        ["Academic Details", "/academicdetails"],
        ["Placements", "/placements"]
      ],

      ["Departments"]: [],

      ["Administration"]: [
        ["Administrative Office", "/administrativeoffice"],
        ["Organization Structure", "/organizationstructure"],
      ],

      ["Committees"]: [["Right to Information", "/rti"]], // ADDING COMMITTES

      ["Student Corner"]: [
        ["Resources", "/resources"],
        ["Alumni", "/alumni"],
      ], //HOSTELS

      ["Media"]: [
        ["Events", "/events"],
        ["News Hub", "/newshub"],
      ],

      ["Others"]: [
        ["AICTE", "/aicte"],
        ["Library", "/library"],
        ["Contact Us", "/contactus"],
        ["FAQS", "/faqs"],
      ],
    },

    tel: {
      ["మా గురించి"]: [
        ["సందేశం", "/message"],
        ["ఐ పి యస్ జి ఎం", "/ipsgm"],
        ["పాలీ టెక్ ఫెస్ట్", "/polytechfest"],
      ], //"SDC", "NBA"

      ["విద్యాసంబంధమైన"]: [
        ["పాలిటెక్నిక్ ఎందుకు ?", "/whypolytechnic"],
        ["ప్రవేశాలు", "/admissions"],
        ["అకడమిక్ వివరాలు", "/academicdetails"],
        ["నియామకాలు", "/placements"]
      ],

      ["విభాగాలు"]: [],

      ["పరిపాలన"]: [
        ["పరిపాలనా కార్యాలయం", "/administrativeoffice"],
        ["సంస్థ నిర్మాణం", "/organizationstructure"],
      ],

      ["కమిటీలు"]: [["సమాచార హక్కు", "/rti"]], // ADDING COMMITTES

      ["విద్యార్థి కార్నర్"]: [
        ["విద్యార్థి వనరులు", "/resources"],
        ["పూర్వ విద్యార్థులు", "/alumni"],
      ], //HOSTELS

      ["మీడియా"]: [
        ["సంఘటనలు", "/events"],
        ["వార్తాపత్రికల హబ్", "/newshub"],
      ],

      ["ఇతరులు"]: [
        ["ఏ ఐ సి టి ఈ ", "/aicte"],
        ["గ్రంధాలయం", "/library"],
        ["సంప్రదించండి", "/contactus"],
        ["తరచుగా అడుగు ప్రశ్నలు", "/faqs"],
      ],
    },
  });

  // console.log("window scroll", window.scroll);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive(!isActive);
  };

  // console.log("global values", glbVals);

  return (
    <div className={glbVals.scrollTop ? "sticky" : "header"}>
      <div className="social">
        <a
          target="_blank"
          href={contacts?.facebook}
        >
          <span className="socail-name">
            {glbVals.telugu ? "ఫేస్ బుక్ " : "Facebook"}
          </span>
          <img src={facebook} alt="facebook" />
        </a>
        <a target="_blank" href={contacts?.instagram}>
          <span className="socail-name">
            {glbVals.telugu ? "ఇంస్టాగ్రామ్  " : "Instagram"}
          </span>
          <img src={instagram} alt="instagram" />
        </a>
        <a target="_blank" href={contacts?.twitter}>
          <span className="socail-name">
            {glbVals.telugu ? "ట్విట్టర్  " : "Twitter"}
          </span>
          <img src={Twitter} alt="Twitter" />
        </a>
        <a
          target="_blank"
          href={contacts?.youtube}
        >
          <span className="socail-name">
            {glbVals.telugu ? "యూట్యూబ్  " : "Youtube"}
          </span>
          <img src={youtube} alt="Youtube" />
        </a>
      </div>
      <div className="centerBar">
        <div className="centerData">
          <div className="clgLogo">
            <img src={BASE_URL+basicDetails[lang]?.colLogoUrl} alt="CollegeLogo" />
          </div>
          <div className="clgName">
            <br />
            <h1>
              {basicDetails[lang]?.colName +
                ", " +
                basicDetails[lang]?.colLocation}
            </h1>
            {/* <h1>{basicDetails['en']?.colName +", "+ basicDetails['en']?.colLocation }</h1>
            <h1>{basicDetails['tel']?.colName +", "+ basicDetails['tel']?.colLocation }</h1> */}
            <h5>
              {glbVals.telugu
                ? "ఏ ఐ సి టి ఈ, ఢిల్లీ ఆమోదించింది"
                : "Approved by AICTE, Delhi."}
              <br /> (
              {glbVals.telugu
                ? "ఆంధ్రప్రదేశ్ రాష్ట్ర సాంకేతిక విద్య మరియు శిక్షణ బోర్డుకు అనుబంధంగా ఉంది"
                : "Affliated to the State Board of Technical Education & Training, A.P."}
              )
            </h5>
          </div>
          <div className="govtLogo">
            <img src={BASE_URL+basicDetails[lang]?.govtLogoUrl} alt="GovernmentLogo" />
          </div>
        </div>
      </div>
      <div className="NavBar">
        <div className="House icon">
          <NavLink target="_blank" to="/auth">            
            <SignIn size={20} color={"white"} />
             <c style={{color:'white'}}>{glbVals.telugu ? "నిర్వాహకుడు" : "Admin"}</c>
          </NavLink>
          <NavLink to="/">
            <House size={20} color={"white"} />
          </NavLink>
        </div>
        <ul className="navItems">
          {Object.entries(navBarItems[lang]).map((ni) => {
            return <NavBar key={ni} navBarItem={ni} />;
          })}
        </ul>
        <div className="Bell icon">        
          {Object.keys(newNotifications).length > 0 ? (
            <Badge color="secondary" badgeContent="New">
              <NavLink to="/notifications">
                <Bell size={20} color={"white"} />
              </NavLink>
            </Badge>
          ) : (
            <NavLink to="/notifications">
              <Bell size={20} color={"white"} />
            </NavLink>
          )}
          <div>
            <button
              className="telugu lan"
              onClick={() =>
                setGlbVals((prev) => ({ ...prev, telugu: !prev.telugu }))
              }
            >
              {glbVals.telugu ? "English" : "తెలుగు"}
            </button>
          </div>
        </div>

        <div className="hamburger" onClick={handleClick}>
          <List size={32} />
        </div>
      </div>
    </div>
  );
}

export default Header;
