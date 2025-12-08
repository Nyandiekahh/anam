import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/anam logo.jpeg',
  ogType = 'website',
  canonicalUrl 
}) => {
  const siteUrl = 'https://anamcbo.org';
  const defaultTitle = 'ANAM CBO - Community Empowerment Through Skills Training | Turkana Kenya';
  const defaultDescription = 'ANAM Community Based Organization empowers communities in Turkana West, Kenya through skills training, peace building, SGBV prevention, economic empowerment, and leadership development programs.';
  
  const fullTitle = title ? `${title} | ANAM CBO` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="ANAM CBO" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />
    </Helmet>
  );
};

export default SEO;
