import { useParams } from "react-router-dom";
import { blogData } from "../lib/blogData";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NotFound } from "./NotFound";
import { OtherBlogs } from "../components/OtherBlogs";

export const BlogPost = () => {
  const { id } = useParams();
  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      {/* <StarBackground /> */}
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex pt-20">
        <OtherBlogs blogs={blogData} currentPostId={post.id} />
        <main className="w-2/3 pl-12">
          <article>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-muted-foreground mb-8">
              {new Date(post.date).toLocaleDateString()} - {post.readingTime} min read
            </p>
            <div className="prose prose-invert max-w-none">
              {post.content}
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
};
