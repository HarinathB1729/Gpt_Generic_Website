import React from "react";
import "../../adminconsole.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AdminAyCalender from "./AdminAyCalender";
import AdminAyFacHandBook from "./AdminAyFacHandBook";
import AdminAyStuRuleBook from "./AdminAyStuRuleBook";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function AdminAcademics() {
  const [value, setValue] = React.useState(0);
  const academicId = Math.random().toFixed(6);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="AY CALENDER" {...a11yProps(0)} />
          <Tab label="AY FACULTY HANDBOOK" {...a11yProps(1)} />
          <Tab label="AY STUDENT RULEBOOK" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AdminAyCalender id={academicId} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdminAyFacHandBook id={academicId} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AdminAyStuRuleBook id={academicId} />
      </TabPanel>
    </Box>
  );
}

export default AdminAcademics;
