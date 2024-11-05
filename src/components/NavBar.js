// src/components/NavBar.js
import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-lucide/home';
import appWindowIcon from '@iconify/icons-lucide/app-window';
import activityIcon from '@iconify/icons-lucide/activity';

const Navbar = () => {
  // Funktion zum Scrollen zum Element
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="menu-bar">
      <ul>
        <li>
          <a onClick={() => scrollToSection('home')} className="flex items-center">
            <Icon icon={homeIcon} className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a onClick={() => scrollToSection('projects')} className="flex items-center">
            <Icon icon={appWindowIcon} className="w-6 h-6" />
          </a>
        </li>
        <li>
          <a onClick={() => scrollToSection('stats')} className="flex items-center">
            <Icon icon={activityIcon} className="w-6 h-6" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
