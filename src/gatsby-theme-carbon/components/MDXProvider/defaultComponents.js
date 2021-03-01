import defaultComponents from 'gatsby-theme-carbon/src/components/MDXProvider/defaultComponents';

import { Listing, ListingHed, ListingItem } from '../Listing.js';
import Caption from '../Caption.js';
import AdGroup from '../Ad/AdGroup.js';
import SearchListings from '../SearchListings/SearchListings.js';
import SimpleSearch from '../SearchListings/SimpleSearch.js';
import RegionListing from '../RegionListings.js'

export default {
  ...defaultComponents,
  Listing,
  ListingHed,
  ListingItem,
  Caption,
  SearchListings,
  SimpleSearch,
  RegionListing,
  AdGroup,
};