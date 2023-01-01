import React from 'react';
import Layout from 'gatsby-theme-carbon/src/components/Layout';
import Main from 'gatsby-theme-carbon/src/components/Main';
import useMetadata from 'gatsby-theme-carbon/src/util/hooks/useMetadata';
import Utils from 'gatsby-theme-carbon/src/components/Utils';
import Hero from '../components/Hero';
import Caption from '../components/Caption';
import NextPrevious from 'gatsby-theme-carbon/src/components/NextPrevious';

import tstg from '../../images/travelguide-2023-landing.jpg';
import logo from '../../images/lets-texas-logo-01.svg';
import txdotlogo from '../../images/travelguide-txdot-logo.svg';
import headlineLogo from '../../images/texas-state-travel-guide-logo.svg';

const Homepage = ({
  children,
  location,
  pageContext,
}) => {
  const { frontmatter = {}, titleType } = pageContext;
  const { title, description, keywords, featuredImage } = frontmatter;
  const { homepageTheme } = useMetadata();

  return (
    <Layout
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
      titleType={titleType}
      featuredImage={featuredImage}
      homepage
      theme={homepageTheme}>
        <Hero image={tstg} logo={logo} headlineLogo={headlineLogo} txdotlogo={txdotlogo}></Hero>
        <Main>
          <Caption>Photo by Dave Shafer</Caption>
          {children}
        </Main>
      <NextPrevious isHomepage location={location} pageContext={pageContext} />
      <Utils />
    </Layout>
  );
};

export default Homepage;
