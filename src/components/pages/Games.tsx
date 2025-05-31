import React, { useState } from "react";
import { Gamepad2 } from "lucide-react";
import GamesHeader from "@/components/games/GamesHeader";
import GamesSidebar from "@/components/games/GamesSidebar";
import FeatureSection from "@/components/games/FeatureSection";
import FeaturedGame from "@/components/games/FeaturedGame";
import GameCard from "@/components/games/GameCard";
import { games } from "@/data/gameData";

const Games = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFeatureTab, setActiveFeatureTab] = useState("design");
  const [userProfile, setUserProfile] = useState({
    username: "GameMaster",
    level: 15,
    xp: 2340,
    xpToNext: 660,
    achievements: 42,
    gamesPlayed: 156
  });

  const [favorites, setFavorites] = useState([1, 3]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([1, 2, 4]);
  const [notifications, setNotifications] = useState(3);

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (gameId: number) => {
    setFavorites(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId)
        : [...prev, gameId]
    );
  };

  const playGame = (gameId: number) => {
    setRecentlyPlayed(prev => {
      const filtered = prev.filter(id => id !== gameId);
      return [gameId, ...filtered].slice(0, 10);
    });
    console.log(`Playing game ${gameId}`);
  };

  const getRandomGame = () => {
    const randomGame = games[Math.floor(Math.random() * games.length)];
    playGame(randomGame.id);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <GamesHeader 
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        viewMode={viewMode}
        setViewMode={setViewMode}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        notifications={notifications}
        userProfile={userProfile}
        filteredGamesLength={filteredGames.length}
        getRandomGame={getRandomGame}
      />

      <div className="flex">
        <GamesSidebar 
          isDarkMode={isDarkMode}
          isLoggedIn={isLoggedIn}
          userProfile={userProfile}
          favorites={favorites}
          recentlyPlayed={recentlyPlayed}
        />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <FeatureSection 
            isDarkMode={isDarkMode}
            activeFeatureTab={activeFeatureTab}
            setActiveFeatureTab={setActiveFeatureTab}
          />

          <FeaturedGame 
            isDarkMode={isDarkMode}
            game={games[2]}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            playGame={playGame}
          />

          {/* Games Grid */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                All Games
              </h2>
              <div className="flex items-center space-x-2">
                <select className={`px-3 py-2 rounded border ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}>
                  <option>Sort by Popularity</option>
                  <option>Sort by Rating</option>
                  <option>Sort by Name</option>
                  <option>Sort by Date Added</option>
                </select>
              </div>
            </div>

            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
              {filteredGames.map(game => (
                <GameCard 
                  key={game.id}
                  game={game}
                  isDarkMode={isDarkMode}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                  playGame={playGame}
                />
              ))}
            </div>

            {filteredGames.length === 0 && (
              <div className="text-center py-12">
                <Gamepad2 className={`w-16 h-16 mx-auto mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  No games found
                </h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Games;
