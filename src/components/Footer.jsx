import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-nowrap justify-center items-center gap-4">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Sweety All rights reserved.
      </p>
      <a
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
