import React from "react";
import BonusButton from "./BonusButton";

const BonusLinksContainer = ({ episodes }) => {
  let buttons = [];
  if (episodes.length > 0) {
    for (let episode of episodes) {
      buttons.push(<BonusButton episode={episode} key={episode.id} />);
    }
    return <ul className="links-container">{buttons}</ul>;
  }
  return <p>LOADING...</p>;
};

export default BonusLinksContainer;
