import React, { useEffect } from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import More from './components/More';
import NavBar from './components/NavBar';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.post('https://pingpandac.netlify.app/api/v1/events', {
          category: 'zaycloud',
          fields: {
            a: '1',
            field2: 'value2'
          },
          types: ['discordDm']
        }, {
          headers: {
            'Authorization': 'Bearer cm34vysue0001um3ks0iibq6u',
            'Content-Type': 'application/json'
          }
        });
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    postData();
  }, []);

  return (
    <div className="bg-[#1D2433] h-screen snap-y snap-mandatory overflow-y-scroll">
      <div id="home" className="snap-start flex flex-col items-center justify-center h-screen">
        <AboutMe />
      </div>
      <div id="projects" className="snap-start flex flex-col items-center justify-center h-screen">
        <Projects />
      </div>
      <div id="stats" className="snap-start flex flex-col items-center justify-center h-screen">
        <GitHubStats username="zayneed" token="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_567890abcdef1234567890abcdef12345678"/>
      </div>
      <div id="more" className="snap-start flex flex-col items-center justify-center h-screen">
        <More />
      </div>
      <NavBar />
    </div>
  );
}

export default App;
