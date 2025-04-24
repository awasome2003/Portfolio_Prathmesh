import { motion } from "framer-motion";

const EducationSection = () => {
  const education = {
    degree: "Bachelor of Computer Applications",
    field: "Computer Application",
    university: "Savitribai Phule Pune University",
    location: "Nigdi, Pune",
    period: "2021 - 2024",
    gpa: "8.5/10",
    highlights: [
      "Graduated with First Class Honors",
      "Specialized in Software Development",
      "Completed major project in Web Technologies",
      "Active member of Computer Science Society",
    ],
    relevantCourses: [
      "Data Structures and Algorithms",
      "Web Development",
      "Database Management",
      "Software Engineering",
      "Computer Networks",
    ],
  };

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
            Education <span className="text-emerald-400">Background</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            My academic journey and the foundation of my technical expertise
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-emerald-400">
                  {education.degree}
                </h3>
                <p className="text-xl text-slate-300">{education.field}</p>
              </div>
              <div className="md:text-right text-left">
                <p className="text-slate-300">{education.period}</p>
                <p className="text-slate-400">GPA: {education.gpa}</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-medium text-slate-300 mb-2">
                {education.university}
              </h4>
              <p className="text-slate-400">{education.location}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-medium">Key Highlights</h4>
                <ul className="space-y-3">
                  {education.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <span className="text-emerald-400">→</span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-medium">Relevant Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {education.relevantCourses.map((course, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationSection;
