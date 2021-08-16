import './App.css';
import { Parallax } from 'react-parallax'
import Fade from 'react-reveal/Fade'
import Slide from "react-reveal/Slide";
import Container from 'react-bootstrap/Container'
import MyCarousel from './components/carousel/MyCarousel';
import MyNavBar from './components/my-navbar/MyNavBar'
import About from './sections/about/About';
import BGImage from './assets/parallax/Parallax-Background.jpg'
import Skills from './sections/skills/Skills';
import Experience from './sections/experience/Experience';
import ProjectTimeline from './components/project-timeline/ProjectTimeline';
import Contact from './sections/contact/Contact';
import Footer from './components/footer/Footer';
import TitleText from './components/title/TitleText'
import Particles from 'react-particles-js';
import { particleOptions } from './particleOptions'

//import MyScrollDown from '../../components/my-scroll-down/MyScrollDown'

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavBar />
      <Particles
        className="particle-canvas"
        params={particleOptions}
      />
      <MyCarousel />
      <TitleText />
      {/*<MyScrollDown />*/}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BGImage}
          bgImageAlt="Parallax Background Image"
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration="500">
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <hr />
        <Container className="container-box rounded">
          <Slide duration="500">
            <Skills />
          </Slide>
        </Container>
      </div>
      <div>
        <hr />
        <Container className="container-box rounded">
          <Fade duration="500">
            <Experience />
          </Fade>
        </Container>
      </div>
      <div>
        <hr />
        <Container className="container-box rounded">
          <Fade duration="500">
            <ProjectTimeline />
          </Fade>
        </Container>
      </div>
      <div>
        <hr />
        <Container className="container-box rounded">
          <Fade duration="500">
            <Contact />
          </Fade>
        </Container>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
