// src/App.js
import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="bg-[#1D2433] h-screen snap-y snap-mandatory overflow-y-scroll">
      <div className="snap-start flex flex-col items-center justify-center h-screen">
        <AboutMe />
      </div>
      <div className="snap-start flex flex-col items-center justify-center h-screen">
        <Projects />
      </div>
    </div>
  );
}

export default App;
