// components/About.js

import React from 'react';
import { FileDownload } from 'tabler-icons-react';


const About = () => (
  <section className="page-section " id="about" style={{background:' rgba(244, 98, 58, 0.25)'}}>
    <div className="container px-2 ">
      <h2 className="txt-primary mt-0 text-center ">About Me</h2>
      <hr className="divider" />
      <br/>
      <div className="row">
        <div className="col-lg-3  d-flex justify-content-center p-2">
          <img className="rounded" src="assets/Pankaj-Khatri-Photo.jpg" alt="PK" width='270px'/>
        </div>
        <div className="col-lg-9 text-center ">
          <p className="text-black mb-4 mx-3" style={{"wordSpacing": "0.2rem"}}>Dynamic Full Stack Web Developer with a passion for creating
            seamless and visually appealing user experiences. Adept at leveraging a comprehensive technical skill set to
            drive innovative solutions. Committed to continuous learning and collaborative teamwork.
            looking for a role in the industry to utilize my
            skills. Proficient with skills required for engaging with a team for developing a
            project. Will love to contribute in Open Source Projects.
          </p>
          <a 
            className="btn btn-light btn-md icon-btn" 
            href="assets/PankajKhatri-FullStackWebDeveloper.pdf" 
            target="blank"  
            onClick={(e) => {
              e.preventDefault();
              window.open("assets/PankajKhatri-FullStackWebDeveloper.pdf", "_blank");
              setTimeout(() => {
                const link = document.createElement("a");
                link.href = "assets/PankajKhatri-FullStackWebDeveloper.pdf";
                link.download = "PankajKhatri-FullStackWebDeveloper.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }, 1000); // delay to give the new tab time to load
            }} 
          >  
            <FileDownload  strokeWidth={2} /> Resume
          </a>
        </div>
        
      </div>
    </div>
  </section>
);

export default About;
