import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="service-container">
  {/* Hero Section */}
  <div className="row align-items-center g-5 ">
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src="Big image.png"
        className="d-block mx-lg-auto img-fluid"
        alt="Descriptive image alt text"
        width="800"
        height="200"
        loading="lazy"
      />
    </div>

    <div className="col">
      <h4 className="small-title">
        <span className="mr-28"></span> ChainHelp
      </h4>
      <h2 className="title">Don't be Stuck</h2>
      <p className="text1">
        In today’s digital driven marketplace, your business can stand out by maximizing the potential of technology. At Chainconsults, we specialize in designing and building appealing and customer-focused products that help businesses across Africa excel in their various industries.
      </p>
      
      <div className="section__heading--content mt-20">
            <p className="text">
        Whether you’re an early-stage startup trying to find your feet in the marketplace; a mid-sized business looking to expand or a large corporation aiming to dominate your industry, our solutions are designed to make your transition easier. From web or mobile application development to IT support, our dedicated team of IT professionals will help you transform your company to a digital driven business, helping you to service your customers in faster, smarter and more efficient fashion.
      </p>
          </div>
      

      <div className="flex-section">
        <div className="box">
          <img className="box-icon" src="./about-icon-1.png" alt="service icon" />
          <div className="the-text"><h5>We Build & Research</h5>
          <p>
            As your trusted IT partner, we’ll be with you every step of the way — from initial planning to delivery and beyond. Our highly versatile, talented, and results-driven team of software engineers creates responsive, high-quality products focused on maximizing your ROI.
          </p>
          </div>
        </div>

        <div className="box">
          <img className="box-icon" src="./about-icon-2.png" alt="service icon" />
          <div className="the-text"><h5>We Advice</h5>
          <p>
            Technology will never stop evolving — it’s the nature of the beast. So having an innovation advisor on your side is vital: to tailor a strategy that fits, and to uncover the right tech for your toughest business problems — no matter the industry.
          </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Solution Section */}
  <div className="design">
    <h1 className="watermarkk">Services</h1>
    <div className="advb">
      <p className="feww">Services</p>
      <h2 className="trustt">ChainSolution<span className='dott'></span></h2>
    </div>
  </div>

  {/* Jumbotron-like Section */}
  <div className="four-content">
  <div className="container-fluid py-5 jumbo-container">
    <img
      src="/analytics.png"
      className="image-fluid mb-4 w-67"
      alt="Example image"
      loading="lazy"
    />

    <h2 className="display">Advanced Analytics</h2>
    <p className="col-md-8 fs-6 p-text ">
      We do data science for only one reason, so that you can identify today’s opportunities and turn them to a greater ROI and make your data sing
    </p>

    <div className="cont">
      <ul>
        <li><span className="mark-box">✓</span> Data Aggregation</li>
        <li><span className="mark-box">✓</span> Data Research</li>
        <li><span className="mark-box">✓</span> Data Analytics</li>
      </ul>
    </div>
  </div>
  <div className="container-fluid py-5 jumbo-container work">
    <img
      src="/blockchain.png"
      className="image-fluid mb-4 w-67"
      alt="Example image"
      loading="lazy"
    />

    <h2 className="display ">BlockChain Engineering</h2>
    <p className="col-md-8 fs-6 p-text">
      We help businesses, startups and enterprises harnessed the power of blockchain technology for custom DLT development.
    </p>

    <div className="cont">
      <ul>
        <li><span className="mark-box">✓</span> DApps Development</li>
        <li><span className="mark-box">✓</span> Smart Contract Development</li>
        <li><span className="mark-box">✓</span>Hyper Ledger Development</li>
      </ul>
    </div>
  </div>
  <div className="container-fluid py-5 jumbo-container">
    <img
      src="/webmobile.png"
      className="image-fluid mb-4"
      alt="Example image"
      loading="lazy"
    />

    <h2 className="display">Web & Mobile</h2>
    <p className="col-md-8 fs-6 p-text">
      We do not just design, we transform them into powerful communication channels that drive online growth and deliver results you care about.
    </p>

    <div className="cont">
      <ul>
        <li><span className="mark-box">✓</span> UI & UX Design & Development</li>
        <li><span className="mark-box">✓</span>  Development & Testing</li>
        <li><span className="mark-box">✓</span> Cyber Security</li>
      </ul>
    </div>
  </div>
  <div className="container-fluid py-5 jumbo-container work">
    <img
      src="/concept.png"
      className="image-fluid mb-4 w-67"
      alt="Example image"
      loading="lazy"
    />

    <h2 className="display ">Concept Development</h2>
    <p className="col-md-8 fs-6 p-text">
      Our Concept development approach involves coming up with a detailed description of your idea, explained from the perspective of your customer.
    </p>

    <div className="cont">
      <ul>
        <li><span className="mark-box">✓</span> ideation</li>
        <li><span className="mark-box">✓</span> Concept Blueprint</li>
        <li><span className="mark-box">✓</span>Concept Testing</li>
      </ul>
    </div>
  </div>
  </div>
</div>

  );
};

export default Service;
