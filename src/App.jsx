// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Resume from "./components/Resume";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";
// import Statistics from "./components/Statistics";
// import Experience from "./components/Experience";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Statistics />
//       <Contact />
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import React from "react";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Resume from "./components/Resume";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";
// import Statistics from "./components/Statistics";
// import Experience from "./components/Experience";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Statistics />
//       <Contact />
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Statistics from "./components/Statistics";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Statistics />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Statistics from "./components/Statistics";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home id="home" /> {/* Add ID to each section */}
//       <About id="about" />
//       <Skills id="skills" />
//       <Experience id="experience" />
//       <Projects id="projects" />
//       <Statistics id="statistics" />
//       <Contact id="contact" />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home" className="">
        {" "}
        {/* Added pt-24 to prevent navbar overlap */}
        <Home />
      </div>
      <div id="about" className="">
        <About />
      </div>
      <div id="skills" className="">
        <Skills />
      </div>
      <div id="experience" className="">
        <Experience />
      </div>
      <div id="projects" className="">
        <Projects />
      </div>
      <div id="statistics" className="">
        <Statistics />
      </div>
      <div id="contact" className="">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
