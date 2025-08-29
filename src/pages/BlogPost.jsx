import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../lib/api";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";
import { TableOfContents } from "../components/TableOfContents";
import { Pager } from "../components/Pager";
import { NotFound } from "./NotFound";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const sampleMarkdown = `
# This is a blog post title

This is a paragraph of text. It can have **bold** and *italic* text.

---

## This is a subheading

Here is a list of items:
- Item 1
- Item 2
- Item 3

And an ordered list:
1. First item
2. Second item
3. Third item

> This is a blockquote. It's a great way to highlight a quote from someone.

Here is a code block:

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');
\`\`\`

And an inline code block: \`const x = 10;\`.

Here is a table:

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |

And a link to [Google](https://www.google.com).
`;

export const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "Sample Blog Post",
    publishedAt: new Date().toISOString(),
    description: sampleMarkdown,
  });
  const [loading, setLoading] = useState(false); // Set to false to use sample data
  const [error, setError] = useState(null);

  // The original useEffect is commented out to work with sample data
  // useEffect(() => {
  //   const getPost = async () => {
  //     try {
  //       const res = await fetchAPI(`/blogs/${id}?populate=*`);
  //       if (res.data) {
  //         setPost(res.data);
  //       } else {
  //         setPost(null);
  //       }
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getPost();
  // }, [id]);

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
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex pt-20">
        <main className="flex-1">
          <article>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-muted-foreground mb-8">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <div className="prose prose-invert max-w-none blog-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSlug]}
                components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={a11yDark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {post.description}
              </ReactMarkdown>
            </div>
          </article>
        </main>
        <TableOfContents />
      </div>
      <div className="container mx-auto px-4">
        <Pager />
      </div>
      <Footer />
    </div>
  );
};
