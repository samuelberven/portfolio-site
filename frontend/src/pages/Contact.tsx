// Contact.tsx
import React from 'react';
import Section from '../components/Section';

const Contact: React.FC = () => {
  return (
    <Section title="Contact">
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <button type="submit">Send Message</button>
      </form>
    </Section>
  );
};

export default Contact;
