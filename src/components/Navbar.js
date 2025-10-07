'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 shadow-2xl">
        <div className="flex justify-between items-center">
          {/* Logo Text - Highlighted */}
          <Link href="/" className="flex items-center group">
            <span className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              DHRUV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className={`nav-link text-white hover:text-orange-400 transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-white/10 ${isActive('/') ? 'bg-white/20' : ''}`}>
              Home
            </Link>
            <Link href="/blog" className={`nav-link text-white hover:text-orange-400 transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-white/10 ${isActive('/blog') ? 'bg-white/20' : ''}`}>
              Blog
            </Link>
            <Link href="/categories" className={`nav-link text-white hover:text-orange-400 transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-white/10 ${isActive('/categories') ? 'bg-white/20' : ''}`}>
              Categories
            </Link>
            <Link href="/about" className={`nav-link text-white hover:text-orange-400 transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-white/10 ${isActive('/about') ? 'bg-white/20' : ''}`}>
              About
            </Link>
            <Link href="/contact" className={`nav-link text-white hover:text-orange-400 transition-all duration-300 font-medium px-4 py-2 rounded-full hover:bg-white/10 ${isActive('/contact') ? 'bg-white/20' : ''}`}>
              Contact
            </Link>
            <SearchBar />
          </div>

          {/* Medium screens navigation (simplified) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link href="/" className={`text-white hover:text-orange-400 transition-all duration-300 font-medium px-3 py-2 rounded-full hover:bg-white/10 text-sm ${isActive('/') ? 'bg-white/20' : ''}`}>
              Home
            </Link>
            <Link href="/categories" className={`text-white hover:text-orange-400 transition-all duration-300 font-medium px-3 py-2 rounded-full hover:bg-white/10 text-sm ${isActive('/categories') ? 'bg-white/20' : ''}`}>
              Categories
            </Link>
            <Link href="/about" className={`text-white hover:text-orange-400 transition-all duration-300 font-medium px-3 py-2 rounded-full hover:bg-white/10 text-sm ${isActive('/about') ? 'bg-white/20' : ''}`}>
              About
            </Link>
            <SearchBar />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl hover:text-orange-400 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-white hover:text-orange-400 transition-all duration-300 font-medium px-4 py-3 rounded-full hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/blog" 
                className="text-white hover:text-orange-400 transition-all duration-300 font-medium px-4 py-3 rounded-full hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/categories" 
                className="text-white hover:text-orange-400 transition-all duration-300 font-medium px-4 py-3 rounded-full hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-orange-400 transition-all duration-300 font-medium px-4 py-3 rounded-full hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-orange-400 transition-all duration-300 font-medium px-4 py-3 rounded-full hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 py-2">
                <SearchBar />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}