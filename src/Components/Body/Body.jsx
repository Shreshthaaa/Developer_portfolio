import React, { useEffect, useState } from "react";
import './Body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
const Body = ({theme, setTheme}) => {
    const [text, setText] = useState('a Developer');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setText(prevText => {
                return prevText === 'a Developer' ? 'a Freelancer' : 'a Developer';
            });
        },2000);

        return () => clearInterval(intervalId);
    }, []);

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    return(
        
        <div>
            <h1>Shreshtha Sharma</h1>
            <p>I'm <span> {'a Developer'} </span></p>

            <ul className="links">
                <li>
                    <a href="https://www.linkedin.com/in/shreshtha-sharma-ab0a31284/"><button className="icon-button" ><FontAwesomeIcon icon={faLinkedin}/></button></a>
                    <a href="https://github.com/Shreshthaaa"><button className="icon-button"><FontAwesomeIcon icon={faGithub} /></button></a>
                    <a href="mailto:paliwalshreshtha@gmail.com"><button className="icon-button"><FontAwesomeIcon icon={faEnvelope} /></button></a>
                </li>
            </ul>
        </div>
    )
}

export default Body