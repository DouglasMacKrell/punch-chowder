import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ToolBar from "./Components/ToolBar/ToolBar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";


import './App.css';

function App() {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const handleDrawerToggleClick = () => {
      setSideDrawerOpen((prevDrawerState) => !prevDrawerState);
    };

    const handleBackdropClick = () => {
      setSideDrawerOpen(false);
    };

    let backdrop;

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={handleBackdropClick} />;
    }

  return (
    <div className="App">
      <Router>
        <ToolBar handleDrawerToggleClick={handleDrawerToggleClick} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
      </Router>
    </div>
  );
}

export default App;
