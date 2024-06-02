import React from "react";
import "./Education.css";

function Education() {
    return(
        <div className="timeline">
            <h1 className="text-ed">Education</h1>
            <div className="timeline-cont leftCont">
                <img className="timeline-logo" src="src\Assets\logo.png"></img>
                <div className="text-box">
                    <p className="timeline-text1">B.Tech, Computer Science</p>
                    <h2 className="timeline-head">XYZ University, City</h2>
                    <p className="timeline-text">CGPA - 9.5</p>
                    <span className="leftContArrow"></span>
                </div>
            </div>
            <div className="timeline-cont rightCont">
                <img className="timeline-logo" src="src\Assets\logo.png"></img>
                <div className="text-box">
                    <p className="timeline-text1">High School</p>
                    <h2 className="timeline-head">ABC School, City</h2>
                    <p className="timeline-text">Marks - 95%</p>
                    <span className="rightContArrow"></span>
                </div>
            </div>
        </div>
    )
}

export default Education;