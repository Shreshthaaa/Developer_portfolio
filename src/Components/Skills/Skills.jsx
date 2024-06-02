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
                <h2 className="taghead">Languages & Databases</h2>
                <div className="imgCont1">
                    <img className="icon" src="src\Assets\java-icon.png" alt="" />
                    <img className="icon" src="src\Assets\php-icon.jpg" alt="" />
                    <img className="icon" src="src\Assets\js-icon.png" alt="" />
                    <img className="icon" src="src\Assets\py-icon.jpg" alt="" />
                    <img className="icon" src="src\Assets\mysql-icon.png" alt="" />
                </div>
                <div className="tags">
                    <p className="tag">Java</p>
                    <p className="tag">PHP</p>
                    <p className="tag">JavaScript </p>
                    <p className="tag">Python</p>
                    <p className="tag">MySQL</p>
                </div>
                <div>
                <h2 className="taghead">Frameworks & Technologies</h2>
                <div className="imgCont1">
                    <img className="icon" src="src\Assets\android-icon.jpg" alt="" />
                    <img className="icon" src="src\Assets\react-icon.png" alt="" />
                    <img className="icon" src="src\Assets\nodejs-icon.png" alt="" />
                </div>
                <div className="tags">
                    <p className="tag">Android</p>
                    <p className="tag">React</p>
                    <p className="tag">Nodejs</p>
                </div>   
                <h2 className="taghead">Tools & Platforms</h2>
                <div className="imgCont1">
                    <img className="icon" src="src\Assets\studio-icon.png" alt="" />
                    <img className="icon" src="src\Assets\git-icon.png" alt="" />
                    <img className="icon" src="src\Assets\docker-logo.png" alt="" />
                </div>
                <div className="tags">
                    <p className="tag">Android Studio</p>
                    <p className="tag">Git</p>
                    <p className="tag"  >Docker</p>
                </div> 
            </div>
            </div>
        </div>
    )
}
export default Skills;