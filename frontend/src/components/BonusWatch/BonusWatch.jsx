import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import "./BonusWatch.css";

const BonusWatch = () => {
  const [title, setTitle] = useState("");
  const [epUrl, setEpUrl] = useState("");

  let { bonus_id } = useParams();

  useEffect(() => {
    const getBonus = async () => {
      try {
        let { data } = await axios.get(
          `https://punch-chowder.herokuapp.com/api/bonus/${bonus_id}`
        );
        let selectedBonus = data.payload;
        setTitle(selectedBonus.title);
        setEpUrl(selectedBonus.episodeurl);
        console.log(selectedBonus)
      } catch (err) {
        console.log(err);
      }
    };

    getBonus();
  }, [bonus_id]);

  return (
    <div className="bonus-watch">
      <div className="bonus-watch__main-container">
        <h1>{title}</h1>
        <div className="frame-container__bonus">
          <iframe
            id="bonus-ifrm"
            src={epUrl}
            title={title}
            width="640"
            height="480"
          ></iframe>
        </div>
        <div className="bonus-watch__controls">
          {title !== "1: Turtle Teens in: PIZZA RACE" ? (
            <Link to={`/bonus-watch/${parseInt(bonus_id) - 1}`}>
              <button>PREVIOUS</button>
            </Link>
          ) : (
            <div className="bonus-watch__spacer" />
          )}
          {title !== "Rise - Animatic" ? (
            <Link to={`/bonus-watch/${parseInt(bonus_id) + 1}`}>
              <button>NEXT</button>
            </Link>
          ) : (
            <div className="bonus-watch__spacer" />
          )}
        </div>
      </div>
    </div>
  );
};

export default BonusWatch;
