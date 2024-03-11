import React, { useEffect, useState } from "react";
import AddDept from "./AddDept";
import "../../adminconsole.css";
import DataTableBuilder from "../../../Utilities/DataTableBuilder";
import {api,BASE_URL} from "../../../api";
import DeptStudentStrength from "./DeptStudentStrength";
import AdminFaculty from "./AdminFaculty";
import AdminDeptLabs from "./AdminDeptLabs";
import AdminPolytechFest from "./AdminPolytechFest";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

export default function AdminDepartments() {
  const [value, setValue] = React.useState(0);
  const [newDept, setNewDept] = useState({});
  const [dbData, setDbData] = useState({});
  const [formSub, setFormSub] = useState(false);

  useEffect(() => {
    const fetchDeptsData = async () => {
    
        //Depatment DETAILS DATA FETCHING

        await api.get("adminstr/depts/table")
        .then((res)=>{
          // console.log("res",res.data)
          let temp = {};

          for (const [key, value] of Object.entries(res.data)) {
            temp = { ...temp, [value.deptId]: value };
          }
          // console.log("temp",temp)
          setDbData(temp);
        })
        .catch((err)=> console.log(err))
   
    };
    fetchDeptsData();
  }, [formSub]);

  const delDept = () => {
    setNewDept({});
    setFormSub(!formSub);
  };

  const editDbData = (id) => {
    setValue(1);
    let updMember = {};
    for (const [key, value] of Object.entries(dbData)) {
      if (key == id) updMember = { ...updMember, [key]: value };
    }
    console.log("updmember",updMember)
    setNewDept(updMember);
    setFormSub(!formSub);
  };

  const deleteDbData = async (id) => {
    // console.log("delete id ", id);
    let deptcode = '';
    let deptName = '';
    for (const [key, value] of Object.entries(dbData)) {
      if (key == id){
        deptcode = value.deptCode;
        deptName = value.deptName;
      } 
    }
    // console.log("deptcode",deptcode)

    //deptsstructure
    await api
      .delete("adminstr/dept/" + id)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log(err));

    //department basic data
    await api
      .delete("dept/" + deptcode)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log(err));

    //student strength
    await api
      .delete("stustr/dept/" + deptcode)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log(err));

    //faculty data
    await api
      .delete("facultydata/dept/" + deptcode)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log(err));


    //labs data
    await api
      .delete("labsdata/dept/" + deptcode)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log(err));

    //polytechfest data
    await api
      .delete("polytechfest/dept/" + deptcode)
      .then((res) => {
        window.alert(res.data);
      })
      .catch((err) => console.log(err));

    //placements data
    await api
    .delete("placements/dept/" + deptcode)
    .then((res) => {
      window.alert(res.data);
    })
    .catch((err) => console.log(err));

     //resources data
    //  await api
    //  .delete("resources/dept/" + deptcode)
    //  .then((res) => {
    //    window.alert(res.data);
    //  })
    //  .catch((err) => console.log(err));
 
    setFormSub(!formSub);
  };


  // console.log("dbdata", dbData);


  const theadData = ["Deparment ID", "Dept Code"];

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
          <Tab label="Existing Departments" {...a11yProps(0)} />
          <Tab label="Department Details" {...a11yProps(1)} />
          <Tab label="Faculty" {...a11yProps(2)} />
          <Tab label="Laborataries" {...a11yProps(3)} />
          {Object.entries(newDept).map((dpt) => {
            if (dpt[1].deptCode === "GENERAL") return null;
            else
              return [
                <Tab label="Student Strength" {...a11yProps(4)} />,
                <Tab label="Polytechfest" {...a11yProps(5)} />,
              ];
          })}
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        {/* <h2>Departments Data</h2> */}
        <p className="Remarks">
          *- Be Very Careful Here. Deletion here will permanently Delete
          Department data
        </p>
        {Object.keys(dbData).length > 0 && (
          <DataTableBuilder
            data={dbData}
            theadData={theadData}
            editDbData={editDbData}
            deleteDbData={deleteDbData}
          />
        )}
      </TabPanel>
      {/* {deptName && */}
      {Object.entries(newDept).map((dpt) => {
        if (dpt[1].deptCode === "GENERAL")
          return (
            <div key={dpt[0]}>
              <TabPanel value={value} index={1}>
                <AddDept key={dpt[0]} data={dpt[1]} delDept={delDept} />
              </TabPanel>

              <TabPanel value={value} index={2}>
                <AdminFaculty deptCode={dpt[1].deptCode} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <AdminDeptLabs deptCode={dpt[1].deptCode} />
              </TabPanel>
            </div>
          );
        else
          return (
            <div key={dpt[0]}>
              <TabPanel value={value} index={1}>
                <AddDept key={dpt[0]} data={dpt[1]} delDept={delDept} />
              </TabPanel>

              <TabPanel value={value} index={2}>
                <AdminFaculty deptCode={dpt[1].deptCode} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <AdminDeptLabs deptCode={dpt[1].deptCode} />
              </TabPanel>
              <TabPanel value={value} index={4}>
                <DeptStudentStrength deptCode={dpt[1].deptCode} />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <AdminPolytechFest deptCode={dpt[1].deptCode} />
              </TabPanel>
            </div>
          );
      })}
    </Box>
  );
}
