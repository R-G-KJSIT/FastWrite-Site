
import React from 'react';
import { Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-fastwrite-600 to-fastwrite-400 flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Fast<span className="text-fastwrite-600">Write</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Features</a>
          <a href="#platforms" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Platforms</a>
          <a href="#examples" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Examples</a>
          <a href="#installation" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Installation</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <a href="https://pypi.org/Project/FastWrite" target="_blank" rel="noopener noreferrer">
              PyPI
            </a>
          </Button>
          <Button size="sm" className="bg-fastwrite-600 hover:bg-fastwrite-700 text-white" asChild>
            <a href="https://github.com/search?q=FastWrite" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
