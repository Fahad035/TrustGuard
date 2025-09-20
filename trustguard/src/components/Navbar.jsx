import { useState } from "react";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-black via-violet-900 to-violet-700 shadow-lg border-b border-violet-800">
      <nav className="flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="p-1.5 rounded-md bg-black neon-blue-glow neon-pulse shadow-[0_0_16px_#a78bfa,0_0_32px_#a78bfa]">
            <Shield className="h-6 w-6 text-violet-400 drop-shadow-[0_0_8px_#a78bfa]" />
          </span>
          <span className="font-bold text-2xl md:text-3xl text-violet-100 drop-shadow-[0_0_12px_#a78bfa,0_0_24px_#a78bfa] font-[Braddon] neon-text-glow">
            TrustGuard
          </span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-base font-bold font-[Braddon]">
          <Link to="/" className="hover:text-violet-300 text-violet-100">
            Home
          </Link>
          <Link to="/analyze" className="hover:text-violet-300 text-violet-100">
            Analyze
          </Link>
          <Link to="/learn" className="hover:text-violet-300 text-violet-100">
            Learn
          </Link>
          <Link to="/about" className="hover:text-violet-300 text-violet-100">
            About
          </Link>
          <Link to="/contact" className="hover:text-violet-300 text-violet-100">
            Contact
          </Link>
          <Link to="/how-it-works" className="hover:text-violet-400 text-violet-100">
            How It Works
          </Link>
        </div>
        {/* Stylish Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-violet-400 group"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <span className={`block w-7 h-1 rounded-full bg-gradient-to-r from-violet-400 via-violet-200 to-orange-300 mb-1.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2 shadow-lg' : 'shadow'}`}></span>
          <span className={`block w-7 h-1 rounded-full bg-gradient-to-r from-violet-400 via-violet-200 to-orange-300 mb-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 rounded-full bg-gradient-to-r from-violet-400 via-violet-200 to-orange-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2 shadow-lg' : 'shadow'}`}></span>
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-black via-violet-900 to-violet-700 px-6 py-4 space-y-2 shadow-lg animate-fade-in-down">
          <Link to="/" className="block py-2 text-violet-100 font-bold font-[Braddon] hover:text-violet-300" onClick={()=>setMenuOpen(false)}>Home</Link>
          <Link to="/analyze" className="block py-2 text-violet-100 font-bold font-[Braddon] hover:text-violet-300" onClick={()=>setMenuOpen(false)}>Analyze</Link>
          <Link to="/learn" className="block py-2 text-violet-100 font-bold font-[Braddon] hover:text-violet-300" onClick={()=>setMenuOpen(false)}>Learn</Link>
          <Link to="/about" className="block py-2 text-violet-100 font-bold font-[Braddon] hover:text-violet-300" onClick={()=>setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="block py-2 text-violet-100 font-bold font-[Braddon] hover:text-violet-300" onClick={()=>setMenuOpen(false)}>Contact</Link>
          <Link to="/how-it-works" className="block py-2 text-violet-100 font-bold font-[Braddon] hover:text-violet-400" onClick={()=>setMenuOpen(false)}>How It Works</Link>
        </div>
      )}
    </header>
  );
}