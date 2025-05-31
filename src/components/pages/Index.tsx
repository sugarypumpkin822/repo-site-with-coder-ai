import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Gamepad2, Globe, Lock, Star, Users, Zap, ArrowRight, Download, Code, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";
import JSZip from 'jszip';

const Index = () => {
  const downloadAllFiles = async () => {
    const zip = new JSZip();

    try {
      console.log('Starting complete project download...');
      
      // List of ALL actual project files to fetch
      const filesToFetch = [
        // Root files
        'package.json',
        'vite.config.ts', 
        'tailwind.config.ts',
        'tsconfig.json',
        'tsconfig.app.json', 
        'tsconfig.node.json',
        'components.json',
        'postcss.config.js',
        'index.html',
        '.gitignore',
        
        // Source files
        'src/main.tsx',
        'src/App.tsx',
        'src/index.css',
        'src/vite-env.d.ts',
        
        // Library files
        'src/lib/utils.ts',
        
        // Hooks
        'src/hooks/use-toast.ts',
        'src/hooks/use-mobile.tsx',
        
        // All page files
        'src/pages/Index.tsx',
        'src/pages/Proxy.tsx', 
        'src/pages/Games.tsx',
        'src/pages/About.tsx',
        'src/pages/AboutMe.tsx',
        'src/pages/Repos.tsx',
        'src/pages/Coding.tsx',
        'src/pages/NotFound.tsx',
        
        // All UI components
        'src/components/ui/button.tsx',
        'src/components/ui/card.tsx',
        'src/components/ui/badge.tsx',
        'src/components/ui/input.tsx',
        'src/components/ui/toast.tsx',
        'src/components/ui/toaster.tsx',
        'src/components/ui/sonner.tsx', 
        'src/components/ui/tooltip.tsx',
        'src/components/ui/scroll-area.tsx',
        'src/components/ui/use-toast.ts',
        'src/components/ui/accordion.tsx',
        'src/components/ui/alert-dialog.tsx',
        'src/components/ui/alert.tsx',
        'src/components/ui/aspect-ratio.tsx',
        'src/components/ui/avatar.tsx',
        'src/components/ui/breadcrumb.tsx',
        'src/components/ui/calendar.tsx',
        'src/components/ui/carousel.tsx',
        'src/components/ui/chart.tsx',
        'src/components/ui/checkbox.tsx',
        'src/components/ui/collapsible.tsx',
        'src/components/ui/command.tsx',
        'src/components/ui/context-menu.tsx',
        'src/components/ui/dialog.tsx',
        'src/components/ui/drawer.tsx',
        'src/components/ui/dropdown-menu.tsx',
        'src/components/ui/form.tsx',
        'src/components/ui/hover-card.tsx',
        'src/components/ui/input-otp.tsx',
        'src/components/ui/label.tsx',
        'src/components/ui/menubar.tsx',
        'src/components/ui/navigation-menu.tsx',
        'src/components/ui/pagination.tsx',
        'src/components/ui/popover.tsx',
        'src/components/ui/progress.tsx',
        'src/components/ui/radio-group.tsx',
        'src/components/ui/resizable.tsx',
        'src/components/ui/select.tsx',
        'src/components/ui/separator.tsx',
        'src/components/ui/sheet.tsx',
        'src/components/ui/sidebar.tsx',
        'src/components/ui/skeleton.tsx',
        'src/components/ui/slider.tsx',
        'src/components/ui/switch.tsx',
        'src/components/ui/table.tsx',
        'src/components/ui/tabs.tsx',
        'src/components/ui/textarea.tsx',
        'src/components/ui/toggle-group.tsx',
        'src/components/ui/toggle.tsx',
        
        // Game components
        'src/components/games/FeatureSection.tsx',
        'src/components/games/FeaturedGame.tsx',
        'src/components/games/GameCard.tsx',
        'src/components/games/GamesHeader.tsx',
        'src/components/games/GamesSidebar.tsx',
        'src/components/games/UserProfile.tsx',
        
        // Data files
        'src/data/gameData.ts',
        'src/data/gameFeatures.ts',
        
        // Public files
        'public/favicon.ico',
        'public/placeholder.svg',
        'public/robots.txt'
      ];

      // Fetch each file and add to ZIP
      for (const filePath of filesToFetch) {
        try {
          const response = await fetch(`/${filePath}`);
          if (response.ok) {
            const content = await response.text();
            zip.file(filePath, content);
            console.log(`Added ${filePath} to ZIP`);
          } else {
            console.warn(`Failed to fetch ${filePath}: ${response.status}`);
          }
        } catch (error) {
          console.warn(`Error fetching ${filePath}:`, error);
        }
      }

      // Add comprehensive README
      const readmeContent = `# ProxyHub - Complete Production-Ready Source Code

A fully-featured React application with proxy browsing, gaming hub, repository scanner, and coding resources.

## 🚀 Quick Start

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Start development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Build for production:**
   \`\`\`bash
   npm run build
   \`\`\`

4. **Preview production build:**
   \`\`\`bash
   npm run preview
   \`\`\`

## 📦 Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Drag \`dist\` folder after \`npm run build\`
2. Or connect GitHub repository

### Traditional Web Hosting
1. Run \`npm run build\`
2. Upload \`dist\` folder contents to web server

## 🛠️ Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + Shadcn UI
- **Routing:** React Router v6
- **State Management:** TanStack Query
- **Icons:** Lucide React
- **File Processing:** JSZip

## 📁 Project Structure

\`\`\`
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── ui/            # Shadcn UI components
│   │   └── games/         # Game-specific components
│   ├── pages/             # Route pages
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── data/              # Static data
│   └── main.tsx           # App entry point
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind configuration
└── tsconfig.json          # TypeScript configuration
\`\`\`

## 🎯 Features

### Proxy Browser (/proxy)
- Advanced proxy engines with SSL/TLS encryption
- Stealth browsing modes and IP masking
- DNS protection and restriction bypass

### Gaming Hub (/games)
- User accounts with profiles and achievements
- Extensive game library with ratings
- Leaderboards and social features

### Repository Scanner (/repos)
- GitHub and GitLab integration
- Bulk repository downloads
- Game repository detection

### Coding Resources (/coding)
- 1000+ programming language references
- Code examples and tutorials
- Development tools and resources

## 🔧 Configuration

### Environment Variables
Create \`.env\` file for production:
\`\`\`
VITE_API_URL=your_api_url
VITE_GITHUB_TOKEN=your_github_token
\`\`\`

### Customization
- Colors: Edit \`tailwind.config.ts\`
- Components: Modify \`src/components/ui/\`
- Routes: Update \`src/App.tsx\`

## 📄 License

MIT License - Free for commercial and personal use

## 🆘 Support

For deployment issues or customization help:
- Check the build logs for errors
- Ensure all dependencies are installed
- Verify environment variables are set correctly

Built with ❤️ using modern React technologies
`;

      zip.file('README.md', readmeContent);

      // Add deployment scripts
      const deployScripts = {
        'deploy-vercel.sh': `#!/bin/bash
echo "Deploying to Vercel..."
npm run build
npx vercel --prod`,
        
        'deploy-netlify.sh': `#!/bin/bash
echo "Building for Netlify..."
npm run build
echo "Upload the 'dist' folder to Netlify"`,
        
        '.env.example': `# Environment Variables Template
VITE_API_URL=https://your-api-url.com
VITE_GITHUB_TOKEN=your_github_personal_access_token
VITE_APP_NAME=ProxyHub`
      };

      Object.entries(deployScripts).forEach(([filename, content]) => {
        zip.file(filename, content);
      });

      // Generate and download ZIP
      const zipBlob = await zip.generateAsync({ 
        type: 'blob',
        compression: "DEFLATE",
        compressionOptions: { level: 6 }
      });
      
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'proxyhub-complete-deployable.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      console.log('Complete deployable project downloaded successfully!');
      
    } catch (error) {
      console.error('Error creating complete project ZIP:', error);
      alert('Error downloading complete project. Please try again or check console for details.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">ProxyHub</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/proxy" className="text-gray-300 hover:text-white transition-colors">Proxy</Link>
          <Link to="/games" className="text-gray-300 hover:text-white transition-colors">Games Hub</Link>
          <Link to="/repos" className="text-gray-300 hover:text-white transition-colors">Repositories</Link>
          <Link to="/coding" className="text-gray-300 hover:text-white transition-colors">Coding</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
          <Link to="/about-me" className="text-gray-300 hover:text-white transition-colors">About Me</Link>
          <Button 
            variant="outline" 
            onClick={downloadAllFiles}
            className="border-green-500 text-green-300 hover:bg-green-500"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Site
          </Button>
          <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500">Sign In</Button>
          <Button className="bg-gradient-to-r from-purple-500 to-cyan-500">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-8 bg-purple-500/20 text-purple-300 border-purple-500/30">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 50,000+ users worldwide
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Ultimate Proxy &
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
              Gaming Hub
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Access any website securely, play thousands of games, explore GitHub repositories, and access coding resources with our comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/proxy">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
                <Shield className="mr-2 w-5 h-5" />
                Launch Proxy <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/games">
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500">
                <Gamepad2 className="mr-2 w-5 h-5" />
                Play Games
              </Button>
            </Link>
            <Link to="/repos">
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500">
                <GitBranch className="mr-2 w-5 h-5" />
                Browse Repos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Powerful Features for Everyone
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all">
              <CardHeader>
                <Globe className="w-10 h-10 text-purple-400 mb-4" />
                <CardTitle className="text-white">Advanced Proxy</CardTitle>
                <CardDescription className="text-gray-400">
                  Bypass restrictions with military-grade encryption
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2 text-sm">
                  <li>• Multiple proxy engines</li>
                  <li>• SSL/TLS encryption</li>
                  <li>• Stealth browsing modes</li>
                  <li>• IP masking & DNS protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all">
              <CardHeader>
                <Gamepad2 className="w-10 h-10 text-cyan-400 mb-4" />
                <CardTitle className="text-white">Gaming Hub</CardTitle>
                <CardDescription className="text-gray-400">
                  Thousands of games with advanced features
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2 text-sm">
                  <li>• User accounts & profiles</li>
                  <li>• Achievement system</li>
                  <li>• Leaderboards & ratings</li>
                  <li>• Offline play support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all">
              <CardHeader>
                <GitBranch className="w-10 h-10 text-green-400 mb-4" />
                <CardTitle className="text-white">Repository Scanner</CardTitle>
                <CardDescription className="text-gray-400">
                  Browse and download GitHub & GitLab repos
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2 text-sm">
                  <li>• GitHub integration</li>
                  <li>• GitLab support</li>
                  <li>• Bulk downloads</li>
                  <li>• Game repositories</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all">
              <CardHeader>
                <Code className="w-10 h-10 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Coding Resources</CardTitle>
                <CardDescription className="text-gray-400">
                  1000+ programming languages and tools
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-2 text-sm">
                  <li>• Language references</li>
                  <li>• Code examples</li>
                  <li>• Tutorial links</li>
                  <li>• Development tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-gray-400">Games Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-black/40 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded"></div>
                <span className="text-white font-bold">ProxyHub</span>
              </div>
              <p className="text-gray-400 text-sm">
                The ultimate platform for secure browsing, gaming, and development resources.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/proxy" className="hover:text-white transition-colors">Proxy Browser</Link></li>
                <li><Link to="/games" className="hover:text-white transition-colors">Games Hub</Link></li>
                <li><Link to="/repos" className="hover:text-white transition-colors">Repositories</Link></li>
                <li><Link to="/coding" className="hover:text-white transition-colors">Coding Resources</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bug Report</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 ProxyHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
