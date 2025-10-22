import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
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
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 hover:scale-105 group cursor-pointer h-full">
        {/* Image Container */}
        <div className="w-full h-64 relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          {post.image ? (
            <>
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-colors duration-500"></div>
            </>
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${getCategoryGradient(post.category)} flex items-center justify-center relative`}>
              <div className="text-white/20 text-8xl font-bold">
                {post.category.charAt(0)}
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            </div>
          )}
        </div>

        <div className="p-8">
          <div className="flex items-center space-x-4 text-white/70 text-sm mb-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-white/80 mb-6 line-clamp-3">
            {post.excerpt}
          </p>
          <span className="text-orange-400 font-semibold group-hover:text-orange-300 transition-colors duration-300 inline-flex items-center">
            Read More <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
