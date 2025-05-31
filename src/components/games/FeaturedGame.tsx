import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Play, Heart, Users, Trophy } from "lucide-react";

interface FeaturedGameProps {
  isDarkMode: boolean;
  game: any;
  favorites: number[];
  toggleFavorite: (gameId: number) => void;
  playGame: (gameId: number) => void;
}

const FeaturedGame: React.FC<FeaturedGameProps> = ({
  isDarkMode,
  game,
  favorites,
  toggleFavorite,
  playGame
}) => {
  return (
    <section className="mb-8">
      <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        🎮 Game of the Day
      </h2>
      <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} overflow-hidden`}>
        <div className="flex">
          <div className="flex-1 p-6">
            <div className="flex items-center space-x-2 mb-2">
              <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                Featured
              </Badge>
              <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                <Star className="w-3 h-3 mr-1" />
                {game.rating}
              </Badge>
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {game.title}
            </h3>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {game.description}
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <Users className="w-4 h-4 inline mr-1" />
                {game.plays} plays
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <Trophy className="w-4 h-4 inline mr-1" />
                Top Rated
              </div>
            </div>
            <div className="flex space-x-3">
              <Button onClick={() => playGame(game.id)} className="bg-gradient-to-r from-purple-500 to-cyan-500">
                <Play className="w-4 h-4 mr-2" />
                Play Now
              </Button>
              <Button variant="outline" onClick={() => toggleFavorite(game.id)}>
                <Heart className={`w-4 h-4 mr-2 ${favorites.includes(game.id) ? 'fill-red-500 text-red-500' : ''}`} />
                {favorites.includes(game.id) ? 'Favorited' : 'Favorite'}
              </Button>
            </div>
          </div>
          <div className="w-48 bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
            <div className="text-6xl">{game.thumbnail}</div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default FeaturedGame;
