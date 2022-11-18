import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import CaseStudies from '../components/sections/CaseStudies';
import Legal from '../components/sections/Legal';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles topDivider />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Legal topDivider />
      <CaseStudies topDivider />
      <Cta topDivider />
    </>
  );
}

export default Home;