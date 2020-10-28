import React from 'react';
import roselia from '../../assets/images/roselia.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about__team-wrapper">
        <img src={roselia} alt="Roselia St. Louis" className="about__img" />
        <h3 className="about__team-name">
          Roselia St. Louis, Founder & Senior Portfolio Manager
        </h3>
      </div>
      <div className="about__team-info-wrapper">
        <p className="about__team-info-content">
          Mrs. Roselia St. Louis has over 15 years strategic Investment Management experience growing portfolios with top performing sector focus and an international diversification approach. She began her investing career at the United Church Pension Boards, where she served as an Assistant Portfolio Manager of the multi-million dollar Large Cap Core Portfolio. She moved to Lord Abbett after 6 years at the Pension Boards to serve as Portfolio Manager of the multi-million dollar Large Cap Growth Portfolio. She is currently the Senior Portfolio Manager at ISAR Capital Partners.
        </p>
        <p className="about__team-info-content">
          Ms St. Louis holds an MBA in Finance from Cornell University in Ithaca, NY and a Bachelors degree in Economics from York University, in Toronto, Canada.
        </p>
      </div>
      <div className="about__fund-diff-wrapper">
        <h2 className="about__fund-diff-header">
          Fund Differentiator
        </h2>
        <div className="about__fund-diff-experience-wrapper">
          <div className="about__fund-diff-experience">
            <i className="fas fa-star about__fund-diff-experience-icon" />
            <h3 className="about__fund-diff-experience-header">
              Accomplished Portfolio Manager
            </h3>
            <p className="about__fund-diff-experience-context">
              15 years experience overseeing up to $1 billion in assets. A Strong track record in driving portfolio turnarounds by setting strategies based on detailed financial model results and in-depth company knowledge
            </p>
          </div>
          <div className="about__fund-diff-experience">
            <i className="fas fa-chart-bar about__fund-diff-experience-icon" />
            <h3 className="about__fund-diff-experience-header">
              Strong Expertise
            </h3>
            <p className="about__fund-diff-experience-context">
              Analyzes and understands companies in Technology, Biotechology, and Healthcare sectors in domestic and international markets.
            </p>
          </div>
          <div className="about__fund-diff-experience">
            <i className="fas fa-user-friends about__fund-diff-experience-icon" />
            <h3 className="about__fund-diff-experience-header">
              Signification Relationships
            </h3>
            <p className="about__fund-diff-experience-context">
              Both industry and network.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
