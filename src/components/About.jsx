import React from 'react';
import Mission from './MissionSection';
import WhoWeAreI from './WhoWeAreI';
import WhoWeAreII from './WhoWeAreII';
import WhatWeDo from './WhatWeDo';
import WhatWeChoose from './WhyWeChoose';
import OurStory from './OurStory';
import BoxWithContent2 from './BoxWithContent2';
function About() {
  return (
    <div>
        <Mission/>
        <WhoWeAreI/>
        <WhoWeAreII/>
        <WhatWeDo/>
        <WhatWeChoose/>
        <OurStory/>
        <BoxWithContent2/>
    </div>
  );
}

export default About;
