import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/quick-tour', text: 'A Quick Tour' },
  { href: '/travel-information', text: 'Travel Information' },
  { href: '/things-to-do-in-texas', text: 'Search All Listings' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
