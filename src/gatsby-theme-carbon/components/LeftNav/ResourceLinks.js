import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Texas Highways Magazine',
    href: 'https://texashighways.com',
  },
  {
    title: 'Texas Department of Transportation',
    href: 'https://www.txdot.gov',
  },
  {
    title: 'Free Travel Literature',
    href: 'https://www.txdot.gov/inside-txdot/forms-publications/publications/travel.html',
  },
  {
    title: 'Travel Texas',
    href: 'https://traveltexas.gov',
  },
  {
    title: 'Subscribe to Texas Highways',
    href: 'https://texashighways.com/subscribe',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
