import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Puzzle, Rocket, Brain, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const gamesData = [
  {
    id: 'game-1',
    title: 'Space Invaders Clone',
    description: 'A classic arcade shooter. Defend Earth from alien invaders! (Conceptual)',
    icon: <Rocket className="h-16 w-16 text-purple-400" />,
    tags: ['Arcade', 'Shooter', 'Retro'],
    sourceType: 'GitHub',
    sourceUrl: 'https://github.com/example/space-invaders',
    playable: false,
  },
  {
    id: 'game-2',
    title: 'Puzzle Mania',
    description: 'A collection of challenging brain-teasing puzzles. (Conceptual)',
    icon: <Puzzle className="h-16 w-16 text-green-400" />,
    tags: ['Puzzle', 'Logic', 'Strategy'],
    sourceType: 'GitLab',
    sourceUrl: 'https://gitlab.com/example/puzzle-mania',
    playable: false,
  },
  {
    id: 'game-3',
    title: 'Memory Master',
    description: 'Test and improve your memory with this engaging card matching game. (Conceptual)',
    icon: <Brain className="h-16 w-16 text-blue-400" />,
    tags: ['Memory', 'Card Game', 'Casual'],
    sourceType: 'GitHub',
    sourceUrl: 'https://github.com/example/memory-master',
    playable: false,
  },
   {
    id: 'game-4',
    title: 'Asteroid Dodger',
    description: 'Navigate your spaceship through a dense asteroid field. High scores win! (Conceptual)',
    icon: <Rocket className="h-16 w-16 text-red-400" />,
    tags: ['Arcade', 'Skill', 'Endless'],
    sourceType: 'GitHub',
    sourceUrl: 'https://github.com/example/asteroid-dodger',
    playable: false,
  },
];

const GamesPage = () => {
  const { toast } = useToast();

  const handlePlayGame = (gameTitle) => {
    toast({
      title: "Game Not Implemented",
      description: `${gameTitle} is a conceptual game. Fetching and running games from external repos is not yet implemented.`,
      variant: "default",
      duration: 7000,
      className: "text-lg p-5",
    });
  };
  
  const handleViewSource = (sourceUrl, gameTitle) => {
     toast({
      title: "Viewing Source Code",
      description: `Opening source for ${gameTitle}. This would typically fetch and display code. For now, it's a placeholder.`,
      variant: "default",
      duration: 7000,
      className: "text-lg p-5",
    });
    // In a real scenario, you might fetch and display code or redirect.
    // For now, we just log or show a message.
    console.log(`Attempting to view source: ${sourceUrl}`);
    // window.open(sourceUrl, '_blank'); // This would open the actual repo
  };


  return (
    <div className="py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12 md:mb-16 text-center"
      >
        <Gamepad2 className="h-20 w-20 md:h-24 md:w-24 text-primary mx-auto mb-6" />
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5">Games Hub</h1>
        <p className="text-2xl md:text-3xl text-muted-foreground">
          Discover and play games sourced from various repositories. (Conceptual)
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-10">
        {gamesData.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full glass-card gradient-border flex flex-col p-2">
              <CardHeader className="px-8 pt-8 pb-4 items-center text-center">
                <div className="mb-5">{game.icon}</div>
                <CardTitle className="text-3xl md:text-4xl">{game.title}</CardTitle>
                <CardDescription className="text-lg md:text-xl mt-2">
                  {game.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow px-8 text-center">
                <div className="flex flex-wrap justify-center gap-3 my-6">
                  {game.tags.map(tag => (
                    <span key={tag} className="bg-primary/20 text-primary-foreground text-base md:text-lg px-4 py-2 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-lg">
                  Source: <span className="font-semibold">{game.sourceType}</span>
                </p>
              </CardContent>
              <CardFooter className="px-8 pb-8 pt-6 flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="w-full text-xl md:text-2xl py-4" 
                  onClick={() => handlePlayGame(game.title)}
                  disabled={!game.playable}
                >
                  <Gamepad2 className="mr-3 h-6 w-6 md:h-7 md:w-7" />
                  Play Game
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full text-xl md:text-2xl py-4"
                  onClick={() => handleViewSource(game.sourceUrl, game.title)}
                >
                  <ExternalLink className="mr-3 h-6 w-6 md:h-7 md:w-7" />
                  View Source
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
       <p className="text-center text-muted-foreground mt-12 text-xl md:text-2xl">
        Note: Fetching and running games directly from external repositories is a complex feature and is currently conceptual.
      </p>
    </div>
  );
};

export default GamesPage;