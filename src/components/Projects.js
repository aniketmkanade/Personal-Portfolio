import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
export const Projects=()=>{
    const Projects = [
          {
            title: "Online Examination System",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Tender Tracking System",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Minidron Navigation System",
            description: "Design & Development",
            imgUrl: projImg3,
          },
          {
            title: "Online Shopping Web Application",
            description: "Design & Development",
            imgUrl: projImg4,
          },
          {
            title: "Portfolio Website",
            description: "Design & Development",
            imgUrl: projImg5,
          },
          {
            title: "Crud Application",
            description: "Development",
            imgUrl: projImg6,
          },
        ];

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Please find code at <span><a href="https://github.com/aniketmkanade">Link</a></span></p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
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
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <Row>
                              {
                                Projects.map((project, index)=>{
                                  return(<ProjectCard 
                                  key={index}
                                  {...project}/> //Doubt
                                  )
                                })
                              }
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                          <Row>
                              {
                                Projects.map((project, index)=>{
                                  return(<ProjectCard 
                                  key={index}
                                  {...project}/> //Doubt
                                  )
                                })
                              }
                            </Row>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                          <Row>
                              {
                                Projects.map((project, index)=>{
                                  return(<ProjectCard 
                                  key={index}
                                  {...project}/> //Doubt
                                  )
                                })
                              }
                            </Row>
                          </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="e">
            </img>
        </section>
    );
}