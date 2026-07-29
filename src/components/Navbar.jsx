import React from 'react';
import {useState} from 'react';
import {motion} from 'framer-motion';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [ 'Home', 'About', 'Projects', 'Contact'];
    return (
        <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="navbar"
        >

        <div className="container">
            <div className="logo">logo</div>
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                {
                    navLinks.map((link) => (
                        <li key = {link}>
                            <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                                {link}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
        </motion.nav>
    )
}

export default Navbar;