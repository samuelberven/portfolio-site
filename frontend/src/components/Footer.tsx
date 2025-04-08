import React from "react";
import { socialMedia } from "../utils/data";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2025 Samuel Berven. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <ul className="social-media">
          {socialMedia.map((platform, index) => (
            <li key={index}>
              <a href={platform.url} target="_blank" rel="noopener noreferrer" aria-label={platform.name}>
                {platform.icon ? (
                  <img src={platform.icon} alt={`${platform.name} icon`} className="social-icon" />
                ) : (
                  <span>{platform.name}</span> /* backup if no icon present */
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
