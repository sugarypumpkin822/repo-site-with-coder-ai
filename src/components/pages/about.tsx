import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Gamepad2, Globe, Lock, Star, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
          <Link to="/about" className="text-purple-300 font-medium">About</Link>
          <Link to="/about-me" className="text-gray-300 hover:text-white transition-colors">About Me</Link>
        </div>
      </nav>

      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-8 bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Star className="w-4 h-4 mr-2" />
              About ProxyHub
            </Badge>
            <h1 className="text-5xl font-bold text-white mb-6">
              Your Ultimate
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
                Proxy & Gaming Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              ProxyHub is the most advanced proxy and gaming platform designed for secure browsing and unlimited entertainment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-gray-900/50 border-purple-500/20">
              <CardHeader>
                <Globe className="w-10 h-10 text-purple-400 mb-4" />
                <CardTitle className="text-white">Advanced Proxy Technology</CardTitle>
                <CardDescription className="text-gray-400">
                  Military-grade encryption and multiple proxy engines
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">
                  Our proxy system uses cutting-edge technology including Ultraviolet, Corrosion, and Rammerhead engines to provide unparalleled access to any website.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• SSL/TLS encryption with WebSocket support</li>
                  <li>• JavaScript obfuscation and IP masking</li>
                  <li>• Session isolation and stealth browsing</li>
                  <li>• Multiple disguise modes for privacy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-purple-500/20">
              <CardHeader>
                <Gamepad2 className="w-10 h-10 text-cyan-400 mb-4" />
                <CardTitle className="text-white">Comprehensive Gaming Hub</CardTitle>
                <CardDescription className="text-gray-400">
                  Thousands of games with advanced features
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">
                  Experience our vast collection of games with user accounts, achievements, and social features that make gaming more engaging than ever.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• 1000+ games across all categories</li>
                  <li>• User profiles with XP and achievements</li>
                  <li>• Leaderboards and rating system</li>
                  <li>• Offline play and progressive loading</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Why Choose ProxyHub?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Lock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Privacy First</h3>
                <p className="text-gray-400">No logs policy with end-to-end encryption and anonymous browsing.</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-400">Optimized performance with 99.9% uptime and global CDN support.</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Community Driven</h3>
                <p className="text-gray-400">Trusted by 50,000+ users worldwide with 24/7 community support.</p>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-purple-500/20">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 text-lg leading-relaxed">
                ProxyHub was created to provide unrestricted internet access and entertainment in environments where freedom is limited. 
                We believe in digital privacy, open access to information, and the right to entertainment. Our platform combines 
                enterprise-grade security with user-friendly design to deliver the ultimate browsing and gaming experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
