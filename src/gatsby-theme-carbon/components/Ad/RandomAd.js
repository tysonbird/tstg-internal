import React     from "react"
import Image from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { ad } from '../ComponentStyles/Ads.module.scss';

const randomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const AdWrapper = ({ 
    source,
    children,
}) => {
    return (
        <a href={source} rel="noopener noreferrer" target="_blank">
            {children}
        </a>
    )
};

export default function RandomAd() {

    const [hasMounted, setHasMounted] = React.useState(false);
    React.useEffect(() => {
      setHasMounted(true);
    }, []);
    if (!hasMounted) {
      return null;
    }

    return (
        <StaticQuery
            query={graphql`
            {
                allImageSharp(filter: {original: {src: {regex: "/ad-/"}}}) {
                    edges {
                        node {
                            id
                            fields {
                                exif {
                                  raw {
                                    image {
                                      ImageDescription
                                    }
                                  }
                                }
                              }
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
            `}
            render={data => {
                const { allImageSharp } = data
                const { edges } = allImageSharp
                const randomPosition = randomGenerator(0, edges.length - 1)
                const randomizedImage = edges[randomPosition].node
                return (
                    <div className={ad}>
                        <p>Advertisement</p>
                        <AdWrapper source={randomizedImage.fields.exif.raw.image.ImageDescription}>
                            <Image fluid={randomizedImage.fluid} />
                        </AdWrapper>
                    </div>
                )
            }}
        />
    )
}