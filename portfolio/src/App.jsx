import { useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './Page/Navbar';
import About from './Page/About';
import Header from './Page/Header';
import Description from './Page/Description';
import Skills from './Page/Skill';
import Projects from './Page/Project';
import Contact from './Page/Contact';
import Footer from './Page/Footer';
// import Approach from './Page/Approach';
import './index.css';
import Process from './Page/Process';

function App() {

  useEffect(() => {
    // GSAP animations
    // gsap.from('.header', { opacity: 0, y: -50, duration: 2 });
    // gsap.from('.about', { opacity: 0, y: 50, duration: 2, delay: 1 });
    // gsap.from('.description', { opacity: 0, x: -100, duration: 3, delay: 0.5 });
    // gsap.from('.contact', { opacity: 0, x: 100, duration: 1, delay: 1 });
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Header className="header" />
      <About className="about"/>
      <Description className="description" />
      <Skills />
      <Projects />
      <Process />
      <Contact className="contact" />
      <Footer />
    </div>
  );
}

export default App;

// import Header from './Page/Header';
// import About from './Page/Description';
// import Skills from './Page/Skill';
// import Projects from './Page/Project';
// import Contact from './Page/Contact';

// import './index.css';

// function App() {
//   return (
//     <div className="app-container">
//       <Header />
//       <div className="content">
//         <About />
//         <Contact />
//         <Projects />
//         <Skills />
//       </div>
//     </div>
//   );
// }

// export default App;
