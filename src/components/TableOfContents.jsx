export const TableOfContents = () => {
  return (
    <aside className="w-64 sticky top-24 self-start pl-8">
      <h3 className="text-lg font-semibold mb-4">On this page</h3>
      <ul className="space-y-2">
        <li>
          <a href="#this-is-a-blog-post-title" className="text-muted-foreground hover:text-primary">
            Blog Post Title
          </a>
        </li>
        <li>
          <a href="#this-is-a-subheading" className="text-muted-foreground hover:text-primary">
            Subheading
          </a>
        </li>
      </ul>
    </aside>
  );
};
