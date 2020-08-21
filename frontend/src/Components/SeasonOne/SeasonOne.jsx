import React, { useEffect, useState } from "react";
import axios from "axios";

import LinksContainer from "../LinksContainer/LinksContainer";
import "./SeasonOne.css";

const SeasonOne = () => {
  const [sOne, setSOne] = useState({});

  useEffect(() => {
    const getSeasonOne = async () => {
      try {
        let { data } = await axios.get(
          `https://calm-waters-58474.herokuapp.com/api/episodes/season/1`
        );
        let fullSeasonOne = data.payload;
        setSOne(fullSeasonOne);
      } catch (err) {
        console.log(err);
      }
    };
    getSeasonOne();
  }, []);

  return (
    <div className="season-one">
      <div className="season-one__main-container">
        <div className="season-one__sub-container">
          <LinksContainer episodes={sOne} />
        </div>
      </div>
    </div>
  );
};

export default SeasonOne;
