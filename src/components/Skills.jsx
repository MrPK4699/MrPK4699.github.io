// components/Skills.js

import React from 'react';
// `icon` must match the file name in public/assets/tech-imgs exactly:
// GitHub Pages is case-sensitive, so NodeJs.png and NodeJS.png are different files.
const mySkills = [
  { name: 'HTML', icon: 'HTML' },
  { name: 'CSS', icon: 'CSS' },
  { name: 'JavaScript', icon: 'Javascript' },
  { name: 'Java', icon: 'Java' },
  { name: 'React', icon: 'React' },
  { name: 'Redux', icon: 'Redux' },
  { name: 'MongoDB', icon: 'MongoDb' },
  { name: 'Express.js', icon: 'ExpressJs' },
  { name: 'Node.js', icon: 'NodeJS' },
  { name: 'Mantine', icon: 'Mantine' },
  { name: 'Webflow', icon: 'Webflow' },
];

const Skills = () => (
  <section className="page-section" id="skills">
    <div className="container px-4 px-lg-5">
      <h2 className="text-center mt-0">Technical Skills</h2>
      <hr className="divider" />

      <div className="justify-content-center row gx-4 gx-lg-5">

        {
          mySkills.map(({ name, icon }) => (
            <div className="col-lg-2 col-sm-3 col-4 text-center skills-card" key={name}>
              <div className="shadow-lg mt-lg-5 mt-4 py-3 rounded-4 fs-6">
                <div className="mb-2 rotate-y">
                    <img className="skills-card-img" src={`assets/tech-imgs/${icon}.png`} alt={name} width="40" height="40" loading="lazy" />
                </div>
                <p className="text-muted mb-0 skills-card-name">{name}</p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  </section>
);

export default Skills;
