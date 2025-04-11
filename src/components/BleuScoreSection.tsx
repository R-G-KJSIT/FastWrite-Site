
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BleuScoreSection = () => {
  const bleuScoreData = [
    {
      name: "Function 1",
      OpenAI: 0.89,
      Groq: 0.86,
      Gemini: 0.84,
      Ollama: 0.75
    },
    {
      name: "Function 2",
      OpenAI: 0.92,
      Groq: 0.88,
      Gemini: 0.85,
      Ollama: 0.77
    },
    {
      name: "Function 3",
      OpenAI: 0.87,
      Groq: 0.90,
      Gemini: 0.82,
      Ollama: 0.74
    },
    {
      name: "Repository",
      OpenAI: 0.85,
      Groq: 0.83,
      Gemini: 0.88,
      Ollama: 0.70
    }
  ];

  const colors = {
    OpenAI: "#10b981",
    Groq: "#f59e0b",
    Gemini: "#3b82f6",
    Ollama: "#ec4899"
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Documentation Quality Comparison
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            FastWrite helps you objectively measure documentation quality across different LLM providers
            using BLEU scores - an industry standard metric for text generation quality.
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader className="pb-0">
            <CardTitle>BLEU Score Comparison</CardTitle>
            <CardDescription>
              Higher scores indicate closer match to reference documentation
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={bleuScoreData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 1]} tickFormatter={(value) => value.toFixed(1)} />
                  <Tooltip 
                    formatter={(value: number) => value.toFixed(2)}
                    contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '6px' }}
                  />
                  <Legend />
                  <Bar dataKey="OpenAI" fill={colors.OpenAI} />
                  <Bar dataKey="Groq" fill={colors.Groq} />
                  <Bar dataKey="Gemini" fill={colors.Gemini} />
                  <Bar dataKey="Ollama" fill={colors.Ollama} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <div className="mx-auto max-w-2xl text-center mt-16">
          <p className="text-sm text-gray-500">
            BLEU (Bilingual Evaluation Understudy) is an algorithm for evaluating the quality of text which has been generated. 
            FastWrite uses BLEU scores to help you select the best LLM provider for your documentation needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BleuScoreSection;
