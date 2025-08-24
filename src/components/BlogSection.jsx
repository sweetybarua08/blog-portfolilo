import { Link } from "react-router-dom";
import { blogData } from "../lib/blogData";
import { BlogCard } from "./BlogCard";


export const BlogSection = () => {
  const recentPosts = blogData.slice(0, 3);

  return (
    <section id="blog" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Recent Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/blog">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">View More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
