// src/components/GitHubStats.js
import React, { useEffect, useState } from 'react';

const GitHubStats = () => {
  const [followers, setFollowers] = useState(0);
  const [totalStars, setTotalStars] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Follower abrufen
    fetch('https://api.github.com/users/zayneed')
      .then((response) => response.json())
      .then((data) => setFollowers(data.followers))
      .catch((error) => console.error("Fehler beim Abrufen der Follower:", error));

    // Alle Repositories abrufen und Sterne summieren
    fetch('https://api.github.com/users/zayneed/repos')
      .then((response) => response.json())
      .then((repos) => {
        const stars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        setTotalStars(stars);
      })
      .catch((error) => console.error("Fehler beim Abrufen der Repositories:", error));

    // Startet die Animation nach einer kurzen Verzögerung
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div className="p-6 bg-[#1D2433] text-white flex flex-col items-center mt-8 space-y-4">
      <h2 className="text-3xl font-semibold mb-6">GitHub Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`p-6 bg-gradient-to-r from-[#2F3A4F] to-[#3C4B5A] text-center rounded-lg shadow-xl transition-transform duration-500 hover:scale-105 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h3 className="text-xl font-bold">Follower</h3>
          <p className="text-4xl font-semibold text-yellow-300">{followers}</p>
        </div>
        <div
          className={`p-6 bg-gradient-to-r from-[#2F3A4F] to-[#3C4B5A] text-center rounded-lg shadow-xl transition-transform duration-500 hover:scale-105 transform delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h3 className="text-xl font-bold">Total Stars</h3>
          <p className="text-4xl font-semibold text-yellow-300">{totalStars}</p>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
