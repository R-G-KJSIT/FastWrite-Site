import React from 'react';
import { ArrowRight, Terminal, FileCode2, GitCompare, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-fastwrite-50 to-transparent opacity-70" />
      
      <div className="relative pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className="block">AI-Enhanced</span>
              <span className="block text-fastwrite-600">Code Documentation</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Automatically generate high-quality documentation for your code using the 
              latest LLM technologies, with support for Groq, OpenRouter, Gemini, OpenAI, and Ollama.
            </p>
            <div className="mt-10 flex flex-col items-center gap-y-4">
              <div className="flex items-center justify-center gap-x-6">
                <Button className="bg-fastwrite-600 hover:bg-fastwrite-700" size="lg" asChild>
                  <a href="#installation">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://pypi.org/project/FastWrite/" target="_blank" rel="noopener noreferrer">
                    View on PyPI
                  </a>
                </Button>
              </div>
              <Button
                className="w-full max-w-md text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 animate-gradient-border"
                size="lg"
                asChild
              >
                <a href="https://ui.fastwrite.kjsieit.com" target="_blank" rel="noopener noreferrer">
                  Try FastWrite now
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white/50 backdrop-blur-sm ring-1 ring-gray-200 p-8 animate-fade-up">
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-fastwrite-100 p-3 rounded-lg mb-4">
                <Terminal className="h-6 w-6 text-fastwrite-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">Repository Level</h3>
              <p className="mt-2 text-sm text-gray-500 text-center md:text-left">Document entire codebases with context-aware generation</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-fastwrite-100 p-3 rounded-lg mb-4">
                <FileCode2 className="h-6 w-6 text-fastwrite-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">Function Level</h3>
              <p className="mt-2 text-sm text-gray-500 text-center md:text-left">Generate detailed docstrings for individual functions</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-fastwrite-100 p-3 rounded-lg mb-4">
                <GitCompare className="h-6 w-6 text-fastwrite-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">BLEU Score Comparison</h3>
              <p className="mt-2 text-sm text-gray-500 text-center md:text-left">Measure and compare documentation accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
