import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Tstg from '../../images/travel-guide-cover-burro-mesa-arch-wide.jpg';

const alignRight = {textAlign: 'right'};

const FirstLeftText = () => <h2>Welcome to Texas!</h2>;

const FirstRightText = () => (
  <div>
    <p>
      From the remote mountains of Big Bend to the dense forests of the Piney Woods, and the warm waters of the Gulf Coast to the refreshing rivers of the Hill Country, Texas boasts an enticing array of landscapes to explore. As any longtime Texan will tell you, there is no better way to experience the vastness and diversity of the state than behind the wheel of your car. Encompassing 254 counties and 268,597 square miles, the second-largest state in the country offers a seemingly endless number of routes and itineraries. And it’s a good thing since road trips have become increasingly vital over the past year as a safer way to travel during the ongoing COVID-19 pandemic. 
    </p>
    <p>In addition to listings for more than 2,500 attractions in nearly 500 cities, the 2021 Travel Guide includes themed and regional road-trip itineraries. Whether you want to plunge into spring-fed pools along the Central Texas swimming-hole trail, live like a cowboy on the ranges of the Panhandle Plains, or comfort-eat your way across the state at the best roadside mom and pops, we’ve got you covered. So gas up your car, prep your favorite tunes, and get ready to be inspired by the open road.</p>
    <p style={alignRight}>–<em>The Texas Highways Team</em></p>
  </div>
);

const SecondLeftText = () => <p>Callout component</p>;

const SecondRightText = () => (
  <p>
    You can also not use these components at all by not providing the callout
    props to the template or writing your own template.
    <a
      className={calloutLink}
      href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Homepage source →
    </a>
  </p>
);

const BannerText = () => <h1>Texas State Travel Guide</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Tstg} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#ffffff"
      color="#000000"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
