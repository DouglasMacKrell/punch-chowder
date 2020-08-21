import React from "react";
import EpisodeButton from "./EpisodeButton";

const LinksContainer = ({ episodes }) => {
  let buttons = [];
  if (episodes.length > 0) {
    for (let episode of episodes) {
      buttons.push(<EpisodeButton episode={episode} key={episode.id} />);
    }
    return <ul className="links-container">{buttons}</ul>;
  }
  return <p>LOADING...</p>
};

export default LinksContainer;
