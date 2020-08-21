import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import "./Watch.css";

const Watch = () => {
  const [title, setTitle] = useState("");
  const [epUrl, setEpUrl] = useState("");
  const [hasParamsChanged, setHasParamsChanged] = useState(false)

  let { episode_id } = useParams();

  useEffect(() => {
    const getEpisode = async () => {
      try {
        let { data } = await axios.get(
          `https://calm-waters-58474.herokuapp.com/api/episodes/${episode_id}`
        );
        let selectedEpisode = data.payload;
        setTitle(selectedEpisode.title);
        setEpUrl(selectedEpisode.episodeurl);
        setHasParamsChanged(false)
      } catch (err) {
        console.log(err);
      }
    };

    getEpisode();
  }, [hasParamsChanged, episode_id]);

  const updatePage = () => {
      setHasParamsChanged(true)
  };

  return (
    <div className="watch">
      <div className="watch__main-container">
        <h1>{title}</h1>
        <div className="frame-container">
          <iframe id="ifrm" src={`${epUrl}`} title={`${title}`} width="640" height="480"></iframe>
        </div>
        <div className="watch__controls">
          {title !== "1: Mystic Mayhem" ? (
            <Link to={`/watch/${parseInt(episode_id) - 1}`} onClick={updatePage}>
              <button>PREVIOUS</button>
            </Link>
          ) : (
            <div className="spacer" />
          )}
          {title !== "13B: Rise" ? (
            <Link to={`/watch/${parseInt(episode_id) + 1}`} onClick={updatePage}>
              <button>NEXT</button>
            </Link>
          ) : (
            <div className="spacer" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Watch;
