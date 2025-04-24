import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "ReactJS Intern",
      company: "Baranwal Consultancy and Services",
      period: "Sept 2024 – Present",
      description:
        "Worked on multiple responsive web applications and CMS platforms using React.js, Tailwind CSS, and MongoDB, with a focus on UI/UX and performance optimization.",
      responsibilities: [
        "Developed responsive UIs using React.js and Tailwind CSS",
        "Built and integrated secure RESTful APIs using Node.js and Express.js",
        "Implemented user authentication with JWT and OAuth",
        "Optimized database queries and backend performance",
      ],
      technologies: [
        "React.js",
        "Tailwind CSS",
        "MongoDB",
        "Node.js",
        "Express.js",
        "JWT",
        "OAuth",
      ],
    },
    {
      role: "Frontend Hackathon Contributor",
      company: "evolvenetwork.ai",
      period: "2025",
      description:
        "Participated in a UI/UX-focused hackathon, enhancing user experience by identifying and resolving frontend issues, and proposing a strategic product feature.",
      responsibilities: [
        "Identified critical UI/UX issues and proposed improvements",
        "Improved overall frontend structure and responsiveness",
        "Demonstrated a new user engagement feature to stakeholders",
      ],
      technologies: ["React.js", "Tailwind CSS", "UI/UX", "GitHub"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-900 text-slate-50"
    >
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A timeline of my professional journey and key achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            // Inside the map loop where each experience is rendered
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              className="relative mb-16"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-emerald-500/20 hidden sm:block" />
              )}

              <div className="flex xl:flex-row md:flex-row flex-col gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 mx-auto sm:mx-0 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 sm:mb-0">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>

                {/* Experience card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700/50"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-emerald-400">
                        {experience.role}
                      </h3>
                      <p className="text-slate-300 text-sm sm:text-base">
                        {experience.company}
                      </p>
                    </div>
                    <span className="text-slate-400 text-sm sm:text-base">
                      {experience.period}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6">
                    {experience.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-2">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {experience.responsibilities.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                            className="flex items-start gap-2 text-slate-300 text-sm sm:text-base"
                          >
                            <span className="text-emerald-400 mt-1">→</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-medium mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                            className="px-3 py-1 bg-slate-700/50 rounded-full text-xs sm:text-sm text-slate-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
