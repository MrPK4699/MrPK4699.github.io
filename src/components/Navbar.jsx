// components/Navbar.js

import React from 'react';
import { FileDownload } from 'tabler-icons-react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div className="container px-lg-5">
      <img src='assets/Pankaj-Khatri-Photo.jpg' className='rounded-circle' width={'40px'} alt='my Logo'/>
      <a className="mx-2 navbar-brand" href="#page-top">Pankaj Khatri</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        
        <i className="bi-list"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto my-2 my-lg-0">
          <li className="nav-item my-auto"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item my-auto"><a className="nav-link" href="#skills">Skills</a></li>
          <li className="nav-item my-auto"><a className="nav-link" href="#project">Projects</a></li>
          <li className="nav-item my-auto"><a className="nav-link" href="#statistics">Statistics</a></li>
          <li className="nav-item my-auto"><a className="nav-link" href="#contact">Contact</a></li>
          <li className="nav-item my-auto">
            <a 
              className="icon-btn btn btn-light btn-md shadow-lg"  
              href="assets/PankajKhatri-FullStackWebDeveloper.pdf" 
              target="_blank" 
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
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
