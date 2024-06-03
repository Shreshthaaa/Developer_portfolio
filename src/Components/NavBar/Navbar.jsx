import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import logo_img from './../../../public/Assets/logo.png';
const Navbar = () => {
  return (
    <div className="navbar">

        <img src={logo_img} alt="" className="logo"/>

        <ul className="navbar-icons">
            <li className="icons"><Link to="/">Home</Link></li>
            <li className="icons"><Link to="/about">About</Link></li>
            <li className="icons"><Link to="/skills">Skills</Link></li>
            <li className="icons"><Link to="/education">Education</Link></li>
            <li className="icons"><Link to="/experience">Experience</Link></li>
            <li className="icons"><Link to="/projects">Projects</Link></li>
            <li className="icons"><a href="https://drive.google.com/file/d/13kaPsdMNDsM4LV9g7m5-E5PTildp-yYf/view">Resume</a></li>
        </ul>
    </div>
  )
}  

export default Navbar