import { Github, Linkedin } from "lucide-react";
import { cn } from "../lib/utils";

export const SocialLinks = ({ className }) => {
  return (
    <div className={cn("flex flex-col gap-6 z-50", className)}>
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
