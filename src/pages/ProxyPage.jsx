import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, Globe, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const ProxyPage = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [proxyContent, setProxyContent] = useState(null);
  const { toast } = useToast();

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;  
    }
  };

  const handleFetchViaProxy = async () => {
    if (!url.trim() || !isValidUrl(url)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL to fetch through the proxy.",
        variant: "destructive",
        duration: 7000,
        className: "text-lg p-5",
      });
      return;
    }

    setIsLoading(true);
    setProxyContent(null);

    toast({
      title: "Proxy Fetch Initiated",
      description: `Attempting to fetch ${url}. This is a placeholder. Actual proxy functionality requires a backend.`,
      duration: 7000,
      className: "text-lg p-5",
    });

    // Simulate API call to a backend proxy service
    setTimeout(() => {
      // This is where you would typically make a call to your backend proxy.
      // For now, we'll simulate a response.
      const simulatedHTML = `
        <html>
          <head>
            <title>Proxied Content: ${url}</title>
            <style>
              body { font-family: sans-serif; margin: 20px; background-color: #f0f0f0; color: #333; }
              h1 { color: #0056b3; }
              .container { background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
              .warning { background-color: #fff3cd; color: #856404; padding: 15px; border-radius: 4px; border: 1px solid #ffeeba; margin-bottom: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="warning">
                <strong>Note:</strong> This is simulated proxied content. Actual fetching and rendering of external sites through a client-side proxy is not feasible due to security restrictions (CORS). A backend proxy service is required for full functionality.
              </div>
              <h1>Content for: ${url}</h1>
              <p>This is a placeholder for the content that would be fetched from the URL: <strong>${url}</strong>.</p>
              <p>In a real proxy, the actual HTML, CSS, and JavaScript from the target site would be processed and displayed here, with all links and resources rewritten to go through the proxy.</p>
              <a href="${url}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; color: #007bff; text-decoration: none; font-weight: bold;">
                Open Original URL in New Tab <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </body>
        </html>
      `;
      setProxyContent(simulatedHTML);
      setIsLoading(false);
    }, 2500);
  };

  return (
    <div className="py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12 md:mb-16 text-center"
      >
        <ShieldCheck className="h-20 w-20 md:h-24 md:w-24 text-primary mx-auto mb-6" />
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5">Proxy Service</h1>
        <p className="text-2xl md:text-3xl text-muted-foreground">
          Access web content securely and anonymously. (Backend Required)
        </p>
      </motion.div>

      <Card className="glass-card gradient-border max-w-4xl mx-auto mb-12 p-2">
        <CardHeader className="px-8 pt-8 pb-4">
          <CardTitle className="text-3xl md:text-4xl text-center">Enter URL to Proxy</CardTitle>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="relative flex-grow">
              <Globe className="absolute left-5 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground" />
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="pl-16 h-20 text-2xl md:text-3xl"
                onKeyPress={(e) => e.key === 'Enter' && handleFetchViaProxy()}
              />
            </div>
            <Button 
              onClick={handleFetchViaProxy} 
              disabled={isLoading}
              size="lg"
              className="h-20 text-2xl md:text-3xl px-10"
            >
              {isLoading ? (
                <>
                  <Search className="mr-3 h-7 w-7 animate-spin" />
                  Fetching...
                </>
              ) : (
                <>
                  <Search className="mr-3 h-7 w-7" />
                  Go
                </>
              )}
            </Button>
          </div>
           <p className="text-center text-muted-foreground mt-6 text-lg">
            Note: This is a frontend demonstration. A real proxy requires a backend server to bypass CORS and fetch content.
          </p>
        </CardContent>
      </Card>

      {proxyContent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glass-card gradient-border max-w-full mx-auto p-1">
            <CardHeader className="px-8 pt-8 pb-4">
              <CardTitle className="text-3xl md:text-4xl flex items-center">
                <ExternalLink className="mr-3 h-8 w-8 text-primary" />
                Proxied Content
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 pb-2">
              <iframe
                srcDoc={proxyContent}
                title="Proxied Content"
                className="w-full h-[600px] md:h-[800px] border-2 border-border rounded-lg bg-white"
                sandbox="allow-scripts allow-same-origin" 
              />
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default ProxyPage;