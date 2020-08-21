import React from 'react'
import { Link } from 'react-router-dom'
import './AccessDenied.css'

const AccessDenied = () => {
    return (
        <div className="access-denied">
            <div className="access-denied__main-container">
                <div className="access-denied__sub-container">
                    <h1>ACCESS DENIED!</h1>
                    <Link to="/"><button>HOME</button></Link>
                </div>
            </div>
            
        </div>
    )
}

export default AccessDenied
