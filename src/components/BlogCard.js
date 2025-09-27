import Link from 'next/link';

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-500 hover:scale-105 group cursor-pointer h-full">
        <div className={`w-full h-64 bg-gradient-to-br ${post.category === 'Persian Rugs' ? 'from-orange-400 to-red-600' : 'from-blue-400 to-purple-600'} flex items-center justify-center text-white text-6xl relative overflow-hidden`}>
          {post.image}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
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