-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 03, 2023 at 07:46 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `website`
--

-- --------------------------------------------------------

--
-- Table structure for table `academics`
--

CREATE TABLE `academics` (
  `id` double NOT NULL,
  `AyCalenderIntro_en` varchar(1900) NOT NULL,
  `AyCalenderIntro_tel` varchar(1900) NOT NULL,
  `AyCalenderFileUrl` varchar(200) NOT NULL,
  `AyTimeTableIntro_en` varchar(1900) NOT NULL,
  `AyTimeTableIntro_tel` varchar(1900) NOT NULL,
  `AyTimeTableFileUrl` varchar(200) NOT NULL,
  `AyRuleBookIntro_en` varchar(1900) NOT NULL,
  `AyRuleBookIntro_tel` varchar(1900) NOT NULL,
  `AyRuleBookFileUrl` varchar(200) NOT NULL,
  `AyFacHandBook_en` varchar(1900) NOT NULL,
  `AyFacHandBook_tel` varchar(2000) NOT NULL,
  `AyFacHandBookFileUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `academics`
--

INSERT INTO `academics` (`id`, `AyCalenderIntro_en`, `AyCalenderIntro_tel`, `AyCalenderFileUrl`, `AyTimeTableIntro_en`, `AyTimeTableIntro_tel`, `AyTimeTableFileUrl`, `AyRuleBookIntro_en`, `AyRuleBookIntro_tel`, `AyRuleBookFileUrl`, `AyFacHandBook_en`, `AyFacHandBook_tel`, `AyFacHandBookFileUrl`) VALUES
(0.433761, 'An academic year calendar is a schedule of academic activities and events for an academic year in a Institute. It typically starts in the Autumn and ends in the summer, and includes the dates for classes, exams, holidays, and other important events.', 'విద్యా సంవత్సర క్యాలెండర్ అనేది ఇన్‌స్టిట్యూట్‌లో ఒక విద్యా సంవత్సరానికి సంబంధించిన విద్యా కార్యకలాపాలు మరియు ఈవెంట్‌ల షెడ్యూల్. ఇది సాధారణంగా శరదృతువులో ప్రారంభమై వేసవిలో ముగుస్తుంది మరియు తరగతులు, పరీక్షలు, సెలవులు మరియు ఇతర ముఖ్యమైన ఈవెంట్‌ల తేదీలను కలిగి ఉంటుంది.', 'http://localhost:80/api/academics/file/AyCalender', 'An academic year timetable is a detailed schedule of classes and other academic activities for a specific academic year in a Institute. It typically includes the dates, times, and locations of each class.', 'విద్యా సంవత్సర టైమ్‌టేబుల్ అనేది ఇన్‌స్టిట్యూట్‌లో నిర్దిష్ట విద్యా సంవత్సరానికి సంబంధించిన తరగతులు మరియు ఇతర విద్యా కార్యకలాపాల యొక్క వివరణాత్మక షెడ్యూల్. ఇది సాధారణంగా ప్రతి తరగతి తేదీలు, సమయాలు మరియు స్థానాలను కలిగి ఉంటుంది.', 'http://localhost:80/api/academics/file/AyTimeTable', 'A rulebook in Institute is a set of regulations, policies, and guidelines that govern the conduct and behavior of students, faculty, and staff within the university community. It typically includes information on academic and disciplinary matters, as well as information on administrative procedures and policies.', 'ఇన్‌స్టిట్యూట్‌లోని రూల్‌బుక్ అనేది విశ్వవిద్యాలయ సంఘంలోని విద్యార్థులు, అధ్యాపకులు మరియు సిబ్బంది ప్రవర్తన మరియు ప్రవర్తనను నియంత్రించే నిబంధనలు, విధానాలు మరియు మార్గదర్శకాల సమితి. ఇది సాధారణంగా అకడమిక్ మరియు క్రమశిక్షణా విషయాలపై సమాచారం, అలాగే పరిపాలనా విధానాలు మరియు విధానాలపై సమాచారాన్ని కలిగి ఉంటుంది.', 'http://localhost:80/api/academics/file/AyRuleBook', 'A faculty handbook in universities is a guidebook that provides information on policies, procedures, and resources related to the work of faculty members. It typically includes information on academic and research expectations, teaching and advising guidelines, faculty governance, and professional development opportunities.', 'విశ్వవిద్యాలయాలలో ఫ్యాకల్టీ హ్యాండ్‌బుక్ అనేది అధ్యాపకుల పనికి సంబంధించిన విధానాలు, విధానాలు మరియు వనరులపై సమాచారాన్ని అందించే మార్గదర్శక పుస్తకం. ఇది సాధారణంగా విద్యా మరియు పరిశోధన అంచనాలు, బోధన మరియు సలహా మార్గదర్శకాలు, ఫ్యాకల్టీ గవర్నెన్స్ మరియు వృత్తిపరమైన అభివృద్ధి అవకాశాలపై సమాచారాన్ని కలిగి ఉంటుంది.', 'http://localhost:80/api/academics/file/AyFacHandBook');

-- --------------------------------------------------------

--
-- Table structure for table `adminofficestaffdata`
--

CREATE TABLE `adminofficestaffdata` (
  `id` double NOT NULL,
  `staffName_en` varchar(100) NOT NULL,
  `staffName_tel` varchar(100) NOT NULL,
  `staffDesgn_en` varchar(100) NOT NULL,
  `staffDesgn_tel` varchar(100) NOT NULL,
  `staffQual_en` varchar(100) NOT NULL,
  `staffQual_tel` varchar(100) NOT NULL,
  `staffExp` int(11) NOT NULL,
  `staffImgUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminofficestaffdata`
--

INSERT INTO `adminofficestaffdata` (`id`, `staffName_en`, `staffName_tel`, `staffDesgn_en`, `staffDesgn_tel`, `staffQual_en`, `staffQual_tel`, `staffExp`, `staffImgUrl`) VALUES
(0.305058, 'S Praveen Kumar', 'ఎస్ ప్రవీణ్ కుమార్', 'Junior Assistant', 'జూనియర్ అసిస్టెంట్', 'BTech', 'బీటెక్', 2, 'adminstaff/img/0.305058'),
(0.316005, 'H Raghu Natha Reddy', 'హెచ్ రఘునాధ రెడ్డి', 'Contract Staff', 'కాంట్రాక్ట్ సిబ్బంది', 'MA ', ' ఎం ఏ', 11, 'adminstaff/img/0.316005'),
(0.548619, 'T Subramanyam', 'టి సుబ్రహ్మణ్యం', 'Office Superintendent', 'కార్యాలయ సూపరింటెండెంట్', 'Intermediate', 'ఇంటర్మీడియట్', 25, 'adminstaff/img/0.548619'),
(0.564546, 'N Kumar Swamy', 'ఎన్ కుమార్ స్వామి', 'Administrative Officer', 'అడ్మినిస్ట్రేటివ్ అధికారి', 'B.Com', 'బి కామ్', 15, 'adminstaff/img/0.564546'),
(0.687339, 'M Rama Devi', ' ఎం రమా దేవి', 'Junior Assistant', 'జూనియర్ అసిస్టెంట్', 'BTech', 'బీటెక్', 3, 'adminstaff/img/0.687339'),
(0.77119, 'B Mahesh Kumar Reddy', 'బి మహేష్ కుమార్ రెడ్డి', 'Senior Assistant', 'సీనియర్ అసిస్టెంట్', 'Bcom', 'బి కామ్', 9, 'adminstaff/img/0.77119'),
(0.92912, 'B Ramesh Babu', 'రమేష్', 'Contract Staff', 'కాంట్రాక్ట్ సిబ్బంది', 'MBA', ' ఎం బి ఏ ', 11, 'adminstaff/img/0.92912'),
(0.993508, 'G Ganga Devi', 'జి గంగా దేవి', 'Junior Assistant', 'జూనియర్ అసిస్టెంట్', 'B.A', ' బి.ఎ', 3, 'adminstaff/img/0.993508');

-- --------------------------------------------------------

--
-- Table structure for table `aictedata`
--

CREATE TABLE `aictedata` (
  `eoaAcaYear` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aictedata`
--

INSERT INTO `aictedata` (`eoaAcaYear`) VALUES
('2020-21'),
('2021-22'),
('2022-23'),
('2023-24');

-- --------------------------------------------------------

--
-- Table structure for table `alumnicoordinator`
--

CREATE TABLE `alumnicoordinator` (
  `id` double NOT NULL,
  `coordName_en` varchar(100) NOT NULL,
  `coordName_tel` varchar(100) NOT NULL,
  `coordBatch` varchar(100) NOT NULL,
  `coordPhno` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumnicoordinator`
--

INSERT INTO `alumnicoordinator` (`id`, `coordName_en`, `coordName_tel`, `coordBatch`, `coordPhno`) VALUES
(0.242994, 'P. Harsha Vardhan', 'పి. హర్ష వర్ధన్', '2022-23', '7894561230');

-- --------------------------------------------------------

--
-- Table structure for table `aptesstructure`
--

CREATE TABLE `aptesstructure` (
  `id` double NOT NULL,
  `librarian` int(2) NOT NULL,
  `physicalDirector` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aptesstructure`
--

INSERT INTO `aptesstructure` (`id`, `librarian`, `physicalDirector`) VALUES
(0.658209, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bhostel`
--

CREATE TABLE `bhostel` (
  `id` double NOT NULL,
  `HostelName_en` varchar(100) NOT NULL,
  `HostelName_tel` varchar(100) NOT NULL,
  `HostelIntro_en` varchar(5000) NOT NULL,
  `HostelIntro_tel` varchar(5000) NOT NULL,
  `HostelAddr_en` varchar(1000) NOT NULL,
  `HostelAddr_tel` varchar(1000) NOT NULL,
  `HostelSup_en` varchar(100) NOT NULL,
  `HostelSup_tel` varchar(100) NOT NULL,
  `HostelPhno` varchar(10) NOT NULL,
  `HostelPhotoUrl` varchar(200) NOT NULL,
  `HostelExFacilities_en` varchar(500) NOT NULL,
  `HostelExFacilities_tel` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bhostelstructure`
--

CREATE TABLE `bhostelstructure` (
  `id` double NOT NULL,
  `bHostelSup` int(11) DEFAULT NULL,
  `bHostelMgr` int(11) DEFAULT NULL,
  `bHostelSrAsst` int(11) DEFAULT NULL,
  `bHostelJrAssts` int(11) DEFAULT NULL,
  `bHostelSubs` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `colbasicdetails`
--

CREATE TABLE `colbasicdetails` (
  `id` double NOT NULL,
  `colName_en` varchar(100) NOT NULL,
  `colName_tel` varchar(100) NOT NULL,
  `colLocation_en` varchar(50) NOT NULL,
  `colLocation_tel` varchar(50) NOT NULL,
  `polycetCode` varchar(30) NOT NULL,
  `colIntro_en` varchar(1000) NOT NULL,
  `colIntro_tel` varchar(1000) NOT NULL,
  `colVision_en` varchar(500) NOT NULL,
  `colVision_tel` varchar(500) NOT NULL,
  `colMission_en` varchar(1500) NOT NULL,
  `colMission_tel` varchar(1500) NOT NULL,
  `colLogoUrl` varchar(200) NOT NULL,
  `govtLogoUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `colbasicdetails`
--

INSERT INTO `colbasicdetails` (`id`, `colName_en`, `colName_tel`, `colLocation_en`, `colLocation_tel`, `polycetCode`, `colIntro_en`, `colIntro_tel`, `colVision_en`, `colVision_tel`, `colMission_en`, `colMission_tel`, `colLogoUrl`, `govtLogoUrl`) VALUES
(0.313678, 'Government Polytechnic', 'ప్రభుత్వ పాలిటెక్నిక్', 'Obulavaripalli', 'ఓబులవారిపల్లి', 'OBVP', 'Technical Education is the backbone of every nation and is the stepping stone for a country to build a developed nation. Govt. Polytechnic, Obulavaripalli, Kadapa district was established in 2008.  This institute have well equipped labs, Computer Centre and library to help students in attaining highest standards in academics. It was with the aim of providing skilled technical manpower to the industry, the Industrial Training was included in the regular Diploma curriculum to make the course suitable to meet the needs of industry. This institute offers quality education to inculcate Right Behaviour, Positive attitude and Leadership Qualities in our students for their Holistic Development. Our institute aims to mould the student to become a better individual and a truly qualified person, who will be useful to the present day society and contribute to building a better nation. Soft skills and educational skills is what the institution seeks to provide every student at the campus itself.', 'సాంకేతిక విద్య ప్రతి దేశానికి వెన్నెముక మరియు అభివృద్ధి చెందిన దేశాన్ని నిర్మించడానికి ఒక దేశానికి సోపానం. ప్రభుత్వ పాలిటెక్నిక్, ఓబులవారిపల్లి, కడప జిల్లా 2008లో స్థాపించబడింది. ఈ విద్యాసంస్థలో విద్యార్థులకు విద్యావిషయాల్లో అత్యున్నత ప్రమాణాలు సాధించడంలో సహాయపడటానికి చక్కటి ల్యాబ్‌లు, కంప్యూటర్ సెంటర్ మరియు లైబ్రరీ ఉన్నాయి. పరిశ్రమకు నైపుణ్యం కలిగిన సాంకేతిక మానవ వనరులను అందించే లక్ష్యంతో, పరిశ్రమ అవసరాలకు తగినట్లుగా కోర్సును రూపొందించడానికి సాధారణ డిప్లొమా పాఠ్యాంశాల్లో పారిశ్రామిక శిక్షణను చేర్చారు. ఈ ఇన్‌స్టిట్యూట్ మా విద్యార్థుల సమగ్ర అభివృద్ధికి సరైన ప్రవర్తన, సానుకూల దృక్పథం మరియు నాయకత్వ లక్షణాలను పెంపొందించడానికి నాణ్యమైన విద్యను అందిస్తుంది. ప్రస్తుత సమాజానికి ఉపయోగపడే మరియు మెరుగైన దేశాన్ని నిర్మించడంలో దోహదపడే ఒక మంచి వ్యక్తిగా మరియు నిజమైన అర్హత కలిగిన వ్యక్తిగా విద్యార్థిని తీర్చిదిద్దడమే మా సంస్థ లక్ష్యం. సాఫ్ట్ స్కిల్స్ మరియు ఎడ్యుకేషన్ స్కిల్స్ అనేది క్యాంపస్‌లోనే ప్రతి విద్యార్థికి అందించడానికి సంస్థ ప్రయత్నిస్తుంది.', 'Enable the student to excel in their academic pursuits, making them sensitive to the needs of progressive industrial world .To impart ethical values and leadership qualities in students which would transform them into superior human beings.', 'విద్యార్థి వారి విద్యా సాధనలో రాణించడానికి వీలు కల్పించడం, ప్రగతిశీల పారిశ్రామిక ప్రపంచం యొక్క అవసరాలకు వారిని సున్నితంగా చేస్తుంది విద్యార్థుల్లో నైతిక విలువలు, నాయకత్వ లక్షణాలను పెంపొందించడం ద్వారా వారిని ఉన్నతమైన మానవులుగా తీర్చిదిద్దవచ్చు.', 'To be center of excellence in the field of technical Education.', 'సాంకేతిక విద్యా రంగంలో అత్యుత్తమ కేంద్రంగా నిలుస్తుంది.', 'basicdetails/img/colLogo', 'basicdetails/img/govtLogo');

-- --------------------------------------------------------

--
-- Table structure for table `committeemembers`
--

CREATE TABLE `committeemembers` (
  `id` double NOT NULL,
  `comId` double NOT NULL,
  `commMemRole_en` varchar(100) NOT NULL,
  `commMemRole_tel` varchar(100) NOT NULL,
  `commMemName_en` varchar(100) NOT NULL,
  `commMemName_tel` varchar(100) NOT NULL,
  `commMemDesgn_en` varchar(100) NOT NULL,
  `commMemDesgn_tel` varchar(100) NOT NULL,
  `commMemPhno` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `committeemembers`
--

INSERT INTO `committeemembers` (`id`, `comId`, `commMemRole_en`, `commMemRole_tel`, `commMemName_en`, `commMemName_tel`, `commMemDesgn_en`, `commMemDesgn_tel`, `commMemPhno`) VALUES
(0.742611, 0.12781, 'Chairman', 'చైర్మన్', 'T.Lalitha', 'టి.లలిత', 'HECES', 'HECES', 9849442203),
(0.838401, 0.953565, 'Chairman', 'చైర్మన్', 'Dr. L. Krishna Sai', 'డా. ఎల్. కృష్ణ సాయి', 'Principal', 'ప్రిన్సిపాల్', 9010222154),
(0.922291, 0.191461, 'Chairman', 'చైర్మన్', 'Dr. L.Krishna Sai', 'డా. ఎల్. కృష్ణ సాయి', 'Principal', 'ప్రిన్సిపాల్', 9010222154),
(1.742611, 0.12781, 'Vice-Chairman', 'ఉపాధ్యక్షుడు', 'K.jhansi Rani', 'కె.ఝాన్సీ రాణి', 'HIT', 'HIT', 7671902290),
(1.838401, 0.953565, 'Vice-Chairman', 'ఉపాధ్యక్షుడు', 'C.Devaraj', 'సి.దేవరాజ్', 'HCMES', 'HCMES', 8801472869),
(1.922291, 0.191461, 'Vice-Chairman', 'ఉపాధ్యక్షుడు', 'U. Subramanyam', 'యు.సుబ్రహ్మణ్యం', 'HGS', 'HGS', 9440203650),
(2.742611, 0.12781, 'Member', 'సభ్యుడు', 'B.Harika', 'బి.హారిక', 'L/IT', 'L/IT', 9866718650),
(2.838401, 0.953565, 'Member', 'సభ్యుడు', 'T.Lalitha', 'టి.లలిత', 'HECES', 'HECES', 9849442203),
(2.922291, 0.191461, 'Member', 'సభ్యుడు', 'T.Ravi Kumar', 'T. రవి కుమార్', 'HTI', 'HTI', 9640233990),
(3.742611, 0.12781, 'Member', 'సభ్యుడు', 'CC. Kalyani', 'CC కల్యాణి', 'L/ECE', 'L/ECE', 8500987870),
(3.838401, 0.953565, 'Member', 'సభ్యుడు', 'H.Raghunath Reddy', 'హెచ్.రఘునాథ్ రెడ్డి', 'Junior Assistant', 'జూనియర్ అసిస్టెంట్', 7799458880),
(3.922291, 0.191461, 'Member', 'సభ్యుడు', 'S. Masthan Valli', 'ఎస్. మస్తాన్ వల్లి', 'L/IT', 'L/IT', 8121843955),
(4.742611, 0.12781, 'Member', 'సభ్యుడు', 'G.Ganga Devi', 'జి.గంగా దేవి', 'Junior Assistant', 'జూనియర్ అసిస్టెంట్', 6304967187);

-- --------------------------------------------------------

--
-- Table structure for table `committees`
--

CREATE TABLE `committees` (
  `comId` double NOT NULL,
  `commName_en` varchar(100) NOT NULL,
  `commName_tel` varchar(100) NOT NULL,
  `commDescr_en` varchar(2000) NOT NULL,
  `commDescr_tel` varchar(2000) NOT NULL,
  `commImgUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `committees`
--

INSERT INTO `committees` (`comId`, `commName_en`, `commName_tel`, `commDescr_en`, `commDescr_tel`, `commImgUrl`) VALUES
(0.12781, 'Women protection cell', 'మహిళా రక్షణ విభాగం ', 'The Women Protection Cell in Government Polytechnic, Obulavaripalli is a dedicated unit responsible for addressing issues related to the safety, well-being, and empowerment of women within the college campus. It is an essential initiative aimed at ensuring a secure and conducive environment for female students, faculty, and staff, promoting gender equality and preventing any form of discrimination or harassment.\n\nThe Women Protection Cell plays a crucial role in promoting gender equity, preventing discrimination, and creating a supportive environment for women within Government Polytechnic, Obulavaripalli. By upholding the rights and well-being of women, the cell contributes to a positive and inclusive learning environment, fostering the overall development and success of female students and staff.', 'ఓబులవారిపల్లిలోని ప్రభుత్వ పాలిటెక్నిక్‌లోని మహిళా రక్షణ సెల్ కళాశాల క్యాంపస్‌లోని మహిళల భద్రత, శ్రేయస్సు మరియు సాధికారతకు సంబంధించిన సమస్యలను పరిష్కరించే బాధ్యతను కలిగి ఉంది. ఇది మహిళా విద్యార్థులు, అధ్యాపకులు మరియు సిబ్బందికి సురక్షితమైన మరియు అనుకూలమైన వాతావరణాన్ని నిర్ధారించడం, లింగ సమానత్వాన్ని ప్రోత్సహించడం మరియు ఏ విధమైన వివక్ష లేదా వేధింపులను నిరోధించడం లక్ష్యంగా పెట్టుకున్న ముఖ్యమైన చొరవ.\n\nఓబులవారిపల్లిలోని ప్రభుత్వ పాలిటెక్నిక్‌లో లింగ సమానత్వాన్ని ప్రోత్సహించడంలో, వివక్షను నిరోధించడంలో మరియు మహిళలకు సహాయక వాతావరణాన్ని సృష్టించడంలో మహిళా రక్షణ సెల్ కీలక పాత్ర పోషిస్తుంది. మహిళల హక్కులు మరియు శ్రేయస్సును సమర్థించడం ద్వారా, సెల్ ఒక సానుకూల మరియు సమ్మిళిత అభ్యాస వాతావరణానికి దోహదం చేస్తుంది, మహిళా విద్యార్థులు మరియు సిబ్బంది యొక్క మొత్తం అభివృద్ధి మరియు విజయాన్ని ప్రోత్సహిస్తుంది.', 'committees/img/0.12781'),
(0.191461, 'Internal Complaints Committee(ICC)', 'అంతర్గత ఫిర్యాదుల కమిటీ (ఐసిసి)', 'The Internal Complaints Committee (ICC) in Government Polytechnic, Obulavaripalli plays a crucial role in fostering a safe and inclusive environment for all students, faculty, and staff. It is a body mandated by the Sexual Harassment of Women at Workplace (Prevention, Prohibition, and Redressal) Act, 2013, and it is responsible for addressing complaints related to sexual harassment within the college premises.\n\n\nThe establishment of an effective Internal Complaints Committee is crucial in creating a safe and conducive learning environment in Government Polytechnic, Obulavaripalli, where everyone can pursue their studies and work without fear of harassment or discrimination. It fosters a culture of respect, equality, and dignity, thereby promoting the overall well-being and development of the college community.', 'ఓబులవారిపల్లిలోని ప్రభుత్వ పాలిటెక్నిక్‌లోని అంతర్గత ఫిర్యాదుల కమిటీ (ICC) విద్యార్థులు, అధ్యాపకులు మరియు సిబ్బంది అందరికీ సురక్షితమైన మరియు సమ్మిళిత వాతావరణాన్ని పెంపొందించడంలో కీలక పాత్ర పోషిస్తుంది. ఇది వర్క్‌ప్లేస్‌లో మహిళలపై లైంగిక వేధింపుల (నివారణ, నిషేధం మరియు పరిహారం) చట్టం, 2013 ద్వారా నిర్దేశించబడిన ఒక సంస్థ మరియు కళాశాల ప్రాంగణంలో లైంగిక వేధింపులకు సంబంధించిన ఫిర్యాదులను పరిష్కరించే బాధ్యతను కలిగి ఉంటుంది.\n\n\nప్రభుత్వ పాలిటెక్నిక్, ఓబులవారిపల్లిలో ప్రతి ఒక్కరూ వేధింపులు లేదా వివక్షకు భయపడకుండా తమ చదువులు మరియు పనిని కొనసాగించగలిగే సురక్షితమైన మరియు అనుకూలమైన అభ్యాస వాతావరణాన్ని సృష్టించడంలో సమర్థవంతమైన అంతర్గత ఫిర్యాదుల కమిటీని ఏర్పాటు చేయడం చాలా కీలకం. ఇది గౌరవం, సమానత్వం మరియు గౌరవం యొక్క సంస్కృతిని పెంపొందిస్తుంది, తద్వారా కళాశాల సంఘం యొక్క మొత్తం శ్రేయస్సు మరియు అభివృద్ధిని ప్రోత్సహిస్తుంది.', 'committees/img/0.191461'),
(0.953565, 'Anti Ragging Committee ', 'యాంటీ ర్యాగింగ్ కమిటీ ', 'The Anti-Ragging Committee in Government Polytechnic, Obulavaripalli is a vital body responsible for preventing and addressing instances of ragging, which is a form of physical or psychological abuse often inflicted upon new students by their seniors. Ragging is strictly prohibited in educational institutions by the Hon\'ble Supreme Court of India, and the Anti-Ragging Committee ensures that a safe and welcoming environment is maintained for all students.\n\nThe Anti-Ragging Committee serves as a critical safeguard against ragging, which can have severe psychological and emotional consequences for victims. By creating a zero-tolerance policy towards ragging, Government Polytechnic, Obulavaripalli can ensure that their campuses remain safe, nurturing, and conducive to learning for all students.', 'ఓబులవారిపల్లి ప్రభుత్వ పాలిటెక్నిక్‌లోని యాంటీ ర్యాగింగ్ కమిటీ ర్యాగింగ్‌ను నిరోధించడానికి మరియు పరిష్కరించడానికి బాధ్యత వహించే ఒక ముఖ్యమైన సంస్థ, ఇది కొత్త విద్యార్థులపై వారి సీనియర్లచే తరచుగా శారీరక లేదా మానసిక వేధింపులకు గురిచేస్తుంది. గౌరవనీయులైన సుప్రీం కోర్ట్ ఆఫ్ ఇండియా ద్వారా విద్యా సంస్థలలో ర్యాగింగ్ ఖచ్చితంగా నిషేధించబడింది మరియు విద్యార్థులందరికీ సురక్షితమైన మరియు స్వాగతించే వాతావరణం ఉండేలా ర్యాగింగ్ నిరోధక కమిటీ నిర్ధారిస్తుంది.\n\nర్యాగింగ్‌కు వ్యతిరేకంగా యాంటీ ర్యాగింగ్ కమిటీ కీలకమైన రక్షణగా పనిచేస్తుంది, ఇది బాధితులకు తీవ్రమైన మానసిక మరియు భావోద్వేగ పరిణామాలను కలిగిస్తుంది. ర్యాగింగ్ పట్ల జీరో-టాలరెన్స్ విధానాన్ని రూపొందించడం ద్వారా, ప్రభుత్వ పాలిటెక్నిక్, ఓబులవారిపల్లి వారి క్యాంపస్‌లు సురక్షితంగా, పోషణ మరియు విద్యార్థులందరికీ అభ్యాసానికి అనుకూలంగా ఉండేలా చూసుకోవచ్చు.', 'committees/img/0.953565');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` double NOT NULL,
  `colAddress_en` varchar(1000) NOT NULL,
  `colAddress_tel` varchar(1000) NOT NULL,
  `colMobno` double NOT NULL,
  `colEmail` varchar(50) NOT NULL,
  `colLatitude` float NOT NULL,
  `colLongitude` float NOT NULL,
  `facebook` varchar(300) NOT NULL,
  `instagram` varchar(300) NOT NULL,
  `twitter` varchar(300) NOT NULL,
  `youtube` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `colAddress_en`, `colAddress_tel`, `colMobno`, `colEmail`, `colLatitude`, `colLongitude`, `facebook`, `instagram`, `twitter`, `youtube`) VALUES
(0.841547, 'Government Polytechnic,\nObulavaripalli,\nAnnamayya District,\nAndhra Pradesh,\n516108.', 'ప్రభుత్వ పాలిటెక్నిక్,\nఓబులవారిపల్లి,\nఅన్నమయ్య జిల్లా,\nఆంధ్ర ప్రదేశ్.\n516108. ', 9010222154, 'gpt1544@gmail.com', 14.0412, 79.2627, 'https://www.facebook.com/search_results/?q=cteandhra', 'https://www.instagram.com/cteandhra/', 'https://twitter.com/DeputyD29306755', 'https://www.youtube.com/@deputydirector-technical-dteap/featured');

-- --------------------------------------------------------

--
-- Table structure for table `ctedata`
--

CREATE TABLE `ctedata` (
  `id` double NOT NULL,
  `cteName_en` varchar(100) NOT NULL,
  `cteName_tel` varchar(100) NOT NULL,
  `cteDesig_en` varchar(100) NOT NULL,
  `cteDesig_tel` varchar(100) NOT NULL,
  `cteMsg_en` varchar(2000) NOT NULL,
  `cteMsg_tel` varchar(2000) NOT NULL,
  `cteImgUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ctedata`
--

INSERT INTO `ctedata` (`id`, `cteName_en`, `cteName_tel`, `cteDesig_en`, `cteDesig_tel`, `cteMsg_en`, `cteMsg_tel`, `cteImgUrl`) VALUES
(0.366428, 'Smt C.Naga Rani ', 'శ్రీమతి సి.నాగ రాణి', 'Director of Technical Education, Govt.of AP', 'డైరెక్టర్ ఆఫ్ టెక్నికల్ ఎడ్యుకేషన్, ఆంధ్ర ప్రదేశ్ ప్రభుత్వం.', 'The Aim of Polytechnic Education is to provide Employment Oppurtunities to every Student.  Iam glad to inform you that, six thousand people got jobs this year. The courses are designed according to the requirements of the industry. Placement cells have been set up in Government Polytechnic Colleges. A centralized Placement Cell has been set up at the State Level to provide employment opportunities to the students.\nNew syllabus has been designed to prepare students for technology 4.0. As part of Skill Development, steps are being taken to teach courses like Survey, GPS Surveying, Drone Technology, Mechatronics, Advanced CAD, Artificial Intelligence and Machine Learning. At present 7 colleges have got NBA Recognition and other Government Polytechnics are in queue to get Recognition. ', 'పాలిటెక్నిక్ విద్య యొక్క లక్ష్యం ప్రతి విద్యార్థికి ఉపాధి అవకాశాలను అందించడం. ఈ సంవత్సరం ఆరు వేల మందికి ఉద్యోగాలు లభించాయని మీకు తెలియజేయడానికి సంతోషిస్తున్నాను. పరిశ్రమ అవసరాలకు అనుగుణంగా కోర్సులు రూపొందించబడ్డాయి. ప్రభుత్వ పాలిటెక్నిక్ కళాశాలల్లో ప్లేస్‌మెంట్ సెల్‌లను ఏర్పాటు చేశారు. విద్యార్థులకు ఉపాధి అవకాశాలు కల్పించేందుకు రాష్ట్ర స్థాయిలో కేంద్రీకృత ప్లేస్‌మెంట్ సెల్‌ను ఏర్పాటు చేశారు.\nసాంకేతికత 4.0 కోసం విద్యార్థులను సిద్ధం చేయడానికి కొత్త సిలబస్ రూపొందించబడింది. స్కిల్ డెవలప్‌మెంట్‌లో భాగంగా సర్వే, జీపీఎస్ సర్వేయింగ్, డ్రోన్ టెక్నాలజీ, మెకాట్రానిక్స్, అడ్వాన్స్‌డ్ క్యాడ్, ఆర్టిఫిషియల్ ఇంటెలిజెన్స్, మెషిన్ లెర్నింగ్ వంటి కోర్సులను బోధించేందుకు చర్యలు తీసుకుంటున్నారు. ప్రస్తుతం 7 కళాశాలలు ఎన్‌బిఎ గుర్తింపు పొందగా, ఇతర ప్రభుత్వ పాలిటెక్నిక్‌లు గుర్తింపు పొందేందుకు క్యూలో ఉన్నాయి.', 'ctedata/img');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `deptId` float NOT NULL,
  `deptCode` varchar(30) NOT NULL,
  `deptName_en` varchar(100) NOT NULL,
  `deptName_tel` varchar(100) NOT NULL,
  `deptIntro_en` varchar(4800) NOT NULL,
  `deptIntro_tel` varchar(4800) NOT NULL,
  `deptVision_en` varchar(1000) NOT NULL,
  `deptVision_tel` varchar(1000) NOT NULL,
  `deptMission_en` varchar(2000) NOT NULL,
  `deptMission_tel` varchar(2000) NOT NULL,
  `deptEmail` varchar(100) NOT NULL,
  `yearAdmStrength` int(11) NOT NULL,
  `deptLogoUrl` varchar(200) NOT NULL,
  `deptCurrFileUrl` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`deptId`, `deptCode`, `deptName_en`, `deptName_tel`, `deptIntro_en`, `deptIntro_tel`, `deptVision_en`, `deptVision_tel`, `deptMission_en`, `deptMission_tel`, `deptEmail`, `yearAdmStrength`, `deptLogoUrl`, `deptCurrFileUrl`) VALUES
(0.945355, 'DCME', 'Department of Computer Engineering', 'డిపార్ట్మెంట్ అఫ్ కంప్యూటర్ ఇంజనీరింగ్', 'Diploma in Computer Engineering: A specialized technical program that equips students with essential knowledge and skills in computer hardware, software, networking, and programming. This practical-oriented course trains individuals to become competent professionals capable of designing, troubleshooting, and maintaining computer systems, fostering a strong foundation for a career in the rapidly evolving field of technology.\n\nA diploma in computer engineering provides a strong foundation for various entry-level positions in the technology industry, such as computer technician, network support specialist, software support engineer, and system administrator. It also serves as a stepping stone for those who wish to pursue higher education or further specialize in specific areas of computer engineering or related fields like computer science, electronics, or information technology.', 'డిప్లొమా ఇన్ కంప్యూటర్ ఇంజనీరింగ్: కంప్యూటర్ హార్డ్‌వేర్, సాఫ్ట్‌వేర్, నెట్‌వర్కింగ్ మరియు ప్రోగ్రామింగ్‌లలో విద్యార్థులకు అవసరమైన జ్ఞానం మరియు నైపుణ్యాలను సమకూర్చే ప్రత్యేక సాంకేతిక కార్యక్రమం. ఈ ప్రాక్టికల్-ఓరియెంటెడ్ కోర్సు, వేగంగా అభివృద్ధి చెందుతున్న సాంకేతిక రంగంలో కెరీర్‌కు బలమైన పునాదిని పెంపొందించడం ద్వారా కంప్యూటర్ సిస్టమ్‌ల రూపకల్పన, ట్రబుల్‌షూటింగ్ మరియు నిర్వహణ సామర్థ్యం గల సమర్థ నిపుణులుగా మారేందుకు వ్యక్తులకు శిక్షణనిస్తుంది.\n\nకంప్యూటర్ ఇంజనీరింగ్‌లో డిప్లొమా అనేది కంప్యూటర్ టెక్నీషియన్, నెట్‌వర్క్ సపోర్ట్ స్పెషలిస్ట్, సాఫ్ట్‌వేర్ సపోర్ట్ ఇంజనీర్ మరియు సిస్టమ్ అడ్మినిస్ట్రేటర్ వంటి సాంకేతిక పరిశ్రమలో వివిధ ఎంట్రీ-లెవల్ స్థానాలకు బలమైన పునాదిని అందిస్తుంది. ఉన్నత విద్యను అభ్యసించాలనుకునే వారికి లేదా కంప్యూటర్ ఇంజినీరింగ్ లేదా కంప్యూటర్ సైన్స్, ఎలక్ట్రానిక్స్ లేదా ఇన్ఫర్మేషన్ టెక్నాలజీ వంటి సంబంధిత రంగాలలో మరింత నైపుణ్యం పొందాలనుకునే వారికి కూడా ఇది మెట్ల రాయిగా ఉపయోగపడుతుంది.', 'To provide a strong theoretical and practical background to the students of computer science discipline with an emphasis on software development.', 'సాఫ్ట్ వేర్ అభివృద్ధిపై ఒక ఉద్యోగితో కంప్యూటర్ సైన్సెస్ డిసీజ్ యొక్క స్టూడెంట్స్కు ఒక స్ట్రాంగ్ థొరెటికల్ మరియు ప్రాక్టికల్ బ్యాక్గ్రౌండ్ను రూపొందించడం.', '1.To produce quality engineers by providing state-of-the-art technical education.\n\n2.To partner and collaborate with industry, government, and R&D institutes to develop new knowledge and sustainable technologies and serve as an engine for facilitating the nation\'s economic development.\n\n3.To impart personality development skills to students that will help them to succeed and lead.\n', '1. స్టేట్-ఆఫ్-థీ-ఆర్ట్-టెక్నికల్ ఎడ్యుకేషన్ను ప్రొవైడింగ్ చేయడం ద్వారా క్వాలిటీ ఇంజనీర్లకు.\n\n2. పరిశ్రమతో భాగస్వామ్యం మరియు సహకారం, ప్రభుత్వం, జాతీయ ఆర్థిక అభివృద్ధిని సులభతరం చేయడానికి కొత్త పరిజ్ఞానాన్ని మరియు స్థిరమైన సాంకేతిక పరిజ్ఞానాన్ని అభివృద్ధి చేయడానికి మరియు ఒక ఇంజినీరింగ్గా సేవ చేయడానికి పరిశోధన మరియు పరిశోధన సంస్థలు.\n\n3. విద్యార్థులకు విజయాలు సాధించడానికి మరియు నడిపించడానికి సహాయపడే వ్యక్తిగత అభివృద్ధి నైపుణ్యాలను పెంపొందించడం.\n', 'gpt154.dcme@gmail.com', 33, 'dept/logo/DCME', 'dept/curriculum/DCME'),
(0.242089, 'DECE', 'Department of Electronics and Communication Engineering', 'డిపార్ట్మెంట్ అఫ్ ఎలక్ట్రానిక్స్ అండ్ కమ్యూనికేషన్ ఇంజనీరింగ్', 'Electronics and Communications Engineering (ECE) involves researching, designing, developing, and testing electronic equipment used in various systems. Electronics and Communications engineers also conceptualise and oversee the manufacturing of communications and broadcast systems', 'ఎలక్ట్రానిక్స్ అండ్ కమ్యూనికేషన్స్ ఇంజనీరింగ్ (ECE) వివిధ వ్యవస్థలలో ఉపయోగించే ఎలక్ట్రానిక్ పరికరాలను పరిశోధించడం, రూపకల్పన చేయడం, అభివృద్ధి చేయడం మరియు పరీక్షించడం. ఎలక్ట్రానిక్స్ అండ్ కమ్యూనికేషన్స్ ఇంజనీర్లు కమ్యూనికేషన్స్ అండ్ బ్రాడ్కాస్ట్ సిస్టమ్స్ తయారీని కూడా భావన చేసి పర్యవేక్షిస్తారు', 'To produce creative students with social responsibility who can address the global challenges in the field of Electronics and Communication Engineering.  ', 'ఎలక్ట్రానిక్స్ అండ్ కమ్యూనికేషన్ ఇంజనీరింగ్ రంగంలో ప్రపంచ సవాళ్లను పరిష్కరించగల సామాజిక బాధ్యత కలిగిన సృజనాత్మక విద్యార్థులను తయారు చేయడం.', 'By facilitating the students with an environment of academicfreedom through student-centric learning approaches (Student Centric Learning). By providzing theoretical and practical foundations besides designand development skills', 'విద్యార్ధి కేంద్రీకృత అభ్యాస విధానాల ద్వారా (విద్యార్థి సెంట్రిక్ లెర్నింగ్) విద్యావిషయక స్వేచ్ఛా వాతావరణాన్ని విద్యార్థులకు సులభతరం చేయడం ద్వారా. డిజైన్ మరియు అభివృద్ధి నైపుణ్యాలతో పాటు సైద్ధాంతిక మరియు ఆచరణాత్మక పునాదులను ప్రోత్సహించడం ద్వారా', 'gpt154.dece@gmail.com', 33, 'dept/logo/DECE', 'dept/curriculum/DECE'),
(0.797251, 'DIT', 'Department of Information Technology', 'డిపార్ట్మెంట్  అఫ్ ఇన్ఫర్మేషన్ టెక్నాలజీ', 'Information technology (IT) is the use of any computers, storage, networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data.', 'ఇన్ఫర్మేషన్ టెక్నాలజీ (IT) ఏ కంప్యూటర్లు, నిల్వ, నెట్వర్కింగ్ మరియు ఇతర భౌతిక పరికరాలు, మౌలిక సదుపాయాలు మరియు ప్రక్రియలు సృష్టించడానికి, ప్రాసెస్, నిల్వ, సురక్షిత మరియు ఎలక్ట్రానిక్ డేటా యొక్క అన్ని రకాల మార్పిడి.', 'undertake collaborative projects which offer opportunities for long-term interaction with academia and industry. Dept. of IT Vision:To contribute to the society through excellence in scientific andknowledge-based education utilizing the potential of InformationTechnology with a deep passion for wisdom, culture and values.th a deep passion for wisdom, culture and values.', 'విద్యావేత్తలు, పరిశ్రమలతో దీర్ఘకాలిక సంప్రదింపులకు అవకాశాలను అందించే సహకార ప్రాజెక్టులను చేపట్టడం. ఐటి విజన్ విభాగం: విజ్ఞానం పట్ల లోతైన అభిరుచితో InformationTechnology సామర్థ్యాన్ని ఉపయోగించి శాస్త్రీయ మరియు విజ్ఞాన ఆధారిత విద్యలో నైపుణ్యం ద్వారా సమాజానికి దోహదం చేయడం, సంస్కృతి మరియు values.th - జ్ఞానం కోసం ఒక లోతైన అభిరుచి, సంస్కృతి మరియు విలువలు.', 'To promote all-round growth of an individual by creating futuristic environment that fosters critical thinking, dynamism and innovation to transform them into globally competitive professionals. ', 'విమర్శనాత్మక ఆలోచన, చురుకుదనం మరియు ఆవిష్కరణలను ప్రోత్సహించే భవిష్యత్ వాతావరణాన్ని సృష్టించడం ద్వారా ఒక వ్యక్తి యొక్క అన్ని-చుట్టూ వృద్ధిని ప్రోత్సహించడం, వాటిని ప్రపంచ పోటీ నిపుణులగా మార్చడం.', 'Gpt154.dit@gmail.com', 0, 'dept/logo/DIT', 'dept/curriculum/DIT'),
(0.496978, 'DTT', 'Department of Textile Technology', 'డిపార్ట్మెంట్ అఫ్ టెక్స్‌టైల్ టెక్నాలజీ', 'The Department of Textile Technology was established in the year 2008 in Government Polytechnic, Obulavaripalli, with a purport of providing world class education in the field of Textiles. The institute has industrial collaboration for its specialized areas of study and this has positioned the institution as the harbinger for progressive changes and innovations.', 'టెక్స్‌టైల్ రంగంలో ప్రపంచ స్థాయి విద్యను అందించాలనే ఉద్దేశ్యంతో ఓబులవారిపల్లిలోని ప్రభుత్వ పాలిటెక్నిక్‌లో 2008లో టెక్స్‌టైల్ టెక్నాలజీ విభాగం ఏర్పాటైంది. ఇన్స్టిట్యూట్ దాని ప్రత్యేక అధ్యయన రంగాలకు పారిశ్రామిక సహకారాన్ని కలిగి ఉంది మరియు ఇది ప్రగతిశీల మార్పులు మరియు ఆవిష్కరణలకు సంస్థను దూతగా నిలిపింది.', 'To explore and develop novel areas of textile applications by conducting world class research.', 'ప్రపంచ స్థాయి పరిశోధనను నిర్వహించడం ద్వారా టెక్స్‌టైల్ అప్లికేషన్‌ల యొక్క నవల రంగాలను అన్వేషించడం మరియు అభివృద్ధి చేయడం.', 'To create competent manpower in emerging areas of textiles by imparting quality education through classroom teachings and extended training programs.', 'తరగతి గది బోధనలు మరియు విస్తరించిన శిక్షణా కార్యక్రమాల ద్వారా నాణ్యమైన విద్యను అందించడం ద్వారా వస్త్రాల అభివృద్ధి చెందుతున్న రంగాలలో సమర్థ మానవశక్తిని సృష్టించడం.', 'gpt154@gmail.com', 0, 'dept/logo/DTT', NULL),
(0.217428, 'GENERAL', 'Department of General Section', 'డిపార్ట్మెంట్ అఫ్ జనరల్ సెక్షన్ ', 'The department of General subjects has been part of this institution since its inception. The department consists of faculties of English, Maths, Physics and Chemistry. The department of Technical education has included these subjects in the diploma course in', 'డిపార్ట్మెంట్ ఆఫ్ జనరల్ సబ్జెక్ట్స్ ప్రారంభం నుంచి ఈ సంస్థలో భాగంగా ఉన్నాయి. ఈ విభాగంలో ఇంగ్లిష్, మ్యాథ్స్, ఫిజిక్స్, కెమిస్ట్రీ విభాగాలున్నాయి. సాంకేతిక విద్యాశాఖ ఈ అంశాలను డిప్లొమా కోర్సులో చేర్చింది', 'The department of Technical education has included these subjects in the diploma course in order to make the students grasp the essentials of Maths, Physics and Chemistry as these are the preliminaries of technical subjects.', 'మ్యాథ్స్, ఫిజిక్స్, కెమిస్ట్రీ సబ్జెక్టులకు అవసరమైన అంశాలను విద్యార్థులు అర్థం చేసుకునేలా డిప్లొమా కోర్సులో వీటిని చేర్చారు.', 'Communicative English is part of the curriculum because of its key role in its technical field. Academics:', 'కమ్యూనికేటివ్ ఇంగ్లీష్ దాని సాంకేతిక రంగంలో కీలక పాత్ర కారణంగా పాఠ్యాంశాల్లో భాగం. విద్యావేత్తలు:', 'gptobvp154@gmail.com', 0, 'dept/logo/GENERAL', '');

-- --------------------------------------------------------

--
-- Table structure for table `deptsstructure`
--

CREATE TABLE `deptsstructure` (
  `deptId` double NOT NULL,
  `deptHOD` int(2) NOT NULL,
  `deptSrLect` int(2) NOT NULL,
  `deptLects` int(2) NOT NULL,
  `deptInstrs` int(2) NOT NULL,
  `deptContLectrs` int(2) NOT NULL,
  `deptCode` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `deptsstructure`
--

INSERT INTO `deptsstructure` (`deptId`, `deptHOD`, `deptSrLect`, `deptLects`, `deptInstrs`, `deptContLectrs`, `deptCode`) VALUES
(0.945355, 1, 1, 4, 0, 0, 'DCME'),
(0.242089, 1, 1, 5, 1, 0, 'DECE'),
(0.797251, 1, 0, 4, 0, 0, 'DIT'),
(0.496978, 0, 1, 0, 0, 0, 'DTT'),
(0.217428, 1, 1, 3, 0, 1, 'GENERAL');

-- --------------------------------------------------------

--
-- Table structure for table `eventsdata`
--

CREATE TABLE `eventsdata` (
  `id` double NOT NULL,
  `eventName_en` varchar(100) NOT NULL,
  `eventName_tel` varchar(100) NOT NULL,
  `eventDesc_en` varchar(3000) NOT NULL,
  `eventDesc_tel` varchar(3000) NOT NULL,
  `eventDate` varchar(20) NOT NULL,
  `eventImgUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eventsdata`
--

INSERT INTO `eventsdata` (`id`, `eventName_en`, `eventName_tel`, `eventDesc_en`, `eventDesc_tel`, `eventDate`, `eventImgUrl`) VALUES
(0.140576, 'Teachers Day Celebration', 'ఉపాధ్యాయుల దినోత్సవం వేడుక', 'Teachers\' Day in India is celebrated on 5th September to commemorate the birth anniversary of Dr. Sarvepalli Radhakrishnan', 'సర్వేపల్లి రాధాకృష్ణన్ జయంతిని పురస్కరించుకుని సెప్టెంబర్ 5న భారతదేశంలో ఉపాధ్యాయ దినోత్సవం జరుపుకుంటారు', '2022-09-02', 'events/img/0.140576'),
(0.454458, 'International Yoga Day Celebrations', 'అంతర్జాతీయ యోగా దినోత్సవ వేడుకలు', 'The International Day of Yoga has been celebrated across the world annually on June 21 since 2015, following its inception in the United Nations General Assembly in 2014.Yoga is a physical, mental and spiritual practice which originated in ancient India.', '2014లో ఐక్యరాజ్యసమితి జనరల్ అసెంబ్లీలో ప్రారంభమైన తర్వాత 2015 నుండి జూన్ 21న అంతర్జాతీయ యోగా దినోత్సవాన్ని ప్రపంచవ్యాప్తంగా జరుపుకుంటున్నారు. యోగా అనేది ప్రాచీన భారతదేశంలో ఉద్భవించిన భౌతిక, మానసిక మరియు ఆధ్యాత్మిక అభ్యాసం.', '2023-06-21', 'events/img/0.454458'),
(0.637405, 'Independance Day Celebrations ', 'స్వాతంత్య్ర దినోత్సవ వేడుకలు', 'All the Staff and Students of Government Polytechnic, Obulavaripalli participted in Independence day Celebrations in the Institute. Prizes  were distributed to the Students branch wise.', 'ప్రభుత్వ పాలిటెక్నిక్, ఓబులవారిపల్లిలోని సిబ్బంది మరియు విద్యార్థులందరూ ఇన్‌స్టిట్యూట్‌లో స్వాతంత్య్ర దినోత్సవ వేడుకల్లో పాల్గొన్నారు. బ్రాంచ్‌ల వారీగా విద్యార్థులకు బహుమతులు అందజేశారు.', '2023-08-15', 'events/img/0.637405'),
(0.806535, 'National Deworming Day ', 'జాతీయ నులిపురుగుల నివారణ దినోత్సవం', 'On the occasion of National Deworming Day, diploma students were administered deworming tablets on 14/03/2023. The event was organised by the health department from the Andhra pradesh Government.', 'జాతీయ నులిపురుగుల నివారణ దినోత్సవం సందర్భంగా డిప్లొమా విద్యార్థులకు 14/03/2023న నులిపురుగుల నివారణ మాత్రలు వేశారు. ఆంధ్రప్రదేశ్ ప్రభుత్వ ఆరోగ్య శాఖ ఈ కార్యక్రమాన్ని నిర్వహించింది.', '2023-03-14', 'events/img/0.806535'),
(0.809278, 'Celebrations on Birth Anniversary of \"Andhra Kesari Tanguturi Prakasham Panthulu\"', '\"ఆంధ్రకేసరి టంగుటూరి ప్రకాశం పంతులు\" జయంతి వేడుకలు', 'All the Staff and Students of Government Polytechnic, Obulavaripalli Celebrated the Birth Anniversary of \"Andhra Kesari Tanguturi Prakasham Panthulu\" on 23-08-2023. Government of Andhra Pradesh observed this day as State function.', '23-08-2023న \"ఆంధ్రకేసరి టంగుటూరి ప్రకాశం పంతులు\" జయంతిని ఓబులవారిపల్లి ప్రభుత్వ పాలిటెక్నిక్ సిబ్బంది మరియు విద్యార్థులు అందరూ ఘనంగా నిర్వహించారు. ఆంధ్రప్రదేశ్ ప్రభుత్వం ఈ రోజును రాష్ట్ర విధిగా నిర్వహించింది.', '2023-08-23', 'events/img/0.809278'),
(0.874934, 'Women’s day Celebration', 'మహిళా దినోత్సవం వేడుక', 'It is a day when women are recognized for their achievements without regard to divisions, whether national, ethnic, linguistic, cultural, economic or political', 'జాతీయ, జాతి, భాషా, సాంస్కృతిక, ఆర్థిక, రాజకీయ భేదాలు లేకుండా మహిళలు సాధించిన విజయాలకు గుర్తింపు లభించిన రోజు', '2023-03-08', 'events/img/0.874934'),
(0.969612, 'World Nature Conservation Day', 'ప్రపంచ ప్రకృతి పరిరక్షణ దినోత్సవం', 'All the Staff and Students of the Government Polytechnic, Obulavaripalli  planted Trees in Institution premises on Account of World Nature Conservation Day (July 28th), in collaboration with the AP State Police Department, Obulavaripalli.', 'ప్రపంచ ప్రకృతి పరిరక్షణ దినోత్సవం (జూలై 28) సందర్భంగా ఓబులవారిపల్లిలోని ప్రభుత్వ పాలిటెక్నిక్‌లోని సిబ్బంది, విద్యార్థులు అందరూ కలిసి ఏపీ రాష్ట్ర పోలీసు శాఖ ఓబులవారిపల్లి సహకారంతో సంస్థ ఆవరణలో మొక్కలు నాటారు.', '2023-07-28', 'events/img/0.969612');

-- --------------------------------------------------------

--
-- Table structure for table `facultydata`
--

CREATE TABLE `facultydata` (
  `deptCode` varchar(30) NOT NULL,
  `id` double NOT NULL,
  `facName_en` varchar(100) NOT NULL,
  `facName_tel` varchar(100) NOT NULL,
  `facDesgn_en` varchar(100) NOT NULL,
  `facDesgn_tel` varchar(100) NOT NULL,
  `facQual_en` varchar(100) NOT NULL,
  `facQual_tel` varchar(100) NOT NULL,
  `facExp` int(11) NOT NULL,
  `facImgUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `facultydata`
--

INSERT INTO `facultydata` (`deptCode`, `id`, `facName_en`, `facName_tel`, `facDesgn_en`, `facDesgn_tel`, `facQual_en`, `facQual_tel`, `facExp`, `facImgUrl`) VALUES
('GENERAL', 0.161332, 'D.Rajasekhar', 'డి. రాజశేఖర్', 'Librarian', 'గ్రంథపాలకుడు', 'M.S.C Physics', 'ఎమ్మెస్సీ ఫిజిక్స్', 10, 'facultydata/img/GENERAL/faculty/D.Rajasekhar'),
('GENERAL', 0.344262, 'A Praveen Kumar', 'అల్లీ ప్రవీణ్ కుమార్', 'Lecturer', 'ఉపన్యాసకుడు', 'M.S.C', 'ఎమ్మెస్సీ', 5, 'facultydata/img/GENERAL/faculty/ALLI PRAVEEN KUMAR'),
('DCME', 0.391442, 'C.Devaraj', 'సి. దేవరాజ్', 'Head of Department', 'విభాగం అధిపతి', 'M.Tech', 'ఎంటెక్', 27, 'facultydata/img/DCME/faculty/C.Devaraj'),
('GENERAL', 0.408487, 'A Praveen Kumar', 'అల్లీ ప్రవీణ్ కుమార్', 'Physical Director', 'ఫిజికల్ డైరెక్టర్', 'M.S.C', 'ఎమ్మెస్సీ', 5, 'facultydata/img/GENERAL/faculty/A Praveen Kumar'),
('DIT', 0.423858, 'K.Jhansi Rani', 'కె. జాన్సీ రానీ', 'Head of Department', 'విభాగం అధిపతి', 'M.Tech', 'ఎంటెక్', 11, 'facultydata/img/DIT/faculty/K.Jhansi rani'),
('DTT', 0.532039, 'T.Ravi Kumar', 'టి.రవి కుమార్', 'Senior Lecturer', 'సీనియర్ ఉపన్యాసకుడు', 'B.Tech', 'బి.టెక్', 11, 'facultydata/img/DTT/faculty/T.Ravi Kumar'),
('GENERAL', 0.58454, 'U.Subramanyam', 'యు. సుబ్రహ్మణ్యం', 'Head of Department', 'విభాగం అధిపతి', 'M.Sc.', 'ఎమ్మెస్సీ', 27, 'facultydata/img/GENERAL/faculty/U.Subramanyam'),
('DECE', 0.975696, 'T.Lalitha', 'టి. లలిత', 'Head of Department', 'విభాగం అధిపతి', 'M.Tech,ECE', 'ఎంటెక్, ఈసీఈ', 30, 'facultydata/img/DECE/faculty/T.Lalitha'),
('GENERAL', 0.980123, 'D.Rajasekhar', 'డి. రాజశేఖర్', 'Lecturer', 'ఉపన్యాసకుడు', 'M.Sc.', 'ఎమ్మెస్సీ ', 10, 'facultydata/img/GENERAL/faculty/D.rajasekhar'),
('DCME', 1.391442, 'M.Maruthi Vara Prasad', 'ఎం. మారుతి వరప్రసాద్', 'Lecturer', 'ఉపన్యాసకుడు', 'B.Tech', 'బి టెక్', 11, 'facultydata/img/DCME/faculty/M.Maruthi Vara Prasad'),
('DIT', 1.423858, 'S.Masthan Vali', 'ఎస్.మస్తాన్ వల్లి', 'Lecturer', 'ఉపన్యాసకుడు', 'M.Tech', 'ఎంటెక్', 10, 'facultydata/img/DIT/faculty/S.masthan valli'),
('GENERAL', 1.58454, 'M.Kiran kumar Reddy', 'ఎం.కిరణ్ కుమార్ రెడ్డి', 'Senior Lecturer', 'సీనియర్ ఉపన్యాసకుడు', 'M.Sc.', 'ఎమ్మెస్సీ', 27, 'facultydata/img/GENERAL/faculty/M.Kiran kumar Reddy'),
('DCE', 1.60061, 'K.Phaneedra Kumar', 'కె. ఫణీద్ర కుమార్', 'Lecturer', 'ఉపన్యాసకుడు', 'M.Tech', 'ఎం.టెక్', 9, 'facultydata/img/DCE/faculty/K.Phaneedra Kumar'),
('DCME', 2.391442, 'B.Harinath', 'బి. హరినాథ్', 'Lecturer', 'ఉపన్యాసకుడు', 'B.Tech', 'బి టెక్', 10, 'facultydata/img/DCME/faculty/B.Harinath'),
('DIT', 2.423858, 'P.Lakshmi Kanth Reddy', 'పి.లక్ష్మి కాంత్ రెడ్డి', 'Lecturer', 'ఉపన్యాసకుడు', 'B.Tech', 'బీటెక్', 10, 'facultydata/img/DIT/faculty/P.lakshmi kanth reddy'),
('GENERAL', 2.58454, 'Y.Yesuratnam', 'వై.యేసురత్నం', 'Lecturer', 'ఉపన్యాసకుడు', 'M.A.,B.Ed.', 'ఎంఏ, బీఈడీ', 10, 'facultydata/img/GENERAL/faculty/Y.Yesuratnam'),
('DECE', 2.975696, 'T.Raghavendra ', 'టి. రాఘవేంద్రనాయుడు', 'Lecturer', 'ఉపన్యాసకుడు', 'B.Tech', 'బీటెక్', 11, 'facultydata/img/DECE/faculty/T.Raghavendra '),
('DCME', 3.391442, 'A.Chakrapani Reddy', 'ఎ. చక్రపాణి రెడ్డి', 'Lecturer', 'ఉపన్యాసకుడు', 'M.Tech', 'ఎంటెక్', 10, 'facultydata/img/DCME/faculty/A.Chakrapani Reddy'),
('DIT', 3.423858, 'B.Harika', 'బి. హారిక', 'Lecturer', 'ఉపన్యాసకుడు', 'M.Tech', 'ఎంటెక్', 10, 'facultydata/img/DIT/faculty/B.Harika'),
('DECE', 3.975696, 'C.C.Kalyani', 'సి. సి. కల్యాణి', 'Lecturer', 'ఉపన్యాసకుడు', 'M.Tech', 'ఎంటెక్', 10, 'facultydata/img/DECE/faculty/C.C.Kalyani'),
('DCME', 4.391442, 'M.Prameela', 'ఎం.ప్రమీల', 'Senior Lecturer', 'సీనియర్ ఉపన్యాసకుడు', 'Ph.D', 'పి హెచ్. డి', 15, 'facultydata/img/DCME/faculty/M.Prameela'),
('DIT', 4.423858, 'B.Malleeswari', 'బి.మల్లీశ్వరి', 'Lecturer', 'ఉపన్యాసకుడు', 'B.Tech', 'బి.టెక్', 10, 'facultydata/img/DIT/faculty/B.Malleeswari'),
('DECE', 4.975696, 'J.Vidya Sri', 'జె.విద్యా శ్రీ', 'Senior Lecturer', 'సీనియర్ ఉపన్యాసకుడు', 'M.Tech', 'ఎంటెక్', 24, 'facultydata/img/DECE/faculty/J.Vidya Sri'),
('DCME', 5.391442, 'D.Sireesha', 'డి.శిరీష', 'Lecturer', 'ఉపన్యాసకుడు', 'M.Tech', 'ఎంటెక్', 1, 'facultydata/img/DCME/faculty/D.Sireesha'),
('DECE', 5.975696, 'M.Pradeep Chandra', 'ఎం. ప్రదీప్ చంద్ర', 'Lecturer', 'ఉపన్యాసకుడు', 'B.Tech', 'బి.టెక్', 10, 'facultydata/img/DECE/faculty/M.Pradeep Chandra'),
('DECE', 6.975696, 'M.Sreekanth Reddy', 'ఎం.శ్రీకాంత్ రెడ్డి', 'Lecturer', 'ఉపన్యాసకుడు', 'M.Tech', 'ఎంటెక్', 10, 'facultydata/img/DECE/faculty/M.Srikanth Reddy'),
('DECE', 7.975696, 'D.Madhusudhan Rao', 'డి.మధుసూధన్ రావు', 'Instructor', 'బోధకుడు', 'Electrical NCVT', 'ఎలక్ట్రికల్ NCVT', 12, 'facultydata/img/DECE/faculty/D.Madhusudhan Rao'),
('DECE', 8.975696, 'K.Phaneedra Kumar', 'కె. ఫణీద్ర కుమార్', 'Lecturer', 'ఉపన్యాసకుడు', 'M.Tech', 'ఎం.టెక్', 11, 'facultydata/img/DECE/faculty/K.Phaneedra Kumar');

-- --------------------------------------------------------

--
-- Table structure for table `faqdata`
--

CREATE TABLE `faqdata` (
  `id` double NOT NULL,
  `qno` int(11) NOT NULL,
  `faqQstn_en` varchar(1000) NOT NULL,
  `faqQstn_tel` varchar(1000) NOT NULL,
  `faqAns_en` varchar(5000) NOT NULL,
  `faqAns_tel` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faqdata`
--

INSERT INTO `faqdata` (`id`, `qno`, `faqQstn_en`, `faqQstn_tel`, `faqAns_en`, `faqAns_tel`) VALUES
(0.153543, 1, 'In How many branches, Admissions are there in Government Polytechnic, obulavaripalli?', 'ఓబులవారిపల్లిలోని ప్రభుత్వ పాలిటెక్నిక్‌లో ఎన్ని శాఖల్లో ప్రవేశాలు ఉన్నాయి?', 'Two branches. namely : 1. Diploma in Computer Engineering 2. Diploma in  Electronics & communication Engineering.', 'రెండు శాఖలు. అవి : 1. డిప్లొమా ఇన్ కంప్యూటర్ ఇంజనీరింగ్ 2. డిప్లొమా ఇన్ ఎలక్ట్రానిక్స్ & కమ్యూనికేషన్ ఇంజనీరింగ్.'),
(1.572052, 2, 'What are the college timings?', 'కాలేజీ టైమింగ్స్ ఏమిటి?', 'College Timings are from 9:30AM to 4:00PM', 'కళాశాల సమయాలు 9:30AM నుండి 4:00PM వరకు'),
(2.832917, 3, 'What is the intake of seats for Computer Engineering and Electronics and communication engineering branches per year?', 'కంప్యూటర్ ఇంజినీరింగ్ మరియు ఎలక్ట్రానిక్స్ మరియు కమ్యూనికేషన్ ఇంజనీరింగ్ బ్రాంచ్‌లకు సంవత్సరానికి సీట్లు ఎంత?', '33 seats for DCME Branch per year. 33 seats for DECE Branch per year.  totally 66 seats per year.', 'DCME బ్రాంచ్‌కు సంవత్సరానికి 33 సీట్లు. సంవత్సరానికి DECE బ్రాంచ్‌కు 33 సీట్లు. ఏడాదికి మొత్తం 66 సీట్లు.'),
(4.683099, 4, 'Is there any hostel facility for boys and girls?', 'బాలబాలికలకు హాస్టల్ సౌకర్యం ఉందా?', 'Yes.\n1.For boys there is a BC-welfare hostel at Railway Kodur who Can accommodate around 60 boy students per year, of all categories.\n\n 2.For girls there is a BC-welfare hostel at  Rajampeta who can accommodate around 20 girl students per year, of all categories. ', 'అవును.\n1.బాలుర కోసం రైల్వే కోడూరులో ఒక BC-సంక్షేమ హాస్టల్ ఉంది, ఇందులో అన్ని వర్గాలలో సంవత్సరానికి 60 మంది బాలురు విద్యార్థులకు వసతి కల్పించవచ్చు.\n\n 2.బాలికల కోసం రాజంపేటలో బిసి-సంక్షేమ హాస్టల్ ఉంది, ఇందులో అన్ని వర్గాల వారు సంవత్సరానికి 20 మంది బాలికలకు వసతి కల్పిస్తారు.'),
(5.83699, 5, 'Is there any transport facility to Government Polytechnic, obulavaripalli?', 'ప్రభుత్వ పాలిటెక్నిక్, ఓబులవారిపల్లి కు రవాణా సౌకర్యం ఉందా?', 'No. But, through bus facility, we Can get down at Obulavaripalli junction and can reach institute through auto facility. alternatively, if you take train route,\nit is less than 1 km from Obulavaripalli railway station to the institute.', 'లేదు. కానీ, బస్సు సౌకర్యం ద్వారా, మేము ఓబులవారిపల్లి జంక్షన్‌లో దిగవచ్చు మరియు ఆటో సౌకర్యం ద్వారా ఇన్‌స్టిట్యూట్‌కి చేరుకోవచ్చు. ప్రత్యామ్నాయంగా, మీరు రైలు మార్గాన్ని తీసుకుంటే,\nఓబులవారిపల్లి  రైల్వే స్టేషన్ నుండి ఇన్‌స్టిట్యూట్‌కి 1 కి.మీ కంటే తక్కువ దూరంలో ఉంది.'),
(6.119506, 6, 'Is there any placements in the Government Polytechnic, Obulavaripalli?', 'ఓబులవారిపల్లి ప్రభుత్వ పాలిటెక్నిక్‌లో నియామకాలు ఉన్నాయా?', 'Yes. During final year, all the students are allowed to appear for various companies through online Exams, followed by Interview in person. If any Student got Seleted,They will be absorbed in that company \nwith a minimum package of 1.8 lakhs per annum to 2.5Lakhs Per Annum.', 'అవును. చివరి సంవత్సరంలో, విద్యార్థులందరూ ఆన్‌లైన్ పరీక్షల ద్వారా వివిధ కంపెనీలకు హాజరు కావడానికి అనుమతించబడ్డారు, ఆ తర్వాత వ్యక్తిగతంగా ఇంటర్వ్యూ చేస్తారు. ఎవరైనా విద్యార్థి ఎంపికైతే, వారు ఆ కంపెనీలో విలీనం చేయబడతారు\nసంవత్సరానికి 1.8 లక్షల నుండి సంవత్సరానికి 2.5 లక్షల వరకు కనీస ప్యాకేజీతో.');

-- --------------------------------------------------------

--
-- Table structure for table `ghostel`
--

CREATE TABLE `ghostel` (
  `id` double NOT NULL,
  `HostelName_en` varchar(100) NOT NULL,
  `HostelName_tel` varchar(100) NOT NULL,
  `HostelIntro_en` varchar(5000) NOT NULL,
  `HostelIntro_tel` varchar(5000) NOT NULL,
  `HostelAddr_en` varchar(1000) NOT NULL,
  `HostelAddr_tel` varchar(1000) NOT NULL,
  `HostelSup_en` varchar(100) NOT NULL,
  `HostelSup_tel` varchar(100) NOT NULL,
  `HostelPhno` varchar(10) NOT NULL,
  `HostelPhotoUrl` varchar(200) NOT NULL,
  `HostelExFacilities_en` varchar(500) NOT NULL,
  `HostelExFacilities_tel` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ghostelstructure`
--

CREATE TABLE `ghostelstructure` (
  `id` double NOT NULL,
  `gHostelSup` int(11) DEFAULT NULL,
  `gHostelMgr` int(11) DEFAULT NULL,
  `gHostelSrAsst` int(11) DEFAULT NULL,
  `gHostelJrAssts` int(11) DEFAULT NULL,
  `gHostelSubs` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ipsgmprizesdata`
--

CREATE TABLE `ipsgmprizesdata` (
  `id` double NOT NULL,
  `acdYear` varchar(10) NOT NULL,
  `stuPIN` varchar(20) NOT NULL,
  `stuName_en` varchar(100) NOT NULL,
  `stuName_tel` varchar(100) NOT NULL,
  `venueDetails_en` varchar(100) NOT NULL,
  `venueDetails_tel` varchar(100) NOT NULL,
  `sgName_en` varchar(100) NOT NULL,
  `sgName_tel` varchar(100) NOT NULL,
  `prizeDetails_en` varchar(100) NOT NULL,
  `prizeDetails_tel` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ipsgmprizesdata`
--

INSERT INTO `ipsgmprizesdata` (`id`, `acdYear`, `stuPIN`, `stuName_en`, `stuName_tel`, `venueDetails_en`, `venueDetails_tel`, `sgName_en`, `sgName_tel`, `prizeDetails_en`, `prizeDetails_tel`) VALUES
(0.56897, '2022-23', '22154-EC-027', 'M.HEMANTH KUMAR REDDY', 'ఎం.హేమంత్ కుమార్ రెడ్డీ', 'Gpt,Proddutur', 'జి పి టి ,ప్రొద్దుటూరు', 'Shortput', 'షార్ట్ పుట్', 'State level 2nd Prize ', 'రాష్ట్ర స్థాయి 2వ బహుమతి'),
(0.654235, '2022-23', '22154-CM-018', 'M.RAJA SEKHAR', 'ఎం. రాజా  శేఖర్', 'Gpt, Proddutura', 'జి పి టి ,ప్రొద్దుటూరు', 'Broad Jumpa', 'బ్రోడ్ జంప్', 'State level 2nd Prize ', 'రాష్ట్ర స్థాయి 2వ బహుమతి');

-- --------------------------------------------------------

--
-- Table structure for table `labsdata`
--

CREATE TABLE `labsdata` (
  `id` double NOT NULL,
  `deptCode` varchar(30) NOT NULL,
  `labName_en` varchar(100) NOT NULL,
  `labName_tel` varchar(100) NOT NULL,
  `labIntro_en` varchar(2000) NOT NULL,
  `labIntro_tel` varchar(2000) NOT NULL,
  `labImgUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `labsdata`
--

INSERT INTO `labsdata` (`id`, `deptCode`, `labName_en`, `labName_tel`, `labIntro_en`, `labIntro_tel`, `labImgUrl`) VALUES
(0.295605, 'DECE', 'Electronics Circuits Lab', 'ఎలక్ట్రానిక్స్ సర్క్యూట్లు ల్యాబ్', 'The objective of Electronic circuits laboratory is to get students familiarised with various electronic instruments and components.Students design and simulate preliminary electronic circuits then assemble,measure and evaluate the circuit characteristics using laboratory instruments through which they correlate the theoretical concepts with practical feasibility.The lab provides an opportunity for the students to develop essential skills such as circuit design, soldering,prototyping,testing and trouble shooting.It also enables students to conduct hands-on-projects fostering creativity and innovation. Thus the acquired knowledge guides them to implement various real time projects in the future.', 'ఎలక్ట్రానిక్ సర్క్యూట్‌ల ప్రయోగశాల యొక్క లక్ష్యం విద్యార్థులకు వివిధ ఎలక్ట్రానిక్ సాధనాలు మరియు భాగాలతో అవగాహన కల్పించడం. విద్యార్థులు ప్రాథమిక ఎలక్ట్రానిక్ సర్క్యూట్‌లను రూపొందించి, అనుకరిస్తారు, ఆపై ప్రయోగశాల పరికరాలను ఉపయోగించి సర్క్యూట్ లక్షణాలను సమీకరించడం, కొలవడం మరియు మూల్యాంకనం చేయడం ద్వారా వారు సైద్ధాంతిక భావనలను ఆచరణాత్మక సాధ్యతతో పరస్పరం అనుసంధానిస్తారు. విద్యార్థులకు సర్క్యూట్ డిజైన్, టంకం, ప్రోటోటైపింగ్, టెస్టింగ్ మరియు ట్రబుల్ షూటింగ్ వంటి అవసరమైన నైపుణ్యాలను అభివృద్ధి చేయడానికి అవకాశాన్ని అందిస్తుంది. ఇది సృజనాత్మకత మరియు ఆవిష్కరణలను పెంపొందించే ప్రాజెక్ట్‌లను ప్రయోగాత్మకంగా నిర్వహించడానికి విద్యార్థులను అనుమతిస్తుంది. అలా సంపాదించిన జ్ఞానం భవిష్యత్తులో వివిధ రియల్ టైమ్ ప్రాజెక్ట్‌లను అమలు చేయడానికి వారికి మార్గనిర్దేశం చేస్తుంది.', 'labsdata/img/DECE/labs/Electronics Circuits Lab'),
(0.34734, 'DCE', 'Electronics Lab', 'ఎలక్ట్రానిక్స్ ల్యాబ్', 'Electronic circuits lab\nDescription: The objective of this laboratory is to get students familiarised with various electronic instruments and components.Students design and simulate preliminary electronic circuits then assemble,measure and evaluate the circuit characteristics using laboratory instruments through which they correlate the theoretical concepts with practical feasibility.The lab provides an opportunity for the students to develop essential skills such as circuit design, soldering,prototyping,testing and trouble shooting.It also enables students to conduct hands-on-projects fostering creativity and innovation. Thus the acquired knowledge guides them to implement various real time projects in the future.	', 'ఎలక్ట్రానిక్ సర్క్యూట్ల ల్యాబ్\nవివరణ: ఈ ప్రయోగశాల యొక్క లక్ష్యం విద్యార్థులకు వివిధ ఎలక్ట్రానిక్ సాధనాలు మరియు భాగాలతో పరిచయం కలిగించడం.విద్యార్థులు ప్రాథమిక ఎలక్ట్రానిక్ సర్క్యూట్‌లను రూపొందించి, అనుకరిస్తారు, ఆపై ప్రయోగశాల పరికరాలను ఉపయోగించి సర్క్యూట్ లక్షణాలను సమీకరించడం, కొలవడం మరియు మూల్యాంకనం చేయడం ద్వారా వారు సైద్ధాంతిక భావనలను ఆచరణాత్మక సాధ్యతతో పరస్పరం అనుసంధానిస్తారు. ల్యాబ్ విద్యార్థులకు సర్క్యూట్ డిజైన్, టంకం, ప్రోటోటైపింగ్, టెస్టింగ్ మరియు ట్రబుల్ షూటింగ్ వంటి అవసరమైన నైపుణ్యాలను పెంపొందించడానికి అవకాశం కల్పిస్తుంది.సృజనాత్మకత మరియు ఆవిష్కరణలను పెంపొందించే ప్రాజెక్ట్‌లను ప్రయోగాత్మకంగా నిర్వహించేందుకు ఇది విద్యార్థులను అనుమతిస్తుంది. అలా సంపాదించిన జ్ఞానం భవిష్యత్తులో వివిధ రియల్ టైమ్ ప్రాజెక్ట్‌లను అమలు చేయడానికి వారికి మార్గనిర్దేశం చేస్తుంది\n', 'labsdata/img/DCE/labs/Electronics Lab'),
(0.662458, 'DCME', 'Computer lab', 'కంప్యూటర్ ల్యాబ్', 'Computer lab in Government Polytechnic,Obulavaripalli is a dedicated space equipped with computers and necessary technology to support hands-on learning, research, and practical training for students pursuing various technical courses. Computer lab serve as essential resources for students to gain practical experience in programming, software applications, simulations, and other technical skills relevant to their curriculum. They offer a controlled environment for experimentation, project work, and collaborative learning, helping students develop critical digital literacy and technical competencies that are crucial in today\'s technologically advanced world.', 'ప్రభుత్వ పాలిటెక్నిక్‌లోని ఓబులవారిపల్లిలోని కంప్యూటర్ ల్యాబ్ అనేది వివిధ సాంకేతిక కోర్సులను అభ్యసించే విద్యార్థులకు అభ్యాసం, పరిశోధన మరియు ఆచరణాత్మక శిక్షణ కోసం కంప్యూటర్లు మరియు అవసరమైన సాంకేతికతతో కూడిన ప్రత్యేక స్థలం. కంప్యూటర్ ల్యాబ్ విద్యార్థులకు వారి పాఠ్యాంశాలకు సంబంధించిన ప్రోగ్రామింగ్, సాఫ్ట్‌వేర్ అప్లికేషన్‌లు, సిమ్యులేషన్స్ మరియు ఇతర సాంకేతిక నైపుణ్యాలలో ఆచరణాత్మక అనుభవాన్ని పొందేందుకు అవసరమైన వనరులు. వారు ప్రయోగాలు, ప్రాజెక్ట్ పని మరియు సహకార అభ్యాసం కోసం నియంత్రిత వాతావరణాన్ని అందిస్తారు, నేటి సాంకేతికంగా అభివృద్ధి చెందిన ప్రపంచంలో కీలకమైన క్లిష్టమైన డిజిటల్ అక్షరాస్యత మరియు సాంకేతిక సామర్థ్యాలను అభివృద్ధి చేయడంలో విద్యార్థులకు సహాయం చేస్తారు.', 'labsdata/img/DCME/labs/Computer lab'),
(0.860938, 'GENERAL', 'Chemistry Lab', 'రసాయన శాస్త్రం ప్రయోగశాల', 'This laboratory has all the necessary equipment for preparation of samples and standards for various analyses of liquid and solid samples. The laboratory houses traditional equipment including glassware, fume hoods, a muffle furnace, centrifuge, aggregate mill, and ovens.', 'ఈ ప్రయోగశాలలో ద్రవ మరియు ఘన నమూనాల వివిధ విశ్లేషణలకు నమూనాలు మరియు ప్రమాణాల తయారీకి అవసరమైన అన్ని పరికరాలు ఉన్నాయి. ప్రయోగశాలలో గాజుసామాను, ఫ్యూం హుడ్స్, మఫిల్ ఫర్నేస్, సెంట్రిఫ్యూజ్, అగ్రిగేట్ మిల్, ఓవెన్లతో సహా సాంప్రదాయ పరికరాలు ఉన్నాయి.', 'labsdata/img/GENERAL/labs/Chemistry Lab'),
(1.295605, 'DECE', 'Digital Electronics Lab', 'డిజిటల్ ఎలక్ట్రానిక్స్ ల్యాబ్', 'The Digital Electronics Laboratory is a state-of-the-art facility designed to provide students with a hands-on learning experience in the field of digital electronics. This laboratory is an integral part of engineering and computer science curricula, catering to students at various academic levels, from undergraduates to postgraduates. Its primary objective is to reinforce theoretical knowledge gained in lectures with practical applications and experiments, fostering a deeper understanding of digital circuits and systems.', 'డిజిటల్ ఎలక్ట్రానిక్స్ ల్యాబొరేటరీ అనేది డిజిటల్ ఎలక్ట్రానిక్స్ రంగంలో విద్యార్థులకు అభ్యాస అనుభవాన్ని అందించడానికి రూపొందించబడిన అత్యాధునిక సదుపాయం. ఈ ప్రయోగశాల ఇంజనీరింగ్ మరియు కంప్యూటర్ సైన్స్ పాఠ్యాంశాలలో అంతర్భాగంగా ఉంది, అండర్ గ్రాడ్యుయేట్ నుండి పోస్ట్ గ్రాడ్యుయేట్ వరకు వివిధ విద్యా స్థాయిలలో విద్యార్థులకు అందించబడుతుంది. డిజిటల్ సర్క్యూట్‌లు మరియు సిస్టమ్‌లపై లోతైన అవగాహనను పెంపొందించడం, ఆచరణాత్మక అనువర్తనాలు మరియు ప్రయోగాలతో ఉపన్యాసాలలో పొందిన సైద్ధాంతిక పరిజ్ఞానాన్ని బలోపేతం చేయడం దీని ప్రాథమిక లక్ష్యం.', 'labsdata/img/DECE/labs/Digital Electronics Lab'),
(1.662458, 'DCME', 'Computer Hardware and Networking Lab', 'కంప్యూటర్ హార్డ్‌వేర్ మరియు నెట్‌వర్కింగ్ ల్యాబ్', 'Computer Hardware and Networking Lab in Government Polytechnic, Obulavaripalli provides students with a hands-on learning environment to develop practical skills in understanding, assembling, troubleshooting, and maintaining computer hardware components and networking systems. This lab equips students with the technical knowledge and experience needed to excel in fields related to computer hardware, system maintenance, and network administration. Through real-world simulations and practical exercises, students gain a deep understanding of computer architecture, peripheral devices, hardware troubleshooting techniques, network setup, configuration, and security protocols. This practical exposure prepares students for the challenges of the evolving technology landscape and fosters their abilities to become skilled professionals in the field of computer hardware and networking.', 'ఓబులవారిపల్లి ప్రభుత్వ పాలిటెక్నిక్‌లోని కంప్యూటర్ హార్డ్‌వేర్ మరియు నెట్‌వర్కింగ్ ల్యాబ్ విద్యార్థులకు కంప్యూటర్ హార్డ్‌వేర్ భాగాలు మరియు నెట్‌వర్కింగ్ సిస్టమ్‌లను అర్థం చేసుకోవడం, అసెంబ్లింగ్ చేయడం, ట్రబుల్షూటింగ్ మరియు నిర్వహణలో ఆచరణాత్మక నైపుణ్యాలను పెంపొందించడానికి అభ్యాస వాతావరణాన్ని అందిస్తుంది. కంప్యూటర్ హార్డ్‌వేర్, సిస్టమ్ మెయింటెనెన్స్ మరియు నెట్‌వర్క్ అడ్మినిస్ట్రేషన్‌కు సంబంధించిన రంగాలలో రాణించడానికి అవసరమైన సాంకేతిక పరిజ్ఞానం మరియు అనుభవాన్ని ఈ ల్యాబ్ విద్యార్థులకు అందిస్తుంది. వాస్తవ ప్రపంచ అనుకరణలు మరియు ఆచరణాత్మక వ్యాయామాల ద్వారా, విద్యార్థులు కంప్యూటర్ ఆర్కిటెక్చర్, పరిధీయ పరికరాలు, హార్డ్‌వేర్ ట్రబుల్షూటింగ్ పద్ధతులు, నెట్‌వర్క్ సెటప్, కాన్ఫిగరేషన్ మరియు సెక్యూరిటీ ప్రోటోకాల్‌లపై లోతైన అవగాహన పొందుతారు. ఈ ప్రాక్టికల్ ఎక్స్‌పోజర్ అభివృద్ధి చెందుతున్న టెక్నాలజీ ల్యాండ్‌స్కేప్ యొక్క సవాళ్లకు విద్యార్థులను సిద్ధం చేస్తుంది మరియు కంప్యూటర్ హార్డ్‌వేర్ మరియు నెట్‌వర్కింగ్ రంగంలో నైపుణ్యం కలిగిన నిపుణులుగా మారడానికి వారి సామర్థ్యాలను ప్రోత్సహిస్తుంది.', 'labsdata/img/DCME/labs/Computer Hardware and Networking Lab'),
(1.860938, 'GENERAL', 'Physics Lab', 'ఫిజిక్స్ ప్రయోగశాల', 'Physics labs are also used by students who learn about the science through demonstration in a physics lab. Physics is primarily concerned with how motion, light, heat and force interact with energy and matter, so a physics lab has a variety of instruments used to conduct these kinds of experiments', 'ఫిజిక్స్ ల్యాబ్లో ప్రదర్శన ద్వారా సైన్స్ గురించి తెలుసుకున్న విద్యార్థులు ఫిజిక్స్ ల్యాబ్లను కూడా ఉపయోగిస్తారు. భౌతిక శాస్త్రం ప్రధానంగా శక్తి మరియు పదార్థంతో కదలిక, కాంతి, వేడి మరియు శక్తి ఎలా సంకర్షణ చెందుతుందో దానితో సంబంధం కలిగి ఉంటుంది, కాబట్టి ఒక భౌతిక ప్రయోగశాల ఈ రకమైన ప్రయోగాలను నిర్వహించడానికి ఉపయోగించే వివిధ రకాల పరికరాలను కలిగి ఉంటుంది', 'labsdata/img/GENERAL/labs/Physics Lab'),
(2.295605, 'DECE', 'Communications Systems Lab', 'కమ్యూనికేషన్స్ సిస్టమ్స్ ల్యాబ్', 'The communication Systems Laboratory intends to cover the basic understanding of functionalities of various block-sets involved in communication system. It involves to study Analog and digital modulation and demodulation techniques. The lab enables the students to familiarise with microwave devices and antennas. This lab provide an opportunity to handle microwave bench to perform various measurements. This lab enable students to simulate Analog and digital modulation circuits using simulation software.', 'కమ్యూనికేషన్ సిస్టమ్స్ లాబొరేటరీ కమ్యూనికేషన్ సిస్టమ్‌లో ప్రమేయం ఉన్న వివిధ బ్లాక్-సెట్‌ల కార్యాచరణల ప్రాథమిక అవగాహనను కవర్ చేయడానికి ఉద్దేశించబడింది. ఇది అనలాగ్ మరియు డిజిటల్ మాడ్యులేషన్ మరియు డీమోడ్యులేషన్ పద్ధతులను అధ్యయనం చేయడం. ల్యాబ్ విద్యార్థులకు మైక్రోవేవ్ పరికరాలు మరియు యాంటెన్నాలతో పరిచయం కలిగిస్తుంది. ఈ ల్యాబ్ వివిధ కొలతలను నిర్వహించడానికి మైక్రోవేవ్ బెంచ్‌ను నిర్వహించడానికి అవకాశాన్ని అందిస్తుంది. ఈ ల్యాబ్ విద్యార్థులను అనుకరణ సాఫ్ట్‌వేర్‌ని ఉపయోగించి అనలాగ్ మరియు డిజిటల్ మాడ్యులేషన్ సర్క్యూట్‌లను అనుకరించేలా చేస్తుంది.', 'labsdata/img/DECE/labs/Communications Systems Lab');

-- --------------------------------------------------------

--
-- Table structure for table `librarydata`
--

CREATE TABLE `librarydata` (
  `id` double NOT NULL,
  `libraryIntro_en` varchar(3000) NOT NULL,
  `libraryIntro_tel` varchar(3000) NOT NULL,
  `librarianMsg_en` varchar(1000) NOT NULL,
  `librarianMsg_tel` varchar(1000) NOT NULL,
  `libraryPhno` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `librarydata`
--

INSERT INTO `librarydata` (`id`, `libraryIntro_en`, `libraryIntro_tel`, `librarianMsg_en`, `librarianMsg_tel`, `libraryPhno`) VALUES
(0.872796, 'Library is a place, where the collection of books and other print materials are organized and maintained for reading , verifying and research purpose.\n\n', 'లైబ్రరీ అనేది పుస్తకాలు మరియు ఇతర ప్రింట్ మెటీరియల్ల సేకరణను నిర్వహించడం మరియు చదవడం, ధృవీకరించడం మరియు పరిశోధన ప్రయోజనం కోసం నిర్వహించబడే స్థలం.', 'Government Polytechnic, Obulavaripalli has a good collection of books in Library. it includes reference books,  technical magazines and journals etc. ', 'ప్రభుత్వ పాలిటెక్నిక్, ఓబులవారిపల్లి లైబ్రరీలో మంచి పుస్తకాల సేకరణ ఉంది. ఇందులో రిఫరెన్స్ పుస్తకాలు, సాంకేతిక పత్రికలు మరియు జర్నల్స్ మొదలైనవి ఉంటాయి.', 9652635832);

-- --------------------------------------------------------

--
-- Table structure for table `newsdata`
--

CREATE TABLE `newsdata` (
  `id` double NOT NULL,
  `newsItemTitle_en` varchar(100) NOT NULL,
  `newsItemTitle_tel` varchar(100) NOT NULL,
  `newsItemDesc_en` varchar(3000) NOT NULL,
  `newsItemDesc_tel` varchar(3000) NOT NULL,
  `newsItemDate` varchar(100) NOT NULL,
  `newsItemImgUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsdata`
--

INSERT INTO `newsdata` (`id`, `newsItemTitle_en`, `newsItemTitle_tel`, `newsItemDesc_en`, `newsItemDesc_tel`, `newsItemDate`, `newsItemImgUrl`) VALUES
(0.025551, 'Student selected in Campus Placement in Government Polytechnic, Obulavaripalli', 'ఓబులవారిపల్లిలోని ప్రభుత్వ పాలిటెక్నిక్‌లో క్యాంపస్ ప్లేస్‌మెంట్‌లో ఎంపికైన విద్యార్థి', 'Obulavaripalli, November 18 (Prabha News) : P.Shiva Kumar, student of Diploma in Electronics and communication engineering, final year got placed in Efftronics company on 06/05/2023. Principal and Staff Congratulated him and served with selection order copy to him. ', 'ఓబులవారిపల్లి, నవంబర్ 18( ప్రభ న్యూస్): పి.శివ కుమార్, డిప్లొమా ఇన్ ఎలక్ట్రానిక్స్ అండ్ కమ్యూనికేషన్ ఇంజనీరింగ్ విద్యార్థి, చివరి సంవత్సరం ఎఫ్‌ట్రానిక్స్ కంపెనీలో 06/05/2023న చేరారు. ప్రిన్సిపాల్ మరియు సిబ్బంది అతన్ని అభినందించారు మరియు ఎంపిక ఆర్డర్ కాపీని అతనికి అందించారు.', '2023-05-06', 'news/img/0.025551'),
(0.14662, 'Polytechnic Students Elected to State Level Poly tech fest.', 'రాష్ట్ర స్థాయి పాలీ టెక్ ఫెస్ట్‌కు ఎంపికైన పాలిటెక్నిక్ విద్యార్థులు.', 'Obulavaripalli November 18 (Prabha News) Varasiddhi Vinayak, Ruthvik, Nagachaitanya students who are studying in the second year of computer course in Polytechnic College have been selected for Institute Android App 2022 Polytechnic College.\nThe officials of Computer Department Devaraj expressed their happiness and College Principal Krishna Sai said that they are very happy on behalf of the Polytechnic College to reach the state level.\n', ' ఓబులవారిపల్లి నవంబర్ 18( ప్రభ న్యూస్) పాలిటెక్నిక్ కాలేజీలో చదువు తున్న రెండో సంవత్సరం కంప్యూటర్ కోర్సులో చదువుతున్న వరసిద్ది వినా యక్, రుత్విక్, నాగచైతన్య విద్యార్థులు ఇనిస్టిట్యూట్ ఆండ్రాయిడ్ యాప్ 2022 పాలిటె క్ పేస్టుకు సెలెక్ట్ అయినట్లు కాలేజీ \nకంప్యూటర్ విభాగ అధికారులు దేవరాజ్ సంతోషం వ్యక్తం చేశారు, పాలిటెక్నిక్ కాలేజ్ తరఫున రాష్ట్రస్థాయికి ఎదిగినందుకు ఎంతో సంతోషంగా ఉందని కాలేజీ ప్రిన్సిపాల్ కృష్ణ సాయితెలిపారు.\n', '2022-11-18', 'news/img/0.14662'),
(0.283077, 'My Aim is to Improve the Students Education and Development of the college', 'విద్యార్థుల విద్యాభివృద్ధి, కళాశాల అభివృద్దే నా లక్ష్యం', 'My Aim is to improve the Education of the students and the Development of the college. Principal, Government Polytechnic, Obulavaripalli.', 'విద్యార్థుల విద్యను మెరుగుపరచడం మరియు కళాశాల అభివృద్ధి చేయడమే నా లక్ష్యం. ప్రిన్సిపాల్, ప్రభుత్వ పాలిటెక్నిక్, ఓబులవారిపల్లి.', '2023-07-31', 'news/img/0.283077'),
(0.287759, 'Allotment of POLYCET Seats to 34122 Students', '34122 మందికి పాలిసెట్ సీట్ల కేటాయింపు', 'Smt.Chadalavada Nagarani,  Commissioner of Technical Education, Govenment of Andhrapradesh, POLYCET Convenor said that, 34122 seats were allotted to students on Friday regarding POLYCET-2023 Admissions.', 'పాలీసెట్-2023 అడ్మిషన్లకు సంబంధించి శుక్రవారం విద్యార్థులకు 34122 సీట్లు కేటాయించినట్లు ఆంధ్రప్రదేశ్ ప్రభుత్వ సాంకేతిక విద్యా కమిషనర్ శ్రీమతి చదలవాడ నాగరాణి, పాలీసెట్ కన్వీనర్ తెలిపారు.', '2023-08-19', 'news/img/0.287759'),
(0.82785, 'Job is the Goal of Every Diploma Student.', 'ప్రతి డిప్లొమా విద్యార్థి లక్ష్యం ఉద్యోగం.', 'Job is the Goal of Every Diploma Student. - Commissioner of Technical Education, Government of AP.', 'ప్రతి డిప్లొమా విద్యార్థి లక్ష్యం ఉద్యోగం. - కమీషనర్ ఆఫ్ టెక్నికల్ ఎడ్యుకేషన్, ఏపీ ప్రభుత్వం.', '2023-08-06', 'news/img/0.82785'),
(0.836669, 'Notification for Exercising Web Options', 'Notification for Exercising Web Options', 'The Secretary, SBTET, AP Informed that, Polytechnic Aspirants can exercise POLYCET-2023 Web Options from 11-08-2023. Commencement of Classes will begin from 23-08-2023.', 'పాలిటెక్నిక్ ఆశావాదులు 11-08-2023 నుండి POLYCET-2023 వెబ్ ఆప్షన్‌లను ఉపయోగించుకోవచ్చని సెక్రటరీ, SBTET, AP తెలియజేశారు. తరగతుల ప్రారంభం 23-08-2023 నుండి ప్రారంభమవుతుంది.', '2023-08-10', 'news/img/0.836669'),
(0.921223, 'Free Polycet-2023  Coaching at Institution.', 'సంస్థలో ఉచిత పాలీసెట్-2023 కోచింగ్.', 'Free Polycet-2023 Coaching will be given for 10th class students at Government Polytechnic, Obulavaripalli from 21-04-2023 to 09-05-2023, 10am to 1pm daily.', '10వ తరగతి విద్యార్థులకు ఉచిత పాలీసెట్-2023 కోచింగ్ ఓబులవారిపల్లిలోని ప్రభుత్వ పాలిటెక్నిక్‌లో 21-04-2023 నుండి 09-05-2023 వరకు, ప్రతిరోజూ ఉదయం 10 నుండి మధ్యాహ్నం 1 గంటల వరకు ఇవ్వబడుతుంది.', '2023-04-17', 'news/img/0.921223'),
(0.924586, 'AP Polycet-2023 Results out ', 'AP పాలిసెట్-2023 ఫలితాలు వెలువడ్డాయి', 'AP POLYCET 2023 Results: The AP Polytechnic Entrance Exam Result has been released on 20th May 2023 for the candidates who have given the Andhra Pradesh Polytechnic Entrance Exam 2023. Candidates who have appeared in the Polytechnic Entrance Exam can download their results from the official website polycetap.nic.in.', 'AP పాలిసెట్ 2023 ఫలితాలు: ఆంధ్రప్రదేశ్ పాలిటెక్నిక్ ప్రవేశ పరీక్ష 2023కి హాజరైన అభ్యర్థుల కోసం 2023 మే 20న AP పాలిటెక్నిక్ ప్రవేశ పరీక్ష ఫలితాలు విడుదలయ్యాయి. పాలిటెక్నికల్ ప్రవేశ పరీక్షలో హాజరైన అభ్యర్థులు అధికారిక వెబ్‌సైట్ పాలిసెట్‌టాప్ నుండి తమ ఫలితాలను డౌన్‌లోడ్ చేసుకోవచ్చు.', '2023-05-18', 'news/img/0.924586');

-- --------------------------------------------------------

--
-- Table structure for table `notificationsdata`
--

CREATE TABLE `notificationsdata` (
  `id` double NOT NULL,
  `ntfcDate` varchar(100) NOT NULL,
  `ntfcName_en` varchar(100) NOT NULL,
  `ntfcName_tel` varchar(100) NOT NULL,
  `ntfcDesc_en` varchar(1000) NOT NULL,
  `ntfcDesc_tel` varchar(1000) NOT NULL,
  `ntfcLink` varchar(200) NOT NULL,
  `ntfcNewItem` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notificationsdata`
--

INSERT INTO `notificationsdata` (`id`, `ntfcDate`, `ntfcName_en`, `ntfcName_tel`, `ntfcDesc_en`, `ntfcDesc_tel`, `ntfcLink`, `ntfcNewItem`) VALUES
(0.181391, '2023-07-28', 'Institution Closed on Moharrum Festival.', ' మొహర్రం పండుగ సందర్భంగా సంస్థ మూసివేయబడింది.', 'All the Students and staff members of this institution are hereby informed that, the institution remain closed on 29/07/2023 on account of Moharrum Festival.', 'మొహర్రం పండుగ కారణంగా ఈ సంస్థ 29/07/2023న మూసివేయబడిందని ఈ సంస్థలోని విద్యార్థులు మరియు సిబ్బంది అందరికీ తెలియజేస్తున్నాము.', '', 1),
(0.199384, '2023-07-20', 'Conduct of Remedial Classes and Study Hours', 'రెమిడియల్ క్లాసులు మరియు స్టడీ అవర్స్ నిర్వహణ', 'All the Students of III& IV Semester who have failed in Mathematics, Physics, Chemistry and Engineering Drawing are hereby informed that, remedial classes and study hours are conducted from 21/07/2023 from 8AM TO 9.30AM till the commencement of Supplementary Examinations. ', 'గణితం, ఫిజిక్స్, కెమిస్ట్రీ మరియు ఇంజినీరింగ్ డ్రాయింగ్‌లలో ఫెయిల్ అయిన III & IV సెమిస్టర్ విద్యార్థులందరికీ, సప్లిమెంటరీ పరీక్షలు ప్రారంభమయ్యే వరకు 21/07/2023 ఉదయం 8 నుండి 9.30 వరకు రెమిడియల్ తరగతులు మరియు స్టడీ అవర్స్ నిర్వహించబడుతుందని ఇందుమూలంగా తెలియజేస్తున్నాము.', '', 1),
(0.247256, '2023-01-28', '3rd Semester Results', '3వ సెమిస్టర్  ఫలితాలు', 'All the Students are informed that, the 3rd semester results are out and kept in SBTET website. Visit the website to check your results. - Principal.', '3వ సెమిస్టర్ ఫలితాలు వెలువడ్డాయని మరియు SBTET వెబ్‌సైట్‌లో ఉంచబడిందని విద్యార్థులందరికీ తెలియజేయబడింది. మీ ఫలితాలను తనిఖీ చేయడానికి వెబ్‌సైట్‌ను సందర్శించండి. - ప్రిన్సిపాల్.', 'https://sbtet.ap.gov.in/APSBTET/results.do', 0),
(0.305689, '2023-04-17', 'Free Polycet-2023  Coaching at Institution.', 'సంస్థలో ఉచిత పాలీసెట్-2023 కోచింగ్.', 'Free Polycet-2023 Coaching will be given for 10th class students at Government Polytechnic, Obulavaripalli from 21-04-2023 to 09-05-2023, 10am to 1pm daily.', '10వ తరగతి విద్యార్థులకు ఉచిత పాలీసెట్-2023 కోచింగ్ ఓబులవారిపల్లిలోని ప్రభుత్వ పాలిటెక్నిక్‌లో 21-04-2023 నుండి 09-05-2023 వరకు, ప్రతిరోజూ ఉదయం 10 నుండి మధ్యాహ్నం 1 గంటల వరకు ఇవ్వబడుతుంది.', '', 0),
(0.30873, '2023-06-28', 'Institution Closed on Bakrid Festival.', 'Institution Closed on Bakrid Festival.', 'All the Students and staff members of this institution are hereby informed that, the institution remain closed on 29/06/2023 on account of Bakrid Festival.', 'బక్రీద్ పండుగ కారణంగా ఈ సంస్థ 29/06/2023న మూసివేయబడిందని ఈ సంస్థలోని విద్యార్థులు మరియు సిబ్బంది అందరికీ తెలియజేస్తున్నాము.', '', 0),
(0.407472, '2023-08-14', 'Independence Day Celebrations', 'స్వాతంత్య్ర దినోత్సవ వేడుకలు', 'In View of 77th Independence Day Celebrations, the National Flag will be hoisted at 8.30AM to 8.50AM on 15-08-2023 in College Premises. All the Students and Staff arer instructed to attend the Flag Hoisting without fail.\n-Principal.', '77వ స్వాతంత్య్ర దినోత్సవ వేడుకల దృష్ట్యా, కళాశాల ప్రాంగణంలో 15-08-2023న 8.30AM నుండి 8.50AM వరకు జాతీయ జెండా ఎగురవేయబడుతుంది. విద్యార్థులు, సిబ్బంది అందరూ జెండా ఎగురవేతకు తప్పకుండా హాజరుకావాలని సూచించారు.\n- ప్రిన్సిపాల్.', '', 1),
(0.426132, '2023-04-20', 'Institution Closed on Ramzan(Eid-ul-Fitr) Festival.', 'రంజాన్ (ఈద్-ఉల్-ఫితర్) పండుగ.', 'All the Students and staff members of this institution are hereby informed that, the institution remain closed on 22/04/2023 on account of Ramzan(Eid-ul-Fitr) Festival.', 'రంజాన్ (ఈద్-ఉల్-ఫితర్) పండుగ కారణంగా ఈ సంస్థ 22/04/2023న మూసివేయబడిందని ఈ సంస్థలోని విద్యార్థులు మరియు సిబ్బంది అందరికీ తెలియజేస్తున్నాము.', '', 0),
(0.527685, '2023-08-29', 'Webinar on Emerging Technologies - Impact on society and Sustainable Development', 'వెబినార్ ఆన్ ఎమర్జింగ్ టెక్నాలజీస్ - ఇంపాక్ట్ ఆన్ సొసైటీ అండ్ సస్టైనబుల్ డెవలప్‌మెంట్', 'A webinar is scheduled on 30-08-2023 i.e. Wednesday from 11:00AM to 1:00PM on Emerging Technologies-Impact on society and Sustainable Development, to bring awareness on latest developments in Industry practices among faculty and students. In this Connection, Teaching Staff and final  year students are instructed to attend the Session without fail.\n-Principal', '30-08-2023న అంటే బుధవారం ఉదయం 11:00 నుండి మధ్యాహ్నం 1:00 గంటల వరకు ఎమర్జింగ్ టెక్నాలజీస్-సమాజంపై ప్రభావం మరియు సుస్థిర అభివృద్ధిపై అధ్యాపకులు మరియు విద్యార్థులలో పరిశ్రమ పద్ధతుల్లో తాజా పరిణామాలపై అవగాహన కల్పించేందుకు వెబ్‌నార్ షెడ్యూల్ చేయబడింది. ఈ క్రమంలో, బోధనా సిబ్బంది మరియు చివరి సంవత్సరం విద్యార్థులు సెషన్‌కు తప్పకుండా హాజరు కావాలని సూచించారు.\n- ప్రిన్సిపాల్.', '', 1),
(0.63605, '2023-08-07', 'National Deworming Day on 10th August 2023', '10 ఆగస్టు 2023న జాతీయ నులిపురుగుల నివారణ దినోత్సవం', 'National Deworming Day will be observed on 10th August 2023. All the Students were given Albendazole Tablets.', '2023 ఆగస్టు 10న జాతీయ నులిపురుగుల నిర్మూలన దినోత్సవం నిర్వహించబడుతుంది. విద్యార్థులందరికీ ఆల్బెండజోల్ మాత్రలు అందించారు.', '', 1),
(0.877255, '2023-07-07', '1st Year, 4th Sem, 6th Semester Results', '1వ సంవత్సరం, 4వ సెమ్, 6వ సెమిస్టర్ ఫలితాలు', 'All the Students are informed that, 1st Year, 4th Sem, 6th semester results are out and kept in SBTET website. Visit the website to check your results. - Principal.', '1వ సంవత్సరం, 4వ సెమ్, 6వ సెమిస్టర్ ఫలితాలు ముగిశాయని మరియు SBTET వెబ్‌సైట్‌లో ఉంచబడిందని విద్యార్థులందరికీ తెలియజేయబడింది. మీ ఫలితాలను తనిఖీ చేయడానికి వెబ్‌సైట్‌ను సందర్శించండి. - ప్రిన్సిపాల్.', 'https://sbtet.ap.gov.in/APSBTET/results.xls', 1),
(0.915557, '2023-08-21', 'First Unit Test Scheduled from 28-08-2023.', 'మొదటి యూనిట్ టెస్ట్ 28-08-2023 నుండి షెడ్యూల్ చేయబడింది.', 'All the Students of III Sem and V Sem are informed that, First Unit Tests will be conducted from 28-08-2023 to 30-08-2023. The Students are informed to attend all the Examinations without fail. Timings : 10am to 11.30am. 2.00pm to 3.30pm.', 'మొదటి యూనిట్ పరీక్షలు 28-08-2023 నుండి 30-08-2023 వరకు నిర్వహించబడతాయని III సెమ్ మరియు V సెమ్‌ల విద్యార్థులందరికీ తెలియజేయబడింది. విద్యార్థులు అన్ని పరీక్షలకు తప్పకుండా హాజరుకావాలని సూచించారు. సమయాలు: ఉదయం 10 నుండి 11.30 వరకు. మధ్యాహ్నం 2.00 నుండి 3.30 వరకు.', '', 1),
(0.972037, '2023-01-23', 'Republic Day Celebrations', 'గణతంత్ర దినోత్సవ వేడుకలు', 'All the staff, faculty and students should attend to the college on 26/01/2023 on the occasion of Republic Day by 8AM sharp. - Principal.', 'సిబ్బంది, అధ్యాపకులు మరియు విద్యార్థులందరూ 26/01/2023 గణతంత్ర దినోత్సవం సందర్భంగా ఉదయం 8 గంటలకు వెంటనే కళాశాలకు హాజరు కావాలి. - ప్రిన్సిపాల్.', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `officestructure`
--

CREATE TABLE `officestructure` (
  `id` double NOT NULL,
  `admOfficer` int(2) NOT NULL,
  `offSupdnt` int(2) NOT NULL,
  `srAsst` int(2) NOT NULL,
  `jrAssts` int(2) NOT NULL,
  `contrStaff` int(11) NOT NULL,
  `offSubs` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `officestructure`
--

INSERT INTO `officestructure` (`id`, `admOfficer`, `offSupdnt`, `srAsst`, `jrAssts`, `contrStaff`, `offSubs`) VALUES
(0.1357, 1, 1, 1, 3, 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `pdmessage`
--

CREATE TABLE `pdmessage` (
  `physicalDirectorMsg_en` varchar(1000) NOT NULL,
  `physicalDirectorMsg_tel` varchar(1000) NOT NULL,
  `id` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pdmessage`
--

INSERT INTO `pdmessage` (`physicalDirectorMsg_en`, `physicalDirectorMsg_tel`, `id`) VALUES
('Students of Government Polytechnic, Obulavaripalli are trained in various sports and games like volleyball, kabaddi, short put, long jump, chess, carroms etc. .students have participated in Inter Polytechnic Games and Sports Meet and secured prizes in state level competitions. \n', 'ప్రభుత్వ పాలిటెక్నిక్, ఓబులవారిపల్లి విద్యార్థులు వాలీబాల్, కబడ్డీ, షార్ట్‌పుట్, లాంగ్ జంప్, చెస్, క్యారమ్స్ వంటి వివిధ క్రీడలు మరియు ఆటలలో శిక్షణ పొందారు. విద్యార్థులు ఇంటర్ పాలిటెక్నిక్ గేమ్స్ మరియు స్పోర్ట్స్ మీట్‌లో పాల్గొని రాష్ట్ర స్థాయి పోటీలలో బహుమతులు సాధించారు.', 0.976966);

-- --------------------------------------------------------

--
-- Table structure for table `placementdetails`
--

CREATE TABLE `placementdetails` (
  `acdYear` varchar(20) NOT NULL,
  `id` double NOT NULL,
  `compName_en` varchar(100) NOT NULL,
  `compName_tel` varchar(100) NOT NULL,
  `deptCode` varchar(100) NOT NULL,
  `remarks_en` varchar(100) NOT NULL,
  `remarks_tel` varchar(100) NOT NULL,
  `stuName_en` varchar(100) NOT NULL,
  `stuName_tel` varchar(100) NOT NULL,
  `stuPIN` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `placementdetails`
--

INSERT INTO `placementdetails` (`acdYear`, `id`, `compName_en`, `compName_tel`, `deptCode`, `remarks_en`, `remarks_tel`, `stuName_en`, `stuName_tel`, `stuPIN`) VALUES
('2022-23', 0.39126, 'Efftronics Private Limited', 'ఎఫ్ట్రానిక్స్ ప్రైవేట్ లిమిటెడ్', 'DECE', '-', '-', 'P.Shiva Kumar', 'పి.శివ కుమార్', '20154-EC-010');

-- --------------------------------------------------------

--
-- Table structure for table `polycetcoordinator`
--

CREATE TABLE `polycetcoordinator` (
  `id` double NOT NULL,
  `coordName_en` varchar(100) NOT NULL,
  `coordName_tel` varchar(100) NOT NULL,
  `coordDesgn_en` varchar(50) NOT NULL,
  `coordDesgn_tel` varchar(50) NOT NULL,
  `coordPhno` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `polycetcoordinator`
--

INSERT INTO `polycetcoordinator` (`id`, `coordName_en`, `coordName_tel`, `coordDesgn_en`, `coordDesgn_tel`, `coordPhno`) VALUES
(0.785836, 'H.Raghunath Reddy', 'హెచ్.రఘునాథ్ రెడ్డి', 'Junior Assistant', 'జూనియర్ అసిస్టెంట్', 7799458880);

-- --------------------------------------------------------

--
-- Table structure for table `polytechfestdata`
--

CREATE TABLE `polytechfestdata` (
  `id` double NOT NULL,
  `deptCode` varchar(30) NOT NULL,
  `acdYear` varchar(50) NOT NULL,
  `projName_en` varchar(500) NOT NULL,
  `projName_tel` varchar(500) NOT NULL,
  `projDescr_en` varchar(2000) NOT NULL,
  `projDescr_tel` varchar(2000) NOT NULL,
  `stuTeam_en` varchar(1000) NOT NULL,
  `stuTeam_tel` varchar(1000) NOT NULL,
  `projGuide_en` varchar(100) NOT NULL,
  `projGuide_tel` varchar(100) NOT NULL,
  `projStatus_en` varchar(100) NOT NULL,
  `projStatus_tel` varchar(100) NOT NULL,
  `projCheck` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `polytechfestdata`
--

INSERT INTO `polytechfestdata` (`id`, `deptCode`, `acdYear`, `projName_en`, `projName_tel`, `projDescr_en`, `projDescr_tel`, `stuTeam_en`, `stuTeam_tel`, `projGuide_en`, `projGuide_tel`, `projStatus_en`, `projStatus_tel`, `projCheck`) VALUES
(0.168996, 'DCME', '2022-23', 'Institution app in android', 'ఇన్స్టిట్యూషన్ యాప్ ఇన్ ఆండ్రాయిడ్', 'Institution app in android', 'ఇన్స్టిట్యూషన్ యాప్ ఇన్ ఆండ్రాయిడ్', 'B. Varasiddi vinayaka\nD.Naga krishna chaitanya\nS.Rutvik\n', 'బి. వరసిద్ది వినాయకుడు\nడి. నాగకృష్ణ చైతన్య\nఎస్. రుత్విక్\n', 'B.Harinath', 'బి. హరినాథ్', 'District (6th)', 'జిల్లా (6వ స్థానం)', 'on'),
(0.635833, 'DECE', '2022-23', 'Smart Attender', 'తెలివైన అటెండర్', 'It is an Arduino based and Bluetooth controlled Robot with a horn and indicator lights and has automatic obstacle detection.It can go to the rooms specified by user and has a box with an automatic lock system to deliver the items.', 'ఇది హార్న్ మరియు ఇండికేటర్ లైట్లతో కూడిన ఆర్డునో ఆధారిత మరియు బ్లూటూత్ నియంత్రిత రోబోట్ మరియు ఆటోమేటిక్ అడ్డంకి గుర్తింపును కలిగి ఉంటుంది. ఇది వినియోగదారు పేర్కొన్న గదులకు వెళ్లి వస్తువులను బట్వాడా చేయడానికి ఆటోమేటిక్ లాక్ సిస్టమ్‌తో కూడిన బాక్స్‌ను కలిగి ఉంటుంది.', 'P.Manohar(21154-EC-022)\nM.Yogeswar(21154-EC-016)', 'పి.మనోహర్(21154-EC-022)\nఎం.యోగేశ్వర్(21154-EC-016)', 'C.C Kalyani', 'సి సి కళ్యాణి', 'Participated', 'పాల్గొన్నారు', 'on'),
(1.168996, 'DCME', '2022-23', 'Institute Website Design Competetion', 'ఇన్స్టిట్యూట్ వెబ్సైట్ డిజైన్ పోటీ', 'Developing a Generic Institute Website Design for All Government Polytechnics in AP.', 'APలోని అన్ని ప్రభుత్వ పాలిటెక్నిక్‌ల కోసం జెనరిక్ ఇన్‌స్టిట్యూట్ వెబ్‌సైట్ డిజైన్‌ను అభివృద్ధి చేయడం.', 'N.Naresh (20154-CM-015), P.Harsha Vardhan (20154-CM-019), \nT.Sai Ram Kishore(20154-CM-028)', 'ఎన్.నరేష్ (20154-సీఎం-015), పి.హర్ష వర్ధన్ (20154-సీఎం-019),\nటి.సాయి రామ్ కిషోర్(20154-CM-028)', 'B.Harinath', 'బి.హరినాథ్', 'Submitted', 'సమర్పించారు', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `principaldata`
--

CREATE TABLE `principaldata` (
  `id` double NOT NULL,
  `princName_en` varchar(100) NOT NULL,
  `princName_tel` varchar(100) NOT NULL,
  `princDesig_en` varchar(100) NOT NULL,
  `princDesig_tel` varchar(100) NOT NULL,
  `princQual_en` varchar(100) NOT NULL,
  `princQual_tel` varchar(100) NOT NULL,
  `princExp` int(2) NOT NULL,
  `princMsg_en` varchar(2000) NOT NULL,
  `princMsg_tel` varchar(2000) NOT NULL,
  `princImgUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `principaldata`
--

INSERT INTO `principaldata` (`id`, `princName_en`, `princName_tel`, `princDesig_en`, `princDesig_tel`, `princQual_en`, `princQual_tel`, `princExp`, `princMsg_en`, `princMsg_tel`, `princImgUrl`) VALUES
(0.366428, 'K.Venu Gopal ', 'కే. వేణు గోపాల్', 'Principal (FAC) ', 'ప్రిన్సిపాల్ (FAC)', 'M.Tech', 'ఎం.టెక్ ', 35, 'It gives me Immense Pleasure to Welcome you to this Institute which is the one among all the newly established Polytechnics in 2008 and also launched its own website. This institute have well Equipped Labs, Computer Centre , Library and Skill Developement Center to help students in attaining highest standards in Academics.This Institute offers Quality Education to inculcate Right Behaviour, Positive attitude and Leadership Qualities in our students for their Holistic Development. Our Institute Aims to mould the Students to become a better Individual and a truly Qualified Persons, who will be useful to the present day society and contribute to building a better Nation. \nThe Teaching and non-teaching Staff of the Institution strive hard to provide the Best in Academic and Extra-Curricular fields for all our Students.', '2008లో కొత్తగా స్థాపించబడిన అన్ని పాలిటెక్నిక్‌లలో ఒకటి మరియు దాని స్వంత వెబ్‌సైట్‌ను కూడా ప్రారంభించిన ఈ ఇన్‌స్టిట్యూట్‌కి మిమ్మల్ని స్వాగతించడం నాకు చాలా ఆనందాన్ని ఇస్తుంది. ఈ ఇన్‌స్టిట్యూట్‌లో విద్యార్థులు అకడమిక్స్‌లో అత్యున్నత ప్రమాణాలు సాధించడంలో సహాయపడేందుకు చక్కటి సన్నద్ధమైన ల్యాబ్‌లు, కంప్యూటర్ సెంటర్, లైబ్రరీ మరియు స్కిల్ డెవలప్‌మెంట్ సెంటర్ ఉన్నాయి. ఈ ఇన్‌స్టిట్యూట్ మా విద్యార్థులలో వారి సమగ్ర అభివృద్ధికి సరైన ప్రవర్తన, సానుకూల దృక్పథం మరియు నాయకత్వ లక్షణాలను పెంపొందించడానికి నాణ్యమైన విద్యను అందిస్తుంది. మా ఇన్స్టిట్యూట్ విద్యార్థులను మెరుగైన వ్యక్తిగా మరియు నిజమైన అర్హత కలిగిన వ్యక్తులుగా తీర్చిదిద్దడం లక్ష్యంగా పెట్టుకుంది, వారు ప్రస్తుత సమాజానికి ఉపయోగపడతారు మరియు మెరుగైన దేశాన్ని నిర్మించడంలో దోహదపడతారు.\nఇన్‌స్టిట్యూషన్‌లోని టీచింగ్ మరియు నాన్ టీచింగ్ స్టాఫ్ మా విద్యార్థులందరికీ అకడమిక్ మరియు ఎక్స్‌ట్రా కరిక్యులర్ రంగాలలో అత్యుత్తమమైన వాటిని అందించడానికి తీవ్రంగా కృషి చేస్తున్నారు.', 'principaldata/img');

-- --------------------------------------------------------

--
-- Table structure for table `resourcesdata`
--

CREATE TABLE `resourcesdata` (
  `id` double NOT NULL,
  `deptCode` varchar(100) NOT NULL,
  `year_en` varchar(50) NOT NULL,
  `year_tel` varchar(50) NOT NULL,
  `subName_en` varchar(200) NOT NULL,
  `subName_tel` varchar(200) NOT NULL,
  `subCode` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `resourcesdata`
--

INSERT INTO `resourcesdata` (`id`, `deptCode`, `year_en`, `year_tel`, `subName_en`, `subName_tel`, `subCode`) VALUES
(0.384575, 'DCME', '1year', 'మొదటి సంవత్సరం', 'Engineering  Mathematics - I', 'ఇంజనీరింగ్ గణితం - I', 'CM-102'),
(0.907874, 'DCME', '5sem', 'ఐదవ సెమిస్టర్', 'Java Programming', 'జావా ప్రోగ్రామింగ్', 'CM-502'),
(0.345807, 'DECE', '1year', 'మొదటి సంవత్సరం', 'Engineering Chemistry  &  Environmental Studies', 'ఇంజనీరింగ్ కెమిస్ట్రీ & పర్యావరణ అధ్యయనాలు', 'EC-104');

-- --------------------------------------------------------

--
-- Table structure for table `rtimembersdata`
--

CREATE TABLE `rtimembersdata` (
  `id` double NOT NULL,
  `rtiMemName_en` varchar(100) NOT NULL,
  `rtiMemName_tel` varchar(100) NOT NULL,
  `rtiMemDesgn_en` varchar(100) NOT NULL,
  `rtiMemDesgn_tel` varchar(100) NOT NULL,
  `rtiMemPos_en` varchar(100) NOT NULL,
  `rtiMemPos_tel` varchar(100) NOT NULL,
  `rtiMemPhno` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rtimembersdata`
--

INSERT INTO `rtimembersdata` (`id`, `rtiMemName_en`, `rtiMemName_tel`, `rtiMemDesgn_en`, `rtiMemDesgn_tel`, `rtiMemPos_en`, `rtiMemPos_tel`, `rtiMemPhno`) VALUES
(0.824534, 'Dr. L. Krishna Sai', 'డా. ఎల్. కృష్ణ సాయి', 'Principal', 'ప్రిన్సిపాల్', 'Appellate Authority', 'అప్పీలేట్ అధికారం', 9393630292),
(1.824534, 'C.Devaraj', 'సి. దేవరాజ్', 'HCMES', 'సీఎంఈ హెడ్', 'Public Information Officer', ' పబ్లిక్ ఇన్ఫర్మేషన్ ఆఫీసర్', 9849640247),
(2.824534, 'P.Lakshmikanth Reddy', 'పి. లక్ష్మీకాంత్ రెడ్డి', 'Lecturer in IT', 'ఐటీ లెక్చరర్', 'Assistant PIO', 'అసిస్టెంట్ పీఐఓ', 8309804782);

-- --------------------------------------------------------

--
-- Table structure for table `sdcdata`
--

CREATE TABLE `sdcdata` (
  `id` double NOT NULL,
  `sdcInchargeName_en` varchar(50) NOT NULL,
  `sdcInchargeName_tel` varchar(50) NOT NULL,
  `sdcInchargeDesgn_en` varchar(100) NOT NULL,
  `sdcInchargeDesgn_tel` varchar(100) NOT NULL,
  `sdcIntro_en` text NOT NULL,
  `sdcIntro_tel` text NOT NULL,
  `sdcPhotoUrl` varchar(300) NOT NULL,
  `sdcInchargePhotoUrl` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sdcdata`
--

INSERT INTO `sdcdata` (`id`, `sdcInchargeName_en`, `sdcInchargeName_tel`, `sdcInchargeDesgn_en`, `sdcInchargeDesgn_tel`, `sdcIntro_en`, `sdcIntro_tel`, `sdcPhotoUrl`, `sdcInchargePhotoUrl`) VALUES
(0.195993, 'A.Chakrapani Reddy.', 'ఎ. చక్రపాణి రెడ్డి', 'Lecturer / Computer Engineering.', 'లెక్చరర్ / కంప్యూటర్ ఇంజనీరింగ్', 'Skill development center(SDC) in Government Polytechnic, Obulavaripalli aims to enhance the employability and entrepreneurial skills of students by providing hands-on training and practical experience in various industries.\n\nSDC center offer specialized training programs in various fields such as electronics, engineering, construction, healthcare, hospitality, and information technology. The training programs are designed to bridge the gap between academic education and industry requirements by providing practical knowledge and skills.\n\nSDC also provide opportunities for students to engage in research and development activities, work on live projects, and participate in industry internships. The aim is to expose students to real-world situations and challenges and help them develop critical thinking, problem-solving, and communication skills.\n\nOverall, the SDC in Government Polytechnic, Obulavaripalli plays a vital role in preparing students for the workforce and creating a pool of skilled professionals who can contribute to the growth and development of the economy.', 'ప్రభుత్వ పాలిటెక్నిక్, ఓబులవారిపల్లిలోని స్కిల్ డెవలప్‌మెంట్ సెంటర్ (SDC) వివిధ పరిశ్రమలలో శిక్షణ మరియు ఆచరణాత్మక అనుభవాన్ని అందించడం ద్వారా విద్యార్థుల ఉపాధి మరియు వ్యవస్థాపక నైపుణ్యాలను మెరుగుపరచడం లక్ష్యంగా పెట్టుకుంది.\n\nSDC సెంటర్ ఎలక్ట్రానిక్స్, ఇంజనీరింగ్, కన్స్ట్రక్షన్, హెల్త్‌కేర్, హాస్పిటాలిటీ మరియు ఇన్ఫర్మేషన్ టెక్నాలజీ వంటి వివిధ రంగాలలో ప్రత్యేక శిక్షణా కార్యక్రమాలను అందిస్తోంది. శిక్షణా కార్యక్రమాలు ఆచరణాత్మక జ్ఞానం మరియు నైపుణ్యాలను అందించడం ద్వారా విద్యా విద్య మరియు పరిశ్రమ అవసరాల మధ్య అంతరాన్ని తగ్గించడానికి రూపొందించబడ్డాయి.\n\nSDC విద్యార్థులకు పరిశోధన మరియు అభివృద్ధి కార్యకలాపాలలో పాల్గొనడానికి, ప్రత్యక్ష ప్రాజెక్ట్‌లలో పని చేయడానికి మరియు పరిశ్రమ ఇంటర్న్‌షిప్‌లలో పాల్గొనడానికి అవకాశాలను కూడా అందిస్తుంది. వాస్తవ ప్రపంచ పరిస్థితులు మరియు సవాళ్లకు విద్యార్థులను బహిర్గతం చేయడం మరియు విమర్శనాత్మక ఆలోచన, సమస్య-పరిష్కారం మరియు కమ్యూనికేషన్ నైపుణ్యాలను అభివృద్ధి చేయడంలో వారికి సహాయపడటం దీని లక్ష్యం.\n\nమొత్తంమీద, ఓబులవారిపల్లి ప్రభుత్వ పాలిటెక్నిక్‌లోని SDC శ్రామిక శక్తి కోసం విద్యార్థులను సిద్ధం చేయడంలో మరియు ఆర్థిక వ్యవస్థ అభివృద్ధికి మరియు అభివృద్ధికి దోహదపడే నైపుణ్యం కలిగిన నిపుణుల సమూహాన్ని రూపొందించడంలో కీలక పాత్ర పోషిస్తుంది.', 'sdc/sdcPhoto', '/sdc/sdcInchargePhoto');

-- --------------------------------------------------------

--
-- Table structure for table `studentdata`
--

CREATE TABLE `studentdata` (
  `stupin` varchar(20) NOT NULL,
  `stuname` varchar(50) NOT NULL,
  `stubranch` varchar(100) NOT NULL,
  `stuage` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `studentdata`
--

INSERT INTO `studentdata` (`stupin`, `stuname`, `stubranch`, `stuage`) VALUES
('20154-CM-015', 'suresh', 'dcme', 20),
('20154-cm-027', 'sairamkishore', 'department of computer engineering', 20);

-- --------------------------------------------------------

--
-- Table structure for table `stustrength`
--

CREATE TABLE `stustrength` (
  `deptCode` varchar(30) NOT NULL,
  `fisYear` int(11) NOT NULL,
  `secYear` int(11) NOT NULL,
  `thirdYear` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stustrength`
--

INSERT INTO `stustrength` (`deptCode`, `fisYear`, `secYear`, `thirdYear`) VALUES
('DCME', 33, 31, 25),
('DECE', 29, 20, 5),
('DIT', 0, 0, 0),
('DTT', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tpodata`
--

CREATE TABLE `tpodata` (
  `id` double NOT NULL,
  `tpoName_en` varchar(100) NOT NULL,
  `tpoName_tel` varchar(100) NOT NULL,
  `tpoMsg_en` varchar(2000) NOT NULL,
  `tpoMsg_tel` varchar(2000) NOT NULL,
  `tpoPhno` varchar(10) NOT NULL,
  `tpoPhotoUrl` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tpodata`
--

INSERT INTO `tpodata` (`id`, `tpoName_en`, `tpoName_tel`, `tpoMsg_en`, `tpoMsg_tel`, `tpoPhno`, `tpoPhotoUrl`) VALUES
(0.07389, 'K.Jhansi Rani ', 'కె.ఝాన్సీ రాణి', 'Over 90% of the polytechnics find jobs after completing Diploma courses while the same thing cannot be said about their counterparts who pursue B. Tech after completing their Diploma\nFor a strong industry connect, Polytechnic colleges are collaborating with the Industry for training, campus placements, visits to industrial units, expert lectures.\nGovernment Polytechnic, Obulavaripalli is focusing on placements for students in coming years.', '90% కంటే ఎక్కువ పాలిటెక్నిక్‌లు డిప్లొమా కోర్సులు పూర్తి చేసిన తర్వాత ఉద్యోగాలను కనుగొంటారు, అదే విషయం వారి డిప్లొమా పూర్తి చేసిన తర్వాత B. టెక్‌ను అభ్యసించే వారి సహచరుల గురించి చెప్పలేము.\r\nబలమైన పరిశ్రమ అనుసంధానం కోసం, పాలిటెక్నిక్ కళాశాలలు శిక్షణ, క్యాంపస్ ప్లేస్‌మెంట్‌లు, పారిశ్రామిక యూనిట్ల సందర్శనలు, నిపుణుల ఉపన్యాసాల కోసం పరిశ్రమతో సహకరిస్తున్నాయి.\r\nప్రభుత్వ పాలిటెక్నిక్, ఓబులవారిపల్లి రాబోయే సంవత్సరాల్లో విద్యార్థులకు ప్లేస్‌మెంట్‌లపై దృష్టి సారిస్తోంది.', '9010222154', 'placements/tpo/img');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `username`, `password`) VALUES
('', 'gpt154', 'Obvp(1986)');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academics`
--
ALTER TABLE `academics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adminofficestaffdata`
--
ALTER TABLE `adminofficestaffdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `aictedata`
--
ALTER TABLE `aictedata`
  ADD PRIMARY KEY (`eoaAcaYear`);

--
-- Indexes for table `alumnicoordinator`
--
ALTER TABLE `alumnicoordinator`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `aptesstructure`
--
ALTER TABLE `aptesstructure`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bhostel`
--
ALTER TABLE `bhostel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bhostelstructure`
--
ALTER TABLE `bhostelstructure`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colbasicdetails`
--
ALTER TABLE `colbasicdetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `committeemembers`
--
ALTER TABLE `committeemembers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `committees`
--
ALTER TABLE `committees`
  ADD PRIMARY KEY (`comId`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ctedata`
--
ALTER TABLE `ctedata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`deptCode`);

--
-- Indexes for table `deptsstructure`
--
ALTER TABLE `deptsstructure`
  ADD PRIMARY KEY (`deptCode`);

--
-- Indexes for table `eventsdata`
--
ALTER TABLE `eventsdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `facultydata`
--
ALTER TABLE `facultydata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faqdata`
--
ALTER TABLE `faqdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ghostel`
--
ALTER TABLE `ghostel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ghostelstructure`
--
ALTER TABLE `ghostelstructure`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ipsgmprizesdata`
--
ALTER TABLE `ipsgmprizesdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `labsdata`
--
ALTER TABLE `labsdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `librarydata`
--
ALTER TABLE `librarydata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newsdata`
--
ALTER TABLE `newsdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notificationsdata`
--
ALTER TABLE `notificationsdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `officestructure`
--
ALTER TABLE `officestructure`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pdmessage`
--
ALTER TABLE `pdmessage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `placementdetails`
--
ALTER TABLE `placementdetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `polycetcoordinator`
--
ALTER TABLE `polycetcoordinator`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `polytechfestdata`
--
ALTER TABLE `polytechfestdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `principaldata`
--
ALTER TABLE `principaldata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `resourcesdata`
--
ALTER TABLE `resourcesdata`
  ADD PRIMARY KEY (`subCode`);

--
-- Indexes for table `rtimembersdata`
--
ALTER TABLE `rtimembersdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sdcdata`
--
ALTER TABLE `sdcdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `studentdata`
--
ALTER TABLE `studentdata`
  ADD PRIMARY KEY (`stupin`);

--
-- Indexes for table `stustrength`
--
ALTER TABLE `stustrength`
  ADD PRIMARY KEY (`deptCode`);

--
-- Indexes for table `tpodata`
--
ALTER TABLE `tpodata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ipsgmprizesdata`
--
ALTER TABLE `ipsgmprizesdata`
  MODIFY `id` double NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
