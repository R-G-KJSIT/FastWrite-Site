
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Terminal } from 'lucide-react';

const CodeExamples = () => {
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(id);
      setTimeout(() => setCopySuccess(null), 2000);
    });
  };

  const examples = [
    {
      id: "install",
      title: "Installation",
      code: "pip install fastwrite",
      language: "bash"
    },
    {
      id: "processing",
      title: "Processing Files",
      code: `from FastWrite import extract_zip, list_python_files, read_file
import tempfile
import os

# Specify the path to your ZIP file containing Python code
zip_file_path = "path/to/your/code.zip"

with tempfile.TemporaryDirectory() as tmp_dir:
    # Extract the ZIP file
    extract_zip(zip_file_path, tmp_dir)
    
    # List Python files in the extracted directory
    py_files = list_python_files(tmp_dir)
    
    if py_files:
        # For example, choose the first Python file as the main file
        main_file_path = os.path.join(tmp_dir, py_files[0])
        code_content = read_file(main_file_path)`,
      language: "python"
    },
    {
      id: "documentation",
      title: "Generate Documentation",
      code: `# OpenAI Documentation
from FastWrite import generate_documentation_openai

custom_prompt = """
Objective:
Generate high-quality, developer-friendly documentation for the following Python code.
Ensure you include detailed function-level and file-level documentation.
"""
doc_openai = generate_documentation_openai(code_content, custom_prompt)
print(doc_openai)

# Express Mode (Command Line)
# py -m FastWrite code_filename.py --LLM_NAME

# With other LLM providers
from FastWrite import generate_documentation_groq, generate_documentation_gemini

# Using Groq
groq_api_key = "your_groq_api_key"
groq_model = "deepseek-r1-distill-llama-70b"
doc_groq = generate_documentation_groq(code_content, custom_prompt, groq_api_key, groq_model)

# Using Gemini
gemini_api_key = "your_gemini_api_key"
gemini_model = "gemini-2.0-flash"
doc_gemini = generate_documentation_gemini(code_content, custom_prompt, gemini_api_key, gemini_model)`,
      language: "python"
    },
    {
      id: "dataflow",
      title: "Data Flow Diagrams",
      code: `from FastWrite import generate_data_flow

# Generate Graphviz code for the data flow diagram
graphviz_code = generate_data_flow(code_content)
print(graphviz_code)`,
      language: "python"
    },
    {
      id: "bleu",
      title: "BLEU Score Comparison",
      code: `from FastWrite import calculate_bleu

# Provide a reference documentation string for comparison
reference_doc = "Your reference documentation text here..."

# Basic BLEU score calculation
bleu_score = calculate_bleu(doc_llm_host, reference_doc) ##LLM host may include Groq,Gemini,OpenAI or Ollama
print("BLEU Score:", bleu_score)

# BLEU score with smoothing
# Available smoothing methods: 'method0', 'method1', 'method2', 'method3', 'method4', 'method5', 'method6', 'method7'
bleu_score_smoothed = calculate_bleu(doc_llm_host, reference_doc, smoothing_method='method1')
print("BLEU Score with Smoothing:", bleu_score_smoothed)

# Calculate BLEU score with multiple reference documents
from FastWrite import calculate_bleu_multi_reference
reference_docs = ["Reference doc 1...", "Reference doc 2..."]
bleu_score_multi = calculate_bleu_multi_reference(doc_llm_host, reference_docs, smoothing_method='method1')
print("BLEU Score with Multiple References:", bleu_score_multi)

# Calculate BLEU score directly from files
from FastWrite import calculate_bleu_from_files
bleu_score_from_files = calculate_bleu_from_files("candidate_doc.txt", "reference_doc.txt", smoothing_method='method1')
print("BLEU Score from Files:", bleu_score_from_files)
)`,
      language: "python"
    },
    {
      id: "readme",
      title: "README Generation",
      code: `from FastWrite.print import readmegen

# Generate a README file from the documentation
readmegen(documentation, "openai")  # Replace with "groq", "gemini", etc.`,
      language: "python"
    }
  ];

  return (
    <section id="examples" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See FastWrite in Action
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore these code examples to see how FastWrite can be integrated into your workflow.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <Tabs defaultValue="processing" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-6 gap-2">
              {examples.map((example) => (
                <TabsTrigger 
                  key={example.id} 
                  value={example.id}
                  className="text-sm py-2 whitespace-normal break-words"
                >
                  {example.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {examples.map((example) => (
              <TabsContent key={example.id} value={example.id} className="mt-20">
                <div className="relative rounded-lg bg-gray-900 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Terminal className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-400">{example.title}</span>
                    </div>
                    <button 
                      onClick={() => copyToClipboard(example.code, example.id)}
                      className="text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      {copySuccess === example.id ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <pre className="overflow-x-auto text-sm">
                    <code className="text-gray-300 font-mono whitespace-pre">
                      {example.code}
                    </code>
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;
