// components/About.js
import { FileDownload } from 'tabler-icons-react';
import Image from 'next/image';


const About = () => (
  <section className="page-section " id="about" style={{background:' rgba(244, 98, 58, 0.25)'}}>
    <div className="container px-2 ">
      <h2 className="text-primary mt-0 text-center ">About Me</h2>
      <hr className="divider" />
      <br/>
      <div className="row">
        <div className="col-lg-3  d-flex justify-content-center p-2">
          <Image className="rounded" src="assets/Pankaj-Khatri-Photo.jpg" alt="PK" width='270px'/>
        </div>
        <div className="col-lg-9 text-center ">
          <p className="text-black mb-4 mx-3" style={{"word-spacing": "0.2rem"}}>Dynamic Full Stack Web Developer with a passion for creating
            seamless and visually appealing user experiences. Adept at leveraging a comprehensive technical skill set to
            drive innovative solutions. Committed to continuous learning and collaborative teamwork.
            looking for a role in the industry to utilize my
            skills. Proficient with skills required for engaging with a team for developing a
            project. Will love to contribute in Open Source Projects.
          </p>
          <a className="btn btn-light btn-md icon-btn" href="#services"> <FileDownload  strokeWidth={2} /> Resume</a>
        </div>
        
      </div>
    </div>
  </section>
);

export default About;
