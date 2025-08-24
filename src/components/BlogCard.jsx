import { Link } from "react-router-dom";

export const BlogCard = ({ post }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link to={`/blog/${post.id}`}>
        <img src={post.image} alt={post.title} className="rounded-lg mb-4 w-full h-48 object-cover"/>
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-muted-foreground mb-4">
          {new Date(post.date).toLocaleDateString()} - {post.readingTime} min read
        </p>
        <p className="text-muted-foreground">{post.content.substring(0, 100)}...</p>
      </Link>
    </div>
  );
};
