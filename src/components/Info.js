import React from "react";
import ProfilePic from '../images/head-shot.jpg';


function Info(){

    return (
        <div className="info">
            <img src={ProfilePic} alt="headshot" className="headshot"/>

            <h3 className="info--name">Not James</h3>
            <h5 className="info--title">Full Stack Developer</h5>
            <p className="info--web">jamesaduke.netlify.app</p>

            <div className="info--btn-group">
                <button className="info--btn">
                    <a className="email-btn" href = "mailto: adukework@gmail.com">Email Me</a>
                </button>

                <button className="info--btn">
                    <a className="email-btn" href = "https://linked.com/in/jamesaduke">LinkedIn</a>
                </button>
            </div>
        </div>
    )
}

export default Info;