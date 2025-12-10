import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16">
      {/* Page Header */}
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6">
          <span className="bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            About DHRUV
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4">
          Crafting Digital Excellence Since 2024 – Freelancers and content creators partnering with brands to share their stories worldwide.
        </p>
      </div>

      {/* Main Content - Our Story */}
      <div className="mb-12 md:mb-20">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 md:p-12 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center">Our Story</h2>
          <div className="space-y-4 md:space-y-6 max-sm:p-1 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              Dhruv flooring was founded in 2024 with the vision of helping businesses, entrepreneurs, and creators amplify their digital presence through engaging blogs and content publishing. We specialize in freelancing services, providing end-to-end solutions for content creation, digital branding, and blog management.
            </p>
            <p>
              As a company, we are committed to innovation and collaboration. Instead of building everything in-house, we believe in partnering with outstanding brands and individuals who bring real value to their industries. One such collaboration is with Dhruv Rugs International, a reputed manufacturer and exporter of premium handcrafted rugs. Through this partnership, we manage and publish insightful blogs that highlight Dhruv Rugs International excellence in the global carpet industry.
            </p>
            <p>
              Dhruv flooring is built on the principles of creativity, quality, and consistency. Our mission is to deliver meaningful content that connects businesses with their audience while ensuring professionalism and innovation in every project.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-12 md:mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-400 to-red-600 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center text-white text-xl md:text-2xl">
              💡
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Innovation</h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              We believe in fresh ideas and creating impactful content tailored for each brand while staying aligned with the latest digital trends.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center text-white text-xl md:text-2xl">
              ⭐
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Quality Content</h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              Our focus is on well-researched, engaging, and authentic storytelling that truly represents our partners and their vision.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-400 to-teal-600 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center text-white text-xl md:text-2xl">
              ⚡
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Prompt Delivery</h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              We value your time and ensure reliable, timely, and professional publishing services.
            </p>
          </div>
        </div>
      </div>

      {/* Global Reach Section */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 md:p-12 mb-12 md:mb-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">Global Presence</h2>
        <p className="text-sm sm:text-base md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
          We proudly work with independent businesses, startups, and global brands across the world. Our network allows us to bring the latest trends, ideas, and industry stories to readers worldwide.
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 md:p-12 mb-12 md:mb-20">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Partnership Contact</h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 md:mb-8">For partnership inquiries with Dhruv Rugs International brand</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-3 md:space-y-4 text-white/90 text-sm sm:text-base md:text-lg">
          <div className="flex items-center justify-center gap-3">
            <span className="font-semibold">Name:</span>
            <span>Dhruv Rugs International</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="font-semibold">Email:</span>
            <a href="mailto:info@dhruvrugs.global" className="text-orange-400 hover:text-orange-300 transition-colors">
              info@dhruvrugs.global
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="font-semibold">Phone:</span>
            <a href="tel:+918318600961" className="text-orange-400 hover:text-orange-300 transition-colors">
              +91 8318600961
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 md:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Ready to Collaborate?</h2>
        <p className="text-sm sm:text-base md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          Let&apos;s work together to create engaging content and amplify your brand&apos;s story.
        </p>
        <Link 
          href="/contact"
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 inline-block"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}