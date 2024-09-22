import React from 'react';
import heroImage from '../assets/ai.png'


const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Revolutionizing Software Security with <span className="highlight">Dynamic Mutation</span></h1>
                <p>Introducing the Polymorphic Code Engine - A New Era in Protecting Your Software.</p>
                <div className="hero-buttons">
                    <button className="learn-more-btn">Learn More</button>
                    <button className="start-now-btn">Start Now</button>
                </div>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="3D Shape" />
            </div>
        </section>
    );
};

export default HeroSection;
