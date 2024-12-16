import React from 'react';
import { Auth0Feature } from './auth0-feature';

export const Auth0Features = () => {
  const featuresList = [
    {
      title: 'Auth0 QuickStart',
      description:
        'This application has been modified from training documentation to use Auth0 with React v18. Click to follow the instructions.',
      resourceUrl:
        'https://developer.auth0.com/resources/guides/spa/react/basic-authentication#integrate-react-with-an-api-server',
      icon: 'https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg',
    },
    {
      title: 'Multi-Factor Authentication',
      description:
        'You can require your users to provide more than one piece of identifying information when logging in. MFA delivers one-time codes to your users via SMS, voice, email, WebAuthn, and push notifications.',
      resourceUrl: 'https://auth0.com/docs/multifactor-authentication',
      icon: 'https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg',
    },
    {
      title: 'Auth0 SignUp',
      description:
        'Create Free Auth0 Account. Note: For the Sign Up to work, you need to enable Username-Password-Authentication on your Application account. Auth0 Dashboard > Autehntication > Database',
      resourceUrl: 'https://auth0.com/signup',
      icon: 'img/auth0-svgrepo-com.svg',
    },

    {
      title: 'Geting API Started',
      description:
        'Create the .env file and in a separate terminal run the command: npm run api',
      resourceUrl:
        'https://developer.auth0.com/resources/guides/spa/react/basic-authentication#quick-react-setup',
      icon: 'https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg',
    },
  ];

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Demo Auth0 Features</h2>
      <div className="auth0-features__grid">
        {featuresList.map((feature) => (
          <Auth0Feature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            resourceUrl={feature.resourceUrl}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
