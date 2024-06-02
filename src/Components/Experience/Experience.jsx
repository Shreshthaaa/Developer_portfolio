import React from "react";
import "./Experience.css";

function Experience() {
    return(
        <div className="experience-main">
            <h1 className="exp-head">Experience</h1>
            <div className="exp-container">
            <div className="time">
                <p className="pTime">06/20XX - Present</p>
                <span className="arrow"></span>
            </div>
            <div className="exp-cont">
                <img className="exp-logo" src="src\Assets\logo.png"></img>
                <h3 className="pos">Software Engineer</h3>
                <p className="company">XYZ Ltd - Full time</p>
                <small>
                    <ul>
                        <li className="work">Integrated 2 new product.</li>
                        <li className="work">Working on adding def to bcd. Improved speed by 50%.</li>
                    </ul>
                </small>
            </div>
            </div>
            <div className="exp-container">
            <div className="time">
                <p className="pTime">01/20XX - 05/20XX</p>
                <span className="arrow"></span>
            </div>
            <div className="exp-cont">
                <img className="exp-logo" src="src\Assets\logo.png"></img>
                <h3 className="pos">Software Engineer</h3>
                <p className="company">XYZ Ltd - Internship</p>
                <small>
                    <ul>
                        <li className="work">Worked on abc.</li>
                    </ul>
                </small>
            </div>
            </div>
            <div className="exp-container">
            <div className="time">
                <p className="pTime">09/20XX - 01/20YY</p>
                <span className="arrow"></span>
            </div>
            <div className="exp-cont">
                <img className="exp-logo" src="src\Assets\logo.png"></img>
                <h3 className="pos">App Developer</h3>
                <p className="company">ABC Pvt Ltd - Freelance</p>
                <small>
                    <ul>
                        <li className="work">Developed the official apps for the startup for both
                            <br></br>
                            Android and iOS using hybrid framework.
                        </li>
                        <li className="work">Done bcd work.</li>
                    </ul>
                </small>
            </div>
            </div>
        </div>
        
    )
}

export default Experience;