import React from "react";
import { Link } from "react-router-dom";

import "./BonusButton.css";

const BonusButton = ({ episode }) => {
  let title = episode.title;
  let bonus_id = episode.id;
  return (
    <div>
      <Link to={`/bonus-watch/${bonus_id}`}>
        <button className="bonus-button">{title}</button>
      </Link>
    </div>
  );
};

export default BonusButton;
