import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import HomePage from '@/pages/HomePage';
import ReposPage from '@/pages/ReposPage';
import CodeAIPage from '@/pages/CodeAIPage';
import ProxyPage from '@/pages/ProxyPage';
import GamesPage from '@/pages/GamesPage';
import Footer from '@/components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen animated-bg">
        <Navbar />
        <main className="flex-grow container mx-auto px-6 py-12 md:px-8 md:py-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/repos" element={<ReposPage />} />
            <Route path="/code-ai" element={<CodeAIPage />} />
            <Route path="/proxy" element={<ProxyPage />} />
            <Route path="/games" element={<GamesPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
