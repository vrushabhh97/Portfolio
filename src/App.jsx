import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import videoBg from "./assets/hero-video.mp4";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <div>
          <Navbar />
          <Hero />{" "}
        </div>

        <div className="relative z-0">
          <About />
          <Experience />
          <Tech />
          <Works />
          {/*<Feedbacks /> */}
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

//2:01:11
