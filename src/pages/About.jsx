import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";

export const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      {/* <StarBackground /> */}

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
