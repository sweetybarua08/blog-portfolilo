import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { Footer } from "../components/Footer";
import { BlogSection } from "../components/BlogSection";
import { SocialLinks } from "../components/SocialLinks";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SocialLinks className="fixed right-4 top-1/2 -translate-y-1/2" />
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      {/* <StarBackground /> */}

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <BlogSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
