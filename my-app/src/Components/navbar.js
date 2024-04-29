import React, { useState } from 'react';
import CV from './img/CV_Bhatti_Tayyeb.pdf';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="navbar">
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={isOpen ? "menu-line open" : "menu-line"}></div>
                <div className={isOpen ? "menu-line open" : "menu-line"}></div>
                <div className={isOpen ? "menu-line open" : "menu-line"}></div>
            </div>
            <ul className={isOpen ? "active" : ""}>
                <li><a href="#navbar" onClick={toggleMenu}>Info</a></li>
                <li><a href="#competence" onClick={toggleMenu}>Competence</a></li>
                <li><a href="#projet" onClick={toggleMenu}>Projet</a></li>
                <li><a href="#contacte" onClick={toggleMenu}>Contacte</a></li>
                <li><a href='https://www.linkedin.com/in/tayyeb-bhatti-43a20a207/' onClick={toggleMenu}><FaLinkedin /></a></li>
                <li><a href='https://github.com/tayyeb9701' onClick={toggleMenu}><FaGithub /></a></li>
                <li><a href={CV} download="CV_Bhatti_Tayyeb" onClick={toggleMenu}>Mon CV</a></li>

            </ul>
        </div>
    );
};

export default Navbar;
