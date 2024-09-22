import React from 'react';
import './WhatWeDo.css'
import exampleImage from '../assets/box1.png';
import exampleImage2 from '../assets/box2.png'

const WhatWeDo = () => {
    return (
        <section className="about-section">
            <h1>What We Do</h1>
            <p className="centered-text">We provide advanced software protection with our Polymorphic Code Engine, ensuring your application stay secure from privacy, reverse engineering and unauthorized modifications.</p>
            <div className="box-container">
                <div className="box left-box">
                    <span>We specialize in advanced software protection through our innovative Polymorphic Code Engine. By constantly mutating the code at runtime MutaEngine makes it extremely difficult for hackers to decompile or reverse engineers of a providing an impenetrable barrier against unauthorised access and piracy.</span>
                    <img src={exampleImage} alt="Example" className="box1-image" />
                </div>
                <div className="box right-box">
                    <span>our solutions are designed to integrate seamlessly with your existing development workflows, whether you are building traditional applications or pioneering new blockchain-based projects in the Web3 space range of tools and services to ensure your software is secure from every angle.</span>
                    <img src={exampleImage2} alt="Example" className="box2-image" />
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
