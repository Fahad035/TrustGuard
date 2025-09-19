import { BookOpen, Users, Star } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';

export default function Information() {
  return (
    <section id="learn" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Learn to Identify Misinformation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Develop critical thinking skills with expert guidance.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="p-3 bg-blue-100 rounded-2xl w-fit mx-auto mb-4"><BookOpen className="h-8 w-8 text-blue-600"/></div>
              <CardTitle>Source Verification</CardTitle>
            </CardHeader>
            <CardContent><p className="text-gray-600">Evaluate source reputation, author credentials, and domain signals.</p></CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="p-3 bg-green-100 rounded-2xl w-fit mx-auto mb-4"><Users className="h-8 w-8 text-green-600"/></div>
              <CardTitle>Bias Detection</CardTitle>
            </CardHeader>
            <CardContent><p className="text-gray-600">Spot emotional language, one‑sided framing, and agenda cues.</p></CardContent>
          </Card>
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="p-3 bg-yellow-100 rounded-2xl w-fit mx-auto mb-4"><Star className="h-8 w-8 text-yellow-600"/></div>
              <CardTitle>Fact Checking</CardTitle>
            </CardHeader>
            <CardContent><p className="text-gray-600">Cross‑reference claims with primary sources and expert consensus.</p></CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
