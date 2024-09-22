import React from 'react';
import PolyMorphicImahe from '../assets/polymorphic.png';

const WhoWeAreI = () => {
  return (
    <div>
      <section className="who-we-are">
        <h1 className="who-we-are-heading">Who We Are?</h1>
        <div className="content-wrapper">
          <div className="about-img-containor">
            <img src={PolyMorphicImahe} alt="poly-image" />
          </div>
          <div className="about-text-container">
            <p>MutaEngine is a team of passionate cybersecurity experts, software engineers, and innovators united by a common vision: to create a world where software developers can innovate without fear of their work being compromised. Our founders, driven by decades of combined experience in cybersecurity, software development, and artificial intelligence, recognized the growing threats in the digital landscape and set out to build a company that could offer robust, future-proof security solutions. We are deeply committed to staying ahead of these threats, constantly evolving our approach to ensure that our clients' software remains secure against the most sophisticated attacks.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAreI;
