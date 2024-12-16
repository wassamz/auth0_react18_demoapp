import React from 'react';

export const HeroBanner = () => {
  const logo = 'img/wassam-tech-logo-256.png';

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Auth0 & React 18</h1>
      <p className="hero-banner__description">
        This is a sample application that demonstrates the authentication flow
        for React apps using <strong>Auth0</strong>.
      </p>
      <p className="hero-banner__description">
        This code sample uses the following tools: <br />
        React v18.2.0, React Router v6.3.0, Auth0 React SDK v2.0.0
      </p>
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://developer.auth0.com/resources/code-samples/spa/react/basic-authentication"
        className="button button--secondary"
      >
        Check out the React code sample →
      </a>
    </div>
  );
};
