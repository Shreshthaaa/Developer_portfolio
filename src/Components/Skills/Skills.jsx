import React from "react";
import './Skills.css';
import java_img from './../../../public/Assets/java-icon.png';
import js_img from './../../../public/Assets/js-icon.png';
import py_img from './../../../public/Assets/py-icon.jpg';
import sql_img from './../../../public/Assets/mysql-icon.png';
import android_img from './../../../public/Assets/android-icon.jpg';
import react_img from './../../../public/Assets/react-icon.png';
import nodejs_img from './../../../public/Assets/nodejs-icon.png';
import git_img from './../../../public/Assets/git-icon.png';
import docker_img from './../../../public/Assets/docker-logo.png';

function Skills(){
    return(
        <div className="skills-cont">
            <div className="text-skills">Skills</div>
            <h3>I love to learn new things and experiment with new technologies.
                <br></br>
                These are some of the major languages, technologies, tools and platforms I have worked with:</h3>
            <div className="main-cont">
                <h2 className="taghead">Languages & Databases</h2>
                <div className="imgCont1">
                    <img className="icon" src={java_img} alt="" />
                    {/* <img className="icon" src="src\Assets\php-icon.jpg" alt="" /> */}
                    <img className="icon" src={js_img} alt="" />
                    <img className="icon" src={py_img} alt="" />
                    <img className="icon" src={sql_img} alt="" />
                </div>
                <div className="tags">
                    <p className="tag">Java</p>
                    {/* <p className="tag">PHP</p> */}
                    <p className="tag">JavaScript </p>
                    <p className="tag">Python</p>
                    <p className="tag">MySQL</p>
                </div>
                <div>
                <h2 className="taghead">Frameworks & Technologies</h2>
                <div className="imgCont1">
                    <img className="icon" src={android_img} alt="" />
                    <img className="icon" src={react_img} alt="" />
                    <img className="icon" src={nodejs_img} alt="" />
                </div>
                <div className="tags">
                    <p className="tag">Android</p>
                    <p className="tag">React</p>
                    <p className="tag">Nodejs</p>
                </div>   
                <h2 className="taghead">Tools & Platforms</h2>
                <div className="imgCont1">
                    {/* <img className="icon" src="src\Assets\studio-icon.png" alt="" /> */}
                    <img className="icon" src={git_img} alt="" />
                    <img className="icon" src={docker_img} alt="" />
                </div>
                <div className="tags">
                    {/* <p className="tag">Android Studio</p> */}
                    <p className="tag">Git</p>
                    <p className="tag"  >Docker</p>
                </div> 
            </div>
            </div>
        </div>
    )
}
export default Skills;