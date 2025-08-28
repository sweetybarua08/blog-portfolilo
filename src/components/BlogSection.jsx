import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAPI } from "../lib/api";
import { BlogCard } from "./BlogCard";

export const BlogSection = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetchAPI("/blogs");
        // Sort by date and get the 3 most recent
        const sortedPosts = res.data.sort((a, b) => new Date(b.attributes.date) - new Date(a.attributes.date));
        setRecentPosts(sortedPosts.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <section id="blog" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Recent Posts</h2>

        {loading && <p className="text-center">Loading posts...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} id={post.id} post={post.attributes} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link to="/blog">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">View More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
