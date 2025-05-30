import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, Code, Package, ShieldCheck, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
      >
        <motion.div
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 md:mb-12 inline-block"
        >
          <Github className="h-32 w-32 md:h-40 md:w-40 text-primary mx-auto" />
        </motion.div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          GitHub Repo Scanner
        </h1>
        
        <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-12">
          Scan repositories, generate executables, explore code with AI, and more!
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-8">
          <Link to="/repos">
            <Button size="lg" className="gap-3 text-xl md:text-2xl px-10 py-7">
              <Package className="h-7 w-7 md:h-8 md:w-8" />
              Scan Repos
              <ArrowRight className="h-6 w-6 md:h-7 md:w-7 ml-1" />
            </Button>
          </Link>
          
          <Link to="/code-ai">
            <Button size="lg" variant="outline" className="gap-3 text-xl md:text-2xl px-10 py-7">
              <Code className="h-7 w-7 md:h-8 md:w-8" />
              Code AI
            </Button>
          </Link>
          <Link to="/proxy">
            <Button size="lg" variant="outline" className="gap-3 text-xl md:text-2xl px-10 py-7">
              <ShieldCheck className="h-7 w-7 md:h-8 md:w-8" />
              Proxy Tool
            </Button>
          </Link>
           <Link to="/games">
            <Button size="lg" variant="outline" className="gap-3 text-xl md:text-2xl px-10 py-7">
              <Gamepad2 className="h-7 w-7 md:h-8 md:w-8" />
              Games Hub
            </Button>
          </Link>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 w-full max-w-7xl px-4"
      >
        <FeatureCard 
          icon={<Github className="h-16 w-16 text-blue-500" />}
          title="Repo Scanning"
          description="Analyze GitHub repositories with ease."
        />
        <FeatureCard 
          icon={<Package className="h-16 w-16 text-purple-500" />}
          title="Executable Gen"
          description="Convert repos into downloadable executables."
        />
        <FeatureCard 
          icon={<Code className="h-16 w-16 text-pink-500" />}
          title="Code AI"
          description="AI-powered coding assistance and generation."
        />
        <FeatureCard 
          icon={<ShieldCheck className="h-16 w-16 text-green-500" />}
          title="Proxy Service"
          description="Access web content securely and privately."
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 md:mt-28 p-10 md:p-12 glass-card rounded-xl max-w-5xl w-full mx-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">How It Works</h2>
        <ol className="space-y-8">
          <li className="flex items-start">
            <div className="flex-shrink-0 bg-primary rounded-full h-12 w-12 md:h-14 md:w-14 flex items-center justify-center mr-5 mt-1">
              <span className="text-white font-bold text-2xl">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-2xl md:text-3xl">Connect to GitHub</h3>
              <p className="text-muted-foreground text-xl md:text-2xl">Scan repositories from the specified GitHub account.</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 bg-primary rounded-full h-12 w-12 md:h-14 md:w-14 flex items-center justify-center mr-5 mt-1">
              <span className="text-white font-bold text-2xl">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-2xl md:text-3xl">Process & Generate</h3>
              <p className="text-muted-foreground text-xl md:text-2xl">Code is analyzed for executable generation or AI tasks.</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 bg-primary rounded-full h-12 w-12 md:h-14 md:w-14 flex items-center justify-center mr-5 mt-1">
              <span className="text-white font-bold text-2xl">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-2xl md:text-3xl">Download & Explore</h3>
              <p className="text-muted-foreground text-xl md:text-2xl">Download .exe files or use other powerful tools.</p>
            </div>
          </li>
        </ol>
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card p-8 md:p-10 rounded-xl text-center"
    >
      <div className="mb-6 inline-block">{icon}</div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground text-lg md:text-xl">{description}</p>
    </motion.div>
  );
};

export default HomePage;