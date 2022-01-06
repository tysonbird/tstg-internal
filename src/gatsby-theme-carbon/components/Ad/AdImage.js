import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

function renderImage(file) {
    if (file.node.extension === "gif") {
      return (
        <img alt="" src={file.node.publicURL}/>
      )
    }
    else {
      return (    
        <Img fluid={file.node.childImageSharp.fluid}/>
      );
    }
}

const AdImage = function (props) {
  return <StaticQuery
    query={graphql`
      query {
      images: allFile(filter: {extension: {regex: "/jpg|gif|png/"}}) {
      edges {
        node {
          extension
          relativePath
          publicURL
          childImageSharp {
            fluid(maxWidth: 1200, quality:100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    }
    `}
    render={({ images }) => renderImage(images.edges.find(image => image.node.relativePath === props.src))}
  />
}
export default AdImage;