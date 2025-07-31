import React from 'react';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer 
      className="py-4 px-6 border-t text-[var(--font-size-sm)]"
      style={{ 
        backgroundColor: 'var(--color-surface)', 
        borderTopColor: 'var(--color-secondary)'
      }}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          
          {/* Left Side - GitHub Repo */}
          <div className="flex items-center space-x-2">
            <FaGithub className="w-8 h-8 text-[var(--color-primary)]" />
            <a 
              href="https://github.com/chingu-voyages/v56-tier1-team-03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium hover:underline transition-colors duration-200 text-[var(--color-primary)]"
            >
              GitHub Repo
            </a>
          </div>

          {/* Center - Love Message */}
          <div className="hidden md:block text-center">
            <p className="font-medium text-[var(--color-text)]">
                Developed with 
                <img 
                  src="https://cdn.discordapp.com/emojis/1047615506577895484.png" 
                  alt="heart emoji"
                  className="inline-block w-8 h-8 mx-1 align-middle" 
                /> 
                by{' '}
                <span className="text-lg text-[var(--color-primary)]">JAMBA Team</span>
              </p>
          </div>

          {/* Right Side - Team Members */}
          <div className="flex items-center space-x-1">
            <span className="font-medium mr-2 hidden sm:inline text-[var(--color-muted)]">
              Team:
            </span>
            <div className="flex items-center space-x-1 text-sm">
              {['Jimmy','Asif','Mostafa',  'Britt',  'Aibar'].map((member, index) => (
                <React.Fragment key={member}>
                  <span 
                    className="font-medium text-lg hover:scale-110 transform transition-transform duration-200 cursor-default text-[var(--color-primary)]"
                  >
                    {member}
                  </span>
                  {index < 4 && (
                    <span className="text-[var(--color-muted)]">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Center Message */}
        <div className="md:hidden text-center mt-2 pt-2 border-t border-[var(--color-secondary)]">
          <p className="text-xs text-[var(--color-muted)] font-medium">
            Developed with 
            <img 
              src="https://cdn.discordapp.com/emojis/1047615506577895484.png" 
              alt="heart emoji" 
              className="inline-block w-4 h-4 mx-1 align-middle" 
            /> 
            by{' '}
            <span className="text-[var(--color-primary)]">JAMBA Team</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
