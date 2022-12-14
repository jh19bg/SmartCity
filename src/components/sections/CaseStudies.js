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
            <h2>Case Studies</h2>
        </div>

              <p>
                  <a href="https://drive.google.com/file/d/1oSCzzYh-JL8PMkPu92jMHTwLEx-JKrOm/view?usp=share_link" download>Singapore</a>
              </p>

              <p>
                  <a href="https://drive.google.com/file/d/1A5_bb0ugsZuO94UKUsdSQe7XcQ1CyMw0/view?usp=share_link" download>Zurich</a>
              </p>

          </center>
          <br></br>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;