import React from 'react';
import { Github, Twitter, Linkedin, Package } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-xl font-bold">
                Fast<span className="text-fastwrite-400">Write</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              An AI-powered Python package for automating code documentation using the most powerful LLM platforms.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/r-g-kjsit/FastWrite" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://pypi.org/project/FastWrite/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Package className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#platforms" className="hover:text-white">Supported Platforms</a></li>
              <li><a href="#examples" className="hover:text-white">Code Examples</a></li>
              <li><a href="#installation" className="hover:text-white">Installation</a></li>
              <li><a href="https://pypi.org/project/FastWrite/" className="hover:text-white" target="_blank" rel="noopener noreferrer">API Reference</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Resources</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="https://pypi.org/project/FastWrite/" className="hover:text-white" target="_blank" rel="noopener noreferrer">PyPI Package</a></li>
              <li><a href="https://github.com/r-g-kjsit/FastWrite" className="hover:text-white" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
              <li><a href="/release-notes" className="hover:text-white" target="_blank" rel="noopener noreferrer">Release Notes</a></li>
              <li><a href="https://github.com/R-G-KJSIT/FastWrite/blob/main/CONTRIBUTING.md" className="hover:text-white" target="_blank" rel="noopener noreferrer">Contributing</a></li>
              <li><a href="https://github.com/R-G-KJSIT/FastWrite/blob/main/LICENSE" className="hover:text-white" target="_blank" rel="noopener noreferrer">License</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FastWrite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
