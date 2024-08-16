// components/Projects.js
import React from 'react'
import Image from 'next/image';

import { BrandGithub, PlayerPlay } from 'tabler-icons-react';

const myprojects=[
  {
    title: 'Myntra',
    description : 'Myntra is a major Indian fashion e-commerce company headquartered in Bengaluru, Karnataka, India. The company was founded in 2007 to sell personalized gift items. A collaborative project, built in 6 days by a team of 5 developers',
    techStack : 'HTML | CSS | JavaScript | Git',
    github : 'https://github.com/novitafinisher/Myntra-Project',
    deployedUrl : 'https://saurav01myntra.netlify.app/',
  },
  {
    title: 'Green Paradise',
    description : 'Green Paradise is a fully functional e-commerce website designed for plant enthusiasts. It offers a wide variety of plants and gardening supplies, making it easy for users to browse, select, and purchase their favorite plants online.',
    techStack : 'HTML | CSS | JavaScript | Git | JSON Server',
    github : 'https://github.com/DivYam062/eCommerceGreenParadise',
    deployedUrl : 'https://656cbd8b78668a2ac47fd273--jolly-kitten-c781a7.netlify.app/index.html',
  }
]

const Projects = () => {
  return (
    <section className="page-section" id="project">
      <div className="container">
        <h2 className="text-center">My Projects</h2>
        <hr className="divider" />
        <div className="row my-3 mx-2">


          {myprojects.map((ele, i) => (
            <div className='project-box shadow-lg m-auto p-3 my-3' key={i}>
              <h2 className='project-name text-center'>{ele.title}</h2>
              <div className='d-lg-flex justify-content-between  align-items-center'>
                <div className=' m-3'>
                  <Image className="img-fluid" src={`assets/${ele.title}.png`} alt={ele.title} />
                </div>
                <div className='project-box-caption text-center' >
                  <p className='project-details text-black'>{ele.description}</p>
                  <p className=''>{ele.techStack}</p>
                  <div className='project-links d-flex justify-content-between'>
                  <a className="btn btn-light btn-md icon-btn" href={ele.deployedUrl}>Go Live<PlayerPlay  strokeWidth={2} /></a>
                  <a className="btn btn-light btn-md icon-btn" href={ele.github}>Code <BrandGithub  strokeWidth={2} /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

