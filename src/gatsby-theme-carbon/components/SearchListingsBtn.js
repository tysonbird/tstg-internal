import React from 'react';
import { Search32 } from '@carbon/icons-react';
import { navigate } from 'gatsby'
import { button } from '../components/ComponentStyles/SearchListingsButton.module.scss';

const SearchListingsBtn = () => (
  <button
    onClick={() => navigate("/things-to-do-in-texas/")}
    className={button}
    type="button"
    aria-label="Search All Listings">
    <Search32 />
  </button>
);

export default SearchListingsBtn;