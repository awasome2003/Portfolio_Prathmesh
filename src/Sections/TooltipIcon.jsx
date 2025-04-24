import { motion } from "framer-motion";
import { Info } from "lucide-react";

const TooltipIcon = ({ text }) => {
  return (
    <div className="relative group cursor-pointer">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <Info className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition duration-200" />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        whileHover={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-50"
      >
        <div className="relative px-4 py-2 bg-slate-800/80 text-slate-100 text-xs rounded-lg shadow-xl border border-indigo-500/30 backdrop-blur-md">
          {text}

          {/* Tooltip Arrow */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-800/80 rotate-45 border-l border-t border-indigo-500/30"></div>

          {/* Glowing ring */}
          <div className="absolute inset-0 rounded-lg pointer-events-none border border-indigo-500/30 animate-pulse blur-sm"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default TooltipIcon;
