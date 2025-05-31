export const categories = [
  { id: "all", name: "All Games", count: 1000 },
  { id: "action", name: "Action", count: 150 },
  { id: "puzzle", name: "Puzzle", count: 200 },
  { id: "strategy", name: "Strategy", count: 100 },
  { id: "arcade", name: "Arcade", count: 180 },
  { id: "sports", name: "Sports", count: 80 },
  { id: "racing", name: "Racing", count: 60 },
  { id: "multiplayer", name: "Multiplayer", count: 90 }
];

export const games = [
  {
    id: 1,
    title: "Cyber Runner 3D",
    description: "Fast-paced cyberpunk runner",
    category: "action",
    rating: 4.8,
    plays: 15420,
    thumbnail: "🏃",
    badges: ["New", "Popular"],
    isMultiplayer: true,
    isOffline: true
  },
  {
    id: 2,
    title: "Mind Maze",
    description: "Challenge your intellect",
    category: "puzzle",
    rating: 4.6,
    plays: 8950,
    thumbnail: "🧩",
    badges: ["Trending"],
    isMultiplayer: false,
    isOffline: true
  },
  {
    id: 3,
    title: "Space Strategy",
    description: "Conquer the galaxy",
    category: "strategy",
    rating: 4.9,
    plays: 22100,
    thumbnail: "🚀",
    badges: ["Top Rated"],
    isMultiplayer: true,
    isOffline: false
  },
  {
    id: 4,
    title: "Neon Racer",
    description: "High-speed neon racing",
    category: "racing",
    rating: 4.7,
    plays: 12800,
    thumbnail: "🏎️",
    badges: ["Popular"],
    isMultiplayer: true,
    isOffline: true
  },
  {
    id: 5,
    title: "Pixel Adventure",
    description: "Retro platformer fun",
    category: "arcade",
    rating: 4.5,
    plays: 18600,
    thumbnail: "🎮",
    badges: ["Classic"],
    isMultiplayer: false,
    isOffline: true
  },
  {
    id: 6,
    title: "Soccer Champions",
    description: "Ultimate football experience",
    category: "sports",
    rating: 4.4,
    plays: 9300,
    thumbnail: "⚽",
    badges: ["Sports"],
    isMultiplayer: true,
    isOffline: false
  }
];
