import React from "react";
import './About.css'
function About() {
    return (
        <div className="about">
            <h1 className="textAbout">About</h1>
            <div className="About-container">
                <p className="text">This is where you can describe
                 about yourself. The more you describe
                 <br></br> about yourself, the better it is!
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                Extra Information about you, like hobbies and your goals.
                <br></br>
                Example Paragraph: I am passionate about my work. Because I love 
                <br></br>
                what I do, I have a steady source of motivation that drives me to do 
                <br></br>
                my best. In my last job, this passion led me to challenge myself daily 
                <br></br>
                and learn new skills that helped me to do better work. For example, 
                <br></br>
                I taught myself how to use Photoshop to improve the quality 
                <br></br>
                of our photos and graphics. I soon became the go-to person for any design
                needs.
                </p>

                <img className="about-img" src="src\Assets\randomHuman.jpg"></img>
            </div>
            
        </div>
    )
}

export default About;
