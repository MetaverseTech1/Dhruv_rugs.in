import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
      {/* Back Button */}
      <Link 
        href="/blog"
        className="mb-8 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 inline-flex items-center"
      >
        <span className="mr-2">←</span> Back to Blog
      </Link>

      {/* Article Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center space-x-4 text-white/70 text-sm mb-6">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>By DHRUV Team</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {post.title}
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          {post.excerpt}
        </p>
      </div>

      {/* Featured Image */}
      <div className="w-full h-96 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl mb-12 flex items-center justify-center text-white text-8xl overflow-hidden relative">
        {post.image}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Article Content */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Share Buttons */}
        <div className="flex items-center space-x-4 mt-12 pt-8 border-t border-white/20">
          <span className="text-white font-semibold">Share this article:</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Facebook
          </button>
          <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300">
            Twitter
          </button>
          <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}