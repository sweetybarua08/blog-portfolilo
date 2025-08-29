import { Github, Linkedin } from "lucide-react";

export const SocialLinks = ({ className }) => {
  return (
    <div
      className={
        className ||
        "fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50"
      }
    >
      <a
        href="https://www.linkedin.com/in/sweetybaruah/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-card hover:bg-primary/20 text-foreground hover:text-primary transition-colors"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="https://github.com/sweetybarua08"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-card hover:bg-primary/20 text-foreground hover:text-primary transition-colors"
      >
        <Github size={24} />
      </a>
    </div>
  );
};
