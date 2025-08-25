import { Link } from "react-router-dom";

export const OtherBlogs = ({ blogs, currentPostId }) => {
  const otherBlogs = blogs.filter((blog) => blog.id !== currentPostId);

  return (
    <aside className="w-1/4 p-4">
      <h2 className="text-2xl font-bold mb-4">Other Posts</h2>
      <ul>
        {otherBlogs.map((blog) => (
          <li key={blog.id} className="mb-2">
            <Link to={`/blog/${blog.id}`} className="hover:underline">
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
