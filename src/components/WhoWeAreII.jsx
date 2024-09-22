import React from 'react'
import PolyMorphicImahe from '../assets/polymorphic.png'

const WhoWeAreII = () => {
  return (
    <div>
     <section className="who-we-are2">
      <div className='content-wraper2'>
      <div className="about-text-container2">
        <p>At MutaEngine, we beleive that every deveeloper, from startups to global enterprises, deserves the freedom to innovate without the risk of privacy or unauthorized modification. Our team's diverse expertise allows us to develop cutting-edge technologie, like our Polymorphic Code Engine, which continuously adapts to defend against evolving threats. By partnering to meet their unique security needs, providing peace of mind so they can focus on what they do best creating transformative software.</p>
      </div>
      <div className="about-img-containor1">
        <img src={PolyMorphicImahe} alt='poly-image'></img>
      </div>
      </div>
    </section>
    </div>
  );
};
export default WhoWeAreII
