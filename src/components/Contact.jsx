import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Reach out to me!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3"
          >
            <div className="space-y-8">
              {/* Contact Card - Email */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-full text-purple-400">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a 
                      href="mailto:srinivasyr2000@gmail.com" 
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                     srinivasyr2000@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Card - Phone */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-full text-blue-400">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      +91 9353291833
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Card - Location */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-400">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-400">Hebbal , Bangalore - 560024</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-400 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;