import React from 'react'
import PolmorphicII from '../assets/polymorphicII.png'

export const PolyMorphicCodeEninginWork = () => {
  return (
   <section className='polymorphic-code-engine-work'>
    <div className="text-container2">
        <h2>How it <span> Works ?</span></h2>
        <p> By constantly changing the software code during access or execution, the Polymorphic Code Engine creates a moving target, making it extremely difficult for hackers to analyze or decompile.</p>
        <button className="learn-more-btn2">Learn More</button>
    </div>
    <div className='image-containor2'>
        <img src={PolmorphicII} alt='poly-img2'></img>
    </div>

   </section>
  )
}
