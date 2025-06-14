import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navb">
      <div className="logo-cont">
        <img src="/chainlogo.png" alt="Logo-co" className="Logo-co" />
        </div>

      <nav className='navbar'>
        
        <ul className="nav-links">
          
      
        <li className="nav-links-left">
          <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Company +</a>
          <ul>
              <li><a href="#">About Us</a></li>                  
              <li><a href="#">Our Approach</a></li>
              <li><a href="#">Quality Assurance</a></li>                             
            </ul>
          </li>
          <li><a href="#">Services +</a>
          <ul>
              <li><a href="#">App Development</a></li>                  
              <li><a href="#">UI & UX Design</a></li>
              <li><a href="#">Web Development</a></li>                             
              <li><a href="#">Blockchain</a></li>                             
              <li><a href="#">Support & Maintenance</a></li>                             
              <li><a href="#">Consultation</a></li>                             
              <li><a href="#">Concept Development</a></li>                             
            </ul>
          </li>
          <li><a href="#">Solutions +</a>
          <ul>
              <li><a href="#">ERP Business Solutions</a></li>                  
              <li><a href="#">CRM Software</a></li>
              <li><a href="#">ChainBOTs</a></li>                             
              <li><a href="#">ChainRecruits</a></li>                             
            </ul>
          </li>
          <li><a href="#">Clients </a></li>
          
        </ul>
        </li>
        <li className="nav-right-container">       
           <div className='nav-right'>
         <p className='inner'>Contact us <span >+</span></p>
            
          </div>
          <div className='searchh'>
             <SearchIcon />
            </div>
          </li>

        </ul>
        
      </nav>
    </header>
  );
};

export default Navbar;
