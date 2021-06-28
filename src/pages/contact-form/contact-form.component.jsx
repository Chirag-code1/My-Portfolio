import React from 'react'
import "./contact-form.style.css"

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
    return (
        <div id="contact">
        <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
        <Jumbotron className="contact-jumbotron">
          <Row>
            <Col className="d-flex justify-content-center flex-wrap">
              <div className="m-2">
                <a href="chiragcode1@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Button id="email-btn" title="chiragcode1@gmail.com">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </a>
              </div>
              <div className="m-2">
                <a href="https://www.linkedin.com/in/anand-kumar-jha-745798a4/" target="_blank" rel="noopener noreferrer">
                  <Button variant="warning" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </a>
              </div>
              
              <div className="m-2">
                <a href="https://github.com/Chirag-code1" target="_blank" rel="noopener noreferrer">
                  <Button variant="success" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </a>
              </div>
              {/* <div className="m-2">
                <a href="https://www.youtube.com/user/MrAkjha96/" target="_blank" rel="noopener noreferrer">
                  <Button id="youtube-btn" variant="info" title="Lets code together!">
                  <i class="fab fa-youtube"></i> Youtube
                  </Button>
                </a>
              </div> */}
              {/* <div className="m-2">
                <a href="https://twitter.com/akjha96" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-info" title="Tweets are welcomed!">
                    <i className="fab fa-twitter"></i> Twitter
                  </Button>
                </a> */}
              {/* </div> */}
              <div className="m-2">
                <a href="https://www.instagram.com/callme.chirag" target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" title="Say hello on Insta">
                    <i className="fab fa-facebook-square"></i> Instagram
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    )
}

export default Contact
