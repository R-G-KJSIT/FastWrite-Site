
import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Installation = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('pip install fastwrite');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const configExamples = `
no additional configuration is required by the user
  `;

  return (
    <section id="installation" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get Started with FastWrite
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            FastWrite is available on PyPI and can be installed with pip. Follow these simple steps to start documenting your code.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gray-50 border-b">
              <div className="flex items-center">
                <Terminal className="h-5 w-5 text-gray-500 mr-2" />
                <CardTitle className="text-lg">Installation</CardTitle>
              </div>
              <CardDescription>
                Run this command in your terminal to install FastWrite
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-6 flex items-center justify-between bg-gray-900 rounded-b-md">
                <code className="text-sm text-white font-mono">pip install fastwrite</code>
                <Button variant="ghost" size="icon" onClick={handleCopy} className="text-gray-400 hover:text-white">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Configuration</h3>
              <p className="mt-2 text-sm text-gray-600">
                No Additional Configuration is needed from the user. If needed, the module will ask for API keys on first run.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">Usage</h3>
              <p className="mt-2 text-sm text-gray-600">
                After installation, you can use FastWrite in your Python code or via the command line:
              </p>
              <div className="mt-4 space-y-4">
                <div className="p-4 bg-gray-50 rounded-md">
                  <h4 className="font-medium text-gray-900 mb-2">Command Line</h4>
                  <code className="text-sm text-gray-800 font-mono">
                  python3 -m FastWrite code_filename.py --LLM_NAME --Style
                  </code>
                </div>
                
                
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Check out the PyPI page for complete documentation and API reference.
            </p>
            <Button className="bg-fastwrite-600 hover:bg-fastwrite-700" asChild>
              <a href="https://pypi.org/project/FastWrite/" target="_blank" rel="noopener noreferrer">
                Visit PyPI Page
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
