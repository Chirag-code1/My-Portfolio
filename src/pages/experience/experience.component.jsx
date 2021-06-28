import React from 'react'
import Tilt from 'react-tilt'
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import "./experience.style.css"

import ExpLogo from "../../assets/icons/TopTroveLogo.png"

const Experience = () => {
    return (
        <div id="experience">
             <h1 className="pt-3 text-center font-details-b pb-3" style={{fontFamily: "'Montserrat', sans-serif"}}>EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
          <Container>
          <Tilt options={{ max : 25 }} style={{padding: 5}}>
          
          <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={ExpLogo} alt="Top Trove logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Full Stack Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">MERN STACK</strong>
                    <br />
                    <strong>Technology:</strong> Mongo DB, Express JS, React JS, Node JS, C++
                    <br />
                    <strong>Duration:</strong> June 2021 - July 2021
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                    <li style={{color:"red"}}><strong>Accomplishment-</strong>
                       Recieved Letter Of Recommendation.</li>

                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      {/* <li><strong>Developed</strong> automation system to create SQL bulk query scripts that 
                        increased efficiency by 80% and decreased working hours from 4 hours to 30 mins per task.
                      </li> */}
                      <li><strong>Maintained</strong> their website and updated it on regular basis. 
                      </li>
                      <li><strong>Provided</strong> application maintenance while working as `Web Developer`. 
                      </li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>

          </Tilt>
          </Container>
      </Jumbotron>
            
        </div>
    )
}

export default Experience
