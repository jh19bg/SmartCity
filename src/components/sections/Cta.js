import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
      topOuterDivider && 'has-top-divider',
      topDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
      >
          <center>
              <br></br>
        <div>
            <h2>References</h2>
        </div>

              <p><a href="https://www.mckinsey.com/capabilities/operations/our-insights/smart-cities-digital-solutions-for-a-more-livable-future" target="_blank">https://www.mckinsey.com/capabilities/operations/our-insights/smart-cities-digital-solutions-for-a-more-livable-future</a></p>
              <p><a href="https://e360.yale.edu/digest/france-solar-parking-lots#:~:text=The%20French%20Senate%20has%20passed,nuclear%20reactors%2C%20the%20government%20estimates." target="_blank">https://e360.yale.edu/digest/france-solar-parking-lots#:~:text=The%20French%20Senate%20has%20passed,nuclear%20reactors%2C%20the%20government%20estimates.</a></p>
              <p><a href="https://disneylandparis-news.com/en/disneyland-paris-begins-operating-the-first-section-of-its-solar-canopy-plant/" target="_blank">https://disneylandparis-news.com/en/disneyland-paris-begins-operating-the-first-section-of-its-solar-canopy-plant/</a></p>
              <p><a href="https://www.thehenryford.org/visit/ford-rouge-factory-tour/highlights/living-roof/" target="_blank">https://www.thehenryford.org/visit/ford-rouge-factory-tour/highlights/living-roof/</a></p>
              <p><a href="https://www.bloomberg.com/news/articles/2022-06-15/fiat-factory-roof-gets-new-life-as-public-space-in-turin#:~:text=Design-,Fiat%20Factory%20Roof%20Gets%20New%20Life%20as%20Public%20Space%20in,car%20factory%20in%20Turin%2C%20Italy." target="_blank">https://www.bloomberg.com/news/articles/2022-06-15/fiat-factory-roof-gets-new-life-as-public-space-in-turin#:~:text=Design-,Fiat%20Factory%20Roof%20Gets%20New%20Life%20as%20Public%20Space%20in,car%20factory%20in%20Turin%2C%20Italy.</a></p>
              <p><a href="https://knowledge.wharton.upenn.edu/article/whats-behind-backlash-smart-cities/" target="_blank">https://knowledge.wharton.upenn.edu/article/whats-behind-backlash-smart-cities/</a></p>
              <p><a href="https://www.ttownmedia.com/press_banner/news/local-governments-push-back-on-fcc-for-5g-towers/article_aa298958-2e27-11e9-81d0-f735d70722d6.html" target="_blank">https://www.ttownmedia.com/press_banner/news/local-governments-push-back-on-fcc-for-5g-towers/article_aa298958-2e27-11e9-81d0-f735d70722d6.html</a></p>
              <p><a href="https://www.cnn.com/2019/07/17/tech/cities-ban-facial-recognition" target="_blank">https://www.cnn.com/2019/07/17/tech/cities-ban-facial-recognition</a></p>              

        </center>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;