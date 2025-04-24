import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Grilli - Restaurant Website",
      description:
        "This project is a beautifully crafted restaurant landing page that delivers a modern and appetizing web experience. Designed with aesthetics and usability in mind.",
      technologies: ["HTML5", "CSS3", "javascript"],
      image: "./src/assets/project1.png",
      link: "https://awasome2003.github.io/Restaurant-Website.github.io/",
      github: "https://awasome2003.github.io/Restaurant-Website.github.io/",
    },
    {
      title: "GPT-3 Landing Page",
      description:
        "This project is a modern, responsive landing page inspired by OpenAI's GPT-3. It showcases a sleek design and interactive elements to highlight the capabilities of AI-driven applications.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      image: "./src/assets/project2.png",
      link: "https://awasome2003.github.io/GPT3/",
      github: "https://awasome2003.github.io/GPT3/",
    },
    {
      title: "CineFlix - Streamlined Movie Discovery Platform",
      description:
        "CineFlix is a visually engaging and responsive movie streaming landing page designed to showcase film content with cinematic flair. Inspired by modern OTT platforms, the project focuses on UI polish.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (Vanilla)",
        "Responsive Design",
      ],
      image: "./src/assets/project4.png",
      link: "https://awasome2003.github.io/CineFlix/",
      github: "https://awasome2003.github.io/CineFlix/",
    },
    {
      title: "Travel Website - Explore the World with Elegance",
      description:
        "Travel Website is a clean, modern, and visually appealing landing page crafted for travel agencies, tour planners, or personal travel blogs. It inspires wanderlust with immersive visuals, structured content.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (Vanilla)",
        "Responsive Design",
      ],
      image: "./src/assets/project3.png",
      link: "https://awasome2003.github.io/Travel-Website/",
      github: "https://awasome2003.github.io/Travel-Website/",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-slate-50 pb-20">
      <div className="container mx-auto px-2 xl:px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-full xl:w-[78%]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group perspective-1000 "
            >
              <motion.div
                className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Project Image with 3D Effect */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-emerald-400">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.link}
                        className="p-2 bg-indigo-600/20 hover:bg-indigo-600/40 rounded-lg transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                      <a
                        href={project.github}
                        className="p-2 bg-slate-700/20 hover:bg-slate-700/40 rounded-lg transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/30 text-slate-300 rounded-full text-sm backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full blur-3xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
