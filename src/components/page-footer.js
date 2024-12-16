import React from 'react';
import { PageFooterHyperlink } from './page-footer-hyperlink';

export const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>Demo site for learning Auth0 implementation.</span>
            </p>
          </div>
          <div className="page-footer-info__message">
            <p className="page-footer-message__description">
              <PageFooterHyperlink path="https://auth0.com/docs/quickstarts/">
                <span>
                  Securely implement authentication using Auth0 on any stack and
                  any device -&nbsp;
                </span>
                <u>find out more</u>
              </PageFooterHyperlink>
            </p>
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src="img/wassam-tech-logo-256.png"
              alt="Auth0"
              width="128"
              height="128"
            />
            <PageFooterHyperlink path="https://wassam.com/">
              Wassam.com
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
