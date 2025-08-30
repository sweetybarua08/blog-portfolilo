import { TechStack } from "./TechStack";
import { PopularRepos } from "./PopularRepos";
import { SocialLinks } from "../components/SocialLinks";


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl space-y-16">

        {/* Hero Section */}
        <div className="text-center space-y-4">
          <img
            src="./src/assets/sweety.jpg"
            alt="Sweety"
            className="w-62 h-65 rounded-full mx-auto shadow-md"
          />
          <h2 className="text-3xl md:text-4xl font-bold">
            Hi, I’m <span className="text-primary">Sweety 👋</span>
          </h2>
          <p className="text-lg text-muted-foreground ">
            Software Engineer | Data Enthusiast | AI Explorer
          </p>
        </div>
        <SocialLinks className="flex justify-center gap-8" />

        <hr />
        
 

        {/* Professional Story */}
        <div className="text-center max-w-3xl mx-auto space-y-0">
          {/* <h3 className="text-2xl font-semibold">About Me</h3> */}
          <p className="text-lg text-muted-foreground">
            I started my journey in Computer Science with a deep curiosity for how data shapes decisions. From teaching C++ & Data Structures to building scalable Django applications, I’ve loved every step of turning ideas into functional software.
          </p>
          <p className="text-lg text-muted-foreground">
            Today, I’m a Software Engineer focusing on backend systems, database management, and data-driven solutions. My next goal? Mastering AI and Data Science to create intelligent systems that make life simpler and smarter.
          </p>
        </div>


        {/* Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="project-card p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold text-lg mb-2">Quizard</h4>
              <p>A dynamic quiz platform with real-time scoring and analytics.</p>
              <span className="text-sm text-muted-foreground">Django, DRF, MySQL, Pandas</span>
            </div>
            <div className="project-card p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold text-lg mb-2">Campaign Management Platform</h4>
              <p>Streamlined analytics & automated campaigns for client success.</p>
              <span className="text-sm text-muted-foreground">Django, React</span>
            </div>
            <div className="project-card p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold text-lg mb-2">Attendance Management System</h4>
              <p>Optimized company attendance workflows and reporting.</p>
              <span className="text-sm text-muted-foreground">Django, MySQL</span>
            </div>
            <div className="project-card p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h4 className="font-bold text-lg mb-2">Interactive Ad Formats</h4>
              <p>Developed and deployed interactive ad formats for large-scale clients.</p>
              <span className="text-sm text-muted-foreground">Django, JS, GSAP</span>
            </div>
          </div>
        </div>

        {/* Personal Touch */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h3 className="text-2xl font-semibold">Outside of Code</h3>
          <p className="text-lg text-muted-foreground">
            I’m unapologetically curious—whether it’s diving into AI research, exploring bold women in history, or debating matcha vs coffee ☕🍵. I love turning ideas into experiences, both in tech and in life.
          </p>
        </div>


      </div>
    </section>
  );
};
