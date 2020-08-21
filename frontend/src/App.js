import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ToolBar from "./components/ToolBar/ToolBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Home from './components/Home/Home'
import './App.css';
import SeasonSelect from './components/SeasonSelect/SeasonSelect';
import Watch from './components/Watch/Watch';
import SeasonOne from './components/SeasonOne/SeasonOne';
import SeasonTwo from './components/SeasonTwo/SeasonTwo';
import FourZeroFour from './components/FourZeroFour/FourZeroFour';
import SecretsLogin from './components/SecretsLogin/SecretsLogin';
import AccessDenied from './components/AccessDenied/AccessDenied';
import TopSecret from './components/TopSecret/TopSecret';

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
          <Route path="/secretlogin" component={SecretsLogin} />
          <Route path="/accessdenied" component={AccessDenied} />
          <Route path="/mad/dogs/ahoy" component={TopSecret} />
          <Route component={FourZeroFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
