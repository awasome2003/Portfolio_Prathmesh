import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileimage from "../assets/profile.jpg";
import { Download } from "lucide-react";

const MainSection = () => {
  const constraintsRef = useRef(null);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [trail, setTrail] = useState([]);
  const sectionRef = useRef(null);

  // Simplified scroll configuration
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Basic parallax effects without easing for now
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.8]);

  // Background elements parallax
  const bgY1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Profile image parallax
  const profileY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
        return newTrail.slice(-10);
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "rgba(79, 70, 229, 0.8)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.2,
      backgroundColor: "rgba(16, 185, 129, 0.8)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
      },
    }),
  };

  const nameLetters = "Hi, I'm Prathamesh Dhanawate".split("");

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full lg:px-5 py-7 md:py-0 bg-slate-900 text-slate-50 flex items-center justify-center overflow-hidden relative"
    >
      {/* Custom Cursor with Trail */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        {trail.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-indigo-500/20"
            style={{
              x: pos.x - 8,
              y: pos.y - 8,
            }}
            animate={{
              scale: [1, 0],
              opacity: [1 - i * 0.1, 0],
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />
        ))}
        <motion.div
          className="absolute w-8 h-8 rounded-full bg-indigo-500"
          variants={variants}
          animate={cursorVariant}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 pb-16"
        style={{ y, opacity, scale }}
      >
        <motion.div
          ref={constraintsRef}
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Elements */}
          <motion.div
            className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"
            style={{ y: bgY1 }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"
            style={{ y: bgY2 }}
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-20 px-8 py-12">
            {/* Text Content */}
            <div className="text-left max-w-2xl space-y-8">
              <h2
                className="text-emerald-400 md:text-xl lg:text-xl tracking-wider"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                Welcome to my portfolio
              </h2>

              <div className="overflow-hidden">
                <div
                  className="flex flex-wrap md:mb-6"
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  {nameLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                      className={`text-3xl md:text-4xl lg:text-7xl font-bold ${
                        letter === " " ? "mr-2 md:mr-4" : ""
                      } bg-clip-text text-[#3ae9f9]`}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.p
                className="md:text-xl lg:text-xl text-slate-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                I'm a MERN Stack Developer passionate about building scalable
                web applications with elegant UI and clean code. I bring
                real-world experience in crafting responsive interfaces and
                secure backend APIs using MongoDB, Express.js, React.js, and
                Node.js.
              </motion.p>

              <motion.div
                className="flex flex-wrap flex-col md:flex-row gap-6 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    letterSpacing: "3px",
                    boxShadow: "0px 7px 29px rgb(93 24 220)",
                    backgroundColor: "hsl(261deg 80% 48%)",
                    color: "#fff",
                  }}
                  whileTap={{
                    scale: 0.95,
                    y: 10,
                    boxShadow: "0px 0px 0px 0px rgb(93 24 220)",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="px-10 py-4 rounded-lg bg-white text-indigo-600 font-semibold tracking-wide shadow-sm transition-all text-sm md:w-[27%] w-full"
                  onMouseEnter={buttonEnter}
                  onMouseLeave={buttonLeave}
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("projects").offsetTop,
                      behavior: "smooth",
                    });
                  }}
                >
                  View My Work
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-medium transition-all md:w-[22%] w-full"
                  onMouseEnter={buttonEnter}
                  onMouseLeave={buttonLeave}
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("contact").offsetTop,
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact Me
                </motion.button>

                <motion.a
                  href="/Prathamesh(CV).pdf"
                  download="Prathamesh_Dhanawate_CV.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:shadow-xl transition-all duration-300 md:w-[31%] w-full md:justify-center justify-center"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="text-sm font-medium tracking-wide">
                    Download Resume
                  </span>
                </motion.a>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              onHoverStart={() => setIsImageHovered(true)}
              onHoverEnd={() => setIsImageHovered(false)}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              style={{ y: profileY }}
            >
              <motion.div
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-indigo-500"
                animate={{
                  borderColor: isImageHovered
                    ? [
                        "rgb(79, 70, 229)",
                        "rgb(16, 185, 129)",
                        "rgb(79, 70, 229)",
                      ]
                    : "rgb(79, 70, 229)",
                }}
                transition={{
                  duration: isImageHovered ? 3 : 0.3,
                  repeat: isImageHovered ? Infinity : 0,
                  ease: "linear",
                }}
              >
                <img
                  src={profileimage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -z-10 w-full h-full rounded-full bg-emerald-500/30 blur-md"
                animate={{
                  scale: isImageHovered ? 1.1 : 1,
                }}
                transition={{
                  duration: 0.3,
                }}
              />

              {/* Floating dots */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 rounded-full bg-indigo-500"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${i % 2 === 0 ? -10 : 105}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MainSection;
