import React, { useEffect, useState } from "react";
import './Body.css'
import Typing from "./Typing";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
// import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Body = ({theme, setTheme}) => {

    return(
        
        <div>
            <h1>Shreshtha Sharma</h1>
            <p className="type-effect-text">I'm <span><Typing 
                text={[
                "a Developer",
                "a Freelancer",
                ]}
                typingSpeed={100}
                deletingSpeed={50}
            /></span></p>

            <ul className="links">
                <li>
                    <a  href="https://www.linkedin.com/in/shreshtha-sharma-ab0a31284/"><button className="icon-button" ><img className="logo1" src="src\Assets\linkedin-logo.jpg"/></button></a>
                    <a  href="https://github.com/Shreshthaaa"><button className="icon-button"><img className="logo2" src="src\Assets\github-logo.png"/></button></a>
                    <a  href="mailto:paliwalshreshtha@gmail.com"><button className="icon-button"><img className="logo3" src="src\Assets\mail-icon.jpg"/></button></a>
                </li>
            </ul>
        </div>
    )
}

export default Body