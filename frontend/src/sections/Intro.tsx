import React from "react";

const Intro: React.FC = () => {
  return (
    <section id="intro" className="intro">
    <h1>Hello, I'm Sam</h1>
    <p>
        Welcome to my portfolio. I'm a fresh Computer Science graduate from Oregon State University looking for a new grad/entry-level software engineering role where I can continue learning and work on real-world, impactful projects.
    </p>
    <p>
        My path is a bit unique, as I've worked as a professional Japanese-English translator for 10 years before transitioning into software engineering. That translation background has sharpened my attention to detail, deadline management, and teamwork—skills I now bring to software development
    </p>

      <button onClick={() => window.location.href = "/contact"}>Contact Me</button>
    </section>
  );
};

export default Intro;
