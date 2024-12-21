import React from 'react';
import Section from '../components/Section';

const Home: React.FC = () => {
  return (
    <Section title="Hello! I'm Sam">
      <p>
        Welcome to my portfolio. I'm a fresh Computer Science 
        graduate from Oregon State University looking for a 
        new grad/entry-level software engineering role where 
        I can continue learning and work on real-world, impactful projects.
        <br></br>
        My path is a bit unique, as I've worked as a professional 
        Japanese-English translator for 10 years before transitioning 
        into software engineering.
        That translation background has sharpened my attention to 
        detail, deadline management, and teamwork—skills I now bring to software 
      </p>
    </Section>
  );
};

export default Home;
