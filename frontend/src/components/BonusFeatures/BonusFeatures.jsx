import React from 'react'
import { Link } from 'react-router-dom'

import './BonusFeatures.css'

const BonusFeatures = () => {
    return (
      <div className="bonus-features">
        <div className="bonus-features__main-container">
          <div className="bonus-features__spacer" />
          <div className="bonus-features__sub-container">
            <h1>BONUS FEATURES</h1>
            <Link to="/shorts">
              <button>SHORTS</button>
            </Link>
            <Link to="/behind-the-scenes">
              <button>BEHIND THE SCENES</button>
            </Link>
            <Link to="/animatics">
              <button>ANIMATICS</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default BonusFeatures
