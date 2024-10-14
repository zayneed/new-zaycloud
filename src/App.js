// src/App.js
import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects'; // Importiere die Projects-Komponente
import './App.css'; 

function App() {
  return (
    <div className="bg-[#1D2433]">
      <div className="h-screen flex flex-col items-center justify-center overflow-hidden">
        <AboutMe />
      </div>
      <Projects /> {/* Füge die Projects-Komponente hinzu */}
    </div>
  );
}

export default App;
