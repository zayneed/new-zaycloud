// src/components/GitHubStats.js
import React, { useEffect, useState } from 'react';

const GitHubStats = () => {
  const [followers, setFollowers] = useState(0);
  const [totalStars, setTotalStars] = useState(0);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const userResponse = await fetch('https://api.github.com/users/zayneed');
      const userData = await userResponse.json();
      setFollowers(userData.followers);

      const reposResponse = await fetch('https://api.github.com/users/zayneed/repos');
      const reposData = await reposResponse.json();
      const stars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
      setTotalStars(stars);

      // Gesamtanzahl der Contributions abrufen
      const contributions = await Promise.all(
        reposData.map(async (repo) => {
          const commitsResponse = await fetch(`https://api.github.com/repos/zayneed/${repo.name}/commits`);
          const commitsData = await commitsResponse.json();
          return commitsData.length; // Anzahl der Commits
        })
      );
      const totalContributions = contributions.reduce((acc, count) => acc + count, 0);
      setTotalContributions(totalContributions);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-[#1D2433] text-white flex flex-col items-center mt-8 space-y-4">
      <h2 className="text-3xl font-semibold mb-6">GitHub Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gradient-to-r from-[#2F3A4F] to-[#3C4B5A] text-center rounded-lg shadow-xl">
          <h3 className="text-xl font-bold">Follower</h3>
          <p className="text-4xl font-semibold text-yellow-300">{followers}</p>
        </div>
        <div className="p-6 bg-gradient-to-r from-[#2F3A4F] to-[#3C4B5A] text-center rounded-lg shadow-xl">
          <h3 className="text-xl font-bold">Total Stars</h3>
          <p className="text-4xl font-semibold text-yellow-300">{totalStars}</p>
        </div>
        <div className="p-6 bg-gradient-to-r from-[#2F3A4F] to-[#3C4B5A] text-center rounded-lg shadow-xl">
          <h3 className="text-xl font-bold">Total Contributions</h3>
          <p className="text-4xl font-semibold text-yellow-300">{totalContributions}</p>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;