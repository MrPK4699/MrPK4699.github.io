// components/Header.js

import React from 'react';
import { BrandGithub, BrandLinkedin } from 'tabler-icons-react';
import { TypedText } from './TypedText';    
          
const Header = () => (
  <header className="masthead" id="page-top">
    <div className="container px-4 px-lg-5 h-100">
      <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
        <div className="col-lg-8 align-self-end">
          <h1 className="text-white font-weight-bold">
            Hello 👋,<br />I am <span className="home-title-color" id="user-detail-name">Pankaj Khatri</span><br />
          </h1>
          <hr className="divider" />
        </div>
        <div className="col-lg-8 align-self-baseline text-white">
          <p className="txt-primary mb-5">A <TypedText/></p>
          {/* <a className="btn btn-primary btn-xl" href="#about">Find Out More</a> */}
          <a className="btn btn-light btn-md m-2 icon-btn"  href="https://github.com/MrPK4699" target="_blank" rel="noopener noreferrer" ><BrandGithub size={24} strokeWidth={2} /></a>
          <a className="btn btn-light btn-md m-2 icon-btn" href="https://www.linkedin.com/in/4699pankajkhatri" target="_blank" rel="noopener noreferrer" ><BrandLinkedin size={24} strokeWidth={2} /></a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
