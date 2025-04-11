
import React from 'react';
import { Check, Code, FileBadge, Layers, Lightbulb, Git, Files } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Repository Level Documentation",
      description: "Generate comprehensive documentation for your entire codebase with context-aware understanding of your project structure.",
      icon: <Files className="h-6 w-6 text-fastwrite-600" />
    },
    {
      title: "Function Level Documentation",
      description: "Create detailed docstrings for individual functions complete with parameter descriptions, return values, and examples.",
      icon: <Code className="h-6 w-6 text-fastwrite-600" />
    },
    {
      title: "Inline Documentation",
      description: "Add explanatory comments within your code to clarify complex logic and improve maintainability.",
      icon: <FileBadge className="h-6 w-6 text-fastwrite-600" />
    },
    {
      title: "Multiple Documentation Styles",
      description: "Support for NumPy, Google, reStructuredText, and other popular docstring formats.",
      icon: <Layers className="h-6 w-6 text-fastwrite-600" />
    },
    {
      title: "BLEU Score Comparison",
      description: "Objectively measure and compare documentation quality across different LLM providers.",
      icon: <Git className="h-6 w-6 text-fastwrite-600" />
    },
    {
      title: "Smart Context Handling",
      description: "Automatically captures relevant context from your codebase to generate more accurate documentation.",
      icon: <Lightbulb className="h-6 w-6 text-fastwrite-600" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Documentation Features
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            FastWrite provides comprehensive tools to automate and enhance your code documentation
            workflow, saving time and improving code quality.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-200 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-fastwrite-50 mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
