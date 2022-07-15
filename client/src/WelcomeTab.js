import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";
 
const WelcomeTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  return (
    <>
    <AppBar position="sticky">
  <Toolbar>
    <Typography sx={{ml:5}} variant="h6">
      Books&Quotes
    </Typography>
  </Toolbar>
</AppBar>
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
          >
          Login
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
          >
          Register
        </li>
      </ul>
 
      <div className="outlet">
        {activeTab === "tab1" ? <Login /> : <Signup />}
      </div>
    </div>
    </>
  );
};
export default WelcomeTabs;