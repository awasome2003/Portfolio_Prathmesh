import { ScrollFadeIn } from "../components/ScrollUtils";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiHeroku,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "CSS3", icon: <FaCss3 className="text-blue-400" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNode className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "API", icon: <FaDatabase className="text-purple-400" /> },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-red-400" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
      { name: "Heroku", icon: <SiHeroku className="text-indigo-500" /> },
    ],
  },
  {
    title: "Design & Collab",
    items: [{ name: "Figma", icon: <FaFigma className="text-pink-400" /> }],
  },
];

const SkillsSection = () => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  return (
    <motion.section
      id="skills"
      className="min-h-screen px-4 bg-slate-900 border-slate-900 mb-50 pb-20 pt-20"
      style={{ opacity, scale }}
    >
      <ScrollFadeIn>
        <motion.div style={{ y: y1 }} className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white tracking-tight bg-gradient-to-r from-cyan-400 via-pink-500 to-violet-600 bg-clip-text text-transparent animate-pulse">
            My Skills
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Tools and technologies I use to build powerful web experiences.
          </p>
        </motion.div>
      </ScrollFadeIn>

      <motion.div style={{ y: y2 }} className="space-y-16 max-w-6xl mx-auto">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.title}>
            <h3 className="text-xl text-white font-semibold mb-4 pl-2 border-l-4 border-cyan-400">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {group.items.map((skill, index) => (
                <ScrollFadeIn key={skill.name} delay={(groupIndex * 5 + index) * 0.05}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-slate-800/40 border border-slate-600/30 hover:border-cyan-400/40 backdrop-blur-xl text-white p-5 rounded-2xl flex flex-col items-center justify-center shadow-xl hover:shadow-cyan-500/20 transition duration-300 ease-in-out"
                  >
                    <div className="text-4xl mb-2 animate-bounce-slow">{skill.icon}</div>
                    <div className="text-base font-medium">{skill.name}</div>
                  </motion.div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
