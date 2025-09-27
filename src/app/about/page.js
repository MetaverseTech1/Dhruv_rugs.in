import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
          <span className="bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            About DHRUV
          </span>
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Crafting Excellence Since 2020 - Second generation manufacturer and exporter of premium handcrafted rugs
        </p>
      </div>

      {/* Main Content - Our Story */}
      <div className="mb-20">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-white/90 text-lg leading-relaxed">
            <p>
              It is our proud pleasure to present you our good designs with eye catching colour scheme. Dhruv Rugs International was established in 2020, and since then we've been crafting excellence in every thread.
            </p>
            <p>
              Dhruv Rugs International is running by Mr. Pawan Maurya with Mrs. Babita Maurya. We are second generation of manufacturer and exporter of Hand knots, Handloom & Hand tufted and Woolen Carpets in India. We specialized in natural dyes carpets.
            </p>
            <p>
              We get our carpets weaved by expert weavers and always use qualitative raw materials including good wool, viscose, silk etc. Our organization believes in making new ways and creating new products, striving to provide the best quality and most competitive rates in the industry.
            </p>
            <p>
              Our company is moving towards the advancement in the path of prosperity, making an indelible mark in the industry by the virtue of its optimum quality products, which have a vivid and striking potential. We have always strived to provide the best product possible and most competitive rates in the industry.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl">
            🎯
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
          <p className="text-white/80 leading-relaxed">
            Our organization believes in making new ways and creating new products. We constantly strive to innovate while maintaining traditional craftsmanship techniques.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl">
            ⭐
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Quality Selection</h3>
          <p className="text-white/80 leading-relaxed">
            We specialize in natural dyes carpets and always use qualitative raw materials including premium wool, viscose, and silk to ensure superior quality.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl">
            🚀
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Prompt Service</h3>
          <p className="text-white/80 leading-relaxed">
            We pride ourselves on supplying independent home furnishing retailers, chain stores & internet vendors with prompt and reliable service worldwide.
          </p>
        </div>
      </div>

      {/* Global Reach Section */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 mb-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Global Presence</h2>
        <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
          We pride ourselves on supplying independent home furnishing retailers, chain stores & internet vendors throughout the US, Canada, Europe, Japan & Australia. Our range of offerings consists of the highest quality rugs with the most current fashion trends.
        </p>
        
        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {["Germany", "U.A.E", "U.S.A", "U.K", "Australia", "Japan", "Italy", "Netherlands"].map((country) => (
            <div key={country} className="bg-white/5 rounded-lg p-4">
              <span className="text-white font-semibold text-sm">{country}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/20 rounded-2xl p-12 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
        </div>
        <p className="text-xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto">
          Our mission is to develop a secured community that grows with changing times and to deliver every customer the skill sets of each craftsman. We operate as an extended family and welcome each talent that showcases creativity, leadership and commitment. Every moment, we live a dream of each artisan and connect them to million hearts worldwide.
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Perfect Rug?</h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Explore our collection of Hand knots, Handloom & Hand tufted carpets crafted with natural dyes and premium materials.
        </p>
        <Link 
          href="/contact"
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 inline-block"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}