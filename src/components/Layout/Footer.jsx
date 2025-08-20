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
        
        {/* Mobile Layout: Simplified */}
        <div className="md:hidden">
          {/* GitHub Repo Link */}
          <div className="flex items-center justify-center space-x-2 mb-2">
            <FaGithub className="w-5 h-5 text-[var(--color-primary)]" />
            <a 
              href="https://github.com/chingu-voyages/v56-tier1-team-03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline transition-colors duration-200 text-[var(--color-primary)]"
            >
              GitHub Repo
            </a>
          </div>
          
          {/* Team Names */}
          <div className="text-center">
          <p className="font-medium text-[var(--color-text)]">
                  Developed with 
                  <img 
                    src="https://cdn.discordapp.com/emojis/1047615506577895484.png" 
                    alt="heart emoji"
                    className="inline-block w-8 h-8 mx-1 align-middle" 
                  /> 
                  by{' '}
                  <span className="text-teal-500 text-xl">JAMBA Team</span>
                </p>
          </div>
        </div>

        {/* Desktop Layout: Full Layout */}
        <div className="hidden md:block">
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
            <div className="text-center">
              <p className="font-medium text-[var(--color-text)]">
                  Developed with 
                  <img 
                    src="https://cdn.discordapp.com/emojis/1047615506577895484.png" 
                    alt="heart emoji"
                    className="inline-block w-8 h-8 mx-1 align-middle" 
                  /> 
                  by{' '}
                  <span className="text-teal-500 text-xl ">JAMBA Team</span>
                </p>
            </div>

            {/* Right Side - Team Members */}
            <div className="flex items-center space-x-1">
              <span className="font-medium mr-2 text-[var(--color-muted)]">
                Team:
              </span>
              <div className="flex items-center space-x-1 text-sm">
                {[
                  { name: 'Jimmy', link: 'https://github.com/JimLimpe' },
                  { name: 'Asif', link: 'https://github.com/mhdasif123' },
                  { name: 'Mostafa', link: 'https://github.com/Mostafa-Elmoalem' },
                  { name: 'Brittany', link: 'https://github.com/Haupt04' },
                  { name: 'Aibar', link: 'https://github.com/Aibar-S/' },
                ].map((member, index) => (
                  <React.Fragment key={member.name}>
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-lg hover:scale-110 transform transition-transform duration-200 cursor-pointer text-[var(--color-primary)]"
                    >
                      {member.name}
                    </a>
                    {index < 4 && (
                      <span className="text-[var(--color-muted)]">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;