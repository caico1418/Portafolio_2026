import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-gray-900' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Mail, label: 'Email', href: '#', color: 'hover:text-red-500' },
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-800">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`p-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                    >
                      <Icon size={24} className="text-gray-700" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Response</h4>
              <p className="text-gray-600 mb-2">
                I typically respond within 24 hours
              </p>
              <p className="text-sm text-gray-500">
                Looking forward to hearing from you!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            © 2024 Portfolio. Built with passion and code.
          </p>
        </div>
      </div>
    </section>
  );
}
