import React from "react";
import { useParams } from "react-router-dom";

import "./Watch.css";

const Watch = ({ title, video, first, last }) => {
  let { episodeId } = useParams();



  return (
    <div className="watch">
      <div className="watch__main-container">
        <h2>{title}</h2>
        <iframe
          src="https://drive.google.com/file/d/15v4SOKIZOlgZ1ZdWwAIREX3MMP_fG7Mh/preview"
          width="640"
          height="480"
        ></iframe>
      </div>
    </div>
  );
};

export default Watch;
