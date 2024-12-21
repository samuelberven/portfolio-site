import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

export default Section;
