 import React from 'react';
 import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
 import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
 import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-header">
  <div className="grid-container">        
    <div className="empty"></div>
    <div className="inbox-icon">
      <MailOutlinedIcon />
    </div>
    <div className="gmail-input">
       info@chainconsults.com
    </div>
    <div className="nigeria-flag">
       <img src="ng-flag.png" alt="Nigeria Flag" />
    </div>
    <div className="largest-portion">
      <div className="phone-contact">
        <p>+2341 454 1910</p>
      </div>
      <div className="language-dropdown">
        <div className="select-wrapper">
          <ul>
            <li>English < KeyboardArrowDownIcon/>
              <ul className='ul'>
                <li>USA</li>
                <li>UK</li>
                <li>CA</li>
                <li>AU</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="careers">
      <span><BusinessCenterOutlinedIcon/> Careers</span>
    </div>
    <div className="last-empty"></div>
  </div>
</div>

  );
};

export default TopBar; 