import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h2>  Africa’s Leading Digital Technology Solutions Provider</h2>
      <p className='first'>Design<span className='dot'></span> <br /> Build<span className='second'></span> <br />Deploy<span className='third'></span></p>
      <p className='small-text'>Innovative Digital Solutions</p>
      <div className="hero-buttons">
        <button className="hero-primaryy">Get in Touch <span>+</span></button>
<button className="hero-secondaryy">Learn More <span>+</span></button>

      </div>
    </section>
  );
};

export default Hero;


