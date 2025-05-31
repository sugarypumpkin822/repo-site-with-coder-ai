import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface UserProfileProps {
  isDarkMode: boolean;
  userProfile: {
    username: string;
    level: number;
    xp: number;
    xpToNext: number;
    achievements: number;
    gamesPlayed: number;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ isDarkMode, userProfile }) => {
  return (
    <div className={`p-4 rounded-lg mb-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <div className="text-center mb-4">
        <Avatar className="w-16 h-16 mx-auto mb-2">
          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-lg">
            GM
          </AvatarFallback>
        </Avatar>
        <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {userProfile.username}
        </h3>
        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Level {userProfile.level}
        </div>
      </div>
      
      {/* XP Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>XP</span>
          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {userProfile.xp}/{userProfile.xp + userProfile.xpToNext}
          </span>
        </div>
        <div className={`w-full bg-gray-600 rounded-full h-2`}>
          <div 
            className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all"
            style={{ width: `${(userProfile.xp / (userProfile.xp + userProfile.xpToNext)) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {userProfile.achievements}
          </div>
          <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Achievements
          </div>
        </div>
        <div>
          <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {userProfile.gamesPlayed}
          </div>
          <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Games Played
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
