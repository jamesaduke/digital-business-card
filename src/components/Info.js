import React from "react";
import ProfilePic from '../images/head-shot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



function Info(){

    return (
        <div className="info">
            <img src={ProfilePic} alt="headshot" className="headshot"/>

            <h2 className="info--name">Not James AtALL</h2>
            <h5 className="info--title">Frontend Developer</h5>
            <p className="info--web">jamesaduke.netlify.app</p>

            <div className="info--btn-group">
                <button className="info--btn" id="email-btn">
                    <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                    <a className="email-btn" href = "mailto: adukework@gmail.com">Email Me</a>
                </button>

                <button className="info--btn" id="linkedin-btn">
                    <i className="fa fa-linkedin" aria-hidden="true"/>
                    <a className="linked-btn" href = "https://linked.com/in/jamesaduke">LinkedIn</a>
                </button>

            </div>
        </div>
    )
}

export default Info;