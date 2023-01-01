import defaultComponents from 'gatsby-theme-carbon/src/components/MDXProvider/defaultComponents';

import { Listing, ListingHed, ListingItem } from '../Listing.js';
import Caption from '../Caption.js';
import AdGroup from '../Ad/AdGroup.js';
import SimpleSearch from '../SearchListings/SimpleSearch.js';
import RegionListing from '../RegionListings.js';
import StatePark from '../StatePark.js'

export default {
  ...defaultComponents,
  Listing,
  ListingHed,
  ListingItem,
  Caption,
  SimpleSearch,
  RegionListing,
  AdGroup,
  StatePark
};