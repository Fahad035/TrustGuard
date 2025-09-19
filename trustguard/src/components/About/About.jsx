import React, { useEffect, useRef, useState } from "react";


const About = () => {
  const typewriterText = "About TrustGuard";
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
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow">
            <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent inline-block min-h-[1em] font-[Braddon]">
              {displayed}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of technologists, researchers, and journalists dedicated to combating misinformation and fostering a more informed global community.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-700">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              In an age of information overload, distinguishing fact from fiction is more challenging than ever. TrustGuard was founded on the principle that everyone deserves access to reliable, unbiased information. Our mission is to provide powerful, easy-to-use tools that help users critically evaluate content, understand its context, and make well-informed decisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By leveraging cutting-edge AI and natural language processing, we aim to bring transparency to the digital world, one analysis at a time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-center shadow">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-600">1M+</div>
                <div className="text-sm text-gray-600">Analyses Performed</div>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg aspect-square flex items-center justify-center text-center shadow">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg aspect-square flex items-center justify-center text-center shadow">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Data Points Analyzed</div>
              </div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-center shadow">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
