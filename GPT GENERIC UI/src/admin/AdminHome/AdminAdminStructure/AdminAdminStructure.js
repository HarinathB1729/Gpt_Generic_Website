import React from "react";
import "../../adminconsole.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AdminDeptsStructure from "./AdminDeptsStructure";
import AdminOffice from "./AdminOffice";
import AdminGirlsHostel from "./AdminGirlsHostel";
import AdminBoysHostel from "./AdminBoysHostel";
import AdminAptes from "./AdminAptes";

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

function AdminAdminStructure() { 
  const [value, setValue] = React.useState(0);

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
          <Tab label="DEPARTMENTS" {...a11yProps(0)} />
          <Tab label="APTES" {...a11yProps(1)} />
          <Tab label="OFFICE" {...a11yProps(2)} />
          <Tab label="GIRLS HOSTEL" {...a11yProps(3)} />
          <Tab label="BOYS HOSTEL" {...a11yProps(4)} />         
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <AdminDeptsStructure />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdminAptes />
      </TabPanel>
      <TabPanel value={value} index={2}>
       <AdminOffice />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AdminGirlsHostel />
      </TabPanel>
      <TabPanel value={value} index={4}>
       <AdminBoysHostel />
      </TabPanel>
      
    </Box>
  );
}

export default AdminAdminStructure;
