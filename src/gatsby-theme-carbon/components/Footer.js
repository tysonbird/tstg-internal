import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import logo from '../../images/txh-logo-white.svg';
import { LogoFacebook32, LogoInstagram32, LogoTwitter32 } from '@carbon/icons-react';

const logoStyle = {
  width: '150px'
};

const FooterLogo = () => (
  <a href="https://texashighways.com" target="_blank" rel="noreferrer"><img style={logoStyle} src={logo} alt="Texas Highways Magazine" /></a>
);

const Content = ({ }) => (
  <>
    <p>
      The Texas State Travel Guide is published by Texas Highways Magazine, the official travel magazine of Texas.
    </p>

    <p><a href="https://facebook.com/TexasHighways" target="_blank" rel="noreferrer noopener"><LogoFacebook32/></a><a href="https://twitter.com/TexasHighways" target="_blank" rel="noreferrer noopener"><LogoTwitter32/></a><a href="https://instagram.com/TexasHighways" target="_blank" rel="noreferrer noopener"><LogoInstagram32/></a></p>

    <p><a href="https://texashighways.com/privacy-policy">Privacy Policy</a></p>

    <p>©{(new Date().getFullYear())}. All Rights Reserved.</p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://texashighways.com/about-us', linkText: 'About Us' },
    { href: 'https://texashighways.com/subscribe', linkText: 'Subscribe' },
    { href: 'https://texashighways.com/newsletter', linkText: 'Newsletters' },
    { href: 'https://texashighways.com/the-magazine', linkText: 'Latest Issue' },
  ],
  secondCol: [
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    // { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} Logo={FooterLogo} />;

export default CustomFooter;
