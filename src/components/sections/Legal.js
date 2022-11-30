import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Legal/Ethical Issues',
      paragraph: 'Even though Smart City technology is aimed at improving the quality of life, numerous concerns exist, such as:'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
               <div className="tiles-item-inner">
                              
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Data Collection</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Privacy</a>
                  </span>
                </div>
                              <p className="text-sm mb-0">
                                  <br></br>
                                      — Smart Cities collect massive amounts of data, which leaves some citizens worried about exactly what is being collected and how this data is being used or sold to third-parties.
                  </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                              
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">5G Technology</span>                                  
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Health</a>
                  </span>
                </div>
                  <br></br>
                  <p className="text-sm mb-0">
                    — 5G networks, which are built from multiple towers, are necessary for a Smart City to operate. The technology has not been studied long enough to know the hazardous effects, if any.
                  </p>
                
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                              
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Facial Recognition</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Inclusion</a>
                  </span>
                </div>
                  <br></br>
                  <p className="text-sm mb-0">
                    — Concerns exist about potential abuse of profiling and tracking using this technology. Many AI systems develop biases, and the software also has the risk of misidentification.
                  </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;