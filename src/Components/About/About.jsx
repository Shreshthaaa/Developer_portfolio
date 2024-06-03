import React from "react";
import './About.css'
function About() {
    return (
        <div className="about">
            <h1 className="textAbout">About</h1>
            <div className="About-container">
                <p className="text">Hey, I'm Shreshtha Sharma, currently pursuing a 
                Bachelor's in Computer Science at Scaler School of Technology. 
                <br></br>
                <br></br>
                <br></br>
                My academic journey has given me a strong foundation in computer science,
                software development, algorithms, and data structures.
                <br></br>
                <br></br>
                As the Student President at Scaler, I've developed leadership skills and contributed to our student community.
                <br></br>
                <br></br>
                I've actively participated in various projects, applying theoretical knowledge to real-world challenges 
                and enhancing my problem-solving and collaborative skills. 
                I'm passionate about leveraging technology to create innovative solutions. 
                <br></br>
                <br></br>
                Being a people's person, I enjoy connecting with others and working together to solve problems.
                </p>

                <img className="about-img" src="src\Assets\randomHuman.jpg"></img>
            </div>
            
        </div>
    )
}

export default About;
