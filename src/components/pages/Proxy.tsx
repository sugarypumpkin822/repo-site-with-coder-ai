
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Shield, 
  ArrowLeft, 
  ArrowRight, 
  RefreshCw, 
  Home, 
  Settings, 
  Eye, 
  EyeOff,
  Calculator,
  Code,
  Moon,
  Sun,
  Bookmark,
  History,
  Download,
  Lock,
  Wifi,
  Smartphone,
  Monitor,
  X,
  Plus
} from "lucide-react";
import { Link } from "react-router-dom";

const Proxy = () => {
  const [url, setUrl] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tabs, setTabs] = useState([{ id: 1, title: "New Tab", url: "" }]);
  const [activeTab, setActiveTab] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isStealthMode, setIsStealthMode] = useState(false);
  const [disguiseMode, setDisguiseMode] = useState("normal"); // normal, calculator, code
  const [proxyEngine, setProxyEngine] = useState("ultraviolet");
  const [bookmarks, setBookmarks] = useState([
    { name: "YouTube", url: "https://youtube.com" },
    { name: "Reddit", url: "https://reddit.com" },
    { name: "Discord", url: "https://discord.com" },
    { name: "GitHub", url: "https://github.com" }
  ]);
  const [recentSites, setRecentSites] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Panic button - Ctrl+Shift+X
      if (e.ctrlKey && e.shiftKey && e.code === 'KeyX') {
        window.location.href = "https://classroom.google.com";
      }
      // Stealth toggle - Ctrl+Q
      if (e.ctrlKey && e.code === 'KeyQ') {
        setIsStealthMode(!isStealthMode);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isStealthMode]);

  const handleUrlSubmit = () => {
    if (!url) return;
    
    setIsLoading(true);
    setCurrentUrl(url);
    
    // Add to recent sites
    const newSite = { name: url, url: url, timestamp: Date.now() };
    setRecentSites(prev => [newSite, ...prev.slice(0, 9)]);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const addTab = () => {
    const newTab = {
      id: Date.now(),
      title: "New Tab",
      url: ""
    };
    setTabs([...tabs, newTab]);
    setActiveTab(newTab.id);
  };

  const closeTab = (tabId) => {
    if (tabs.length === 1) return;
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);
    if (activeTab === tabId) {
      setActiveTab(newTabs[0].id);
    }
  };

  const CalculatorDisguise = () => (
    <div className="bg-gray-800 p-4 rounded-lg max-w-xs mx-auto">
      <div className="bg-black text-white p-4 rounded mb-4 text-right">
        <div className="text-2xl">0</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['C', '±', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '0', '.', '='].map((btn, i) => (
          <Button key={i} variant="outline" className="h-12 text-white border-gray-600">
            {btn}
          </Button>
        ))}
      </div>
    </div>
  );

  const CodeEditorDisguise = () => (
    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
      <div className="flex items-center space-x-2 mb-4 text-white">
        <Code className="w-4 h-4" />
        <span>Visual Studio Code</span>
      </div>
      <div className="space-y-2">
        <div className="text-blue-400">{"// Project: Web Development"}</div>
        <div>{"function calculateGrade(score) {"}</div>
        <div className="ml-4">{"if (score >= 90) return 'A';"}</div>
        <div className="ml-4">{"if (score >= 80) return 'B';"}</div>
        <div className="ml-4">{"return 'C';"}</div>
        <div>{"}"}</div>
      </div>
    </div>
  );

  if (isStealthMode) {
    return (
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Google Classroom</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Mathematics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Assignment due: Tomorrow</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>English Literature</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Essay submission</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Science</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Lab report pending</p>
              </CardContent>
            </Card>
          </div>
          <Button 
            onClick={() => setIsStealthMode(false)}
            className="fixed bottom-4 right-4 opacity-20 hover:opacity-100"
            size="sm"
          >
            Exit Stealth
          </Button>
        </div>
      </div>
    );
  }

  if (disguiseMode === "calculator") {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-bold text-center mb-6">Calculator</h1>
          <CalculatorDisguise />
          <Button 
            onClick={() => setDisguiseMode("normal")}
            className="mt-4 w-full opacity-50 hover:opacity-100"
            variant="outline"
            size="sm"
          >
            Switch to Proxy
          </Button>
        </div>
      </div>
    );
  }

  if (disguiseMode === "code") {
    return (
      <div className="min-h-screen bg-gray-900 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-white text-xl">Code Editor</h1>
            <Button 
              onClick={() => setDisguiseMode("normal")}
              variant="outline"
              size="sm"
              className="opacity-50 hover:opacity-100"
            >
              Switch to Proxy
            </Button>
          </div>
          <CodeEditorDisguise />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Top Navigation */}
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="w-4 h-4" />
              </Button>
            </Link>
            <Badge variant="outline" className="text-green-400 border-green-400">
              <Lock className="w-3 h-3 mr-1" />
              Secure Connection
            </Badge>
          </div>
          
          <div className="flex items-center space-x-2">
            <select 
              value={proxyEngine} 
              onChange={(e) => setProxyEngine(e.target.value)}
              className={`px-3 py-1 rounded border ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
            >
              <option value="ultraviolet">Ultraviolet</option>
              <option value="corrosion">Corrosion</option>
              <option value="rammerhead">Rammerhead</option>
            </select>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsStealthMode(true)}
            >
              <Eye className="w-4 h-4" />
            </Button>

            <select 
              value={disguiseMode} 
              onChange={(e) => setDisguiseMode(e.target.value)}
              className={`px-3 py-1 rounded border ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
            >
              <option value="normal">Normal</option>
              <option value="calculator">Calculator</option>
              <option value="code">Code Editor</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-2 mt-4">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex items-center space-x-2 px-3 py-2 rounded-t ${
                activeTab === tab.id 
                  ? (isDarkMode ? 'bg-gray-700' : 'bg-gray-200')
                  : (isDarkMode ? 'bg-gray-600' : 'bg-gray-100')
              } cursor-pointer`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {tab.title}
              </span>
              {tabs.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab(tab.id);
                  }}
                >
                  <X className="w-3 h-3" />
                </Button>
              )}
            </div>
          ))}
          <Button variant="outline" size="sm" onClick={addTab}>
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* URL Bar */}
        <div className="flex items-center space-x-2 mt-4">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4" />
          </Button>
          
          <div className="flex-1 flex space-x-2">
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL (e.g., https://youtube.com)"
              className={`${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
              onKeyPress={(e) => e.key === 'Enter' && handleUrlSubmit()}
            />
            <Button onClick={handleUrlSubmit} disabled={isLoading}>
              {isLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : "Go"}
            </Button>
          </div>

          <Button variant="outline" size="sm">
            <Bookmark className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-200px)]">
        {/* Sidebar */}
        <div className={`w-64 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r p-4`}>
          <div className="space-y-6">
            {/* Quick Access */}
            <div>
              <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Quick Access
              </h3>
              <div className="space-y-2">
                {bookmarks.map((bookmark, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`w-full justify-start ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
                    onClick={() => {
                      setUrl(bookmark.url);
                      handleUrlSubmit();
                    }}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    {bookmark.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Recent Sites */}
            <div>
              <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Recent Sites
              </h3>
              <div className="space-y-2">
                {recentSites.slice(0, 5).map((site, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className={`w-full justify-start text-xs ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                    onClick={() => {
                      setUrl(site.url);
                      handleUrlSubmit();
                    }}
                  >
                    <History className="w-3 h-3 mr-2" />
                    {site.name.slice(0, 20)}...
                  </Button>
                ))}
              </div>
            </div>

            {/* Privacy Settings */}
            <div>
              <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Privacy
              </h3>
              <div className="space-y-2">
                <div className={`flex items-center justify-between text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span>Block Cookies</span>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className={`flex items-center justify-between text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span>Hide Referer</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className={`flex items-center justify-between text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span>Spoof User Agent</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          {currentUrl ? (
            <div className="h-full">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <RefreshCw className="w-12 h-12 animate-spin mx-auto mb-4 text-purple-500" />
                    <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Connecting securely...
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Encrypting connection with {proxyEngine}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full bg-white rounded-lg border">
                  <div className="p-4 bg-gray-50 border-b rounded-t-lg">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">Secure Proxy: {currentUrl}</span>
                    </div>
                  </div>
                  <div className="p-8 text-center">
                    <Globe className="w-24 h-24 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Proxy Connection Active
                    </h3>
                    <p className="text-gray-600">
                      Your connection to {currentUrl} is secured and encrypted.
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-4 max-w-sm mx-auto">
                      <div className="text-center">
                        <Wifi className="w-6 h-6 mx-auto mb-2 text-green-500" />
                        <div className="text-sm text-gray-600">Encrypted</div>
                      </div>
                      <div className="text-center">
                        <Shield className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                        <div className="text-sm text-gray-600">Anonymous</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center max-w-md">
                <Globe className="w-24 h-24 mx-auto mb-6 text-purple-500" />
                <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Secure Proxy Browser
                </h2>
                <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Enter any URL to browse securely and anonymously
                </p>
                <div className="space-y-3">
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Features Active:
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="text-green-400 border-green-400">
                      SSL Encryption
                    </Badge>
                    <Badge variant="outline" className="text-blue-400 border-blue-400">
                      IP Masking
                    </Badge>
                    <Badge variant="outline" className="text-purple-400 border-purple-400">
                      DNS Protection
                    </Badge>
                    <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                      WebSocket Support
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border-t px-4 py-2`}>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Engine: {proxyEngine}
            </span>
            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Status: Connected
            </span>
          </div>
          <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Press Ctrl+Shift+X for emergency exit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proxy;
