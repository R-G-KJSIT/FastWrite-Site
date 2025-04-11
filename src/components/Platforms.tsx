
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Platforms = () => {
  const platforms = [
    {
      name: "OpenAI",
      description: "Harness the power of GPT-4 and GPT-3.5 Turbo for state-of-the-art documentation generation.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      className: "bg-gradient-to-br from-teal-50 to-emerald-50"
    },
    {
      name: "Groq",
      description: "Utilize Groq's ultra-fast LLMs for lightning-quick documentation generation with minimal latency.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Groq_logo.svg",
      className: "bg-gradient-to-br from-amber-50 to-yellow-50"
    },
    {
      name: "Gemini",
      description: "Leverage Google's multimodal AI capabilities for enhanced code understanding and documentation.",
      logo: "https://seeklogo.com/images/G/google-gemini-logo-78E6B938C1-seeklogo.com.png",
      className: "bg-gradient-to-br from-blue-50 to-indigo-50"
    },
    {
      name: "OpenRouter",
      description: "Access multiple models through a unified API for flexible, best-in-class documentation.",
      logo: "https://api.iconify.design/simple-icons:openai.svg",
      className: "bg-gradient-to-br from-purple-50 to-violet-50"
    },
    {
      name: "Ollama",
      description: "Run local LLMs for private, secure documentation generation without data leaving your system.",
      logo: "https://ollama.ai/public/ollama.png",
      className: "bg-gradient-to-br from-rose-50 to-pink-50"
    }
  ];

  return (
    <section id="platforms" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Supported LLM Platforms
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            FastWrite integrates with the most powerful AI platforms, giving you flexibility 
            to choose the best option for your documentation needs.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <Card key={index} className={`overflow-hidden border-0 ${platform.className}`}>
              <CardContent className="p-8">
                <div className="h-16 flex items-center mb-6">
                  <img src={platform.logo} alt={`${platform.name} logo`} className="h-10 max-w-[120px] object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{platform.name}</h3>
                <p className="mt-4 text-sm text-gray-600">{platform.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
