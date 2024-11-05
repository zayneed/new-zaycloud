// src/App.js
import React, { useEffect } from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
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
            a: '1', // user id
            field2: 'value2' // user email
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
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Error Response Data:', error.response.data);
          console.error('Error Response Status:', error.response.status);
          console.error('Error Response Headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Error Request:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error Message:', error.message);
        }
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
        <GitHubStats />
      </div>
      <NavBar />
    </div>
  );
}

export default App;
