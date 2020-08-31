import React, { useEffect, useState } from "react";
import axios from "axios";

import BonusLinksContainer from "../BonusLinksContainer/BonusLinksContainer";

import "./Animatics.css";

const Animatics = () => {
        const [animatics, setAnimatics] = useState({});

        useEffect(() => {
          const getAnimatics = async () => {
            try {
              let { data } = await axios.get(
                `https://punch-chowder.herokuapp.com/api/bonus/type/3`
              );
              let allAnimatics = data.payload;
              setAnimatics(allAnimatics);
            } catch (err) {
              console.log(err);
            }
          };
          getAnimatics();
        }, []);

    return (
      <div className="animatics">
        <div className="animatics__main-container">
          <div className="animatics__sub-container">
            <BonusLinksContainer episodes={animatics} />
          </div>
        </div>
      </div>
    );
}

export default Animatics
