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
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Real-World Impact',
    paragraph: 'Here we look at how this idea is impacting society on multiple levels.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
              <div className={innerClasses}>
                  <br></br><br></br><br></br>
                  <SectionHeader data={sectionHeader} className="center-content" />
                  <h4 className="mt-0 mb-8">
                      France
                  </h4>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                                      French legislation has passed, which will require all parking lots (new and existing) with over 80 spaces to be covered with solar panels within 3-5 years. Officials estimate these panels could generate the same amount of electricity as 10 nuclear plants.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                                      Disneyland Paris is installing solar panels over 11,000 parking spaces, generatating the equivalent electrical capacity of a city with 17,400 inhabitants! This is a great example of smart infrastructure, where the electricity generated could be used to directly power nearby areas (or in the case of Disneyland, transmitted directly to the park) or sent back to the grid during peak hours to power other areas).
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <p className="m-0 text-sm">
                                      This electricity could be stored in high-capacity batteries, to be used at night or when it is cloudy, and to charge electric vehicles being parked at those lots. Finally, it allows municipalities to create electricity generating capacity in areas where extra land is not readily available, by building over under-utilized space. 
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>

          <div className="container">
              <div className={innerClasses}>
                  <br></br>
                  <h4 className="mt-0 mb-8">
                      USA
                  </h4>
                  <div className={tilesClasses}>

                      <div className="tiles-item reveal-from-bottom">
                          <div className="tiles-item-inner">
                              <div className="features-tiles-item-header">
                                  <div className="features-tiles-item-image mb-16">
                                      <Image
                                          src={require('./../../assets/images/feature-tile-icon-05.svg')}
                                          alt="Features tile icon 01"
                                          width={64}
                                          height={64} />
                                  </div>
                                  <br></br>
                              </div>
                              <div className="features-tiles-item-content">
                                  <p className="m-0 text-sm">
                                      Ford Dearborn Truck Plant (Detroit, MI) - This building is covered with 454,000 SF (10.4 acres) of a drought-resistant plant called "sedum", which offers many economic and ecological benefits.
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                          <div className="tiles-item-inner">
                              <div className="features-tiles-item-header">
                                  <div className="features-tiles-item-image mb-16">
                                      <Image
                                          src={require('./../../assets/images/feature-tile-icon-06.svg')}
                                          alt="Features tile icon 02"
                                          width={64}
                                          height={64} />
                                  </div>
                              </div>
                              <div className="features-tiles-item-content">
                                  <p className="m-0 text-sm">
                                      -   The roof's main function is to collect and filter rainwater. It was designed to work with adjacent natural wetlands to both reduce the amount of storm runoff (reducing flood risk) and improve the water quality of the nearby Rouge river.

                                  </p>
                                  <br></br>
                                  <p className="m-0 text-sm">
                                     -   The roof acts as a natural habitat for local wildlife, including birds and butterflies. The sedum also helps to trap dust and CO2 while releasing oxygen, improving the local air quality.

                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                          <div className="tiles-item-inner">
                              <div className="features-tiles-item-header">
                                  <div className="features-tiles-item-image mb-16">
                                      <Image
                                          src={require('./../../assets/images/feature-tile-icon-04.svg')}
                                          alt="Features tile icon 03"
                                          width={64}
                                          height={64} />
                                  </div>
                              </div>
                              <div className="features-tiles-item-content">
                                  <p className="m-0 text-sm">
                                      This type of smart architecture can be retro-fitted into existing factories and production plants, reducing costs for operators while improving quality of life for employees and those living near the factory.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="container">
              <div className={innerClasses}>
                  <br></br>
                  <h4 className="mt-0 mb-8">
                      Italy
                  </h4>
                  <div className={tilesClasses}>

                      <div className="tiles-item reveal-from-bottom">
                          <div className="tiles-item-inner">
                              <div className="features-tiles-item-header">
                                  <div className="features-tiles-item-image mb-16">
                                      <Image
                                          src={require('./../../assets/images/feature-tile-icon-05.svg')}
                                          alt="Features tile icon 01"
                                          width={64}
                                          height={64} />
                                  </div>
                                  <br></br>
                              </div>
                              <div className="features-tiles-item-content">
                                  <p className="m-0 text-sm">
                                      Fiat Factory Roof (Turin, Italy) - This plant was considered a modern marvel when it was constructed for Italian auto manufacturer Fiat in 1923. The factory would take in raw materials on the ground floor and gradually assemble the cars on an upward ramp until they reached its most famous feature - an oval racetrack where the cars were given a test drive before being sent to market. 
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                          <div className="tiles-item-inner">
                              <div className="features-tiles-item-header">
                                  <div className="features-tiles-item-image mb-16">
                                      <Image
                                          src={require('./../../assets/images/feature-tile-icon-06.svg')}
                                          alt="Features tile icon 02"
                                          width={64}
                                          height={64} />
                                  </div>
                              </div>
                              <div className="features-tiles-item-content">
                                  <p className="m-0 text-sm">
                                      -   The factory itself closed in the 1980's and converted into an auditorium/shopping mall. In 2022, the roof was converted to a semi-public park with over 300 plant species, as well as art installations. A portion of the test track remains, where patrons can drive Fiat's new electric vehicles for a lap, a symbol of the company's shift to an all-electric product line by 2030.

                                  </p>
                                  <br></br>
                                  <p className="m-0 text-sm">

                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                          <div className="tiles-item-inner">
                              <div className="features-tiles-item-header">
                                  <div className="features-tiles-item-image mb-16">
                                      <Image
                                          src={require('./../../assets/images/feature-tile-icon-04.svg')}
                                          alt="Features tile icon 03"
                                          width={64}
                                          height={64} />
                                  </div>
                              </div>
                              <div className="features-tiles-item-content">
                                  <p className="m-0 text-sm">
                                      Though this roof does not have the same economic or economic impact as the Ford roof, the conversion of unused industrial space to a space that benefits the public is a perfect example of smart architecture. 
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;