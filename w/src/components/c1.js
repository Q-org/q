import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';

const MyComponent = () => {
  const { siteConfig, siteMetadata } = useDocusaurusContext();
  const isBrowser = useIsBrowser();
  return (
    <div>
      <h1>{siteConfig.title}</h1>
      <div>{siteMetadata.siteVersion}</div>
      <div>{siteMetadata.docusaurusVersion}</div>
      <div>{isBrowser ? 'Client' : 'Server'}</div>
    </div>
  );
};
export default MyComponent