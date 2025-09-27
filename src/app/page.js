import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/lib/blogData';

function TailwindTest() {
  return (
    <div className="bg-red-500 p-4 m-4 text-white">
      <h1 className="text-2xl font-bold">TAILWIND TEST</h1>
      <p className="text-sm">If this has a red background, Tailwind is working!</p>
    </div>
  )
}

export default function HomePage() {
  return (

    
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
      {/* Hero Section */}
      <div className="text-center mb-20 animate-slideUp">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
            Luxury Rugs
          </span>
          <br />
          <span className="text-orange-400 animate-glow">& Stories</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Discover the art of handwoven perfection. From traditional Persian designs to contemporary masterpieces, explore our world of premium carpets and rugs.
        </p>
        <Link 
          href="/blog" 
          className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 animate-glow"
        >
          Explore Our Collection
        </Link>
      </div>

      {/* Featured Posts */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Get the latest insights on rug craftsmanship, design trends, and exclusive collections delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-white/10 border border-white/30 rounded-full px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}