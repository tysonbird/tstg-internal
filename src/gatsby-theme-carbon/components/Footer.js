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

const Content = () => (
  <>
    <p>
      The Texas State Travel Guide is published by Texas Highways Magazine, the official travel magazine of Texas.
    </p>

    <p><a arial-label="Facebook" title="Facebook" href="https://facebook.com/TexasHighways" target="_blank" rel="noreferrer noopener"><LogoFacebook32/></a><a href="https://twitter.com/TexasHighways" title="Twitter" target="_blank" rel="noreferrer noopener" arial-label="Twitter"><LogoTwitter32/></a><a title="Instagram" href="https://instagram.com/TexasHighways" target="_blank" rel="noreferrer noopener" arial-label="Instagram"><LogoInstagram32/></a></p>

    <p><a href="https://texashighways.com/privacy-policy">Privacy Policy</a></p>

    <p>©{(new Date().getFullYear())}. All Rights Reserved.</p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://texashighways.com/about-us', linkText: 'About Us' },
    { href: 'https://ssl.drgnetwork.com/ecom/thm/app/live/subscriptions?org=THM&publ=TH&key_code=JXTSTGF&type=S&gift_key=J5FXGFT', linkText: 'Subscribe' },
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
