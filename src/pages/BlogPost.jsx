import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../lib/api";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NotFound } from "./NotFound";
import { OtherBlogs } from "../components/OtherBlogs";

const extractFullContent = (description) => {
  try {
    const linkNode = description[0]?.children?.find(child => child.type === 'link');
    const textNode = linkNode?.children?.find(child => child.type === 'text');
    return textNode?.text || "Content not available.";
  } catch (e) {
    return "Content not available.";
  }
}

export const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        // The API seems to return an array even for a single post, so we take the first element.
        const res = await fetchAPI(`/blogs/${id}?populate=*`);
        if (res.data) {
          setPost(res.data);
        } else {
          setPost(null); // Or handle as a "not found" case
        }
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

  const content = extractFullContent(post.description);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      {/* <StarBackground /> */}
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex pt-20">
        <main className="w-full">
          <article>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-muted-foreground mb-8">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <div className="prose prose-invert max-w-none">
              {content.split('\\n\\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
};
