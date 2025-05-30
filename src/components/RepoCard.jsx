import React from 'react';
import { motion } from 'framer-motion';
import { Download, Star, GitFork, Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const RepoCard = ({ repo }) => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Download functionality",
      description: "The download button is currently a placeholder. Actual executable generation would require server-side implementation.",
      duration: 7000,
      className: "text-lg p-5",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="repo-card h-full"
    >
      <Card className="h-full glass-card gradient-border flex flex-col p-2">
        <CardHeader className="pb-5 pt-6 px-6">
          <CardTitle className="flex items-start justify-between mb-2">
            <span className="text-3xl md:text-4xl font-bold truncate mr-3 leading-tight">{repo.name}</span>
            <Badge variant="secondary" className="ml-2 text-sm md:text-base px-3 py-1.5 flex-shrink-0">
              {repo.language || 'Unknown'}
            </Badge>
          </CardTitle>
          <div className="flex items-center text-lg text-muted-foreground mt-1">
            <Calendar className="mr-2 h-5 w-5" />
            <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
          </div>
        </CardHeader>
        <CardContent className="flex-grow px-6">
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
            {repo.description || 'No description available'}
          </p>
          <div className="flex items-center space-x-8 text-xl md:text-2xl">
            <div className="flex items-center">
              <Star className="mr-2 h-6 w-6 md:h-7 md:w-7 text-yellow-500" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center">
              <GitFork className="mr-2 h-6 w-6 md:h-7 md:w-7 text-blue-500" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-8">
          <Button 
            onClick={handleDownload} 
            className="w-full glow text-xl md:text-2xl py-4 md:py-5"
            variant="default"
            size="lg"
          >
            <Download className="mr-3 h-6 w-6 md:h-7 md:w-7" />
            Download .exe
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default RepoCard;