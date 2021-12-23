import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import './Navbar.css';

const Navbar = function () {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          activeClass="active"
          to="main"
          spy
          smooth
          offset={-70}
          duration={500}
          className="navbar-logo"
          onClick={closeMobileMenu}
        >
          <img src="/images/sun.png" alt="" style={{ width: 40, height: 40 }} />
          Shao Kiat
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="main"
              spy
              smooth
              offset={-70}
              duration={500}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="about"
              spy
              smooth
              offset={-70}
              duration={500}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="skills"
              spy
              smooth
              offset={-70}
              duration={500}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              My Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              spy
              smooth
              offset={-70}
              duration={500}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy
              smooth
              offset={-70}
              duration={500}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
