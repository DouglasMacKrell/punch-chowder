import React from "react";
import "./TopSecret.css";

const TopSecret = () => {
  return (
    <div className="top-secret">
      <div className="top-secret__main-container">
        <div className="top-secret__sub-container">
          <div className="top-secret__doug">
              <h2>SITE CREATED BY</h2>
            <a href="https://douglasmackrell.com">
              <button>PORTFOLIO</button>
            </a>
            <a href="https://www.redbubble.com/people/DouglasMacKrell/shop?asc=u">
              <button>STORE</button>
            </a>
          </div>
          <div className="top-secret__video-owner">
              <h2>VIDEO CLIPS HOSTED BY</h2>
              <a href="https://twitter.com/tmntlovingleo"><button>TWITTER</button></a>
              <a href="https://tmntlovingleocreates.tumblr.com/"><button>TUMBLR</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSecret;
