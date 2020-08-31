import React, { useEffect, useState } from "react";
import axios from "axios";

import BonusLinksContainer from "../BonusLinksContainer/BonusLinksContainer";

import './Shorts.css'

const Shorts = () => {
    const [shorts, setShorts] = useState({})

      useEffect(() => {
        const getShorts = async () => {
          try {
            let { data } = await axios.get(
              `https://punch-chowder.herokuapp.com/api/bonus/type/1`
            );
            let allShorts = data.payload;
            setShorts(allShorts);
          } catch (err) {
            console.log(err);
          }
        };
        getShorts();
      }, []);

    return (
      <div className="shorts">
        <div className="shorts__main-container">
          <div className="shorts__sub-container">
            <BonusLinksContainer episodes={shorts} />
          </div>
        </div>
      </div>
    );
}

export default Shorts
