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
            <li className="icons"><a>Home</a></li>
            <li className="icons"><a>About</a></li>
            <li className="icons"><a>Skills</a></li>
            <li className="icons"><a>Education</a></li>
            <li className="icons"><a>Experience</a></li>
            <li className="icons"><a>Projects</a></li>
            <li className="icons"><a>Resume</a></li>
        </ul>

        <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_dark : toggle_light } alt="" className="toggle-icon" />
    </div>
  )
}  

export default Navbar