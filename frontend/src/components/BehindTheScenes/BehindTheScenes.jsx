import React, { useEffect, useState } from "react";
import axios from "axios";

import BonusLinksContainer from "../BonusLinksContainer/BonusLinksContainer";

import "./BehindTheScenes.css";

const BehindTheScenes = () => {
            const [bts, setBts] = useState({});

            useEffect(() => {
              const getBts = async () => {
                try {
                  let { data } = await axios.get(
                    `https://punch-chowder.herokuapp.com/api/bonus/type/2`
                  );
                  let allBts = data.payload;
                  setBts(allBts);
                } catch (err) {
                  console.log(err);
                }
              };
              getBts();
            }, []);
    return (
      <div className="bts">
        <div className="bts__main-container">
          <div className="bts__sub-container">
            <BonusLinksContainer episodes={bts} />
          </div>
        </div>
      </div>
    );
}

export default BehindTheScenes
