import React, { useEffect, useRef, useState } from "react";
import { Zap, Search, CheckCircle, Eye, Globe } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-8 w-8 text-blue-500 mb-2 drop-shadow" />,
    title: "Input Content",
    desc: "Paste text or enter a URL to begin the analysis. Our system supports articles, social posts, and more.",
  },
  {
    icon: (
      <Zap className="h-8 w-8 text-violet-500 mb-2 drop-shadow animate-pulse" />
    ),
    title: "AI Analysis",
    desc: "Advanced AI models evaluate credibility, check sources, and detect potential misinformation in real time.",
  },
  {
    icon: <Eye className="h-8 w-8 text-orange-400 mb-2 drop-shadow" />,
    title: "Key Findings",
    desc: "Get a summary of trust factors, bias, and factual accuracy, with clear visual indicators.",
  },
  {
    icon: <Globe className="h-8 w-8 text-green-500 mb-2 drop-shadow" />,
    title: "Verified Sources",
    desc: "See which reputable sources corroborate or dispute the content, for full transparency.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-emerald-500 mb-2 drop-shadow" />,
    title: "Actionable Insights",
    desc: "Receive clear recommendations and next steps to help you make informed decisions.",
  },
];

const typewriterText = "How It Works";

export default function HowItWorks() {

  const [displayed, setDisplayed] = useState("");
  const idx = useRef(0);
  const timeoutRef = useRef();
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    if (!isErasing) {
      if (idx.current < typewriterText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(typewriterText.slice(0, idx.current + 1));
          idx.current++;
        }, 90);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsErasing(true);
        }, 1200);
      }
    } else {
      if (idx.current > 0) {
        timeoutRef.current = setTimeout(() => {
          idx.current--;
          setDisplayed(typewriterText.slice(0, idx.current));
        }, 40);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsErasing(false);
        }, 400);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isErasing]);

  return (
    <section className="min-h-[80vh] bg-gradient-to-b from-blue-50 via-violet-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-violet-800 mb-4 drop-shadow font-[Braddon]">
          <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent inline-block min-h-[1em] font-[Braddon]">
            {displayed}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto font-[Braddon]">
          Discover how TrustGuard analyzes content for credibility and
          misinformation in just a few simple steps.
        </p>
        <div className="grid gap-8 md:grid-cols-5 sm:grid-cols-2 justify-center">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white/90 rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 border-t-4 border-b-4 border-violet-100"
            >
              {step.icon}
              <h3 className="text-lg font-bold text-violet-700 mb-2 text-center drop-shadow font-[Braddon]">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed font-[Braddon]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}