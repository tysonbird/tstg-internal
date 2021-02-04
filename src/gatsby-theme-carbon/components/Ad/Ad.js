import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { ad } from '../ComponentStyles/Ads.module.scss';
import { AdWrapper } from '../Ad/RandomAd.js';

function Ad(props) {

    const data = useStaticQuery(graphql`
    {
      allImageSharp(filter: {original: {src: {regex: "/static-/"}}}) {
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
            fluid(maxWidth: 1200, quality:100) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }`)

    function adForRender(name) {
      for (var i = 0; i < data.allImageSharp.edges.length; i++){
        // look for the entry with a matching `code` value
        if (data.allImageSharp.edges[i].node.fluid.originalName === name){
            return [data.allImageSharp.edges[i].node.fluid, data.allImageSharp.edges[i].node.fields.exif.raw.image.ImageDescription]
        }
      }
    }

    const [adFile, adURL] = adForRender(props.file);

    return (
      <div className={ad}>
          <p>Advertisement</p>
          <AdWrapper source={adURL}>
            <Image fluid={adFile} />
          </AdWrapper>
      </div>
    )
  }

  export default Ad