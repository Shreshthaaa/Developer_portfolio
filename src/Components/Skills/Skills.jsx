import React from "react";
import './Skills.css';

function Skills(){
    return(
        <div className="skills-cont">
            <h1 className="text-skills">Skills</h1>
            <h3>I love to learn new things and experiment with new technologies.
                <br></br>
                These are some of the major languages, technologies, tools and platforms I have worked with:</h3>
            <div className="main-cont">
                <h2>Languages & Databases</h2>
                <div className="imgCont1">
                    <img className="icon" src="src\Assets\java-icon.png" alt="" />
                    <img className="icon" src="src\Assets\php-icon.jpg" alt="" />
                    <img className="icon" src="src\Assets\js-icon.png" alt="" />
                    <img className="icon" src="src\Assets\py-icon.jpg" alt="" />
                    <img className="icon" src="src\Assets\mysql-icon.png" alt="" />
                </div>
                <div className="tags">
                    <p>Java</p>
                    <p>PHP</p>
                    <p>JavaScript </p>
                    <p>Python</p>
                    <p>MySQL</p>
                </div>
                <div>
                <h2>Frameworks & Technologies</h2>
                <div className="imgCont1">
                    <img className="icon" src="src\Assets\android-icon.jpg" alt="" />
                    <img className="icon" src="src\Assets\react-icon.png" alt="" />
                    <img className="icon" src="src\Assets\nodejs-icon.png" alt="" />
                </div>
                <div className="tags">
                    <p>Android</p>
                    <p>React</p>
                    <p>Nodejs</p>
                </div>   
                <h2>Tools & Platforms</h2>
                <div className="imgCont1">
                    <img className="icon" src="src\Assets\studio-icon.png" alt="" />
                    <img className="icon" src="src\Assets\git-icon.png" alt="" />
                    <img className="icon" src="src\Assets\docker-logo.png" alt="" />
                </div>
                <div className="tags">
                    <p>Android Studio</p>
                    <p>Git</p>
                    <p>Docker</p>
                </div> 
            </div>
            </div>
        </div>
    )
}
export default Skills;