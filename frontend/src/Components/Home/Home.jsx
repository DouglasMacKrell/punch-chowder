import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__main-container">
        <div className="home__sub-container">
          <NavLink to="/unleashtheflavor">
            <button>HOT SOUP!</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
