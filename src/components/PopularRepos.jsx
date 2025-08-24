import { useEffect, useState } from "react";
import { RepoCard } from "./RepoCard";

export const PopularRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/sweetybarua08/repos?sort=stars&per_page=6"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <div className="text-center mt-16">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-16 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-8 text-center">Popular Repositories</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};
