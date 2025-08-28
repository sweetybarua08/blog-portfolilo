import { Link } from "react-router-dom";

const API_URL = "http://localhost:1337";

const extractSummary = (description) => {
  try {
    // Navigate through the nested structure to find the main text content
    const linkNode = description[0]?.children?.find(child => child.type === 'link');
    const textNode = linkNode?.children?.find(child => child.type === 'text');
    return textNode?.text || "Click to read more...";
  } catch (e) {
    return "Click to read more...";
  }
}

export const BlogCard = ({ post, id }) => {
  const imageUrl = post.image?.data?.attributes?.url
    ? `${API_URL}${post.image.data.attributes.url}`
    : "/projects/project1.png"; // Fallback image

  const summary = extractSummary(post.description);

  return (
    <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <Link to={`/blog/${id}`} className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img src={imageUrl} alt={post.title} className="w-full h-full object-cover"/>
        </div>
        <div className="p-6 md:w-2/3">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-muted-foreground mb-4">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
          <p className="text-muted-foreground">{summary.substring(0, 150)}...</p>
        </div>
      </Link>
    </div>
  );
};
