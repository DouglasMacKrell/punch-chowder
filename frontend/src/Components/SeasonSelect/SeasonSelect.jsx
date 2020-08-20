import React from 'react'

import './SeasonSelect.css'

const SeasonSelect = () => {
    return (
        <div className="season-select">
            <div className="season-select__main-container">
                <div className="season-spacer" />
                <div className="season-select__sub-container">
                    <h2>UNLEASH THE FLAVOR</h2>
                    <button>Season 1</button>
                    <button>Season 2</button>
                </div>
            </div>
        </div>
    )
}

export default SeasonSelect
