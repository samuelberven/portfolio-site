import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section id="about-me" className="section">
      <h1>Hello, I'm Sam!</h1>
      <p>Software Developer | Designer </p>
      <button onClick={() => window.location.href = "/contact"}>Contact Me</button>
    </section>
  );
};

export default AboutMe;
