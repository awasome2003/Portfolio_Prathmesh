import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import SocialTooltipIcon from "../components/SocialTooltipIcon";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormData({ name: "", email: "", message: "" });
    } catch {
      // Handle error silently
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      label: "Email",
      value: "prathameshdhanawate@gmail.com",
      icon: <FiMail className="text-xl text-emerald-400" />,
      link: "mailto:prathameshdhanawate@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 9075975080",
      icon: <FiPhone className="text-xl text-emerald-400" />,
      link: "tel:+91 9075975080",
    },
    {
      label: "Location",
      value: "Pune, India",
      icon: <FiMapPin className="text-xl text-emerald-400" />,
    },
  ];

  const socialLinks = [
    {
      platform: "LinkedIn",
      name: "Prathamesh Dhanawate",
      username: "@prathamesh.linkedin",
      about:
        "MERN Stack Developer | Front-end Developer | Javascript Developer",
      url: "https://linkedin.com/in/prathameshdhanawate",
      icon: <FaLinkedin size={24} color="white" />,
      gradientClass: "linear-gradient(45deg, #0a66c2 0%, #004182 100%)",
      color: "#0a66c2",
    },
    {
      platform: "GitHub",
      name: "Prathamesh",
      username: "@awasome2003",
      about: "10+ Public Repos",
      url: "https://github.com/awasome2003",
      icon: <FaGithub size={24} color="white" />,
      gradientClass: "linear-gradient(45deg, #333 0%, #6e6e6e 100%)",
      color: "#6e6e6e",
    },
    {
      platform: "Twitter",
      name: "Prathamesh",
      username: "@prathamesh",
      about: "Tweets",
      url: "https://twitter.com/prathamesh",
      icon: <FaTwitter size={24} color="white" />,
      gradientClass: "linear-gradient(45deg, #1da1f2 0%, #0c85d0 100%)",
      color: "#1da1f2",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-900 text-slate-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s <span className="text-emerald-400">Connect</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 max-w-7xl mx-auto px-2 sm:px-4">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                Contact Info
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span>{info.icon}</span>
                    <div>
                      <p className="text-slate-400 text-sm">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-300 hover:text-emerald-400 transition break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                Social Links
              </h3>
              <div className="flex flex-wrap justify-between">
                {socialLinks.map((link, i) => (
                  <SocialTooltipIcon
                    key={i}
                    platform={link.platform}
                    name={link.name}
                    username={link.username}
                    about={link.about}
                    url={link.url}
                    icon={link.icon}
                    gradientClass={link.gradientClass}
                    color={link.color}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-semibold text-emerald-400 mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-slate-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-slate-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-200"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-slate-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-200 resize-none"
                    placeholder="Write your message..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
