import React from 'react';
import "./Quality.css";

const Quality = () => {
  return (
    <div className="advert">
      <div className="content-wrapper">
        <div className="main-content">
          <h1 className="main-heading">WHAT WE DO BEST</h1>
          <h1 className='sub-head'>Dare to innovate <span className='dottt'></span></h1>

          <div className="section__heading--content mt-20">
            <p className="highlighted-paragraph">
              We’re firm believers in the potential of technology to accelerate the African dream of financial prosperity.
            </p>
          </div>

          <p className="sub-text">
            Groundbreaking accomplishments don’t come easily, but they’re possible with our strong positive belief and dedication to discovering more.
            At Chainconsults, we’re constantly propelled by the vision to do more for African businesses through market research and adoption of smart, agile and cost-effective digital solutions.
            Wherever you’re in your business development phase, we’ll be happy to work with you to bring your ideas to reality.
          </p>

          <p className="lead">
            <a href="#" className="get-in-touch">Get in touch +</a>
          </p>
        </div>

        <div className="image-grid">
          <div className="image-card blue"> 
            <img src="/Create.png" alt="Caption 1" />
            <h3>Create <br /> Imaginations</h3>
          </div>
          <div className="image-card white"> 
             <img src="/Deploy.png" alt="Caption 3" />
            <h3>Deploy <br /> Perfection</h3>
          </div>
          <div className="image-card dark-blue"> 
             <img src="/Build.png" alt="Caption 2" />
            <h3 className='black'>Build Dreams</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality;
