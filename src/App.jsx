import { BrowserRouter } from "react-router-dom";

import { About, Contact, Schedule, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, PreviousMemories } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* <div className='bg-hero-pattern bg bg-no-repeat bg-center'> */}
        <div>
          <StarsCanvas />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Schedule />
        {/* <Tech /> */}
        {/* <Works /> */}
        <PreviousMemories />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
