import React from "react";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Trophy, TrendingUp } from "lucide-react";
import UserProfile from "./UserProfile";
import { games } from "@/data/gameData";

interface GamesSidebarProps {
  isDarkMode: boolean;
  isLoggedIn: boolean;
  userProfile: any;
  favorites: number[];
  recentlyPlayed: number[];
}

const GamesSidebar: React.FC<GamesSidebarProps> = ({
  isDarkMode,
  isLoggedIn,
  userProfile,
  favorites,
  recentlyPlayed
}) => {
  return (
    <aside className={`w-64 min-h-screen ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r p-6`}>
      {/* User Profile Stats */}
      {isLoggedIn && (
        <UserProfile isDarkMode={isDarkMode} userProfile={userProfile} />
      )}

      {/* Quick Links */}
      <div className="space-y-6">
        <div>
          <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Quick Access
          </h3>
          <div className="space-y-2">
            <Button variant="ghost" className={`w-full justify-start ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
              <Heart className="w-4 h-4 mr-2" />
              Favorites ({favorites.length})
            </Button>
            <Button variant="ghost" className={`w-full justify-start ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
              <Clock className="w-4 h-4 mr-2" />
              Recent ({recentlyPlayed.length})
            </Button>
            <Button variant="ghost" className={`w-full justify-start ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
              <Trophy className="w-4 h-4 mr-2" />
              Achievements
            </Button>
            <Button variant="ghost" className={`w-full justify-start ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
              <TrendingUp className="w-4 h-4 mr-2" />
              Leaderboard
            </Button>
          </div>
        </div>

        {/* Recently Played */}
        <div>
          <h3 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Recently Played
          </h3>
          <div className="space-y-2">
            {recentlyPlayed.slice(0, 5).map(gameId => {
              const game = games.find(g => g.id === gameId);
              return game ? (
                <div key={gameId} className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                  <div className="text-lg">{game.thumbnail}</div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {game.title}
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {game.plays} plays
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default GamesSidebar;
