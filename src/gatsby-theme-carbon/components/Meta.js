import React from 'react';
import { Helmet } from 'react-helmet';
import { useMetadata } from 'gatsby-theme-carbon/src/util/hooks';

const Meta = ({ pageTitle, pageDescription, pageKeywords, titleType, featuredImage }) => {
  const { title, description, keywords, lang } = useMetadata();

  const getPageTitle = () => {
    switch (titleType) {
      case 'page':
        // use site title for fallback
        return pageTitle || title;
      case 'site':
        return title;
      case 'append':
        return `${title}${pageTitle ? ` – ${pageTitle}` : ''}`;
      case 'prepend':
        return `${pageTitle ? `${pageTitle} – ` : ''}${title}`;
      default:
        return null;
    }
  };

  return (
    <Helmet
      title={getPageTitle()}
      meta={[
        {
            name: 'description',
            content: pageDescription || description,
        },
        {
            name: 'og:title',
            content: getPageTitle(),
        },
        {
          name: 'twitter:title',
          content: getPageTitle(),
      },
        {
            name: 'og:description',
            content: pageDescription || description,
        },
        {
            name: 'og:type',
            content: 'website',
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:site',
            content: '@TexasHighways',
        },
        {
          name: 'keywords',
          content: pageKeywords || keywords,
        },
        {
          name: 'image',
          content: featuredImage,
        },
        {
           name: 'og:image',
           content: featuredImage,
        },
        {
        name: 'twitter:image',
        content: featuredImage,
        },
        {
          name: 'theme-color',
          content: '#000000'
        }
      ]}>
      <html lang={lang} />
    </Helmet>
  );
};

export default Meta;
