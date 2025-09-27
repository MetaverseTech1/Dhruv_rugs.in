import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
          <span className="bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Contact Us
          </span>
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Have questions about our rugs? Want to discuss a custom piece? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-white/80">
                    DHRUV Rugs International<br />
                
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                  📧
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-white/80">
                    contact@dhruvrugs.com<br />
                    info@dhruvrugs.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-white/80">
                    +91 XXX XXX XXXX<br />
                    +91 YYY YYY YYYY
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                  ⏰
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Business Hours</h3>
                  <p className="text-white/80">
                    Monday - Friday: 9:00 AM - 7:00 PM<br />
                    Saturday: 9:00 AM - 5:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose DHRUV?</h3>
            <div className="space-y-4 text-white/80">
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
    </div>
  );
}