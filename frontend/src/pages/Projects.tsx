import React from 'react';
import Section from '../components/Section';

const Projects: React.FC = () => {
  return (
    <Section title="My Projects">
      <div>
        <h3>Fit Together</h3>
        <p>A crowd-sourced cross-mobile fitness app.</p>
        <a href="https://github.com/samuelberven/Crowd-sourced-Fitness-Challenge-App" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      <div>
        <h3>Terminal Mancala</h3>
        <p>Mancala playable on the command line, written in Python.</p>
        <a href="https://github.com/samuelberven/terminal-mancala" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
      {/* Add more projects as needed */}
    </Section>
  );
};

export default Projects;