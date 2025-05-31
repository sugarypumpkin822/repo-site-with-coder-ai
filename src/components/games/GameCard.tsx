import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Play, Heart, Users, Download, MessageSquare } from "lucide-react";

interface GameCardProps {
  game: any;
  isDarkMode: boolean;
  favorites: number[];
  toggleFavorite: (gameId: number) => void;
  playGame: (gameId: number) => void;
}

const GameCard: React.FC<GameCardProps> = ({
  game,
  isDarkMode,
  favorites,
  toggleFavorite,
  playGame
}) => {
  return (
    <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' : 'bg-white border-gray-200 hover:bg-gray-50'} transition-all cursor-pointer group`}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="text-4xl mb-2">{game.thumbnail}</div>
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(game.id);
            }}
          >
            <Heart className={`w-4 h-4 ${favorites.includes(game.id) ? 'fill-red-500 text-red-500' : isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </Button>
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          {game.badges.map((badge: string) => (
            <Badge key={badge} variant="outline" className="text-xs">
              {badge}
            </Badge>
          ))}
          {game.isMultiplayer && (
            <Badge variant="outline" className="text-xs text-blue-400 border-blue-400">
              <Users className="w-3 h-3 mr-1" />
              MP
            </Badge>
          )}
          {game.isOffline && (
            <Badge variant="outline" className="text-xs text-green-400 border-green-400">
              <Download className="w-3 h-3 mr-1" />
              Offline
            </Badge>
          )}
        </div>
        <CardTitle className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {game.title}
        </CardTitle>
        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {game.description}
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {game.rating}
              </span>
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {game.plays} plays
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button 
            onClick={() => playGame(game.id)}
            className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500"
            size="sm"
          >
            <Play className="w-4 h-4 mr-2" />
            Play
          </Button>
          <Button variant="outline" size="sm">
            <MessageSquare className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
