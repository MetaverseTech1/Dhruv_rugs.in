import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16">
      {/* Page Header */}
      <div className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6">
          <span className="bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Contact Us
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
          Have questions about our rugs? Want to discuss a custom piece? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        {/* Contact Form */}
        <ContactForm />

        {/* Why Choose DHRUV Section */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Why Choose DHRUV?</h3>
          <div className="space-y-3 md:space-y-4 text-sm md:text-base text-white/80">
            <div className="flex items-center space-x-3">
              <span className="text-orange-400">✓</span>
              <span>Expert guidance on rug selection</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-400">✓</span>
              <span>Authentic handwoven pieces</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-400">✓</span>
              <span>Custom sizing available</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-orange-400">✓</span>
              <span>Worldwide shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
