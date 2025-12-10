'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import BlogCard from '@/components/BlogCard';
import { blogPosts, categories } from '@/lib/blogData';

export default function BlogPage() {
  const searchParams = useSearchParams();
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [activeCategory, setActiveCategory] = useState('All Posts');
  const searchQuery = searchParams.get('search');

useEffect(() => {
  let filtered = [...blogPosts];

  // Apply search filter
  if (searchQuery) {
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply category filter
  if (activeCategory !== 'All Posts') {
    filtered = filtered.filter(post => post.category === activeCategory);
  }

  // ⭐ Sort by latest first — important
  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  setFilteredPosts(filtered);
}, [searchQuery, activeCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16">
      {/* Page Header */}
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6">
          <span className="bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Blog Archive
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
          {searchQuery ? `Search results for "${searchQuery}"` : 'Explore our collection of articles about rugs, design, and craftsmanship'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-4">
        <button 
          onClick={() => setActiveCategory('All Posts')}
          className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
            activeCategory === 'All Posts' 
              ? 'bg-orange-500 text-white' 
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          All Posts
        </button>
        {categories.map((category) => (
          <button 
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
              activeCategory === category.name 
                ? 'bg-orange-500 text-white' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 md:py-16">
          <div className="text-4xl md:text-6xl mb-4">🔍</div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">No articles found</h3>
          <p className="text-sm md:text-base text-white/80 mb-6 md:mb-8 px-4">
            {searchQuery 
              ? `No articles match your search for "${searchQuery}"`
              : `No articles in "${activeCategory}" category yet`
            }
          </p>
          <button 
            onClick={() => {
              setActiveCategory('All Posts');
              window.history.pushState({}, '', '/blog');
            }}
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:scale-105 transition-transform duration-300"
          >
            View All Posts
          </button>
        </div>
      )}
    </div>
  );
}
