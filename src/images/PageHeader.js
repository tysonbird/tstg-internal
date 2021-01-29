import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from 'gatsby-theme-carbon/src/components/PageHeader/PageHeader.module.scss';

// `url("https://source.unsplash.com/random")`

const headerStyle = {
  backgroundImage: `url(header.jpg)`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`
}

const tstgHeader = ({ title, description, theme, tabs = [] }) => (
  <div
    style={headerStyle}
    className={cx(styles.pageHeader, {
      [styles.withTabs]: tabs.length,
      [styles.darkMode]: theme === 'dark',
    })}>
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <h1 id="page-title" className={styles.text}>
            {title}
          </h1>
        </div>
      </div>
    </div>
  </div>
);

tstgHeader.propTypes = {
  /**
   * Specify the title for the page
   */
  title: PropTypes.node,
};

export default tstgHeader;
