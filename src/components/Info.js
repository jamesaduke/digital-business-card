import React from "react";
import ProfilePic from '../images/head-shot.jpg';


function Info(){

    return (
        <div className="info">
            <img src={ProfilePic} alt="headshot" className="headshot"/>

            <h3 className="info--name">Not James</h3>
            <h5 className="info--title">Full Stack Developer</h5>
            <p className="info--web">jamesaduke.netlify.app</p>
        </div>
    )
}

export default Info;