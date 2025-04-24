import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./Sections/MainSection";
import AboutSection from "./Sections/AboutSection";
import SkillsSection from "./Sections/SkillsSection";
import ExperienceSection from "./Sections/ExperienceSection";
import EducationSection from "./Sections/EducationSection";
import ContactSection from "./Sections/ContactSection";
import CustomCursor from "./components/CustomCursor";
import Footer from "./Sections/Footer";

// 🔥 Lazy load ProjectsSection
const ProjectsSection = lazy(() => import("./Sections/ProjectsSection"));

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 cursor-none scroll-smooth">
      <CustomCursor />
      <Navbar />
      <main>
        <section id="home">
          <HomeSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>

        {/* 👇 Lazy-loaded ProjectsSection with fallback */}
        <section id="projects">
          <Suspense
            fallback={
              <div className="text-center py-10 text-lg">
                Loading projects...
              </div>
            }
          >
            <ProjectsSection />
          </Suspense>
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="education">
          <EducationSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
