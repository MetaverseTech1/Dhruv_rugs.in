import Link from 'next/link';
import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const getCategoryGradient = (category) => {
    switch(category) {
      case 'Persian Rugs':
      case 'Luxury Craftsmanship':
        return 'from-orange-400 to-red-600';
      case 'Design Tips':
        return 'from-blue-400 to-purple-600';
      case 'Care Guide':
        return 'from-green-400 to-teal-600';
      case 'News':
        return 'from-purple-400 to-pink-600';
      default:
        return 'from-orange-400 to-red-600';
    }
  };

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

      {/* Featured Image - Only render if image exists */}
      {post.image && (
        <div className={`w-full h-96 bg-gradient-to-br ${getCategoryGradient(post.category)} rounded-2xl mb-12 flex items-center justify-center text-white text-8xl overflow-hidden relative`}>
          {post.image}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      {/* Article Content */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}
