import React from 'react'
import PolmorphicII from '../assets/polymorphicII.png'

 const OurStory = () => {
  return (
   <section className='OurStory'>
    <div className="text-container3">
        <h2>Our Story</h2>
        <p> MutaEngine was born out of a simple realization: traditional methods of software protection were no longer sufficient in an age where hackers are constantly finding new ways to bypass security measures. Our founders set out to create a solution that could adapt and evolve in real-time, providing a level of protection that static methods simply couldn't match.

        What started as a small project has grown into a leading solution trusted by developers and companies around the world. Today, MutaEngine continues to innovate, constantly improving our technology to meet the challenges of tomorrow.</p>
        <button className="learn-more-btn3">Learn More</button>
    </div>
    <div className='image-containor3'>
        <img src={PolmorphicII} alt='poly-img2'></img>
    </div>

   </section>
  )
}
export default OurStory
