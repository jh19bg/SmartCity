import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

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
    title: 'How it Works',
      paragraph: 'Smart cities work by developing a technology base of connected networks and IoT devices. The data collected is used to adopt new standards and decisions, leading to physical and social change and benefits for the citizens and government.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
              <div className={innerClasses}>
                  <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                      <SectionHeader data={sectionHeader} className="center-content" />

                  </p>
                  <div className={tilesClasses}>
                      <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                          <Image
                              src={require('./../../assets/images/smartCity.png')}
                              alt="Features tile icon 01"
                              width={900}
                              height={1140} />
                      </p>
          </div>
        </div>
          </div>


    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;