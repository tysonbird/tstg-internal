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
    href: 'https://traveltexas.com',
  },
  {
    title: 'Texas Commission on the Arts',
    href: 'https://www.arts.texas.gov',
  },
  {
    title: 'Texas Historical Commission',
    href: 'https://www.thc.texas.gov/',
  },
  {
    title: 'Texas Parks & Wildlife',
    href: 'https://tpwd.texas.gov/',
  },
  {
    title: 'Subscribe to Texas Highways',
    href: 'https://ssl.drgnetwork.com/ecom/thm/app/live/subscriptions?org=THM&publ=TH&key_code=JXTSTGL&type=S&gift_key=J5FXGFT',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
