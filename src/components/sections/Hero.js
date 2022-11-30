import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import ReactPlayer from "react-player";
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

const sectionHeader = {
    title: 'How it Works',
    paragraph: 'Smart city works by blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.'
};

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Welcome to <span className="text-color-primary">Smart City</span>
            </h1>
            <div className="container-xs-jon">
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                    <br></br>
                    <br></br>                              
                    "Smart cities put data and digital technology to
                    work to make better decisions and improve the quality of life". -McKinsey Consulting Firm
                </p>
                          <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                              <p>
                                  Smart cities are cities that leverage technology to improve existing infrastructure (buildings, roads, power
                                      grids). Smart cities bring many benefits, including, but not limited to:
                              </p>
                              <br></br><br></br>
                              <li> Public Safety (safer roads, policing crime more effectively)</li>
                              <li> Public Health (reduction of chronic disease, pandemic management)</li>
                              <li> Environment (air quality, energy/water use optimization)</li>
                              <li> Connectedness (between people, neighborhoods, and local government)</li>
                              <li> Cost of Living (micro transit, utility cost)</li>
                              <li> Employment (smart cities will create related employment, gig economies)</li>
                </p>
                      </div>
                      <br></br><br></br>
                  </div>
                  <center>
                      <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                          <h4 className="mt-0 mb-8">
                              Let's take a look at an awesome Smart City in action!
                          </h4>
                      </p>
                      <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                          <ReactPlayer controls={true} url="https://youtu.be/E2MMwiXqlZg" />
                      </div>
                  </center>
        </div>
      </div>
      </section>

  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;