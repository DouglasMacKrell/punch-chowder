import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { NavLink } from "react-router-dom";
import "./ToolBar.css";
import Logo from './punch-chowder-logo.svg'

// import Logo from "./Doug-Logo-Red.svg";

const ToolBar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.handleDrawerToggleClick} />
        </div>
        <div className="toolbar__logo">
          <a href="/">
            <img src={Logo} alt="Punch Chowder" className="toolbar__logo-img" />
          </a>
        </div>
        <div className="spacer" />
        <div className="toolbar_nav-items">
          <ul>
            {/* <li>
              <NavLink to="/">Home</NavLink>
            </li> */}
            <li>
              <NavLink to="/unleashtheflavor">UNLEASH THE FLAVOR</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default ToolBar;
