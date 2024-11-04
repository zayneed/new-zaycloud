// src/components/GitHubStats.js
import React, { useEffect, useState } from 'react';

const GitHubStats = () => {
  const [followers, setFollowers] = useState(0);
  const [totalCommits, setTotalCommits] = useState(0);

  useEffect(() => {
    // Follower abrufen
    fetch('https://api.github.com/users/zayneed')
      .then(response => response.json())
      .then(data => setFollowers(data.followers))
      .catch(error => console.error("Fehler beim Abrufen der Follower:", error));

    // Commits aus allen Repositories abrufen
    fetch('https://api.github.com/users/zayneed/repos')
      .then(response => response.json())
      .then(repos => {
        const commitRequests = repos.map(repo => 
          fetch(`https://api.github.com/repos/zayneed/${repo.name}/stats/commit_activity`)
            .then(response => response.json())
            .then(data => data.reduce((sum, week) => sum + week.total, 0))
        );

        Promise.all(commitRequests)
          .then(commitCounts => {
            const allCommits = commitCounts.reduce((acc, count) => acc + count, 0);
            setTotalCommits(allCommits);
          })
          .catch(error => console.error("Fehler beim Abrufen der Commits:", error));
      });
  }, []);

  return (
    <div className="p-6 bg-[#1D2433] text-white flex flex-col items-center mt-8 space-y-4">
      <h2 className="text-2xl font-semibold mb-4">GitHub Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-[#2F3A4F] text-center rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold">Follower</h3>
          <p className="text-3xl font-semibold text-yellow-300">{followers}</p>
        </div>
        <div className="p-4 bg-[#2F3A4F] text-center rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold">Commits</h3>
          <p className="text-3xl font-semibold text-yellow-300">{totalCommits}</p>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
