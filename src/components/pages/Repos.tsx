
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Download, Star, Eye, GitFork, Search, ExternalLink, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  clone_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

const Repos = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState('sugarypumpkin822');
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchRepositories(selectedUser);
  }, [selectedUser]);

  const fetchRepositories = async (username: string) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }
      const data = await response.json();
      setRepos(data);
      console.log('Fetched repositories:', data);
    } catch (error) {
      console.error('Error fetching repositories:', error);
      toast({
        title: "Error",
        description: "Failed to fetch repositories. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const downloadRepo = (repo: Repository) => {
    const downloadUrl = `${repo.html_url}/archive/refs/heads/main.zip`;
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = `${repo.name}.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    toast({
      title: "Download Started",
      description: `Downloading ${repo.name}...`,
    });
  };

  const downloadAllRepos = () => {
    repos.forEach((repo, index) => {
      setTimeout(() => {
        downloadRepo(repo);
      }, index * 1000); // Delay each download by 1 second
    });
    
    toast({
      title: "Bulk Download Started",
      description: `Downloading all ${repos.length} repositories...`,
    });
  };

  const filteredRepos = repos.filter(repo =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    repo.language?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const gameRepos = repos.filter(repo =>
    repo.topics?.some(topic => 
      ['game', 'games', 'gaming', 'unity', 'unreal', 'godot', 'pygame', 'javascript-game'].includes(topic.toLowerCase())
    ) ||
    repo.name.toLowerCase().includes('game') ||
    repo.description?.toLowerCase().includes('game')
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="text-gray-300 hover:text-white"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Repository Scanner</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                onClick={downloadAllRepos}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                disabled={repos.length === 0}
              >
                <Download className="w-4 h-4 mr-2" />
                Download All ({repos.length})
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <Input
              placeholder="Enter GitHub username..."
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="max-w-xs bg-gray-800 border-gray-600 text-white"
            />
            <Button onClick={() => fetchRepositories(selectedUser)}>
              Scan Repositories
            </Button>
            
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search repositories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-600 text-white"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gray-900/50 border-purple-500/20">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-white">{repos.length}</div>
              <div className="text-gray-400 text-sm">Total Repos</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-purple-500/20">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-cyan-400">{gameRepos.length}</div>
              <div className="text-gray-400 text-sm">Game Repos</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-purple-500/20">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-green-400">{filteredRepos.length}</div>
              <div className="text-gray-400 text-sm">Filtered</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-purple-500/20">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-yellow-400">
                {repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
              </div>
              <div className="text-gray-400 text-sm">Total Stars</div>
            </CardContent>
          </Card>
        </div>

        {/* Game Repositories Section */}
        {gameRepos.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Badge className="mr-3 bg-gradient-to-r from-purple-500 to-pink-500">🎮 Game Repositories</Badge>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {gameRepos.slice(0, 6).map((repo) => (
                <Card key={repo.id} className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-white text-lg">{repo.name}</CardTitle>
                      <Button
                        size="sm"
                        onClick={() => downloadRepo(repo)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardDescription className="text-gray-400 text-sm">
                      {repo.description || 'No description available'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center">
                        <GitFork className="w-4 h-4 mr-1" />
                        {repo.forks_count}
                      </span>
                      {repo.language && (
                        <Badge variant="outline" className="text-xs">
                          {repo.language}
                        </Badge>
                      )}
                    </div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm"
                    >
                      View on GitHub
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Repositories */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">All Repositories</h2>
          
          {loading ? (
            <div className="text-center py-8">
              <div className="text-white">Loading repositories...</div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredRepos.map((repo) => (
                <Card key={repo.id} className="bg-gray-900/50 border-gray-600/20 hover:border-gray-500/40 transition-all">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-white text-lg">{repo.name}</CardTitle>
                      <Button
                        size="sm"
                        onClick={() => downloadRepo(repo)}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardDescription className="text-gray-400 text-sm">
                      {repo.description || 'No description available'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {repo.watchers_count}
                      </span>
                      <span className="flex items-center">
                        <GitFork className="w-4 h-4 mr-1" />
                        {repo.forks_count}
                      </span>
                    </div>
                    
                    {repo.language && (
                      <Badge variant="outline" className="mb-2 text-xs">
                        {repo.language}
                      </Badge>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Updated {new Date(repo.updated_at).toLocaleDateString()}
                      </span>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Repos;
