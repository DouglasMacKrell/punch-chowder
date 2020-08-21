import React, { useEffect, useState } from "react";
import axios from "axios";

import LinksContainer from "../LinksContainer/LinksContainer";
import "./SeasonTwo.css";

const SeasonTwo = () => {
  const [sTwo, setSTwo] = useState({});

  useEffect(() => {
    const getSeasonTwo = async () => {
      try {
        let { data } = await axios.get(
          `https://calm-waters-58474.herokuapp.com/api/episodes/season/2`
        );
        let fullSeasonTwo = data.payload;
        setSTwo(fullSeasonTwo);
      } catch (err) {
        console.log(err);
      }
    };
    getSeasonTwo();
  }, []);

  return (
    <div className="season-two">
      <div className="season-two__main-container">
        <div className="season-two__sub-container">
          <LinksContainer episodes={sTwo} />
        </div>
      </div>
    </div>
  );
};

export default SeasonTwo;
