import { BrowserRouter } from "react-router-dom";

import { About, Contact, Schedule, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, PreviousMemories } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* <StarsCanvas /> */}
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
