import React from "react";
import { NavLink } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/unleashtheflavor">UNLEASH THE FLAVOR!</NavLink>
        </li>
        <li>
          <NavLink to="/bonus-features">BONUS FEATURES</NavLink>
        </li>
        <li>
          <NavLink to="/secretlogin">SECRETS</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
