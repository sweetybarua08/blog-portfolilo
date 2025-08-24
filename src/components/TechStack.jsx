const techStack = {
  Languages: ["Python", "JavaScript", "SQL"],
  Backend: ["Django", "DRF", "Express.js", "Node.js"],
  Frontend: ["HTML5", "CSS3", "Bootstrap", "GSAP", "React"],
  Database: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  Tools: ["Git", "GitHub", "Postman", "Docker"],
};

export const TechStack = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-8 text-center">My Tech Stack</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {Object.entries(techStack).map(([category, techs]) => (
          <div key={category}>
            <h4 className="text-lg font-semibold mb-2 text-primary">{category}</h4>
            <ul className="space-y-2">
              {techs.map((tech) => (
                <li key={tech} className="text-muted-foreground">{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
