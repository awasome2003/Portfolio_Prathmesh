import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="bg-slate-900 text-slate-400 py-8 px-4 mt-20 border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <span>
          &copy; {currentYear} Prathamesh Dhanawate. All rights reserved.
        </span>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/prathameshd07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/prathameshd07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
