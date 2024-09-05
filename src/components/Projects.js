import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Talk-A-Tive",
      description: "Real-Time Chat Application",
      imgUrl: projImg1,
      projectUrl: "https://talk-a-tive-7fgq.onrender.com/"
    },
    {
      title: "Rating Converter",
      description: "Codeforces to Codechef Rating Converter",
      imgUrl: projImg2,
      projectUrl: "https://cftocc.netlify.app/"
    },
    {
      title: "Placement Portal",
      description: "Web app for managing placement",
      imgUrl: projImg3,
      projectUrl: "https://tpc-iit-patna.onrender.com/"
    }
  ];
  const projects2 = [
    {
      title: "Coffee shop",
      description: "A simple demo website of a coffee shop",
      imgUrl: projImg4,
      projectUrl: "https://awakemanish.github.io/Coffee-Shop/"
    },
    {
      title: "Gaming Website",
      description: "Demo gaming website with beautiful styling",
      imgUrl: projImg5,
      projectUrl: "https://awakemanish.github.io/Gaming-Website/"
    },
    {
      title: "Simon Game",
      description: "A modern web version of the classic Simon memory game.",
      imgUrl: projImg6,
      projectUrl: "https://awakemanish.github.io/Simon-Game/"
    }
  ];
  const projects3 = [
    {
      title: "Weather website",
      description: "This is a simple weather website.",
      imgUrl: projImg7,
      projectUrl: "https://simple-weather-website.netlify.app/"
    },
    {
      title: "Drum Kit",
      description: "Drum kit combining classic sounds with cutting-edge tech",
      imgUrl: projImg8,
      projectUrl: "https://awakemanish.github.io/Drum-Kit/"
    },
    {
      title: "Real time key logger",
      description: "This is a real time keylogger that sends email of each key stroke victim made.",
      imgUrl: projImg9,
      projectUrl: "https://github.com/AwakeManish/real-time-key-logger"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  Projects built by me over the years
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="#"></img>
    </section>
  )
}
