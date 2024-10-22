import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from "../assets/img/nav-icon4.webp";
import navIcon5 from "../assets/img/nav-icon5.png";
// import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h1 class="logo-txt-lg">Manish <span class="logo-txt-sm">Kumar</span></h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active active-link navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active active-link navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active active-link navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/awakemanish/" aria-label="Linkedln"><img src={navIcon1} alt="Linkedln" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/awakemanish" aria-label="GitHub"><img src={navIcon2} alt="GitHub" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/awakemanish/" aria-label="Instagram"><img src={navIcon3} alt="Instagram" /></a>
                <a target="_blank" rel="noreferrer" href="http://awakemanish.blogspot.com" aria-label="Blogger"><img src={navIcon4} alt="Blogger" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.behance.net/eb20a29f" aria-label="Behance"><img src={navIcon5} alt="Behance" /></a>
              </div>
              <a href='https://drive.google.com/file/d/1oABK5pEgA-M4g0R4bHfdEHI0d1_C17LP/view?usp=drive_link' target="_blank" rel="noreferrer">
                <button className="vvd"><span>My Résumé</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
