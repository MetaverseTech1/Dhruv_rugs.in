import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-xl border-t border-white/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4 md:mb-6">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                DHRUV
              </span>
            </div>
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6 max-w-md">
              Discover the art of handwoven perfection. From traditional Persian designs to contemporary masterpieces, explore our world of premium carpets and rugs.
            </p>
            <div className="text-white/70 space-y-2 text-sm md:text-base">
              <p className="flex items-center">
                <span className="mr-3">📍</span>
                <span>Carpets • Rugs • Flatweave</span>
              </p>
              <p className="flex items-center">
                <span className="mr-3">✉️</span>
                <a href="mailto:info@dhruvrugs.global" className="hover:text-orange-400 transition-colors duration-300">
                  info@dhruvrugs.global
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-3">📞</span>
                <a href="tel:+918318600961" className="hover:text-orange-400 transition-colors duration-300">
                  +91 8318600961
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-4 md:mb-6">Quick Links</h3>
            <div className="space-y-2 md:space-y-3">
              <Link href="/" className="block text-sm md:text-base text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Home
              </Link>
              <Link href="/blog" className="block text-sm md:text-base text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Blog
              </Link>
              <Link href="/categories" className="block text-sm md:text-base text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Categories
              </Link>
              <Link href="/about" className="block text-sm md:text-base text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm md:text-base text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-lg md:text-xl mb-4 md:mb-6">Categories</h3>
            <div className="space-y-2 md:space-y-3">
              <Link href="/blog?category=Persian%20Rugs" className="block text-sm md:text-base text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Persian Rugs
              </Link>
              <Link href="/blog?category=Design%20Tips" className="block text-sm md:text-base text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Design Tips
              </Link>
              <Link href="/blog?category=Care%20Guide" className="block text-sm md:text-base text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Care Guide
              </Link>
              <Link href="/blog?category=News" className="block text-sm md:text-base text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                News
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-white/70">
            © 2025 DHRUV Rugs International. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}