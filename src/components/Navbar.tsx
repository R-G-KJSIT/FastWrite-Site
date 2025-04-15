import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
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
            <a href="https://pypi.org/project/FastWrite/" target="_blank" rel="noopener noreferrer">
              PyPI
            </a>
          </Button>
          <Button
            size="sm"
            className="text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 animate-gradient-border"
            asChild
          >
            <a href="https://ui.fastwrite.kjsieit.com" target="_blank" rel="noopener noreferrer">
              Try FastWrite now
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="sm" className="bg-fastwrite-600 hover:bg-fastwrite-700 text-white" asChild>
            <a href="https://github.com/r-g-kjsit/FastWrite" target="_blank" rel="noopener noreferrer">
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
