import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Iframe from "react-iframe";

import "./Watch.css";

const Watch = () => {
  const [title, setTitle] = useState("");
  const [epUrl, setEpUrl] = useState("");

  let { episode_id } = useParams();
  console.log(episode_id);

  useEffect(() => {
    const getEpisode = async () => {
      try {
        let { data } = await axios.get(
          `http://localhost:3001/api/episodes/${episode_id}`
        );
        let selectedEpisode = data.payload;
        console.log(selectedEpisode);
        setTitle(selectedEpisode.title);
        setEpUrl(selectedEpisode.episodeurl);
      } catch (err) {
        console.log(err);
      }
    };

    getEpisode();
  }, []);

  console.log(epUrl);

  return (
    <div className="watch">
      <div className="watch__main-container">
        <h2>{title}</h2>
        <div className="frame-container">
          <iframe id="ifrm" src={`${epUrl}`} width="640" height="480"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Watch;
