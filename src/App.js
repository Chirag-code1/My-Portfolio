import React from 'react';
import './App.css';
import MyCarousal from './components/my-carousal/my-carousal.components';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container'
import img1 from "./assets/img/parallex/background.webp"
//components
import MyNavbar from "./components/my-navbar/mynavbar.components"
import TitleMessage from './components/title-message/title-message.components';
import About from './pages/about/about.component'
import Skills from "./pages/skills/skills.component"
import Experience from "./pages/experience/experience.component"
import ProjectsTimeline from "./components/project-timeline/project-timeline.component"
import Contact from "./pages/contact-form/contact-form.component"
import Footer from "./components/footer/footer.component"


import Particles from "react-particles-js";
  import { particlesOptions } from "./particlesOptions";
const App = () => {
  return (
    <>
    <div className="App" style={{ position: "relative" }}>
        <MyNavbar />
        <MyCarousal />
        <TitleMessage />
        <Particles
        className="particles particles-box"
        params={particlesOptions}
      />

        {/* about me section */}
        <div>
         <Parallax
          blur={{ min: -300, max: 300 }}
          bgImage={img1}
          bgImageAlt=""
          strength={-200}
        >
        <div>
        <Container className="container-box rounded">
        <Fade duration={500}>
        <About />
        </Fade>
        </Container>
        </div>
        </Parallax>
        </div>



        {/* Sills section */}
        <div>
        <Container className="container-box rounded">
        <Slide  bottom duration={500}>
        <hr />
        <Skills />
        </Slide>
        </Container>
        </div>

        {/* Experinece section */}
        
        <div>
        <Container className="container-box rounded">
        <Fade duration={500}>
        <hr />
        <Experience />
        </Fade>
        </Container>
        </div>

        {/* Projects section */}
        
        <div>
        <Container className="container-box rounded">
        <Slide duration={500}>
        <hr />
        <ProjectsTimeline />
        </Slide>
        </Container>
        </div>

        {/* Contact section */}
        
        <div>
        <Container className="container-box rounded">
        <Fade duration={500}>
        <hr />
        <Contact />
        </Fade>
        </Container>
        </div>

        <hr />
        <Footer />

         
         
     </div>
   </>
  );
}

export default App;
