import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../lib/api";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NotFound } from "./NotFound";
import { OtherBlogs } from "../components/OtherBlogs";

export const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await fetchAPI(`/blogs/${id}`);
        setPost(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-20">Loading post...</p>;
  }

  if (error) {
    return <p className="text-center mt-20 text-red-500">Error: {error}</p>;
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      {/* <StarBackground /> */}
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex pt-20">
        <main className="w-full">
          <article>
            <h1 className="text-4xl font-bold mb-4">{post.attributes.title}</h1>
            <p className="text-muted-foreground mb-8">
              {new Date(post.attributes.date).toLocaleDateString()} - {post.attributes.readingTime} min read
            </p>
            <div className="prose prose-invert max-w-none">
              {post.attributes.content}
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
};
