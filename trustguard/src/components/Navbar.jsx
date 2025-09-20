import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <nav className="flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3 font-semibold">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-2xl text-gray-900">
            TrustGuard
          </span>
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
            PROTOTYPE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link 
            to="/" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/analyze" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Analyze
          </Link>
          <Link 
            to="/learn" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Learn
          </Link>
          <Link 
            to="/about" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
          <Link 
            to="/how-it-works" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            How It Works
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium" 
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/analyze" 
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium" 
              onClick={() => setMenuOpen(false)}
            >
              Analyze
            </Link>
            <Link 
              to="/learn" 
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium" 
              onClick={() => setMenuOpen(false)}
            >
              Learn
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium" 
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium" 
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/how-it-works" 
              className="block py-2 bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 text-center font-medium" 
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}