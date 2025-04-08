import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <ul className="flex space-x-6 justify-center">
          <li>
            <Link 
              to="/" 
              className="hover:underline hover:text-blue-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/skills" 
              className="hover:underline hover:text-blue-300 transition duration-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link 
              to="/education" 
              className="hover:underline hover:text-blue-300 transition duration-300"
            >
              Education
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className="hover:underline hover:text-blue-300 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              to="/work" 
              className="hover:underline hover:text-blue-300 transition duration-300"
            >
              Work History
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="hover:underline hover:text-blue-300 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
