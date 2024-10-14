// components/Skills.js

import React from 'react';

const Statistics = () => (
  <section className="page-section" id="statistics">
    <div className="container px-4 px-lg-5">
      <h2 className="text-center mt-0">Github Stats</h2>
      <hr className="divider" />
      
      <div id="githubCommits" className="row">
        <div className="react-activity-calendar my-2 shadow-lg" data-aos="zoom-in">
          <img style={{width: "100%" , margin: "auto"}} src="https://ghchart.rshah.org/MrPK4699" alt=" Github chart" />
        </div>

        <div className="github-stats d-flex flex-wrap justify-content-around" data-aos="zoom-in">
          <div className="github-subdiv1 my-2 shadow-lg" data-aos="zoom-in">
            <img className="github-streak-stats " data-aos="zoom-in" id="github-streak-stats" 
              src="https://github-readme-streak-stats.herokuapp.com/?user=MrPK4699&" alt="MrPK4699-github-stats" />
          </div>
          <div className="github-subdiv2 my-2 shadow-lg" data-aos="zoom-in">
            <img className="github-stats-card " data-aos="zoom-in" id="github-stats-card" 
              src="https://github-readme-stats.vercel.app/api?username=MrPK4699&show_icons=true&locale=en"
              alt="MrPK4699-github-subdiv2" />
          </div>
          <div className="github-subdiv3 my-2 shadow-lg" data-aos="zoom-in">
            <img className="github-top-card " data-aos="zoom-in" id="github-top-langs" 
              src="https://github-readme-stats.vercel.app/api/top-langs?username=MrPK4699&show_icons=true&locale=en&layout=compact"
              alt="MrPK4699 github-subdiv3" />
          </div>
        </div>

      </div>

    </div>
  </section>
);

export default Statistics;
