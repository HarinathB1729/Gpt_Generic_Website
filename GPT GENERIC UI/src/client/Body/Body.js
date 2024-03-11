import React, { useState, useEffect, useContext } from "react";
import "../client.css";
import polytechfest from "../img/polytechfest.jpg";
import colfront from "../img/colfront.jpg";
import flaghoist from "../img/flaghoist.jpg";
import govtLogo from "../img/govtLogo.jpg";
import library1 from "../img/lib.jpeg";
import ipsgm1 from "../img/Ipsgm.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../GlobalProvider";
import useFetchDbData from "../Utilities/useFetchDbData";
import useFetchMultipleDbData from "../Utilities/useFetchMultipleDbData";
import {BASE_URL} from "../../api";


function Body() {
  const [glbVals, setGlbVals] = useContext(GlobalContext);
  const [strCounter, setStrCounter] = useState(false);

  const lang = glbVals.telugu ? "tel" : "en";

  useEffect(() => {
    setGlbVals((prev) => ({ ...prev, scrollTop: false }));
    const handleScroll = (event) => {
      if (window.scrollY > 0) {
        setGlbVals((prev) => ({ ...prev, scrollTop: true }));
      } else {
        setGlbVals((prev) => ({ ...prev, scrollTop: false }));
        // useGlobUpdateScrollValues(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const months = {
    en: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    tel: [
      "జనవరి",
      "ఫిబ్రవరి",
      "మార్చి",
      "ఏప్రిల్",
      "మే",
      "జూన్ ",
      "జూలై ",
      "ఆగస్టు ",
      "సెప్టెంబర్",
      "అక్టోబర్ ",
      "అక్టోబర్",
      "నవంబర్",
      "డిసెంబర్",
    ],
  };

  const DateHandler = (n) => {
    switch (n) {
      case 1:
        return "01";
      case 2:
        return "02";
      case 3:
        return "03";
      case 4:
        return "04";
      case 5:
        return "05";
      case 6:
        return "06";
      case 7:
        return "07";
      case 8:
        return "08";
      case 9:
        return "09";
      default:
        return n;
    }
  };

  const basicDetails = useFetchDbData("basicdetails");
  // const contacts = useFetchDbData("contacts");
  const stuStrength = useFetchDbData("stustr");
  const departments = useFetchMultipleDbData("dept/body");
  const facStrength = useFetchMultipleDbData("facultydata/");
 
  const notifications = useFetchMultipleDbData("notifications/tworows");
  const events = useFetchMultipleDbData("events/tworows");
  const newsItems = useFetchMultipleDbData("news/tworows");

  // console.log("basicdetails", basicDetails);
  // console.log("facStrength", facStrength);
  // console.log("stuStrength", stuStrength);
  // console.log("departments", departments);
  // console.log(" notifications", notifications); 
  // console.log("events", events);
  // console.log(" newsItems", newsItems);


  // console.log("globalvalues", glbVals);
  return (
    <div className="mainBody">
      <div>
        <section className="banner">
          <div id="slider">
            <figure>
              <img src={govtLogo} alt="government logo" />
              <img src={colfront}  alt="government logo"/>
              <img src={polytechfest} alt="government logo" />             
              <img src={flaghoist} alt="government logo" />
            </figure>
          </div>
        </section>
      </div>
      <div className="aboutus">
        <h3>{glbVals.telugu ? "మా గురించి" : "About Us"} </h3>
        <p>{basicDetails[lang]?.colIntro}</p>
      </div>
      <div className="vision_mission">
        <div className="vision_mission1">
          <div className="CB">
            <div className="circlebody">
              <div className="circle1 circle">
                <strong>{glbVals.telugu ? "దృష్టి" : "Vision"} </strong>
              </div>
              <div className="circle2 circle">
                <strong>{glbVals.telugu ? "లక్ష్యం" : "Mission"}</strong>
              </div>
              <div className="circle3 circle">
                <strong>
                  {glbVals.telugu ? "జి పి టి, " : "GPT, "}
                  {basicDetails[lang]?.polycetCode}
                </strong>
              </div>
            </div>
          </div>
          <div className="content">
            <h4>{glbVals.telugu ? "దృష్టి" : "Vision"}</h4>
            <p>{basicDetails[lang]?.colVision}</p>
            <h4>{glbVals.telugu ? "లక్ష్యం" : "Mission"}</h4>
            <p>{basicDetails[lang]?.colMission}</p>
          </div>
        </div>
      </div>
      <div className="Course_offered">
        <h2>
          {glbVals.telugu ? "సమర్పిస్తున్న కోర్సులు" : "Courses Offered "}
        </h2>
        {/* <p>We Offer..</p> */}
        <div className="Course_offered1">
          <div className="departments">
            {Object.values(departments).map((dept, i) => {
              // console.log("dept",dept)

              return (
                <div key={dept} className="dept">
                  <div className="logo">
                    <img src={BASE_URL+ dept[lang]?.deptLogoUrl} alt="dept_logo" />
                  </div>
                  <div className="dept_name">
                    <h4> {dept[lang]?.deptName}</h4>
                    <NavLink className='ReadMore' to={"/department/" + dept[lang]?.deptCode}>
                      {glbVals.telugu ? "ఇంకా చదవండి.." : "Read more.."}
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <ScrollTrigger
        onEnter={() => {
          setStrCounter(true);
        }}
      >
        <div className="main">
          <div className="cardDiv">
            <h1>
              {strCounter && (
                <CountUp
                  duration={2}
                  start={0}
                  end={Object.keys(departments).length}
                />
              )}
            </h1>
            <h3>{glbVals.telugu ? "కోర్సులు" : "Courses"}</h3>
          </div>

          <div className="cardDiv">
            <h1>
              {strCounter && (
                <CountUp
                  duration={2}
                  start={0}
                  end={Object.keys(facStrength).length}
                />
              )}
            </h1>
            <h3>{glbVals.telugu ? "అధ్యాపకులు" : "Faculty"}</h3>
          </div>
          <div className="cardDiv">
            <h1>
              {strCounter && (
                <CountUp
                  duration={2}
                  start={0}
                  end={stuStrength["en"]?.colstrength}
                />
              )}
            </h1>
            <h3>{glbVals.telugu ? "విద్యార్థులు" : "Students"}</h3>
          </div>
          <div className="card1 cardDiv">
            <h1>
              1: 
              {strCounter && (
                <CountUp
                  duration={2}
                  start={0}
                  end={Math.ceil(
                    stuStrength["en"]?.colstrength /
                    Object.keys(facStrength).length
                  )}
                />
              )}
            </h1>
            <h3>
              {glbVals.telugu
                ? "అధ్యాపక- విద్యార్థుల నిష్పత్తి"
                : "Faculty-Students Ratio"}
            </h3>
          </div>
        </div>
      </ScrollTrigger>

      <div className="Z">
        <div className="zdiv">
          <div className="zdivImg">
            <img src={polytechfest} alt="plyFest" />
          </div>
          <div className="zdivContent">
            <h2>{glbVals.telugu ? "పాలీ టెక్ ఫెస్ట్ " : "PolytechFest"}</h2>
            <p>
              {glbVals.telugu
                ? "పాలిటెక్‌ఫెస్ట్ అనేది ఆంధ్రప్రదేశ్‌లోని పాలిటెక్నిక్ కళాశాలచే నిర్వహించబడే వార్షిక సాంకేతిక మరియు సాంస్కృతిక ఉత్సవం. రాష్ట్రవ్యాప్తంగా వివిధ సాంకేతిక సంస్థలు మరియు కళాశాలల నుండి విద్యార్థులను ఈ ఉత్సవం ఆకర్షిస్తుంది."
                : "Polytechfest is an annual technical and cultural festival organized by the Polytechnic College in Andhra Pradesh. The festival attracts students from various technical institutes and colleges across the state."}
            </p>
            <p>
            {" "}
            {glbVals.telugu
              ? "పండుగ యొక్క ప్రాథమిక లక్ష్యం విద్యార్థుల సాంకేతిక మరియు సృజనాత్మక నైపుణ్యాలను ప్రోత్సహించడం మరియు ప్రదర్శించడం మరియు వారి సంబంధిత రంగాలలోని నిపుణులతో సంభాషించడానికి వారికి వేదికను అందించడం. యువతలో ఆవిష్కరణలు మరియు వ్యవస్థాపకతను ప్రోత్సహించడం కూడా ఈ పండుగ లక్ష్యం."
              : "The primary objective of the festival is to encourage and showcase the technical and creative skills of students and provide a platform for them to interact with experts in their respective fields. The festival also aims to promote innovation and entrepreneurship among the youth."}
          </p>
            <p><NavLink className='ReadMore' to="/polytechfest">{glbVals.telugu ? "ఇంకా చదవండి..." : "Read More..."}</NavLink>
          </p></div>
        </div>

        <div className="zdiv">
          <div className="zdivImg">
            <img src={ipsgm1} alt="IPSGM" />
          </div>
          <div className="zdivContent">
            <h2>{glbVals.telugu
            ? "ఇంటర్ పాలిటెక్నిక్ స్పోర్ట్స్ & గేమ్స్ మీట్"
            : " INTER POLYTECHNIC SPORTS & GAMES MEET"}</h2>
            <p>
            {glbVals.telugu
              ? "ఇంటర్ పాలిటెక్నిక్ స్పోర్ట్స్ అండ్ గేమ్స్ మీట్ అనేది వార్షిక క్రీడా కార్యక్రమం, దీనిలో వివిధ పాలిటెక్నిక్ కళాశాలల విద్యార్థులు వివిధ క్రీడలు మరియు ఆటలలో ఒకరితో ఒకరు పోటీపడతారు. ఈవెంట్ సాధారణంగా హోస్ట్ పాలిటెక్నిక్ కళాశాలచే నిర్వహించబడుతుంది, అనేక ఇతర పాలిటెక్నిక్ కళాశాలల నుండి పాల్గొనేవారు."
              : "The Inter Polytechnic Sports and Games Meet is an annual sporting event in which students from different polytechnic colleges compete against each other in various sports and games. The event is typically organized by a host polytechnic college, with participants from several other polytechnic colleges."}
          </p>
          <p>
            {glbVals.telugu
              ? "ఈ కార్యక్రమం విద్యార్థులు తమ అథ్లెటిక్ సామర్థ్యాలను ప్రదర్శించడానికి మరియు స్నేహపూర్వక మరియు పోటీ వాతావరణంలో పోటీపడే అవకాశాన్ని అందిస్తుంది. ఇది పాల్గొనే కళాశాలల మధ్య స్నేహం మరియు క్రీడా స్ఫూర్తిని పెంపొందించడానికి మరియు శారీరక దృఢత్వం మరియు ఆరోగ్యకరమైన జీవనశైలిని ప్రోత్సహించడంలో సహాయపడుతుంది."
              : "The event provides an opportunity for students to showcase their athletic abilities and compete in a friendly and competitive environment. It also helps to foster a sense of camaraderie and sportsmanship among the participating colleges, and helps to promote physical fitness and healthy lifestyles."}{" "}
          </p>
           <p><NavLink className='ReadMore' to="/ipsgm">{glbVals.telugu ? "ఇంకా చదవండి..." : "Read More..."}</NavLink>
         </p> </div>
        </div>
        <div className="zdiv">
          <div className="zdivImg">
            <img src={library1} alt="Library" />
          </div>
          <div className="zdivContent">
            <h2>{glbVals.telugu ? "గ్రంధాలయం" : "Library"}</h2>
            <p>
              {glbVals.telugu
                ? "పాలిటెక్నిక్ కళాశాలల్లోని లైబ్రరీ విద్యార్థులకు, అధ్యాపకులకు మరియు పరిశోధకులకు ముఖ్యమైన వనరుగా పనిచేస్తుంది, పుస్తకాలు, పత్రికలు మరియు ఇతర విద్యా సామగ్రి యొక్క విస్తారమైన సేకరణకు ప్రాప్యతను అందిస్తుంది."
                : "The library in Polytechnic colleges serves as an important resource for students, faculty, and researchers, providing access to a vast collection of books, journals, and other educational materials."}
            </p>
            <p>
              {glbVals.telugu
                ? "లైబ్రరీ బుక్ లెండింగ్, రిఫరెన్స్ అసిస్టెన్స్, ఆన్‌లైన్ డేటాబేస్ యాక్సెస్ మరియు ఇంటర్‌లైబ్రరీ లోన్ సర్వీసెస్ వంటి అనేక రకాల సేవలను అందిస్తుంది. సేకరణలో పాఠ్యపుస్తకాలు, రిఫరెన్స్ పుస్తకాలు, పరిశోధనా పత్రాలు, మ్యాగజైన్‌లు మరియు వివిధ అధ్యయన రంగాలకు సంబంధించిన పీరియాడికల్‌లు ఉన్నాయి."
                : "The library offers a range of services such as book lending, reference assistance, online database access, and interlibrary loan services. The collection includes textbooks, reference books, research papers, magazines, and periodicals related to various fields of study."}
            </p>
            <p><NavLink className='ReadMore' to="/library">{glbVals.telugu ? "ఇంకా చదవండి..." : "Read More..."}</NavLink>
          </p></div>
        </div>
        {/* <div className="zdiv">
          <div className="zdivImg">
            <img src={nba} alt="NBA" />
          </div>
          <div className="zdivContent">
            <h2>National Board of Accreditation</h2>
            <p>
              The National Board of Accreditation (NBA), India was initially
              established by the AICTE (All India Council of Technical
              Education) under section 10(u) of AICTE Act, in the year 1994, in
              order to assess the qualitative competence of the programs offered
              by educational institution from diploma level to post-graduate
              level in engineering and technology, management, pharmacy,
              architecture and related disciplines, which are approved by AICTE
            </p>
            <NavLink className='ReadMore' to="#">Read More..</NavLink>
          </div>
        </div> */}
      </div>

      
      <h2>{glbVals.telugu ? "సంఘటనలు" : "Events"}</h2>
      <div className="FlexDirection">
        {Object.entries(events).map((event) => {
          const date = new Date(event[1][lang].eventDate);
          // console.log("event", event)
          return (
            <div className="HalfFlex">
              <div className="HalfFlexContent">
                <div class="HalfFlexContentDate">
                  <month class="divDateMonth">{months[lang][date.getMonth()]}</month>&nbsp;
                  <date class="divDateDate">{DateHandler(date.getDate())}</date>
                </div>
                <div>
                  <h4>{event[1][lang].eventName}</h4>
                  {/* <p className="two-lines">{event[1][lang].eventDesc}</p> */}
                </div>
                <p><NavLink className='ReadMore' to="/events">{glbVals.telugu ? "ఇంకా చదవండి..." : "Read More..."} </NavLink></p>
              </div>

              <img src={BASE_URL+ event[1][lang]?.eventImgUrl} alt="Event" />
            </div>
          );
        })}
      </div>
      
      <h2>{glbVals.telugu ? "వార్తా అంశాలు" : "News Items"}</h2>
      <div className="FlexDirection">
        {Object.entries(newsItems).map((ni) => {
          const date = new Date(ni[1][lang].newsItemDate);
          // console.log("ni", ni)
          return (
            <div className="HalfFlex">
              <div className="HalfFlexContent">
                <div class="HalfFlexContentDate">
                  <month class="divDateMonth">{months[lang][date.getMonth()]}</month>&nbsp;
                  <date class="divDateDate">{DateHandler(date.getDate())}</date>
                </div>
                <div>
                  <h4>{ni[1][lang].newsItemTitle}</h4>
                  {/* <p className="two-lines">{ni[1][lang].newsItemDesc}</p> */}
                </div>
                <p><NavLink className='ReadMore' to="/newshub">{glbVals.telugu ? "ఇంకా చదవండి..." : "Read More..."} </NavLink></p>
              </div>

              <img src={BASE_URL+ ni[1][lang]?.newsItemImgUrl} alt="News Item" />
            </div>
          );
        })}
      </div>  

      <div className="Notifications">
        <h2>{glbVals.telugu ? "నోటిఫికేషన్‌లు" : " Notifications"}</h2>
        <div className="Grid">
          {Object.entries(notifications).map((ntfc, id) => {
            const date = new Date(ntfc[1][lang].ntfcDate);
            return (
              <div className="Note NE">
                <div className="noteDate">
                  <h1>{DateHandler(date.getDate())}</h1>
                  <h4>{months[lang][date.getMonth()]}</h4>
                  <h4>{date.getFullYear()}</h4>
                </div>
                <div className="info">
                  <h3>{ntfc[1][lang]?.ntfcName}</h3>
                  <p className="singleP">{ntfc[1][lang]?.ntfcDesc}</p>
                  <center>
                    <NavLink className='ReadMore' to="/notifications">
                      {glbVals.telugu ? "ఇంకా చదవండి..." : "Read More..."}
                    </NavLink>
                  </center>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     </div>      
   
  );
}

export default Body;
