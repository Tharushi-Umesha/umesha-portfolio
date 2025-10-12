import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Facebook, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        // EmailJS configuration - REPLACE THESE WITH YOUR ACTUAL VALUES
        const serviceId = 'service_ej3n2b3';
        const templateId = 'template_8lf2e4t';
        const publicKey = 'bDnkx3YueqnfFP0qn';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Umesha Mahipala'
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(() => {
                setSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setLoading(false);
                setTimeout(() => setSuccess(false), 5000);
            })
            .catch((err) => {
                setError('Failed to send message. Please try again.');
                setLoading(false);
                console.error('EmailJS Error:', err);
            });
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center relative px-4 py-20 bg-gradient-to-b from-transparent to-blue-500/5"
        >
            <div className="max-w-6xl mx-auto w-full px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out!
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg p-8 border border-blue-500/20">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30 group-hover:bg-blue-500 transition-all duration-300">
                                        <Mail className="text-blue-400 group-hover:text-white transition-colors duration-300" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Email</h4>
                                        <a href="mailto:umemahee@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                                            umemahee@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30 group-hover:bg-blue-500 transition-all duration-300">
                                        <Phone className="text-blue-400 group-hover:text-white transition-colors duration-300" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Phone</h4>
                                        <a href="tel:+94740681459" className="text-gray-400 hover:text-blue-400 transition-colors">
                                            +94 74 068 1459
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30 group-hover:bg-blue-500 transition-all duration-300">
                                        <MapPin className="text-blue-400 group-hover:text-white transition-colors duration-300" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">Location</h4>
                                        <p className="text-gray-400">Marawila, Sri Lanka</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg p-8 border border-blue-500/20">
                            <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/tharushi-umesha-mahipala-4b4b84280/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg border border-blue-500/30 text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="https://github.com/Tharushi-Umesha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg border border-blue-500/30 text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                    aria-label="GitHub"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://web.facebook.com/profile.php?id=61557085353033"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg border border-blue-500/30 text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={24} />
                                </a>
                                <a
                                    href="https://www.instagram.com/tharushiumesha_/?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg border border-blue-500/30 text-blue-400 transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg p-8 border border-blue-500/20">
                        <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-gray-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            {success && (
                                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {error && (
                                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                                    {error}
                                </div>
                            )}

                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}