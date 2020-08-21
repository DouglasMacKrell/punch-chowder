import React from "react";
import { Link } from "react-router-dom";

import './EpisodeButton.css'

const EpisodeButton = ({ episode }) => {
  let title = episode.title;
  let episode_id = episode.id;
  return (
    <div>
      <Link to={`/watch/${episode_id}`}>
        <button className="episode-button">{title}</button>
      </Link>
    </div>
  );
};

export default EpisodeButton;
