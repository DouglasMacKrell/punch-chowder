import React from "react";
import { Link } from "react-router-dom";

import "./SeasonSelect.css";

const SeasonSelect = () => {
  return (
    <div className="season-select">
      <div className="season-select__main-container">
        <div className="season-spacer" />
        <div className="season-select__sub-container">
          <h2>UNLEASH THE FLAVOR</h2>
          <Link to="/seasonone">
            <button>SEASON 1</button>
          </Link>
          <Link to="/seasontwo">
            <button>SEASON 2</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeasonSelect;
