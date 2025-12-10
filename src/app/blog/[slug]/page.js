'use client';

import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  // Get subdomain URL for sharing (e.g., https://slug.dhruvrugs.global)
  const shareUrl = typeof window !== 'undefined' 
    ? `https://${params.slug}.dhruvrugs.global`
    : '';
  const shareTitle = post.title;

  // Share handlers
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      'facebook-share-dialog',
      'width=800,height=600'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      'linkedin-share-dialog',
      'width=800,height=600'
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      'twitter-share-dialog',
      'width=800,height=600'
    );
  };

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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16">
      {/* Back Button */}
      <Link 
        href="/blog"
        className="mb-6 md:mb-8 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-white/20 transition-all duration-300 inline-flex items-center text-sm md:text-base"
      >
        <span className="mr-2">←</span> Back to Blog
      </Link>

      {/* Article Header */}
      <div className="text-center mb-8 md:mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 md:space-x-4 text-white/70 text-xs md:text-sm mb-4 md:mb-6 px-4">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>By DHRUV Team</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
          {post.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4">
          {post.excerpt}
        </p>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="w-full h-48 sm:h-64 md:h-96 rounded-2xl mb-8 md:mb-12 overflow-hidden relative">
          <Image 
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      )}

      {/* Fallback gradient if no image */}
      {!post.image && (
        <div className={`w-full h-48 sm:h-64 md:h-96 bg-gradient-to-br ${getCategoryGradient(post.category)} rounded-2xl mb-8 md:mb-12 flex items-center justify-center overflow-hidden relative`}>
          <div className="text-white/20 text-5xl sm:text-7xl md:text-9xl font-bold">
            {post.category.charAt(0)}
          </div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      {/* Article Content */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="prose prose-sm sm:prose-base md:prose-lg prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        
        {/* Share Section - Centered & Attractive */}
        <div className="mt-10 md:mt-16 pt-6 md:pt-10 border-t border-white/30">
          <div className="text-center max-w-lg mx-auto">
            <h3 className="text-white text-lg md:text-2xl font-bold mb-6 md:mb-8">Share this article</h3>
            <div className="flex flex-col gap-3 md:gap-4">
              {/* Facebook Share Button */}
              <button
                onClick={shareOnFacebook}
                className="group relative flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-[#4267B2] to-[#5578c8] hover:from-[#365899] hover:to-[#4267B2] text-white px-5 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300 font-semibold text-sm md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z"/>
                </svg>
                <span className="relative z-10">Share on Facebook</span>
              </button>

              {/* Twitter/X Share Button */}
              <button
                onClick={shareOnTwitter}
                className="group relative flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-[#1DA1F2] to-[#3db4f7] hover:from-[#1a8cd8] hover:to-[#1DA1F2] text-white px-5 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300 font-semibold text-sm md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="relative z-10">Share on Twitter</span>
              </button>

              {/* LinkedIn Share Button */}
              <button
                onClick={shareOnLinkedIn}
                className="group relative flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-[#0077B5] to-[#0e8fce] hover:from-[#006399] hover:to-[#0077B5] text-white px-5 py-3 md:px-8 md:py-4 rounded-xl transition-all duration-300 font-semibold text-sm md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="relative z-10">Share on LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
