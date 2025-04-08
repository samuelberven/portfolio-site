import React from "react";
import { technicalSkills as skills } from "../utils/data";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.name} - {skill.category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
