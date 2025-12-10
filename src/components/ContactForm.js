'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Construct email body
      const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n\n` +
        `Message:\n${formData.message}`
      );

      // Redirect to email client
      window.location.href = `mailto:info@dhruvrugs.global?subject=${subject}&body=${body}`;

      // Show success message after a brief delay
      setTimeout(() => {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setLoading(false);
      }, 1000);

    } catch (err) {
      setError('Failed to open email client. Please try again.');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (success) {
    return (
      <div className="bg-green-500/20 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6 md:p-8 text-center">
        <div className="text-4xl md:text-6xl mb-4">✅</div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Message Sent Successfully!</h3>
        <p className="text-sm md:text-base text-white/80 mb-5 md:mb-6">
          Thank you for reaching out. We'll get back to you soon.
        </p>
        <button 
          onClick={() => setSuccess(false)}
          className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base hover:scale-105 transition-transform duration-300"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">Get In Touch</h2>
      
      {error && (
        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 md:p-4 mb-5 md:mb-6">
          <p className="text-sm md:text-base text-red-300 text-center">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-5 md:mb-6">
        <div>
          <label htmlFor="name" className="block text-white font-semibold mb-2 text-sm md:text-base">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white font-semibold mb-2 text-sm md:text-base">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="mb-5 md:mb-6">
        <label htmlFor="phone" className="block text-white font-semibold mb-2 text-sm md:text-base">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Your phone number"
        />
      </div>

      <div className="mb-6 md:mb-8">
        <label htmlFor="message" className="block text-white font-semibold mb-2 text-sm md:text-base">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:px-4 md:py-3 text-sm md:text-base text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
          placeholder="Tell us about your requirements..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
