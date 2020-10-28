import React from 'react';
import FooterCard from './FooterCard';

const Footer = () => {
  return (
    <div className="footer">
      <FooterCard />
      <div className="footer__top-section">
        <div className="footer__logo-wrapper">
          <i className="fas fa-chart-line footer__logo-chart-icon" />
          <div className="footer__logo">ISAR</div>
        </div>

        <div className="footer__nav-wrapper">
          <h5 className="footer__nav-item">Executive Team</h5>
          <h5 className="footer__nav-item">About Us</h5>
          <h5 className="footer__nav-item">Contact Us</h5>
        </div>
      </div>

      <div className="footer__bottom-section">
        <div className="footer__address">
          <h5 className="footer__address-header">
            ISAR Capital Management
          </h5>
          <p className="footer__address-street">123 Main Street</p>
          <p className="footer__address-city">Vancouver, BC V5W 3J4</p>
        </div>
        <div className="footer__social">
          <i className="fas fa-envelope footer__social-mail"></i>
          <i className="fas fa-phone footer__social-phone"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer