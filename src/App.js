// src/App.js
import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="bg-[#1D2433] h-screen snap-y snap-mandatory overflow-y-scroll">
      <div id="home" className="snap-start flex flex-col items-center justify-center h-screen">
        <AboutMe />
      </div>
      <div id="projects" className="snap-start flex flex-col items-center justify-center h-screen">
        <Projects />
      </div>
      <div id="stats" className="snap-start flex flex-col items-center justify-center h-screen">
        <GitHubStats />
      </div>
      <NavBar />
    </div>
  );
}

export default App;
