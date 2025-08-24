import { TechStack } from "./TechStack";
import { PopularRepos } from "./PopularRepos";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground mb-8">
            Full Stack Software Developer with 4+ years of experience building
            scalable web applications. Worked across SaaS, edTech, adTech, and
            finTech sectors. Skilled in API development, database design, and
            data analysis. Passionate about writing clean, maintainable code and
            delivering solutions that drive business value.
          </p>
        </div>

        <TechStack />

        <PopularRepos />
      </div>
    </section>
  );
};
