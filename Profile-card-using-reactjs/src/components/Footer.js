import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubSquare,
    faInstagramSquare,
    faFacebookSquare,
    faTwitterSquare
  } from '@fortawesome/free-brands-svg-icons';
import "../style.css"

export default function Footer() {
    return (
        <div className="icons">
        
        
        
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" style={{ color: '918E9B' }} />
        <FontAwesomeIcon icon={faGithubSquare} size="2x" style={{ color: '918E9B' }}/>
        <FontAwesomeIcon icon={faInstagramSquare} size="2x" style={{ color: '918E9B' }}/>
        <FontAwesomeIcon icon={faTwitterSquare} size="2x" style={{ color: '918E9B' }}/>
        </div>

    )
}