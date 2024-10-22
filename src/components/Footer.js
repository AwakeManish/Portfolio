import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.webp";
import navIcon5 from "../assets/img/nav-icon5.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 class="logo-txt-lg">Manish <span class="logo-txt-sm">Kumar</span></h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/awakemanish/" tar><img src={navIcon1} alt="Linkedln" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/awakemanish"><img src={navIcon2} alt="Github" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/awakemanish/"><img src={navIcon3} alt="Instagram" /></a>
                <a target="_blank" rel="noreferrer" href="http://awakemanish.blogspot.com"><img src={navIcon4} alt="Blogger" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.behance.net/eb20a29f"><img src={navIcon5} alt="Behance" /></a>
              </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
