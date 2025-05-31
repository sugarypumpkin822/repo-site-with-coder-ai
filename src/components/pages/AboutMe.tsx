
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">ProxyHub</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/proxy" className="text-gray-300 hover:text-white transition-colors">Proxy</Link>
          <Link to="/games" className="text-gray-300 hover:text-white transition-colors">Games Hub</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
          <Link to="/about-me" className="text-purple-300 font-medium">About Me</Link>
        </div>
      </nav>

      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-300">
            This page is intentionally left blank.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
