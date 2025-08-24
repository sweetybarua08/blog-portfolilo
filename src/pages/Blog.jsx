import { blogData } from "../lib/blogData";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { BlogCard } from "../components/BlogCard";

export const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
