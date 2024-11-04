import React, { useState } from 'react';

const AboutMe = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div
      className={`bg-[#2F3A4F] rounded-lg shadow-lg transition-all duration-300`}
      style={{
        width: isMaximized ? '80vw' : '500px',
        height: isMinimized ? '40px' : isMaximized ? '80vh' : '300px',
        position: 'relative',
        zIndex: 1000,
      }}
    >
      <div className="flex items-center justify-between bg-[#212938] p-2 rounded-t-lg">
        <div className="flex space-x-2">
          <button className="w-3 h-3 bg-red-500 rounded-full" onClick={() => {}}></button>
          <button className="w-3 h-3 bg-yellow-500 rounded-full" onClick={handleMinimize}></button>
          <button className="w-3 h-3 bg-green-500 rounded-full" onClick={handleMaximize}></button>
        </div>
        <div className="text-sm text-gray-400">About Me</div>
        <div></div>
      </div>

      {!isMinimized && (
        <div className={`p-4 text-white ${isMaximized ? 'text-lg' : 'text-base'}`}>
          <h2 className={`font-semibold ${isMaximized ? 'text-2xl' : 'text-xl'}`}>
            Hi, I'm <span className="font-bold text-yellow-300">Zayneed</span>
          </h2>
          {isMaximized ? (
            <p className="mt-2">
              Expanding my skills, I’m now delving deeper into advanced topics and broadening my expertise in tech.
              I find joy in building full-stack applications, experimenting with new technologies, and collaborating with others in the tech community.
              My journey is one of continuous learning, and I’m excited to see where it leads.
            </p>
          ) : (
            <p className="mt-2">
              Hi, my name is <span className="font-bold text-yellow-300">Zayneed</span> and I love <span className="font-bold text-yellow-300">programming</span> and <span className="font-bold text-yellow-300">designing</span> things.
              I started enjoying tech very soon; when I was <span className="font-bold text-yellow-300">9 years</span> old, I did my first projects in Scratch.
              From then on, I gained knowledge in various things.
              I really love <span className="font-bold text-yellow-300">programming</span> and I wanna learn and get better every day.
              Tech fascinates me and always will.
            </p>
          )}
          <p className="mt-2">
            This is just the start of my <span className="font-bold text-yellow-300">journey</span>.
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
