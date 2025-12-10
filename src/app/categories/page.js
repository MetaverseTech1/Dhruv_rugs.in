import Link from 'next/link';
import { categories } from '@/lib/blogData';

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16">
      {/* Page Header */}
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6">
          <span className="bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Categories
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
          Explore articles by topic and discover content that interests you most
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <Link
            key={category.name}
            href={`/blog?category=${encodeURIComponent(category.name)}`}
            className="group"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 text-center">
              <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${category.color} rounded-2xl mx-auto mb-4 md:mb-6 flex items-center justify-center text-white text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300`}>
                {index === 0 && '🏺'}
                {index === 1 && '🎨'}
                {index === 2 && '🧵'}
                {index === 3 && '✨'}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-orange-300 transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-sm md:text-base text-white/70 mb-3 md:mb-4">
                {category.count} article{category.count !== 1 ? 's' : ''}
              </p>
              <span className="text-sm md:text-base text-orange-400 font-semibold group-hover:text-orange-300 transition-colors duration-300">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Popular Topics */}
      <div className="mt-12 md:mt-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">Popular Topics</h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 px-4">
          {['Handwoven Rugs', 'Interior Design', 'Carpet Care', 'Persian Heritage', 'Modern Decor', 'Traditional Crafts'].map((topic) => (
            <span 
              key={topic}
              className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm md:text-base"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
