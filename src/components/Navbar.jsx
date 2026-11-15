// components/Navbar.jsx

import React, { useEffect, useRef, useState } from 'react';
import Collapse from 'bootstrap/js/dist/collapse';
import ScrollSpy from 'bootstrap/js/dist/scrollspy';
import { FileDownload } from 'tabler-icons-react';

const RESUME_URL = 'assets/PankajKhatri-FullStackWebDeveloper.pdf';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'statistics', label: 'Statistics' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [shrink, setShrink] = useState(false);
  const togglerRef = useRef(null);
  const menuRef = useRef(null);

  // Solid navbar once the page is scrolled
  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 0);
    onScroll();
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const spy = new ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
    return () => spy.dispose();
  }, []);

  // On mobile, close the menu after a link is tapped
  const closeMobileMenu = () => {
    const toggler = togglerRef.current;
    if (toggler && window.getComputedStyle(toggler).display !== 'none' && menuRef.current) {
      Collapse.getOrCreateInstance(menuRef.current, { toggle: false }).hide();
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top py-3${shrink ? ' navbar-shrink' : ''}`} id="mainNav">
      <div className="container px-lg-5" id="nav-menu">
        <img src="assets/Pankaj-Khatri-Photo.jpg" className="rounded-circle" width="40" height="40" alt="Pankaj Khatri" />
        <a className="mx-2 navbar-brand home" href="#home" onClick={closeMobileMenu}>Pankaj Khatri</a>
        <button
          ref={togglerRef}
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive" ref={menuRef}>
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            {navItems.map(({ id, label }) => (
              <li className="nav-item my-auto" key={id}>
                <a className={`nav-link ${id}`} href={`#${id}`} onClick={closeMobileMenu}>{label}</a>
              </li>
            ))}
            <li className="nav-item my-auto">
              <a
                className="icon-btn btn btn-light btn-md shadow-lg"
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="resume-button-1"
              >
                <FileDownload strokeWidth={2} /> Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
