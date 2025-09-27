'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400 w-40 transition-all duration-300"
      />
      <button type="submit" className="absolute right-3 top-2.5 text-white/70 hover:text-white">
        🔍
      </button>
    </form>
  );
}
