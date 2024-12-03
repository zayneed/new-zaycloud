// src/components/Projects.js

import React from 'react';
import screenshot1 from '../sitescreens/1.png'; // Screenshot 1
import screenshot2 from '../sitescreens/2.png'; // Screenshot 2
import screenshot3 from '../sitescreens/3.png'; // Screenshot 3


const projects = [
  {
    title: "Zayneed.Cloud",
    image: screenshot1, // Screenshot 1
    url: "https://zayneed.cloud",
    date: "December 03, 2024",
    description: "This is my personal site",
    technologies: ["React", "Tailwind CSS"]
  },
  {
    title: "Outrobot",
    image: screenshot2, // Screenshot 1
    url: "https://bot.zayneed.cloud",
    date: "September 02, 2024",
    description: "My Discord bot (outdated)",
    technologies: ["Next.js", "Node.js", "discord.js", "ffmpeg"]
  },
  {
    title: "Vine Boomer",
    image: screenshot3, // Screenshot 1
    url: "https://vine-boomer.zayneed.cloud",
    date: "December 03, 2024",
    description: "My newest project with SiliconValley77, Vine Boomer!",
    technologies: ["Tauri", "Rust", "Next.js", "TailwindCSS"]
  },
  {
    title: "View More Projects",
    date: "",
    description: "",
    technologies: []
  },
];

function Projects() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-white mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#0C0C0C] p-4 rounded-lg shadow-md">
            {project.title === "View More Projects" ? (
              <button className="w-full h-full text-center text-white font-semibold">
                {project.title}
              </button>
            ) : (
              <>
                {/* Bild als img-Tag verwenden */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg mb-2" // Stil anpassen
                    style={{ height: '200px', objectFit: 'cover' }} // Skaliere das Bild
                  />
                )}
                <h3 className="font-bold text-white">{project.title}</h3>
                <p className="text-[#9CA3AF] italic">{project.date}</p>
                <p className="mt-2 text-white">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-700 text-xs text-white px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;