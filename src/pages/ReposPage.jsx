import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Loader2, RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import RepoCard from '@/components/RepoCard';
import { useToast } from '@/components/ui/use-toast';

const ReposPage = () => {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://api.github.com/users/sugarypumpkin822/repos');
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const data = await response.json();
      setRepos(data);
      setFilteredRepos(data);
      
      localStorage.setItem('githubRepos', JSON.stringify(data));
      localStorage.setItem('lastFetched', new Date().toISOString());
      
    } catch (err) {
      console.error('Error fetching repos:', err);
      setError(err.message);
      
      const cachedRepos = localStorage.getItem('githubRepos');
      if (cachedRepos) {
        const parsedRepos = JSON.parse(cachedRepos);
        setRepos(parsedRepos);
        setFilteredRepos(parsedRepos);
        toast({
          title: "Using cached data",
          description: "Couldn't connect to GitHub. Showing previously loaded repositories.",
          variant: "default",
          duration: 7000,
        });
      }
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredRepos(repos);
    } else {
      const filtered = repos.filter(repo => 
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredRepos(filtered);
    }
  }, [searchTerm, repos]);

  const handleRefresh = () => {
    fetchRepos();
    toast({
      title: "Refreshing repositories",
      description: "Fetching the latest repositories from GitHub",
      duration: 5000,
    });
  };

  return (
    <div className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-10 md:mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">GitHub Repositories</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Scanning repositories from <span className="text-primary font-semibold">sugarypumpkin822</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
            <Input
              placeholder="Search repositories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-14 h-16 text-xl md:text-2xl"
            />
          </div>
          <Button onClick={handleRefresh} variant="outline" className="flex-shrink-0 h-16 text-xl md:text-2xl px-8">
            <RefreshCw className="mr-3 h-6 w-6" />
            Refresh
          </Button>
        </div>
      </motion.div>

      {loading ? (
        <div className="flex flex-col justify-center items-center py-24 text-center">
          <Loader2 className="h-16 w-16 md:h-20 md:w-20 text-primary animate-spin" />
          <span className="ml-4 text-2xl md:text-3xl mt-6">Loading repositories...</span>
        </div>
      ) : error && filteredRepos.length === 0 ? (
        <div className="text-center py-24">
          <div className="text-destructive mb-6 text-2xl md:text-3xl">Error: {error}</div>
          <Button onClick={fetchRepos} variant="default" size="lg" className="text-xl md:text-2xl px-10 py-7">
            Try Again
          </Button>
        </div>
      ) : filteredRepos.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-3xl md:text-4xl mb-6">No repositories found</p>
          {searchTerm && (
            <p className="text-xl md:text-2xl text-muted-foreground">
              No results match your search. Try a different term or clear the search.
            </p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {filteredRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <RepoCard repo={repo} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReposPage;