import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GithubStats = ({ username, token }) => {
  const [stats, setStats] = useState({
    commits: 0,
    followers: 0,
    stars: 0
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
          Accept: 'application/vnd.github.cloak-preview', // For commits API
        };

        // Perform all requests in parallel using Promise.all
        const [commitsRes, followersRes, reposRes] = await Promise.all([
          axios.get(commitsUrl, { headers }),
          axios.get(followersUrl, { headers }),
          axios.get(reposUrl, { headers })
        ]);

        // Extract data from responses
        const totalCommits = commitsRes.data.total_count;
        const totalFollowers = followersRes.data.length;
        const totalStars = reposRes.data.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        // Set the stats state
        setStats({
          commits: totalCommits,
          followers: totalFollowers,
          stars: totalStars
        });
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGithubStats();
  }, [username, token]);

  return (
    <div>
      <h3>GitHub Stats for {username}</h3>
      <p>Commits: {stats.commits}</p>
      <p>Followers: {stats.followers}</p>
      <p>Stars: {stats.stars}</p>
    </div>
  );
};

export default GithubStats;
