import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Gamepad2, 
  Search, 
  Filter, 
  Zap,
  Grid3x3,
  List,
  Sun,
  Moon,
  Bell,
  ChevronDown,
  ArrowLeft
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { categories } from "@/data/gameData";

interface GamesHeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  viewMode: string;
  setViewMode: (value: string) => void;
  showFilters: boolean;
  setShowFilters: (value: boolean) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  notifications: number;
  userProfile: any;
  filteredGamesLength: number;
  getRandomGame: () => void;
}

const GamesHeader: React.FC<GamesHeaderProps> = ({
  isDarkMode,
  setIsDarkMode,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  viewMode,
  setViewMode,
  showFilters,
  setShowFilters,
  isLoggedIn,
  setIsLoggedIn,
  notifications,
  userProfile,
  filteredGamesLength,
  getRandomGame
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <header className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-40`}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation with Back Button */}
          <div className="flex items-center space-x-6">
            <Button
              variant="ghost"
              onClick={handleBackClick}
              className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                GameHub
              </span>
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Home
              </a>
              <a href="#categories" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Categories
              </a>
              <a href="#features" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Features
              </a>
              <a href="#leaderboard" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Leaderboard
              </a>
            </nav>
          </div>

          {/* Search and Controls */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <Input
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`pl-10 w-64 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
              />
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            <Button variant="outline" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              {notifications > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center p-0">
                  {notifications}
                </Badge>
              )}
            </Button>

            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {userProfile.username}
                  </div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Level {userProfile.level}
                  </div>
                </div>
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                    GM
                  </AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <Button onClick={() => setIsLoggedIn(true)}>
                Sign In
              </Button>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <Button onClick={getRandomGame} variant="outline" className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0">
              <Zap className="w-4 h-4 mr-2" />
              Random Game
            </Button>
            
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              <ChevronDown className={`w-4 h-4 ml-2 transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid3x3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {filteredGamesLength} games found
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className={`mt-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default GamesHeader;
