import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Code, Terminal, Menu, X, ShieldCheck, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Github className="mr-2 h-5 w-5 md:h-6 md:w-6" /> },
    { path: '/repos', label: 'Repositories', icon: <Terminal className="mr-2 h-5 w-5 md:h-6 md:w-6" /> },
    { path: '/code-ai', label: 'Code AI', icon: <Code className="mr-2 h-5 w-5 md:h-6 md:w-6" /> },
    { path: '/proxy', label: 'Proxy', icon: <ShieldCheck className="mr-2 h-5 w-5 md:h-6 md:w-6" /> },
    { path: '/games', label: 'Games', icon: <Gamepad2 className="mr-2 h-5 w-5 md:h-6 md:w-6" /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            >
              <Github className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            </motion.div>
            <span className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              GitHub Scanner
            </span>
          </Link>

          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className="flex items-center text-lg px-5 py-3"
                  size="lg"
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="h-10 w-10">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4 space-y-3"
          >
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className="w-full flex items-center justify-start text-lg py-3"
                  size="lg"
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;