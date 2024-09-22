import React from 'react';

import exampleImage2 from '../assets/choosebox.png'

const WhatWeChoose = () => {
    return (
        <section className="WhatWeChoose-section">
            <h1 className='choose-text'>Why Choose MuteEngine</h1>
            <div className="box2-container">
                <div className="box1 left-box">
                    <p>State-of-the-Art Technology</p>
                    <span>Our polymorphic Code Engine is a game changer in the field of software security, offering unparalleled protection against reverse engineering and unauthorised modification.</span>
                    <img src={exampleImage2} alt="Example" className="box1-image" />
                </div>
                <div className="box1 middle-box">
                    <p>Expert Team</p>
                    <span>Our team of cyber security professionals and software engineers brings a wealth of knowledge and experience to the table ensuring that your software is protected by the best in the business.</span>
                    <img src={exampleImage2} alt="Example" className="box2-image" />
                </div>
                <div className="box1 right-box">
                    <p>Proven Track Record</p>
                    <span>We have a history of successful partnership with companies of all sizes from startups to enterprises helping them secure their software and protect their intellectual property.</span>
                    <img src={exampleImage2} alt="Example" className="box3-image" />
                </div>
            </div>
        </section>
    );
};

export default WhatWeChoose;