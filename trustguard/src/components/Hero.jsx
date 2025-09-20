import { TypeAnimation } from 'react-type-animation';
import { Shield, Zap, Brain } from 'lucide-react';
import Badge from './Badge';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 lg:py-24 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-blue-100 rounded-2xl neon-blue-glow neon-pulse">
            <Shield className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4">
          <span className="neon-text-glow">TrustGuard</span>
        </h1>
        <p className="text-2xl text-blue-700 font-medium mb-4">AI-Powered Misinformation Detection</p>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Instantly analyze content credibility with advanced AI. Get real-time trust scores, source verification,
          and educational insights to navigate today's information landscape.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Badge className="px-4 py-2"><Zap className="h-4 w-4 mr-2" /> Real-time Analysis</Badge>
          <Badge variant="secondary" className="px-4 py-2"><Brain className="h-4 w-4 mr-2" /> AI-Powered</Badge>
          <Badge variant="secondary" className="px-4 py-2"><Shield className="h-4 w-4 mr-2" /> Privacy-First</Badge>
        </div>
      </div>
    </section>
  );
}