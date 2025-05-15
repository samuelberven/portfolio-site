import React from "react";
import { education } from "../utils/data";

const Education: React.FC = () => {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}</strong> - {edu.school} ({edu.year})
            <br />
            GPA: {edu.gpa}
            <br />
            Location: {edu.location}
            <br />
            Coursework: {edu.coursework}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
