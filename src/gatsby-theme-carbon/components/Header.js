import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = (props) => (
  <Header className="tg-header" {...props}>
    Texas State&nbsp;<span>Travel Guide</span>
  </Header>
);

export default CustomHeader;
