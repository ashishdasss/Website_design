// src/components/PolymorphicCodeEngine.js
import React from 'react';
import PolyMorphicImahe from '../assets/polymorphic.png'

const PolymorphicCodeEngine = () => {
  return (
    <section className="polymorphic-code-engine">
      <div className="image-container">
        <img src={PolyMorphicImahe} alt='poly-image'></img>
      </div>
      <div className="text-container">
        <h2>What is the <span>Polymorphic Code Engine?</span></h2>
        <p>Polymorphic code engine dynamically mutates the software's source code in real-time, preventing reverse engineering and ensuring enhanced security.</p>
        <button className="learn-more-btn">Learn More</button>
      </div>
    </section>
  );
};

export default PolymorphicCodeEngine;
