import React from "react";
import './Navbar.css'
import toggle_light from '../../Assets/logo-black.png';
import toggle_dark from '../../Assets/logo-light.png';

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

  return (
    <div className="navbar">

        <img src="src\Assets\logo.png" alt="" className="logo"/>

        <ul className="navbar-icons">
            <li className="icons">Home</li>
            <li className="icons">About</li>
            <li className="icons">Skills</li>
            <li className="icons">Education</li>
            <li className="icons">Experience</li>
            <li className="icons">Projects</li>
            <li className="icons">Resume</li>
        </ul>

        <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_dark : toggle_light } alt="" className="toggle-icon" />
    </div>
  )
}  

export default Navbar