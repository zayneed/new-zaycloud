import React, { useState, useEffect } from "react";
import axios from "axios";

const GithubStats = ({ username, token }) => {
  const [stats, setStats] = useState({
    commits: 0,
    followers: 0,
    stars: 0,
  });

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        // Define URLs for each request
        const commitsUrl = `https://api.github.com/search/commits?q=author:${username}`;
        const followersUrl = `https://api.github.com/users/${username}/followers`;
        const reposUrl = `https://api.github.com/users/${username}/repos`;

        // Set up headers for Axios requests
        const headers = {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.cloak-preview", // For commits API
        };

        // Perform all requests in parallel using Promise.all
        const [commitsRes, followersRes, reposRes] = await Promise.all([
          axios.get(commitsUrl, { headers }),
          axios.get(followersUrl, { headers }),
          axios.get(reposUrl, { headers }),
        ]);

        // Extract data from responses
        const totalCommits = commitsRes.data.total_count;
        const totalFollowers = followersRes.data.length;
        const totalStars = reposRes.data.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0
        );

        // Set the stats state
        setStats({
          commits: totalCommits,
          followers: totalFollowers,
          stars: totalStars,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGithubStats();
  }, [username, token]);

  return (
    <div className="p-6 bg-[#1D2433] text-white flex flex-col items-center mt-8 space-y-4">
      <h2 className="text-3xl font-semibold mb-6">GitHub Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gradient-to-r from-[#2F3A4F] to-[#3C4B5A] text-center rounded-lg shadow-xl">
          <h3 className="text-xl font-bold">Followers</h3>
          <p className="text-4xl font-semibold text-yellow-300">
            {stats.followers}
          </p>
        </div>
        <div className="p-6 bg-gradient-to-r from-[#2F3A4F] to-[#3C4B5A] text-center rounded-lg shadow-xl">
          <h3 className="text-xl font-bold">Total Stars</h3>
          <p className="text-4xl font-semibold text-yellow-300">
            {stats.stars}
          </p>
        </div>
        <div className="p-6 bg-gradient-to-r from-[#2F3A4F] to-[#3C4B5A] text-center rounded-lg shadow-xl">
          <h3 className="text-xl font-bold">Total Commits</h3>
          <p className="text-4xl font-semibold text-yellow-300">
            {stats.commits}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GithubStats;