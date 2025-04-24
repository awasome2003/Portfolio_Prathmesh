import {
  ScrollContainer,
  ScrollFadeIn,
  ScrollParallax,
  ScrollScale,
} from "../components/ScrollEffects";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection = () => {
  const { scrollYProgress } = useScroll();

  // Parallax effects for different sections
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.9, 1, 1, 0.9]
  );

  return (
    <ScrollContainer className="bg-slate-900 text-slate-50 pb-20 pt-20">
      <motion.div className="container mx-auto px-4" style={{ opacity, scale }}>
        {/* Hero Section */}
        <ScrollFadeIn className="text-center mb-20">
          <motion.div style={{ y: y1 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-emerald-500">
              About Me
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A passionate Full Stack Developer with expertise in building
              modern web applications and creating exceptional user experiences.
            </p>
          </motion.div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Personal Info */}
          <ScrollFadeIn delay={0.2}>
            <motion.div
              className="bg-slate-800/50 backdrop-blur-xl rounded-xl p-8 border border-slate-700/50"
              style={{ y: y1 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-emerald-400">
                Who Am I?
              </h3>
              <div className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                  I'm a MERN Stack Developer passionate about building
                  responsive, performant, and scalable web applications. Through
                  hands-on experience at Baranwal Consultancy and Services, I've
                  worked on real-world projects involving CMS platforms, RESTful
                  APIs, and modern UI development.
                </p>
                <p className="text-slate-300 leading-relaxed mt-4">
                  I specialize in React.js, Tailwind CSS, Node.js, and MongoDB,
                  with proven experience in developing secure authentication
                  flows using JWT and OAuth. I'm also confident with tools like
                  Redux, Firebase, GitHub, and deployment platforms like Vercel
                  and Netlify.
                </p>
                <p className="text-slate-300 leading-relaxed mt-4">
                  I actively contributed to a frontend hackathon at
                  evolvenetwork.ai, identifying and solving UI/UX issues and
                  proposing a unique product feature that boosted user
                  engagement. I thrive in agile environments, love clean code,
                  and always aim to merge design with functionality.
                </p>
              </div>
            </motion.div>
          </ScrollFadeIn>

          {/* Right Column - Services */}
          <ScrollFadeIn delay={0.4}>
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50"
              style={{ y: y2 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-emerald-400">
                What I Do
              </h3>
              <div className="space-y-6">
                {/* Web Development */}
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-slate-700/30 rounded-lg">
                    <svg
                      className="w-6 h-6 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-300">
                      Web Development
                    </h4>
                    <p className="text-slate-400">
                      Building responsive and interactive web applications using
                      React.js and Tailwind CSS
                    </p>
                  </div>
                </div>

                {/* Backend Development */}
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-slate-700/30 rounded-lg">
                    <svg
                      className="w-6 h-6 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-300">
                      Backend Development
                    </h4>
                    <p className="text-slate-400">
                      Creating robust RESTful APIs with Node.js and Express.js,
                      including authentication using JWT and OAuth
                    </p>
                  </div>
                </div>

                {/* Database Management */}
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-slate-700/30 rounded-lg">
                    <svg
                      className="w-6 h-6 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-300">
                      Database Management
                    </h4>
                    <p className="text-slate-400">
                      Working with MongoDB and Mongoose for efficient, scalable
                      data modeling and operations
                    </p>
                  </div>
                </div>

                {/* UI/UX Collaboration */}
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-slate-700/30 rounded-lg">
                    <svg
                      className="w-6 h-6 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-300">
                      UI/UX Collaboration
                    </h4>
                    <p className="text-slate-400">
                      Translating design into functional components while
                      ensuring accessibility and responsiveness
                    </p>
                  </div>
                </div>

                {/* Problem Solving */}
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-slate-700/30 rounded-lg">
                    <svg
                      className="w-6 h-6 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-300">
                      Problem Solving
                    </h4>
                    <p className="text-slate-400">
                      Analyzing challenges and implementing efficient, scalable
                      code-based solutions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollFadeIn>
        </div>

        {/* Bottom Section - Journey & Goals */}
        <ScrollFadeIn className="mt-12">
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 max-w-6xl mx-auto"
            style={{ y: y1 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-emerald-400">
              My Journey & Goals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Current Focus */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-300">
                  Current Focus
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-slate-300">
                    <span className="text-emerald-400">→</span>
                    <span>
                      Building full-stack MERN applications with real-world use
                      cases
                    </span>
                  </li>
                  <li className="flex items-center space-x-2 text-slate-300">
                    <span className="text-emerald-400">→</span>
                    <span>
                      Integrating secure authentication and RESTful APIs
                    </span>
                  </li>
                  <li className="flex items-center space-x-2 text-slate-300">
                    <span className="text-emerald-400">→</span>
                    <span>Improving UI/UX with React.js and Tailwind CSS</span>
                  </li>
                  <li className="flex items-center space-x-2 text-slate-300">
                    <span className="text-emerald-400">→</span>
                    <span>
                      Deploying projects using platforms like Vercel and Netlify
                    </span>
                  </li>
                </ul>
              </div>

              {/* Future Goals */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-300">
                  Future Goals
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-slate-300">
                    <span className="text-emerald-400">→</span>
                    <span>
                      Mastering scalable architecture patterns (Microservices,
                      Monorepos)
                    </span>
                  </li>
                  <li className="flex items-center space-x-2 text-slate-300">
                    <span className="text-emerald-400">→</span>
                    <span>
                      Contributing to impactful open-source full-stack projects
                    </span>
                  </li>
                  <li className="flex items-center space-x-2 text-slate-300">
                    <span className="text-emerald-400">→</span>
                    <span>
                      Learning DevOps tools (Docker, CI/CD, AWS basics)
                    </span>
                  </li>
                  <li className="flex items-center space-x-2 text-slate-300">
                    <span className="text-emerald-400">→</span>
                    <span>
                      Becoming a well-rounded full-stack engineer with team
                      leadership skills
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </ScrollFadeIn>
      </motion.div>
    </ScrollContainer>
  );
};

export default AboutSection;
