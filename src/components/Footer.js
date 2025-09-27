import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-xl border-t border-white/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-lg p-3 shadow-lg">
                <Image 
                  src="/dhruv-logo.jpg" 
                  alt="DHRUV Rugs International" 
                  width={200}
                  height={65}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md">
              Discover the art of handwoven perfection. From traditional Persian designs to contemporary masterpieces, explore our world of premium carpets and rugs.
            </p>
            <div className="text-white/70 space-y-2">
              <p className="flex items-center">
                <span className="mr-3">📍</span>
                <span>Carpets • Rugs • Flatweave</span>
              </p>
              <p className="flex items-center">
                <span className="mr-3">✉️</span>
                <a href="mailto:contact@dhruvrugs.com" className="hover:text-orange-400 transition-colors duration-300">
                  contact@dhruvrugs.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-3">📞</span>
                <a href="tel:+91XXXXXXXXXX" className="hover:text-orange-400 transition-colors duration-300">
                  +91 XXX XXX XXXX
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Home
              </Link>
              <Link href="/blog" className="block text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Blog
              </Link>
              <Link href="/categories" className="block text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Categories
              </Link>
              <Link href="/about" className="block text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                About Us
              </Link>
              <Link href="/contact" className="block text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">Categories</h3>
            <div className="space-y-3">
              <Link href="/blog?category=Persian%20Rugs" className="block text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Persian Rugs
              </Link>
              <Link href="/blog?category=Design%20Tips" className="block text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Design Tips
              </Link>
              <Link href="/blog?category=Care%20Guide" className="block text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                Care Guide
              </Link>
              <Link href="/blog?category=News" className="block text-white/70 hover:text-orange-400 transition-colors duration-300 hover:translate-x-1">
                News
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70">
            © 2025 DHRUV Rugs International. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}