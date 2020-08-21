import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ToolBar from "./Components/ToolBar/ToolBar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import Home from './Components/Home/Home'
import './App.css';
import SeasonSelect from './Components/SeasonSelect/SeasonSelect';
import Watch from './Components/Watch/Watch';
import SeasonOne from './Components/SeasonOne/SeasonOne';
import SeasonTwo from './Components/SeasonTwo/SeasonTwo';
import FourZeroFour from './Components/FourZeroFour/FourZeroFour';

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/unleashtheflavor" component={SeasonSelect} />
          <Route path="/seasonone" component={SeasonOne} />
          <Route path="/seasontwo" component={SeasonTwo} />
          <Route path="/watch/:episode_id" component={Watch} />
          <Route component={FourZeroFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
