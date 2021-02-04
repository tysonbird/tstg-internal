import defaultComponents from 'gatsby-theme-carbon/src/components/MDXProvider/defaultComponents';

import { Listing, ListingHed, ListingItem } from '../Listing.js';
import Caption from '../Caption.js';
import Ad from '../Ad/Ad.js';
import RandomAd from '../Ad/RandomAd.js';

export default {
  ...defaultComponents,
  Listing,
  ListingHed,
  ListingItem,
  Caption,
  Ad,
  RandomAd
};