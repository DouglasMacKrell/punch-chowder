import React from "react";
import { Link } from "react-router-dom";
import Logo from './punch-chowder-logo.svg'

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__main-container">
        <div className="home__sub-container">
          <img src={Logo} alt="Punch Chowder" className="home__logo" />
          <Link to="/unleashtheflavor">
            <button>HOT SOUP!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
