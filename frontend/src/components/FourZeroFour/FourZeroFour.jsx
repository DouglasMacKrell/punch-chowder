import React from 'react'
import './FourZeroFour.css'
import FzF from './doug-404.png'

const FourZeroFour = () => {
    return (
        <div className="four-zero-four">
            <div className="four-zero-four__main-container">
                <div className="four-zero-four__sub-container">
                    <img src={FzF} alt="404 Page Not Found" /> 
                </div>
            </div>
            
        </div>
    )
}

export default FourZeroFour
