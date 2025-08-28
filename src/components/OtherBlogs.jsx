import { Link } from "react-router-dom";

export const OtherBlogs = ({ blogs, currentPostId }) => {
  const otherBlogs = blogs.filter((blog) => blog.id !== currentPostId);

  return (
    <aside className="w-1/3 p-6 border-r border-gray-700">
      <h2 className="text-xl font-semibold mb-4">Other Posts</h2>
      <ul>
        {otherBlogs.map((blog) => (
          <li key={blog.id} className="mb-4 pb-2 border-b border-gray-800">
            <Link to={`/blog/${blog.id}`} className="text-foreground hover:underline">
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
