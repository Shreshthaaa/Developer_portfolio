import React, { useEffect, useState } from "react";
import './Body.css'
import Typing from "./Typing";
import linkedIn_img from './../../../public/Assets/linkedin-logo.jpg'
import github_img from './../../../public/Assets/github-logo.png';;
import mail_img from './../../../public/Assets/mail-icon.jpg';

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
                    <a  href="https://www.linkedin.com/in/shreshtha-sharma-ab0a31284/"><button className="icon-button" ><img className="logo1" src={linkedIn_img}/></button></a>
                    <a  href="https://github.com/Shreshthaaa"><button className="icon-button"><img className="logo2" src={github_img}/></button></a>
                    <a  href="mailto:paliwalshreshtha@gmail.com"><button className="icon-button"><img className="logo3" src={mail_img}/></button></a>
                </li>
            </ul>
        </div>
    )
}

export default Body