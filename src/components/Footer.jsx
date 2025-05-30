import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 md:py-10 backdrop-blur-lg bg-background/80">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <Github className="h-7 w-7 md:h-8 md:w-8 text-primary" />
            <span className="text-lg md:text-xl text-muted-foreground">
              GitHub Repository Scanner
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-lg md:text-xl text-muted-foreground mb-6 md:mb-0">
            <span>Made with</span>
            <Heart className="h-6 w-6 md:h-7 md:w-7 text-red-500 fill-red-500" />
            <span>using React & Vite</span>
          </div>
          
          <div className="mt-6 md:mt-0">
            <p className="text-lg md:text-xl text-muted-foreground">
              &copy; {new Date().getFullYear()} GitHub Scanner
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;