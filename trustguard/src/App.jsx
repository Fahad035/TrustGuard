import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnalysisInterface from "./components/AnalysisInterface";
import Information from "./components/Information";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Analyze from "./components/Analyze/Analyze";
import Learn from "./components/Learn/Learn";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";



function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/learn" element={<Learn/>} />
        <Route path="/analyze" element={<Analyze/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />


        <Route path="/how-it-works" element={<HowItWorks/>} />
      </Routes>
      <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
