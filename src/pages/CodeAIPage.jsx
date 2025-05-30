import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Copy, Download, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import CodeEditor from '@/components/CodeEditor';
import { useToast } from '@/components/ui/use-toast';

const CodeAIPage = () => {
  const [apiKey, setApiKey] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState(`// API key goes here

const apiKey = "YOUR_API_KEY_HERE";

async function generateCode(prompt) {
  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": \`Bearer \${apiKey}\`
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: \`Write code for: \${prompt}\`,
        max_tokens: 1000,
        temperature: 0.7
      })
    });
    
    const data = await response.json();
    return data.choices[0].text;
  } catch (error) {
    console.error("Error generating code:", error);
    return "// Error generating code";
  }
}`);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: "Empty prompt",
        description: "Please enter a prompt to generate code.",
        variant: "destructive",
        duration: 7000,
        className: "text-lg p-5",
      });
      return;
    }
    
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your API key in the settings tab.",
        variant: "destructive",
        duration: 7000,
        className: "text-lg p-5",
      });
      return;
    }
    
    setIsGenerating(true);
    
    setTimeout(() => {
      const sampleCode = `// Generated code for: ${prompt}

function processHugeRequest() {
  // This is a much larger, more complex function based on your prompt.
  console.log("Processing GIGANTIC request: ${prompt}");
  
  // Example of a more complex structure
  const parameters = {
    input: "${prompt.replace(/"/g, '\\"')}",
    timestamp: new Date().toISOString(),
    userId: "user123",
    settings: {
      mode: "advanced",
      retries: 3,
      timeout: 30000 // 30 seconds
    }
  };

  let result = {};
  for (let i = 0; i < 5; i++) {
    // Simulating some complex operations
    result[\`iteration_\${i}\`] = Math.random() * 1000;
    console.log(\`Iteration \${i} completed.\`);
  }
  
  return {
    status: "success",
    message: "Operation completed successfully after multiple steps.",
    data: result,
    requestParameters: parameters
  };
}

// Execute the giant function
const output = processHugeRequest();
console.log(JSON.stringify(output, null, 2));`;
      
      setGeneratedCode(sampleCode);
      setIsGenerating(false);
      
      toast({
        title: "Code generated!",
        description: "Your GIANT code has been generated successfully.",
        duration: 7000,
        className: "text-lg p-5",
      });
    }, 2500);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    toast({
      title: "Copied to clipboard!",
      description: "Code has been copied to your clipboard.",
      duration: 5000,
      className: "text-lg p-5",
    });
  };

  const handleDownloadCode = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedCode], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'generated-code.js';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Code downloaded!",
      description: "Your code has been downloaded as a .js file.",
      duration: 5000,
      className: "text-lg p-5",
    });
  };

  const handleClearCode = () => {
    setGeneratedCode('// Your generated code will appear here, BIGGER than ever!');
    setPrompt('');
    toast({
      title: "Cleared!",
      description: "Code and prompt have been cleared.",
      duration: 5000,
      className: "text-lg p-5",
    });
  };

  return (
    <div className="py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-12 md:mb-16"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 flex items-center">
          <Sparkles className="mr-4 h-10 w-10 md:h-12 md:w-12 text-yellow-500" />
          Code AI Assistant
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground">
          Generate GIANT code snippets with AI power!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
        <div className="lg:col-span-1">
          <Tabs defaultValue="prompt">
            <TabsList className="w-full h-16">
              <TabsTrigger value="prompt" className="flex-1 text-xl md:text-2xl px-4">Prompt</TabsTrigger>
              <TabsTrigger value="settings" className="flex-1 text-xl md:text-2xl px-4">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="prompt" className="space-y-8 mt-6">
              <div className="glass-card p-8 rounded-xl">
                <label className="block text-xl md:text-2xl font-medium mb-4">
                  Enter your GIANT prompt
                </label>
                <Textarea
                  placeholder="Describe the colossal code you want to generate..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[250px] text-xl md:text-2xl p-5"
                />
                <Button 
                  onClick={handleGenerate} 
                  className="w-full mt-6 text-xl md:text-2xl py-5"
                  size="lg"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <Sparkles className="mr-3 h-7 w-7 animate-pulse" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Send className="mr-3 h-7 w-7" />
                      Generate Code
                    </>
                  )}
                </Button>
              </div>
              
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl md:text-3xl font-medium mb-5">Example Prompts</h3>
                <ul className="space-y-4">
                  <li className="p-4 bg-secondary/30 rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors text-xl md:text-2xl" 
                      onClick={() => setPrompt("Create a complex data processing pipeline function with multiple stages")}>
                    Complex data pipeline
                  </li>
                  <li className="p-4 bg-secondary/30 rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors text-xl md:text-2xl"
                      onClick={() => setPrompt("Write a full-featured React hook for advanced state management with context")}>
                    Advanced React hook
                  </li>
                  <li className="p-4 bg-secondary/30 rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors text-xl md:text-2xl"
                      onClick={() => setPrompt("Generate a Node.js script for batch image resizing and optimization")}>
                    Node.js image batch script
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-6">
              <div className="glass-card p-8 rounded-xl">
                <label className="block text-xl md:text-2xl font-medium mb-4">
                  API Key
                </label>
                <Input
                  type="password"
                  placeholder="Enter your API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="text-xl md:text-2xl h-16 p-5"
                />
                <p className="text-lg text-muted-foreground mt-4">
                  Your API key is required to generate code. It will be stored locally and not sent to our servers.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:col-span-2">
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="bg-secondary/50 p-5 flex justify-between items-center">
              <h3 className="font-medium text-2xl md:text-3xl">Generated Code</h3>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" onClick={handleCopyCode} className="h-12 w-12 md:h-14 md:w-14">
                  <Copy className="h-6 w-6 md:h-7 md:w-7" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleDownloadCode} className="h-12 w-12 md:h-14 md:w-14">
                  <Download className="h-6 w-6 md:h-7 md:w-7" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleClearCode} className="h-12 w-12 md:h-14 md:w-14">
                  <Trash className="h-6 w-6 md:h-7 md:w-7" />
                </Button>
              </div>
            </div>
            <div className="p-2">
              <CodeEditor code={generatedCode} language="javascript" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeAIPage;
