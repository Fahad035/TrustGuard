import React, { useState } from "react";
import { Search, AlertTriangle, CheckCircle, XCircle, Brain, TrendingUp, Eye, Globe, Link2, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../Card';
import Textarea from '../Textarea';
import Badge from '../Badge';
import Progress from '../Progress';

const Analyze = () => {
  const [tab, setTab] = useState("text");
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Mock analysis function - no API call needed
  const analyze = async () => {
    if (!text.trim() && !url.trim()) return;
    
    setLoading(true);
    setResult(null);
    
    // Simulate processing time
    await new Promise(r => setTimeout(r, 1200));
    
    // Generate mock results
    const score = Math.floor(Math.random() * 40) + 60;
    const status = score >= 85 ? "credible" : score >= 65 ? "questionable" : "misinformation";
    
    const mockResult = {
      trustScore: score,
      status,
      factors: {
        sourceCredibility: Math.min(100, score + 5),
        factualAccuracy: Math.max(60, score - 3),
        bias: Math.max(20, 100 - score + 10),
        recentness: Math.min(100, score + 8),
      },
      findings: [
        "Claims corroborated by multiple sources",
        "Source reputation generally strong", 
        "Language shows low emotional bias",
        "Publication date is recent"
      ],
      sources: [
        { name: "Reuters", credibility: "high" },
        { name: "Associated Press", credibility: "high" },
        { name: "BBC News", credibility: "high" },
      ]
    };
    
    setResult(mockResult);
    setLoading(false);
  };

  const StatusIcon = ({s}) => s==="credible"?<CheckCircle className="h-6 w-6 text-green-500"/>:
    s==="questionable"?<AlertTriangle className="h-6 w-6 text-yellow-500"/>:
    s==="misinformation"?<XCircle className="h-6 w-6 text-red-500"/>:
    <Brain className="h-6 w-6 text-blue-600 animate-pulse"/>;

  return (
    <section id="analyze" className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto shadow-xl glass-effect">
        <CardHeader className="text-center">
          <CardTitle>Analyze Content</CardTitle>
          <CardDescription>Paste text or enter a URL to check for misinformation and get credibility insights.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-2">
            <button 
              onClick={()=>setTab("text")} 
              className={`flex-1 rounded-md border px-4 py-2 ${tab==="text"?"bg-blue-600 text-white":"bg-white hover:bg-gray-100"}`}
            >
              <FileText className="h-4 w-4 mr-2 inline" />
              Analyze Text
            </button>
            <button 
              onClick={()=>setTab("url")} 
              className={`flex-1 rounded-md border px-4 py-2 ${tab==="url"?"bg-blue-600 text-white":"bg-white hover:bg-gray-100"}`}
            >
              <Link2 className="h-4 w-4 mr-2 inline" />
              Analyze URL
            </button>
          </div>

          {tab==="text" ? (
            <Textarea 
              placeholder="Paste the text you want to analyze..." 
              value={text} 
              onChange={(e)=>setText(e.target.value)} 
            />
          ) : (
            <input 
              type="url" 
              placeholder="https://example.com/article" 
              value={url} 
              onChange={(e)=>setUrl(e.target.value)} 
              className="h-11 w-full rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          )}

          <button 
            onClick={analyze} 
            disabled={loading || (!text.trim() && !url.trim())} 
            className="w-full rounded-md bg-blue-600 text-white text-lg py-3 hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 
              <><Brain className="h-5 w-5 mr-2 inline animate-pulse"/> Analyzing...</> : 
              <><Search className="h-5 w-5 mr-2 inline"/> Analyze for Misinformation</>
            }
          </button>

          {result && (
            <div className="mt-4 space-y-6 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <StatusIcon s={result.status}/>
                  <div>
                    <h3 className="text-lg font-semibold capitalize">{result.status}</h3>
                    <p className="text-sm text-gray-600">Analysis complete</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600 neon-text-glow">{result.trustScore}%</div>
                  <div className="text-sm text-gray-600">Trust Score</div>
                </div>
              </div>

              {result.factors && (
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-blue-600"/> Trust Factors
                  </h4>
                  {Object.entries(result.factors).map(([k,v])=>(
                    <div key={k}>
                      <div className="flex justify-between text-sm">
                        <span className="capitalize">{k.replace(/([A-Z])/g," $1").trim()}</span>
                        <span className="text-gray-600">{v}%</span>
                      </div>
                      <Progress value={v}/>
                    </div>
                  ))}
                </div>
              )}

              {result.findings && (
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Eye className="h-4 w-4"/> Key Findings
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {result.findings.map((f,i)=>(
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5"/>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.sources && (
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Globe className="h-4 w-4"/> Verified Sources
                  </h4>
                  <div className="grid gap-2">
                    {result.sources.map((s,i)=>(
                      <div key={i} className="flex items-center justify-between p-2 bg-white rounded border">
                        <span className="font-medium">{s.name}</span>
                        <Badge variant={s.credibility==="high"?"default":"secondary"}>
                          {s.credibility} credibility
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default Analyze;