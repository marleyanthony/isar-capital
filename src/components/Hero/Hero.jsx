import React from 'react';
import eagle from '../../assets/images/eagle.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__img-wrapper">
        <img src={eagle} alt="eagle" className="hero__img" />
      </div>
      <div className="hero__content-wrapper">
        <h2 className="hero__header">Flying High Above The Competition</h2>
        <p className="hero__sub-text">
          Accomplished portfolio manager with over 15 years experience overseeing up to $1 Billion in Assets.
        </p>
        <button className="hero__cta-btn">Get In Touch</button>
      </div>
    </section>
  );
}

export default Hero
