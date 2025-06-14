import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='container-all'>
        <div className="logo-container">
  <img src="/chainlogo.png" alt="Logo" className="logo" />
</div>
        <div className="contact-container">
  <div className="contact-item">
    <img src="/phone-icon-1.png" alt="Phone Icon" />
    <div >
      <h3 className='shift-down'>Phone Number</h3>
      <p>+2341 454 1910 (Lagos)</p>
    </div>
  </div>

  <div className="contact-item">
    <img src="/email-icon-2.png" alt="Email Icon" />
    <div>
      <h3 className='shift-down'>Email Address</h3>
      <p>info@chainconsults.com</p>
    </div>
  </div>

  <div className="contact-item">
    <img src="/address-icon-3.png" alt="Location Icon" />
    <div>
      <h3>Lagos</h3>
      <p>8th Providence Street,<br />
         Lekki Phase 1,<br />
         Lagos,<br />
         Nigeria.
      </p>
      <p className='consult'>
        Chain Consult @ 2024 <a href="#">All Rights Reserved</a>
      </p>
    </div>
  </div>
</div>

    <div className="bar-line"></div>
    <div className="link-container">
    <div className="link-section">
    <h3>Service</h3>
    <ul>
      <li><a href="#">App Development</a></li>
      <li><a href="#">UI & UX Design</a></li>
      <li><a href="#">Support & Maintenance</a></li>
      <li><a href="#">Consultation</a></li>
      <li><a href="#">Blockchain Development</a></li>
      <li><a href="#">Concept Development</a></li>
      <li><a href="#">Web Development</a></li>
    </ul>
  </div>
  <div className="link-section">
    <h3>Solutions</h3>
    <ul>
      <li><a href="#">E-Learning</a></li>
      <li><a href="#">Data Research & Analytics</a></li>
      <li><a href="#">ERP Business Solutions</a></li>
      <li><a href="#">Digital Signature</a></li>
      <li><a href="#">CRM Software</a></li>
    </ul>
  </div>
  <div className="link-section">
    <h3>Find us</h3>
    <ul>
    
      <li><a href="#">Contact Us</a></li>
      <li><a href="#">Cookies Policy</a></li>
     
    </ul>
  </div>
</div>
</div>
  );
};


export default Footer;