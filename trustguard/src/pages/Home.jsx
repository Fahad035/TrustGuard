import React from "react";
import Hero from "../components/Hero";
import AnalysisInterface from "../components/AnalysisInterface";
import Information from "../components/Information";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home(){
  return (
    <main className="pt-16">
      <Hero />
      <AnalysisInterface />
      <Information />
      <About />
      <Contact />
    </main>
  );
}