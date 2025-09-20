import { Shield, Zap, Brain, AlertCircle } from 'lucide-react';
import Badge from './Badge';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
      <div className="container mx-auto px-4 py-16 lg:py-24 text-center">
        {/* Professional logo area */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-blue-600 rounded-xl shadow-lg">
            <Shield className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* Main heading with prototype badge */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
            TrustGuard
          </h1>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            PROTOTYPE
          </span>
        </div>

        {/* Professional subtitle */}
        <p className="text-2xl text-slate-600 font-medium mb-4 max-w-3xl mx-auto">
          AI-Powered Content Verification System
        </p>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Advanced prototype for analyzing content credibility using artificial intelligence. 
          Provides real-time trust scoring, source verification, and bias detection for 
          informed decision-making in today's complex information landscape.
        </p>

        {/* Professional feature badges */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Badge className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:border-gray-300">
            <Zap className="h-4 w-4 mr-2 text-blue-600" /> 
            Real-time Analysis
          </Badge>
          <Badge className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:border-gray-300">
            <Brain className="h-4 w-4 mr-2 text-green-600" /> 
            AI-Powered Detection
          </Badge>
          <Badge className="px-4 py-2 bg-white border border-gray-200 text-gray-700 hover:border-gray-300">
            <Shield className="h-4 w-4 mr-2 text-slate-600" /> 
            Privacy-Focused
          </Badge>
        </div>

        {/* Professional disclaimer */}
        <div className="max-w-2xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm font-medium text-amber-800 mb-1">
                Research Prototype
              </p>
              <p className="text-sm text-amber-700">
                This is a demonstration prototype using simulated AI analysis. 
                Results are generated for testing purposes and should not be used 
                for real-world fact-checking or decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}