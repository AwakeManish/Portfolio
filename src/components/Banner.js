import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.webp";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Developer", "Programmer", "Geek" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, )

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Manish`} <br /> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Programmer", "Developer",  "Geek" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  B.Tech CSE graduate from IIT Patna, now stepping into the education-tech space as an Academic Manager at K12 Techno Services. Blending tech skills with a passion for learning. {index}
                  </p>
                  <button><a id="anchor-tag" href="#connect">Let’s Connect <ArrowRightCircle size={25} /></a></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
<img
  src={headerImg}
  alt="Header Img"
  style={{
    width: '400px',        // Make width and height equal
    height: '400px',
    objectFit: 'cover',    // Ensures it doesn't squish
    borderRadius: '50%',   // Makes it circular
    display: 'block',
    margin: '0 auto',      // Optional: center the image
    background: '#1a1a1a'
  }}
/>

</div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}
